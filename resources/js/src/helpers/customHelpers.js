
import peticiones from '@/apis/usePeticiones'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import '@resources/scss/vue/libs/vue-sweetalert.scss';
import helpersPeticiones    from '@helpers/customHelpersPeticiones'
// Importar moment y moment-timezone
const moment = require('moment-timezone');
// Establecer el huso horario a México (Ciudad de México)
moment.tz.setDefault('America/Mexico_City');
export default {

    mixins : [helpersPeticiones],
  methods: {
    loading(tipo = true){
      document.getElementById("loading-bg").style.display = tipo?"block":"none";
    },

    async getCatalogo(input){
        console.log('input', input);
        if (typeof input.catalogo == 'string') {
            return await this.peticionCatalogo(input.catalogo,input.filtros,input.formato);
        }
        if (typeof input.catalogo == 'object') {
            return Promise.resolve(input.catalogo); // Devuelve una promesa resuelta
        }
    },
    isTypeUser(tipo){
        let response = false;
        let user = JSON.parse(localStorage.getItem('userData'))
        const local     = 'CL -  Coordinador Local';
        const estatal   = 'CE -  Coordinador Estal';
        switch (tipo) {
            case 'local':               response = (user.tipoUsuario == local); break;
            case 'estatal':             response = (user.tipoUsuario == estatal); break;
            case 'local y estatal':     response = (user.tipoUsuario == local || user.tipoUsuario == estatal); break;
            // case '':  response = (user.tipoUsuario == local || user.tipoUsuario == estatal); break;
        }
        return response;
    },
    messageToast ({message='',color='success',title='Notificación de sistema',icon='MessageCircleIcon',time=''}) {

      this.$toast({
        component: ToastificationContent,
        position: 'top-right',
        props: {
          title   : title,
          icon    : icon,
          variant : color,
          text    : message,
        },
      })
    },

    capitalize(value) {
        if (!value) return "";
        return value.charAt(0).toUpperCase() + value.slice(1);
    },
    validarFechaMayorAHora(timestamp) {
        console.log(typeof timestamp)
        const fechaIngresada = new Date(timestamp);

        const timestampActual = Date.now(); // Obtiene el timestamp actual en milisegundos
        
        if (fechaIngresada > timestampActual) {
            return true; // El timestamp es válido (menor a la hora actual)
        } else {
            return false; // El timestamp no es válido
        }
    },
    messageSweet ({
        message='',
        color='success',
        title='Notificación de sistema',
        icon='success',
        time=3000
    }) {
        // icon = success / error / info / warning
        this.$swal({
          title: title,
          text: message,
          icon: icon,
          timer: time,
          customClass: {
            confirmButton: 'btn btn-primary',
          },
          buttonsStyling: false,
        })
    },
    copyObject (data) {
        return JSON.parse(JSON.stringify(data))
    },
    messageConfirm({
        message='Esta acción ya no se va a poder deshacer',
        title='¿Desea eliminar este registro?',
        icon='warning',
        showCancelButton= true,
        confirmButtonText= 'Si, eliminar',
        cancelButtonText= 'No, cancelar',
        cancelFunction = null,
        confirmFunction = null,
        messageCancel = true
    }){

        this.$swal({
            title: title,
            text: message,
            icon: icon,
            showCancelButton: showCancelButton,
            confirmButtonText:confirmButtonText,
            cancelButtonText:cancelButtonText,
            customClass: {
              confirmButton: 'btn btn-primary',
              cancelButton: 'btn btn-outline-danger ml-1',
            },
            buttonsStyling: false,
          }).then(result => {
            if (result.value) {
                if (typeof confirmFunction == 'function'){
                    confirmFunction()
                } else {
                    console.log('Falta funcion de confirmación')
                }
            } else if (result.dismiss === 'cancel') {
                if (typeof cancelFunction == 'function'){
                    cancelFunction()
                } else {
                    if (messageCancel) {

                        this.$swal({
                            title: 'Proceso cancelado',
                            text: 'Cancelo correctamente el proceso',
                            icon: 'error',
                            timer: 3000,
                            customClass: {
                            confirmButton: 'btn btn-success',
                            },
                        })
                    }
                }
            }
          })
    },
    getNameMes(index){

        let nombresMeses  =  [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre"
          ];
          return nombresMeses[index] ?? ''
    },
    formatoFechaYMD(value,withTime = false){
        if (value !== null) {
            const fecha = moment(value);
            const fechaFormateada = fecha.format('YYYY/MM/DD');
            
            if (withTime) {
                const horaFormateada = fecha.format('hh:mm:ss');
                return fechaFormateada + ' ' + horaFormateada;
            } else {
                return fechaFormateada;
            }
        } else {
            return '';
        }
    },
    fechaInput(masMenos = '+', años = 0, meses = 0, dias = 0,formato = 'YYYY-MM-DD HH:mm:ss') {
        if (masMenos == '+'){
            return  moment().add(dias, 'days').endOf('day').format(formato);
        } else {
            return moment().subtract(dias, 'days').startOf('day').format(formato);
        }
    },
    ajustarFecha(masMenos = '+', años = 0, meses = 0, dias = 0,formato = 'DD-MM-YYYY') {
        // Obtener la fecha de hoy
        var fechaHoy = new Date();
    
        // Obtener el día, mes y año por separado
        var día = fechaHoy.getDate();
        var mes = fechaHoy.getMonth() + 1; // Sumar 1 ya que los meses son indexados desde 0
        var año = fechaHoy.getFullYear();
    
        // Calcular ajustes de años, meses y días según los parámetros
        if (masMenos === '+') {
            año += años;
            mes += meses;
            día += dias;
        } else if (masMenos === '-') {
            año -= años;
            mes -= meses;
            día -= dias;
        }
    
        // Crear una nueva fecha ajustada
        var fechaAjustada = new Date(año, mes - 1, día); // Restar 1 al mes ya que es indexado desde 0
    
        // Formatear la fecha en formato "DD-MM-YYYY"
        if(formato == 'DD-MM-YYYY'){
            var fechaFormateada = (día < 10 ? '0' : '') + día + '-' + (mes < 10 ? '0' : '') + mes + '-' + año;
        } else {
            var fechaFormateada = año + '-' + (mes < 10 ? '0' : '') + mes + '-' +  (día < 10 ? '0' : '') + día;
        }
    
        return fechaFormateada;
    },
    formatoMoney(amount, signal = true){
        let tmp = parseInt(amount).toLocaleString("es-ES", { style: "currency", currency: "MXN" });
        return (signal? '$ ' : '') + tmp
    },
    esCurpValido(curp) {
        const curpRegex = /^[A-Z]{4}\d{6}[HM][A-Z]{2}[A-Z]{3}[A-Z0-9]{1}\d{1}$/;
        return curpRegex.test(curp);
    },

    hideModal(modal) {
        this.$refs[modal].hide()
    },

    showModal(modal) {
        this.$refs[modal].show()
    },
    formatoToCatalogo(data,all = false,indexValue = 'id',indexLabel = 'nombre'){
        let tmp = []
        data.map((item, index) => {
            if(all)
                tmp.push({ ...item, 'label': item[indexLabel] ?? '', 'value': item[indexValue] ?? '' });
            else
                tmp.push({'label': item[indexLabel] ?? '', 'value': item[indexValue] ?? '' });
        })
        return tmp
    },
    descargarPDF(response, id = '', name = '',downloadFile = true) {
        this.loading(false);
        if(typeof response != 'undefined'){
            const tmpName = id !== '' ? String(id).padStart(6, '0') : String(new Date().getTime());
            const fileName = tmpName + (name !== '' ? '-' + name : '') + '.pdf';
            const blob = new Blob([response], { type: 'application/pdf' });
            const url = window.URL.createObjectURL(blob);
            if (downloadFile){
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', fileName);
                document.body.appendChild(link);
                link.click();
            } else {
                window.open(url);
            }
        }
    },
    
    errorPDF(response){
      this.loading(false)
      const reader = new FileReader();
      reader.onload = (event) => {
          const result = event.target.result;
          const obj = JSON.parse(result);
          this.messageSweet({
              message: obj.message,
              icon: 'warning',
          });
      };

      reader.readAsText(response.data);
    },
  } 
}


// export const customHelpers = {
//   methods: {
//     message ({message='',color='success',title='Notificación de sistema',icon='MessageCircleIcon',time=''}) {

//       this.$toast({
//         component: ToastificationContent,
//         position: 'top-right',
//         props: {
//           title   : title,
//           icon    : icon,
//           variant : color,
//           text    : message,
//         },
//       })
//     }
//   },
// }

// // Ignore below for now. We will remove it when we add more transition in future.
// export const _ = null
