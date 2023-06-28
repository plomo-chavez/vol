<template>
    <div class="parent">
        <BCard :class="' col-12 '" class="p-2">
            <FormFactory
                ref="formFactoryRef"
                class="col-12 mx-auto"
                :btnsAccion="false"
                :data = 'data == null ? {} : data'
                :schema="formSchema"
                @formExport="handleSubmit"
            />
            <div class=" col-12 d-flex flex-wrap justify-content-between">
                <div>
                    <b-button
                        size="sm"
                        variant="outline-danger"
                        @click="handleCancelForm"
                    >Cancelar</b-button>
                </div>
                <div>

                    <b-button
                        size="sm"
                        variant="relief-secondary"
                        @click="handleProbar"
                    >Enviar correo</b-button>
                    <b-button
                        size="sm"
                        variant="relief-primary"
                        @click="onSubmit"
                    >Guardar plantilla</b-button>
                </div>
            </div>

            <EmailEditor
                :locale="'es'"
                ref="emailEditor"
                class="col-12 p-0 m-0 child"
                :project-id="projectId"
                :tools="tools"
                :options="options"
                v-on:load="editorLoaded"
            />
        </BCard>
    </div>
  </template>

  <script>
  import { EmailEditor } from "vue-email-editor";
  import FormFactory from '@currentComponents/FormFactory.vue'
  import customHelpers  from '@helpers/customHelpers'
  import peticiones from '@/apis/usePeticiones'

    import {
        BCard,
        BCardTitle,
        BCardSubTitle,
        BCardBody,
        BModal,
        BButton
    } from 'bootstrap-vue'

    import sendEmails from '@/apis/useSendEmails'
  export default {
    name: "currentComponents",
    mixins : [customHelpers],
    components: {
        FormFactory,
      EmailEditor,
        BCard,
        BCardTitle,
        BCardSubTitle,
        BCardBody,
        BModal,
        BButton
    },
    data() {
      return {
        projectId: 0, // replace with your project id
        accion: 1,
        activeRow : null,
        tools: {
          image: {
            enabled: false,
          },
        },
        options: {
          customJS: "console.log(1)",
          features: {
            undoRedo: false,
            audit: true,
            textEditor: { cleanPaste: false },
          },
        },

        formSchema: [
            {
                classContainer:'col-lg-7 col-md-7 col-12',
                type        : 'input-text',
                name        : 'nombre',
                value       : 'nombre',
                label       : 'Nombre',
                placeholder : 'Introduce un nombre',
                rules       : 'required',
            },
            {
                classContainer:'col-lg-5 col-md-5 col-12',
                type        : 'input-text',
                name        : 'clave',
                value       : 'slug',
                label       : 'Clave',
                placeholder : 'Introduce un clave',
                rules       : 'required',
                prefixIcon  : 'UserIcon',
            },
            {
                classContainer:'col-12',
                type        : 'input-text',
                name        : 'titulo',
                value       : 'title',
                label       : 'Titulo',
                placeholder : 'Introduce un titulo',
                rules       : 'required',
            },
        ],
      };
    },
    props: {
        data: {
            required: true,
        },
    },
    mounted(){
    },
    methods: {
        handleCancel(){},
        handleProbar(){
            sendEmails
                .sendEmail({})
                .then(response => {
                    console.log(response)
                    this.messageSweet({
                        message: 'Se envio correctamente el correo.',
                        icon: 'success',
                    });
                })
                .catch(error   => {
                    this.messageSweet({
                        message: 'Ups... ocurrio un problema, lo siento, intente de nuevo.',
                        icon: 'error',
                    });
                    console.log(error);
                })
        },
        handleCancelForm(){
            this.$emit('cancelar')
        },
        onSubmit(){
            this.$refs.formFactoryRef.validationForm()
        },
        handleSubmit(formValues){
            this.$refs.emailEditor.editor.exportHtml((data) => {
            let payload = this.copyObject(formValues);
            payload.accion  = this.accion
            if (this.data != null) {
                payload.id = this.data.id
                payload.accion = 2
            }
            payload.config  = JSON.stringify(data.design)
            payload.html    = JSON.stringify(data.html)
            this.peticionAdministrar(payload)
            });
        },
        editorLoaded(data) {
            var tempDesign = {
            counters: {
                u_row: 1,
                u_column: 1,
                u_content_text: 2,
            },
            body: {
                rows: [
                {
                    cells: [1],
                    columns: [
                    {
                        contents: [
                        {
                            type: "text",
                            values: {
                            containerPadding: "10px",
                            textAlign: "left",
                            lineHeight: "140%",
                            linkStyle: {
                                inherit: true,
                                linkColor: "#0000ee",
                                linkHoverColor: "#0000ee",
                                linkUnderline: true,
                                linkHoverUnderline: true,
                            },
                            _meta: {
                                htmlID: "u_content_text_2",
                                htmlClassNames: "u_content_text",
                            },
                            selectable: true,
                            draggable: true,
                            duplicatable: true,
                            deletable: true,
                            hideable: true,
                            text:
                                '<p style="font-size: 14px; line-height: 140%;"><span style="font-size: 48px; line-height: 67.2px;">This is an example template. Replace the JSON with your own.</span></p>',
                            },
                        },
                        ],
                        values: {
                        _meta: {
                            htmlID: "u_column_1",
                            htmlClassNames: "u_column",
                        },
                        border: {},
                        padding: "0px",
                        backgroundColor: "",
                        },
                    },
                    ],
                    values: {
                    displayCondition: null,
                    columns: false,
                    backgroundColor: "",
                    columnsBackgroundColor: "",
                    backgroundImage: {
                        url: "",
                        fullWidth: true,
                        repeat: false,
                        center: true,
                        cover: false,
                    },
                    padding: "0px",
                    hideDesktop: false,
                    _meta: {
                        htmlID: "u_row_1",
                        htmlClassNames: "u_row",
                    },
                    selectable: true,
                    draggable: true,
                    duplicatable: true,
                    deletable: true,
                    hideable: true,
                    },
                },
                ],
                values: {
                textColor: "#000000",
                backgroundColor: "#e7e7e7",
                backgroundImage: {
                    url: "",
                    fullWidth: true,
                    repeat: false,
                    center: true,
                    cover: false,
                },
                contentWidth: "500px",
                contentAlign: "center",
                fontFamily: {
                    label: "Arial",
                    value: "arial,helvetica,sans-serif",
                },
                preheaderText: "",
                linkStyle: {
                    body: true,
                    linkColor: "#e67e23",
                    linkHoverColor: "#0000ee",
                    linkUnderline: true,
                    linkHoverUnderline: true,
                    inherit: false,
                },
                _meta: {
                    htmlID: "u_body",
                    htmlClassNames: "u_body",
                },
                },
            },
            schemaVersion: 6,
            }
            let tmp = this.data != null ? JSON.parse(this.data.config) : tempDesign
            this.$refs.emailEditor.editor.loadDesign(tmp)
        },
        peticionAdministrar(payload){
            peticiones
                .administrarTemplatesEmail({
                    'payload' : payload,
                })
                .then(response => {

                    this.messageSweet({
                        message: response.data.message,
                        icon: response.data.result ? 'success' : 'error',
                    });
                    if (response.data.result ) {
                        this.handleCancelForm()
                    }
                })
                .catch(error   => { console.log(error); })
        },
    },
  };
  </script>
  <style>
    .unlayer-editor{
        height: 800px!important;
        min-height: 0!important;
    }
    .unlayer-editor > iframe{
        min-width: 0px!important;
    }
  </style>
