
import peticiones from '@/apis/usePeticiones'
import uploadFiles from '@/apis/useUploadFiles'
import generatePDF from '@/apis/useGeneratePDF'
import catalogos    from '@/apis/useCatalogo'

export default {
    methods: {
        catchError(error) {
            this.loading(false);
            console.log(error); 
        
        },
        async peticionGeneral(
                method,
                payload,
                showMessage = true,
                needReturn = true,
            ){
            try {
                this.loading();
                let response;
                switch (method) {
                    case 'getAntiguedades':
                        response = await peticiones.getAntiguedades(payload);
                    break;
                    case 'getRegistroHV':
                        response = await peticiones.getRegistroHV(payload);
                    break;
                    case 'getCredencialesTemporales':
                        response = await peticiones.getCredencialesTemporales(payload);
                    break;
                    case 'adminCredencialesTemporales':
                        response = await peticiones.adminCredencialesTemporales(payload);
                    break;
                    case 'scannOut':
                        response = await peticiones.scannOut(payload);
                    break;
                    case 'home':
                        response = await peticiones.home(payload);
                    break;
                    case 'adminVoluntarioOut':
                        response = await peticiones.adminVoluntarioOut(payload);
                    break;
                    case 'administrarDelegaciones':
                        response = await peticiones.administrarDelegaciones(payload);
                    break;
                    case 'getUsuarios':
                        response = await peticiones.getUsuarios(payload);
                    break;
                    case 'adminUsuarios':
                        response = await peticiones.adminUsuarios(payload);
                    break;
                    case 'adminCatalogos':
                        response = await peticiones.adminCatalogos(payload);
                    break;
                    case 'getCatalogos':
                        response = await peticiones.getCatalogos(payload);
                    break;
                    case 'administrarCatalogos':
                        response = await peticiones.administrarCatalogos(payload);
                    break;
                    case 'administrarVoluntarios':
                        response = await peticiones.administrarVoluntarios(payload);
                    break;
                    case 'getHorasVoluntarias':
                        response = await peticiones.getHorasVoluntarias(payload);
                    break;
                    case 'administrarHorasVoluntarias':
                        response = await peticiones.administrarHorasVoluntarias(payload);
                    break;
                    case 'administrarGuardiaHoras':
                        response = await  peticiones.administrarGuardiaHoras(payload)
                    break;
                    case 'getGuardiaHoras':
                        response = await  peticiones.getGuardiaHoras(payload)
                    break;
                    case 'getUltimaGuardiaHoras':
                        response = await  peticiones.getUltimaGuardiaHoras(payload)
                    break;
                }
                this.loading(false);
                if (showMessage) {
                    this.messageSweet({
                        message : response.data.message,
                        icon    : response.data.result ? 'success' : 'error',
                    });
                }
                return needReturn ? response.data : null;
            } catch (error) {
                this.catchError(error);
            }
        },
        async peticionUpload(
                method,
                payload,
                showMessage = true,
                needReturn = true,
            ){
            try {
                this.loading();
                let response;
                switch (method) {
                    case 'apiAdminnistrarArchivosVoluntarios':
                        response = await  uploadFiles.apiAdminnistrarArchivosVoluntarios(payload)
                    break;
                    case 'administarFilesDelegacionesCoordinadores':
                        response = await uploadFiles.administarFilesDelegacionesCoordinadores(payload);
                    break;
                }
                this.loading(false);
                if (showMessage) {
                    this.messageSweet({
                        message : response.data.message,
                        icon    : response.data.result ? 'success' : 'error',
                    });
                }
                return needReturn ? response.data : null;
            } catch (error) {
                this.catchError(error);
            }
        },
        async peticionPDF(method,payload){
            try {
                this.loading();
                let response = null;
                switch (method) {
                    case 'generatePDFAntiguedades':
                        response = await  generatePDF.generatePDFAntiguedades(payload)
                    break;
                    case 'generatePDFVoluntarios':
                        response = await  generatePDF.generatePDFVoluntarios(payload)
                    break;
                    case 'generatePDFCredencialTemporal':
                        response = await  generatePDF.generatePDFCredencialTemporal(payload)
                    break;
                }
                this.loading(false);
                if (response != null) {
                    const contentType = response.headers['content-type'];
                    if (contentType === 'application/pdf') {
                        return response.data;
                    } else {
                        const reader = new FileReader();
                        reader.onload = () => {
                        try {
                            const errorObject = JSON.parse(reader.result);
                            this.messageSweet({
                                message : errorObject.message,
                                icon    : 'error',
                            });
                        } catch (error) { console.error('No se pudo analizar el objeto de error JSON:', reader.result); }
                        };
                        reader.readAsText(response.data);
                    }
                } else {
                    this.messageSweet({
                        message : 'Ocurrio un error en la petición.',
                        icon    : 'error',
                    });
                    console.log('Checa el metodo para la petición.');   
                }
            } catch (error) {
                this.catchError(error);
            }
        },
        async peticionCatalogo(
                method,
                filtros = {},
                formato = {},
            ){
            try {
                let formatoLocal = {
                    all         : formato.all ?? false,
                    indexValue  : formato.indexValue ?? 'id',
                    indexLabel  : formato.indexLabel ?? 'nombre',
                }
                let tmpPayload = { 
                    catalogo    : method,
                    filtro      : filtros
                }
                let response = await catalogos.getCatalogo(tmpPayload);
                if(response.data.data != null){

                    return this.formatoToCatalogo(response.data.data,formatoLocal.all,formatoLocal.indexValue,formatoLocal.indexLabel)
                } else {
                    console.log('Problemas con el catalogo: ', method)
                    return [];
                } 
            } catch (error) {
                this.catchError(error);
            }
        },
    } 
}