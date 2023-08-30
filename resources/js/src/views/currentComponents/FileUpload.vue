<template>  
  <div class="">
    <!-- Sección para cargar archivos -->
    <div class="dropbox p2" @click="openFileInput" v-if="showInput">
      <h3>Selecciona un archivo</h3>
      <!-- Campo de entrada de archivos oculto -->
      <input ref="fileInput" type="file" :name="uploadFieldName" :accept="acceptedTypes" style="display: none;" @change="fileSelected($event)">
      <!-- Mensaje para el estado inicial -->
      <p> Haz clic para buscar un archivo </p>
    </div>
    <!-- Sección para mostrar archivo seleccionado o desde la URL inicial -->
    <div v-else>
      <h3>Archivo seleccionado</h3>
      <div class="file-preview">
        <div v-if="selectedFile">
          <div v-if="isImageFile(selectedFile)">
            <img :src="selectedFile.url" :alt="selectedFile.name" class="ww-full">
          </div>
          <div class="file-actions">
            <p>Nombre: {{ selectedFile.name }}</p>
            <div v-if="!isImageFile(selectedFile)">
              <b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-info" class="mb-1" @click="downloadFile">Descargar archivo</b-button>
            </div>
            <b-button class="mb-1" variant="outline-primary" @click="clearSelection">Borrar selección</b-button>
            <b-button v-if="btnSave" variant="primary" @click="saveFile">Guardar archivo</b-button>
          </div>
        </div>
        <div v-else>
          <img v-if="isImageURL(url)" :src="url" alt="Archivo inicial" class="ww-full">
          <div class="file-actions">
            <p>Nombre: Archivo inicial</p>
            <b-button variant="primary" @click="changeFile">Cambiar archivo</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import { BButton } from 'bootstrap-vue';
  
  export default {
    name: 'FileUpload',
    components: {
      BButton
    },
    props: {
      url: {
        type: String,
        default: null,
      },
      btnSave: {
        type: Boolean,
        default: false,
      },
      tipoArchivo: {
        type: String,
        default: null
      }
    },
    data() {
      return {
        showInput: true,
        selectedFile: null,
        uploadFieldName: 'files',
        tiposPermitidos: [],
      };
    },
    computed: {
      acceptedTypes() {
        if (this.tipoArchivo == null) {
          return '+/*';
        }
        if (this.tipoArchivo == 'images') { 
            return 'image/*'; 
        }
        if (this.tipoArchivo == 'audio')  { return 'audio/*'; }
  
        const types = this.tipoArchivo.split(',').map(type => type.trim());
        const mimeTypes = types.map(extension => {
          switch (extension) {
            case 'html':
              return 'text/html';
            case 'pdf':
              return 'application/pdf';
            case 'mp4':
            case 'webm':
              return `video/${extension}`;
            case 'mp3':
            case 'ogg':
            case 'wav':
              return `audio/${extension}`;
            case 'jpg':
            case 'jpeg':
            case 'png':
            case 'gif':
              return `image/${extension}`;
            default:
              return '';
          }
        });
  
        return mimeTypes.join(',');
      }
    },
    beforeMount() {
        this.showInput = this.url == null;
        if (this.tipoArchivo !== null) {
            if (this.tipoArchivo === 'images') { 
            this.tiposPermitidos = ['jpg', 'jpeg', 'png', 'gif'];
            } else if (this.tipoArchivo === 'audio') {
            this.tiposPermitidos = ['mp3', 'ogg', 'wav', 'mp4'];
            } else {
            this.tiposPermitidos = this.tipoArchivo.split(',');
            }
        }
    },
    methods: {
      openFileInput() {
        this.$refs.fileInput.click();
      },
      changeFile() {
        this.showInput = true;
      },
      fileSelected(event) {
        const file = event.target.files[0];
        if (file && this.validandoArchivo(file)) {
          const reader = new FileReader();
          reader.onload = () => {
            this.selectedFile = {
              name: file.name,
              url: reader.result,
              file: file
            };
          };
          reader.readAsDataURL(file);
          this.showInput = false;
        }
      },
      validandoArchivo(file) {
        if (this.tiposPermitidos.length > 0) {
          const fileType = file.type.split('/')[1];
          return this.tiposPermitidos.includes(fileType);
        } else {
          return true;
        }
      },
      saveFile() {
        this.$emit('saveFile',this.selectedFile)
      },
      isImageFile(file) {
        return file.url.startsWith('data:image/');
      },
      isImageURL(url) {
        return url.startsWith('http') && (url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.png') || url.endsWith('.gif'));
      },
      clearSelection() {
        this.showInput = true;
      },
      downloadFile() {
        if (this.selectedFile) {
          const a = document.createElement('a');
          a.href = this.selectedFile.url;
          a.download = this.selectedFile.name;
          a.click();
        }
      }
    }
  };
  </script>
  
  <style lang="scss">
  /* Estilos visuales */
  .dropbox {
    outline: 2px dashed grey;
    outline-offset: -10px;
    background: rgba(217, 217, 217, 0.97);
    color: dimgray;
    padding: 22px;
    min-height: 200px;
    position: relative;
    cursor: pointer;
  }
  
  .dropbox:hover {
    background: lightblue;
  }
  
  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
  
  /* Estilos para la vista previa de la imagen */
  .file-preview {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  
    img {
      max-width: 100%;
      max-height: 300px;
      margin-bottom: 10px;
    }
    
    .responsive-image {
      width: 100%;
      height: auto;
    }
  
    .file-info {
      text-align: center;
      margin-bottom: 10px;
    }
  
    .file-actions {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  </style>
  