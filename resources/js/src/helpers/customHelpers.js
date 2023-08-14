
import peticiones from '@/apis/usePeticiones'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import '@resources/scss/vue/libs/vue-sweetalert.scss';
import helpersPeticiones    from '@helpers/customHelpersPeticiones'

export default {

    mixins : [helpersPeticiones],
  methods: {
    loading(tipo = true){
      document.getElementById("loading-bg").style.display = tipo?"block":"none";
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

        console.log(message)
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
    formatoFechaYMD(value,withTime = false){
        if (value != null) {
            const fecha = new Date(value);
            console.log('formatoFechaYMD -> ', fecha);
            const fechaFormateada = fecha.toISOString().slice(0,10).replace(/-/g,"/");
            console.log('fechaFormateada -> ', fechaFormateada);
            if (withTime) {
                const horaFormateada = fecha.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

                return fechaFormateada + ' ' + horaFormateada;
            } else {
                return fechaFormateada
            }
        } else {
            return '';
        }
    },
    formatoMoney(amount, signal = true){
        let tmp = parseInt(amount).toLocaleString("es-ES", { style: "currency", currency: "MXN" });
        return (signal? '$ ' : '') + tmp
    },
    esCurpValido(curp) {
        const curpRegex = /^[A-Z]{4}\d{6}[HM][A-Z]{2}[A-Z]{3}[A-Z0-9]{1}\d{1}$/;
        return curpRegex.test(curp);
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
    descargarPDF(response, id = '', name = '') {
        const tmpName = id !== '' ? String(id).padStart(6, '0') : String(new Date().getTime());
        const fileName = (name !== '' ? name + '-' : '') + tmpName + '.pdf';
    
        const url = URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        
        document.body.appendChild(link);
        link.click();
        
        // Eliminar el enlace después de descargar
        document.body.removeChild(link);
    
        this.loading(false);
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
