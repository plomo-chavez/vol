<template>
    <div>

        <div v-if="guardia == null" class=" ">
            <h3 class=" font-weight-bolder class-12 text-center">No hay un turno abierto.</h3>
            <b-button
                size="sm"
                variant="relief-secondary"
                class="mx-auto"
                @click="handleOpenGuardia"
            >Abrir guardia</b-button>
        </div>
        <div class="col-12 p-0 m-0"  v-else>
            <b-card class="col-6 mx-auto p-1 mb-2">
                <Scann 
                    v-if="hadScann"
                    :openScann="openScann"
                    :isModal="true"
                    @changeText="handleChangeCodigo"
                />
                <div class="col-12 p-0 m-0 mb-2">
                    <div class="col-12 p-0 m-0 d-flex flex-wrap"><label class="text-right mr-1 font-weight-bolder ww-100">Inicio:</label>{{formatoFechaYMD(guardia.inicio, true)}}</div>
                    <div class="col-12 p-0 m-0 d-flex flex-wrap"><label class="text-right mr-1 font-weight-bolder ww-100">Delegación:</label>{{guardia.delegacion.nombre}}</div>
                    <div class="col-12 p-0 m-0 d-flex flex-wrap"><label class="text-right mr-1 font-weight-bolder ww-100">Verificador:</label>{{guardia.verificador.nombre + ' ' + guardia.verificador.primerApellido + ' ' +guardia.verificador.segundoApellido}}</div>
                </div>
                <div class="d-flex w-100 justify-content-between">
                    <b-button
                        size="sm"
                        variant="relief-secondary"
                        @click="handleOpenScann"
                    >Agregar personal</b-button>
                    <b-button
                        size="sm"
                        variant="relief-danger"
                        @click="handleCerrarGuardia"
                    >Cerrar guardia</b-button>
                </div>
            </b-card>
            <div class="col-12 mx-auto m-0 p-0 d-flex flex-wrap">
                <h4 class="col-12 mb-1 font-weight-bolder ">Voluntarios registrados:</h4>
                <div v-for="(item, index) in voluntarios" class="ww-300 p-2">
                    <b-card class=" p-1">
                        <div class="">
                            <p class=" m-0 p-0 font-weight-bolder ">{{item.voluntario.numeroAsociado}}</p>
                            <p class=" m-0 p-0 font-weight-bolder ">{{item.voluntario.nombre}}</p>
                            <small><p class=" m-0 p-0 text-sm font-weight-bolder ">Hora de entrada:</p></small>
                            <small><p class=" m-0 p-0 text-sm">{{formatoFechaYMD(item.fechaInicio, true)}}</p></small>
                            <small><p class=" m-0 p-0 text-sm font-weight-bolder ">Hora de salida:</p></small>
                            <small><p class=" m-0 p-0 text-sm">{{formatoFechaYMD(item.fechaFin, true)}}</p></small>
                        </div>
                        <div class="col-12 p-0 m-0 mt-1" v-if="item.fechaFin == null">
                            <b-button
                                size="sm"
                                block
                                variant="relief-danger"
                                class="mx-auto"
                                @click="handleClosePersonal(item)"
                            >Checar salida</b-button>
                        </div>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


import {
    BCard,
    BCardTitle,
    BCardSubTitle,
    BCardBody,
    BModal,
    BFormCheckboxGroup,
    BFormCheckbox,
    BButton
} from 'bootstrap-vue'
import peticiones from '@/apis/usePeticiones'
import customHelpers  from '@helpers/customHelpers'
import OnoffToggle from 'vue-onoff-toggle'
import Scann from '@currentComponents/ScannerCode.vue'


export default {
    name: 'formPorGuardia',
    components: {
        Scann,
        BCard,
        BCardTitle,
        BCardSubTitle,
        BCardBody,
        BModal,
        BFormCheckboxGroup,
        BFormCheckbox,
        BButton,
        OnoffToggle,
    },
    mixins : [customHelpers],
    data() {
        return {
            userData: JSON.parse(localStorage.getItem('userData')),
            guardia : null,
            codigo : null,
            voluntarios : null,
            openScann:false,
            hadScann:false,
            checked:true,
        }
    },
    props: {

    },
    watch: {

    },
    computed: {

    },
    beforeMount(){
        this.init();
    },
    mounted() {},
    created() {},
    methods:{
        handleOpenScann(){
            this.hadScann = true;
            setTimeout(() => {
                this.openScann = true;
            }, 3);
        },
        handleChangeCodigo(codigo){
            this.hadScann = false;
            setTimeout(() => {
                this.openScann = false;
            }, 3);
            this.codigo = codigo;
            this.addPersonal();
        },
        init(){
            this.loading();
            peticiones.getUltimaGuardiaHoras({usuario_id : this.userData.id})
            .then(response => {
                this.loading(false)
                let data = response.data.data;
                this.guardia = data.length != 1 ? null : data[0];
                this.voluntarios = this.guardia.voluntarios;
            })
            .catch(error   => {
                this.loading(false)
                console.log(error);
            })
        },
        handleOpenGuardia(){
            let payload = {payload : {usuario_id : this.userData.id,accion : 1}}
            this.peticion(payload)
        },
        handleCerrarGuardia(){
            let payload = {
                payload : {
                    guardia_id : this.guardia.id,
                    accion : 7
                }
            };
            this.peticion(payload)
        },
        addPersonal(){
            let payload = {
                payload : {
                    usuario_id : this.userData.id,
                    guardia_id : this.guardia.id,
                    codigo : this.codigo,
                    accion : 5
                }
            };
            this.peticion(payload)
        },
        handleClosePersonal(data){
            console.log(data)
            let payload = {
                payload : {
                    registroGuardiaVoluntario : data.id,
                    accion : 6
                }
            };
            this.peticion(payload)
        },
        peticion(payload){
            this.loading();
            peticiones.administrarGuardiaHoras(payload)
            .then(response => {
                this.loading(false)
                console.log(payload)
                if (payload.payload.accion == 1){
                    let data = response.data.data;
                    // console.log('data',data)
                    // this.guardia = data.guardia;
                    // this.voluntarios = data.guardia.voluntarios;
                    this.init();
                }
                if (payload.payload.accion == 5){
                    this.messageConfirm({
                        message:response.data.message,
                        title:'Información del sistema',
                        icon:response.data.result ? 'success' : 'error',
                        showCancelButton: false,
                        confirmButtonText: 'Okay',
                        cancelButtonText: 'No, cancelar',
                        cancelFunction : null,
                        messageCancel : false,
                        confirmFunction: () => {
                            this.init();
                        }
                    })
                    this.init()
                }
                if (payload.payload.accion > 5){
                    this.messageConfirm({
                        message:response.data.message,
                        title:'Información del sistema',
                        icon:response.data.result ? 'success' : 'error',
                        showCancelButton: false,
                        confirmButtonText: 'Okay',
                        cancelButtonText: 'No, cancelar',
                        cancelFunction : null,
                        messageCancel : false,
                        confirmFunction: () => {
                            this.init();
                        }
                    })
                    this.init()
                }
            })
            .catch(error   => {
                this.loading(false)
                console.log(error);
            })
        }
    }
}
</script>
<style>
</style>
  