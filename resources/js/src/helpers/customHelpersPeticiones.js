
import peticiones from '@/apis/usePeticiones'
import uploadFiles from '@/apis/useUploadFiles'
export default {
    methods: {
        catchError(error) {
 
            this.loading(false);
            console.log(error); 
        
        },
        async peticionGeneral(method,payload){
            try {
                this.loading();
                let response;
                switch (method) {
                    case 'administrarDelegaciones':
                        response = await peticiones.administrarDelegaciones(payload);
                    break;
                    case 'getUsuarios':
                        response = await peticiones.getUsuarios(payload);
                    break;
                    case 'adminUsuarios':
                        response = await peticiones.adminUsuarios(payload);
                    break;
                    case 'administrarVoluntarios':
                        response = await peticiones.administrarVoluntarios(payload);
                    break;
                    case 'administarFilesDelegacionesCoordinadores':
                        response = await uploadFiles.administarFilesDelegacionesCoordinadores(payload);
                    break;
                    default:
                    break;
                }
                this.loading(false);
                return response.data;
            } catch (error) {
                this.catchError(error);
            }
        },
    } 
}