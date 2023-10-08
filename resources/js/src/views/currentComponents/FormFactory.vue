<!-- 
    withCard: Propiedad booleana que determina si se utiliza un componente de tarjeta (b-card) o un div para envolver el contenido del formulario.
    classForm: Clase CSS que se aplica al elemento que envuelve el formulario.
    title y subtitle: Texto utilizado para el título y el subtítulo del formulario.
    schema: Un array que contiene la configuración de los diferentes campos de entrada y elementos del formulario.
    form: Objeto que almacena los valores de los campos del formulario.
    formDisabled: Propiedad booleana que controla si el formulario está habilitado o deshabilitado.
    btnsAccion: Propiedad booleana que determina si se muestran los botones de acción del formulario.
    btnLblSubmit: Texto utilizado para etiquetar el botón

    tipos de inputs:
    input-blank: Campo de entrada en blanco, que no muestra ningún contenido. Esencialmente, se utiliza para crear un espacio en blanco en el formulario.
    input-label: Campo de entrada que muestra un valor de datos (como un nombre) en un elemento <label>.
    titulo-seccion: Campo de entrada que muestra un título de sección en negrita.
    input-text: Campo de entrada de texto normal.
    password: Campo de entrada de contraseña.
    email: Campo de entrada de dirección de correo electrónico.
    text-area: Campo de entrada de área de texto.
    flat-pickr: Campo de entrada para seleccionar fechas utilizando el componente b-form-datepicker.
    input-phone: Campo de entrada para números de teléfono.
    input-money: Campo de entrada para valores monetarios.
    input-asociado: Campo de entrada para datos asociados.
    input-number: Campo de entrada para números.
    input-select: Campo de entrada de selección personalizado utilizando un componente llamado customSelect.
    input-checkbox: Campo de entrada de casilla de verificación.
    input-switch: Campo de entrada de interruptor. 
-->
<template>
    <component v-bind:is="withCard ? 'b-card' : 'div'" :class="classForm">
        <!-- Title & SubTitle -->
        <div v-if="title || subtitle" class="mb-2 col-12 p-0">
            <component v-bind:is="withCard ? 'b-card-title'     : 'h1'" v-if="title">{{ title }}</component>
            <component v-bind:is="withCard ? 'b-card-sub-title' : 'h3'" v-if="subtitle">{{ subtitle }}</component>
        </div>
        <div class="col-12 p-11 pt-0 pb-0" @keyup.enter="validationForm">
            <validation-observer ref="simpleRules">
              <b-row :class="classRow">
                  <b-col
                      v-for="(input,indxInput) in schema"
                      :key="'input-'+indxInput"
                      class=" m-0 p-0 p-0 pp-3"
                      :class="' mmb-1' + (typeof input.classContainer != 'undefined'? input.classContainer : ' col-12 ' ) "
                  >
                  <!-- input blank -->
                      <div v-if="input.type === 'input-blank'" ></div>

                <!-- input input-dateTimer  -->
                <div v-if="input.type === 'input-dateTimer'">
                    <!-- Provider de validación -->
                    <validation-provider
                        #default="{ errors }"
                        :name=" (typeof input.name  != 'undefined'?input.name:'')"
                        :rules="(typeof input.rules != 'undefined'?input.rules:'')"
                    >
                    <!-- Label -->
                    <p
                        :for="input.name"
                        :class="(typeof input.classLabel != 'undefined'?input.classLabel + ' m-0 p-0 ':'') + ' font-weight-bolder p-0 m-0' "
                    >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
                    
                    <input
                        :id="'input'+input.name"
                        :class="' form-control col-12 '"
                        type="text"
                        v-model="form[input.value]"
                        readonly
                    />
                    <VuePersianDatetimePicker
                        :custom-input="'#input'+input.name"
                        :class="' col-12 m-0 p-0'"
                        :min="getDate(input,'min')"
                        :max="getDate(input,'max')"
                        :id="   input.name"
                        :ref="  input.name"
                        :name=" input.name"
                        format="YYYY-MM-DD HH:mm"
                        display-format="YYYY-MM-DD HH:mm"
                        v-model="form[input.value]"
                        @onChange=" changeValueDatePicker(input.value) "
                        :disabled=" formDisabled?true:(typeof input.disabled != 'undefined'?input.disabled:false) "
                        locale="es" 
                        type="datetime" 
                        :color="'#ff0000d4'"
                        :localeConfig="{
                            es: {
                                dow: 0,
                                dir: 'ltr',
                                lang: {
                                    label:     'Hola',
                                    submit:    'Seleccionar',
                                    cancel:    'Cancelar',
                                    now:       'Hoy',
                                    nextMonth: 'Siguiente mes',
                                    prevMonth: 'Anterior mes',
                                }
                            }
                        }"
                    />
                        <!-- :min="(typeof input.minDate != 'undefined'?input.minDate:'')"
                        :max="(typeof input.maxDate != 'undefined'?input.maxDate:'')" -->

                    <!-- Errores de validación -->
                    <p class="m-0 p-0" v-if="errors[0]"><small class=" m-0 p-0 font-weight-bolder text-danger">{{ errors[0] }}</small></p>
                    </validation-provider>
                </div>
                  <!-- Label -->
                      <div v-if="input.type === 'input-label'">
                        <validation-provider
                            #default="{ errors }"
                            :name=" (typeof input.name  != 'undefined'?input.name:'')"
                            :rules="(typeof input.rules != 'undefined'?input.rules:'')"
                        >
                        <p
                            :for="input.name"
                            :class="'  text-truncate ' + (typeof input.classLabel != 'undefined'?input.classLabel + ' m-0 p-0 ':'') + ' font-weight-bolder p-0 m-0' "
                        >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
                            <label v-if="form[input.value]" class="bg-white col-12 p-0 m-0">
                                {{ form[input.value] }}
                            </label>
                            </validation-provider>
                      </div>
                      <div v-if="input.type === 'titulo-seccion'">
                        <p
                            :for="input.name"
                            :class="'  text-truncate ' + (typeof input.classLabel != 'undefined'?input.classLabel + ' m-0 p-0 ':'') + ' font-weight-bolder p-0 m-0 borderPrimary' "
                        >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
                        </div>
                  <!-- input text -->
                      <div v-if="input.type === 'input-text'">
                        <validation-provider
                            #default="{ errors }"
                            :name=" (typeof input.name  != 'undefined'?input.name:'')"
                            :rules="(typeof input.rules != 'undefined'?input.rules:'')"
                        >
                        <p
                            :for="input.name"
                            :class="'  text-truncate ' + (typeof input.classLabel != 'undefined'?input.classLabel + ' m-0 p-0 ':'') + ' font-weight-bolder p-0 m-0' "
                        >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
                            <b-form-group
                            class=" p-0 m-0"
                            >
                            <b-input-group
                                :prepend="(typeof input.prefixText != 'undefined'?input.prefixText:'')"
                                :append=" (typeof input.sufijoText != 'undefined'?input.sufijoText:'')"
                                class="input-group-merge"
                            >
                                <b-input-group-prepend v-if="(typeof input.prefixIcon != 'undefined')" is-text>
                                <feather-icon :icon="input.prefixIcon" />
                                </b-input-group-prepend>
                                <b-form-input
                                    :id="   input.name"
                                    :autofocus=" typeof input.focus != 'undefined' ? input.focus : false"
                                    :autocomplete="'false'"
                                    :ref="  input.name"
                                    :name=" input.name"
                                    :value="form[input.value]"
                                    @input="changeData(input.value,$event)"
                                    :disabled=" formDisabled?true:(typeof input.disabled != 'undefined'?input.disabled:false)"
                                    :class=" typeof input.classElement != 'undefined'?input.classElement:''"
                                    :placeholder="(typeof input.placeholder != 'undefined'?input.placeholder:'Introduce un dato valido')"
                                    class="bg-white col-12"
                                />
                                <b-input-group-append v-if="(typeof input.sufijoIcon != 'undefined')" is-text>
                                <feather-icon :icon="input.sufijoIcon" />
                                </b-input-group-append>
                            </b-input-group>
                            </b-form-group>
                            <p class="m-0 p-0" v-if="errors[0]"><small class=" m-0 p-0 font-weight-bolder text-danger">{{ errors[0] }}</small></p>
                        </validation-provider>
                      </div>
                  <!-- input password -->
                      <div v-if="input.type === 'password'">
                        <validation-provider
                            #default="{ errors }"
                            :name=" (typeof input.name  != 'undefined'?input.name:'')"
                            :rules="(typeof input.rules != 'undefined'?input.rules:'')"
                        >
                        <p
                            :for="input.name"
                            :class="'  text-truncate ' + (typeof input.classLabel != 'undefined'?input.classLabel + ' m-0 p-0 ':'') + ' font-weight-bolder p-0 m-0' "
                        >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
                            <b-form-group
                            class=" p-0 m-0"
                            >
                            <b-input-group
                                :prepend="(typeof input.prefixText != 'undefined'?input.prefixText:'')"
                                :append=" (typeof input.sufijoText != 'undefined'?input.sufijoText:'')"
                                class="input-group-merge"
                            >
                                <b-input-group-prepend v-if="(typeof input.prefixIcon != 'undefined')" is-text>
                                <feather-icon :icon="input.prefixIcon" />
                                </b-input-group-prepend>
                                <b-form-input
                                :id="   input.name"
                                :type="input.type"
                                :ref="  input.name"
                                :name=" input.name"
                                :value="form[input.value]"
                                @input="changeData(input.value,$event)"
                                :disabled=" formDisabled?true:(typeof input.disabled != 'undefined'?input.disabled:false)"
                                :placeholder="(typeof input.placeholder != 'undefined'?input.placeholder:'Introduce un dato valido')"
                                class="bg-white col-12"
                                />
                                <b-input-group-append v-if="(typeof input.sufijoIcon != 'undefined')" is-text>
                                <feather-icon :icon="input.sufijoIcon" />
                                </b-input-group-append>
                            </b-input-group>
                            </b-form-group>
                            <p class="m-0 p-0" v-if="errors[0]"><small class=" m-0 p-0 font-weight-bolder text-danger">{{ errors[0] }}</small></p>
                        </validation-provider>
                      </div>
                  <!-- input email -->
                      <div v-if="input.type === 'email'">
                        <validation-provider
                            #default="{ errors }"
                            :name=" (typeof input.name  != 'undefined'?input.name:'')"
                            :rules="(typeof input.rules != 'undefined'?input.rules:'')"
                        >
                        <p
                            :for="input.name"
                            :class="'  text-truncate ' + (typeof input.classLabel != 'undefined'?input.classLabel + ' m-0 p-0 ':'') + ' font-weight-bolder p-0 m-0' "
                        >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
                            <b-form-group
                            class=" p-0 m-0"
                            >
                            <b-input-group
                                :prepend="(typeof input.prefixText != 'undefined'?input.prefixText:'')"
                                :append=" (typeof input.sufijoText != 'undefined'?input.sufijoText:'')"
                                class="input-group-merge"
                            >
                                <b-input-group-prepend v-if="(typeof input.prefixIcon != 'undefined')" is-text>
                                <feather-icon :icon="input.prefixIcon" />
                                </b-input-group-prepend>
                                <b-form-input
                                :id="   input.name"
                                :type="input.type"
                                :ref="  input.name"
                                :name=" input.name"
                                :value="form[input.value]"
                                @input="changeData(input.value,$event)"
                                :disabled=" formDisabled?true:(typeof input.disabled != 'undefined'?input.disabled:false)"
                                :placeholder="(typeof input.placeholder != 'undefined'?input.placeholder:'Introduce un dato valido')"
                                class="bg-white col-12"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                />
                                <b-input-group-append v-if="(typeof input.sufijoIcon != 'undefined')" is-text>
                                <feather-icon :icon="input.sufijoIcon" />
                                </b-input-group-append>
                            </b-input-group>
                            </b-form-group>
                            <p class="m-0 p-0" v-if="errors[0]"><small class=" m-0 p-0 font-weight-bolder text-danger">{{ errors[0] }}</small></p>
                        </validation-provider>
                      </div>
                  <!-- input text-area -->
                      <div v-if="input.type === 'text-area'">
                        <!-- Provider de validación -->
                        <validation-provider
                            #default="{ errors }"
                            :name=" (typeof input.name  != 'undefined'?input.name:'')"
                            :rules="(typeof input.rules != 'undefined'?input.rules:'')"
                        >
                        <!-- Label -->
                        <p
                            :for="input.name"
                            :class="'  text-truncate ' + (typeof input.classLabel != 'undefined'?input.classLabel + ' m-0 p-0 ':'') + ' font-weight-bolder p-0 m-0' "
                        >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
                        <!-- Input -->
                        <b-form-textarea
                            :id="   input.name"
                            :ref="  input.name"
                            :name=" input.name"
                            :value="form[input.value]"
                            @input="changeData(input.value,$event)"
                            class="col-12 char-textarea"
                            :disabled=" formDisabled?true:(typeof input.disabled != 'undefined'?input.disabled:false)"
                            :placeholder="(typeof input.placeholder != 'undefined'?input.placeholder:'')"
                            rows="3"
                            :class="typeof input.counterChar == 'undefined'?'': ( !input.counterChar ? '' : (typeof input.maxChar == 'undefined'?'':((form[input.value] == null? 0 : form[input.value].length) <= input.maxChar)?'':' text-danger '))"
                        />
                        <!-- Contador de caracteres -->
                        <small
                            v-if=" form[input.value] != null && (typeof input.counterChar != 'undefined'?input.counterChar:false) "
                            class="textarea-counter-value float-right"
                        ><span class="char-count">{{   form[input.value].length }}</span></small>
                        <!-- Errores de validación -->
                        <p class="m-0 p-0" v-if="errors[0]"><small class=" m-0 p-0 font-weight-bolder text-danger">{{ errors[0] }}</small></p>
                        </validation-provider>
                      </div>
                  <!-- input flat-pickr -->
                      <div v-if="input.type === 'flat-pickr'">
                        <!-- Provider de validación -->
                        <validation-provider
                            #default="{ errors }"
                            :name=" (typeof input.name  != 'undefined'?input.name:'')"
                            :rules="(typeof input.rules != 'undefined'?input.rules:'')"
                        >
                        <!-- Label -->
                        <p
                            :for="input.name"
                            :class="'  text-truncate ' + (typeof input.classLabel != 'undefined'?input.classLabel + ' m-0 p-0 ':'') + ' font-weight-bolder p-0 m-0' "
                        >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
                        <!-- input -->
                        <VueDatePicker
                            :class="' form-control col-12 '"
                            :id="   input.name"
                            :ref="  input.name"
                            :name=" input.name"
                            @onOpen="menu = true"
                            @onClose="menu = false"
                            no-calendar-icon
                            fullscreen-mobile
                            :color="'#ff0000d4'"
                            :format="getFormato(input)"
                            :min-date="getDate(input,'min')"
                            :max-date="getDate(input,'max')"
                            :visible-years-number="100"
                            v-model="form[input.value]"
                            @onChange=" changeValueDatePicker(input.value) "
                            :disabled=" formDisabled?true:(typeof input.disabled != 'undefined'?input.disabled:false) "
                            :placeholder=" (typeof input.placeholder != 'undefined'?input.placeholder:'Introduce una fecha valida') "
                            autocomplete="off"
                        />
                            <!-- :min="(typeof input.minDate != 'undefined'?input.minDate:'')"
                            :max="(typeof input.maxDate != 'undefined'?input.maxDate:'')" -->

                        <!-- Errores de validación -->
                        <p class="m-0 p-0" v-if="errors[0]"><small class=" m-0 p-0 font-weight-bolder text-danger">{{ errors[0] }}</small></p>
                        </validation-provider>
                      </div>
                  <!-- input input-timer -->
                      <div v-if="input.type === 'input-timer'">
                        <!-- Provider de validación -->
                        <validation-provider
                            #default="{ errors }"
                            :name=" (typeof input.name  != 'undefined'?input.name:'')"
                            :rules="(typeof input.rules != 'undefined'?input.rules:'')"
                        >
                        <!-- Label -->
                        <p
                            :for="input.name"
                            :class="'  text-truncate ' + (typeof input.classLabel != 'undefined'?input.classLabel + ' m-0 p-0 ':'') + ' font-weight-bolder p-0 m-0' "
                        >{{(typeof input.label != 'undefined'?input.label:'')}}</p>

                        <b-input-group
                                class="input-group-merge"
                            >
                                <b-input-group-prepend is-text>
                                <feather-icon :icon="'ClockIcon'" class="text-primary" />
                                </b-input-group-prepend>
                                <VuePersianDatetimePicker
                                    type="time"
                                    locale="es"
                                    class="wwfull"
                                    v-model="form[input.value]"
                                    simple
                                    min="08:08"
                                    max="22:00"
                                    :jump-minute="10"
                                    :locale-config="{
                                        'es': {
                                            lang: {
                                                label: 'Es',
                                                submit: 'Seleccionar',
                                                cancel: 'Cancelar',
                                                now: 'Ahora',
                                                nextMonth: 'Mes Anterior',
                                                prevMonth: 'Mes Siguiente'
                                            }
                                        }
                                    }"
                                />
                            </b-input-group>
                            <!-- :min="(typeof input.minDate != 'undefined'?input.minDate:'')"
                            :max="(typeof input.maxDate != 'undefined'?input.maxDate:'')" -->

                        <!-- Errores de validación -->
                        <p class="m-0 p-0" v-if="errors[0]"><small class=" m-0 p-0 font-weight-bolder text-danger">{{ errors[0] }}</small></p>
                        </validation-provider>
                      </div>
                  <!-- input input-phone -->
                      <div v-if="input.type === 'input-phone'">
                        <!-- Provider de validación -->
                        <validation-provider
                            #default="{ errors }"
                            :name=" (typeof input.name  != 'undefined'?input.name:'')"
                            :rules="(typeof input.rules != 'undefined'?  input.rules + '' : '' )"
                            >
                            <!-- Label -->
                        <p
                            :for="input.name"
                            :class="'  text-truncate ' + (typeof input.classLabel != 'undefined'?input.classLabel + ' m-0 p-0 ':'') + ' font-weight-bolder p-0 m-0' "
                        >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
                        <!-- input -->
                        <VuePhoneNumberInput
                            :id="   input.name"
                            :ref="  input.name"
                            :name=" input.name"
                            :value="form[input.value]"
                            @input="changeData(input.value,$event)"
                            class="bg-white w-100 char-textarea"
                            :disabled=" formDisabled?true:(typeof input.disabled != 'undefined'?input.disabled:false)"
                            :placeholder="(typeof input.placeholder != 'undefined'?input.placeholder:'')"
                            :default-country-code="'MX'"
                            :countries-height="50"
                            :preferred-countries="['MX','US']"
                            :translations="{
                            countrySelectorLabel: 'Codigo',
                            countrySelectorError: 'Selecciona un país',
                            phoneNumberLabel    : null,
                            example             : 'Ejemplo :'
                            }"
                        />
                        <!-- Errores de validación -->
                        <p class="m-0 p-0" v-if="errors[0]"><small class=" m-0 p-0 font-weight-bolder text-danger col-12">{{ errors[0] }}</small></p>
                        <p class="m-0 p-0"><small v-if="errorsPersonalizados[input.name]" class="m-0 p-0 font-weight-bolder text-danger col-12">{{ errorsPersonalizados[input.name] }}</small></p>
                        </validation-provider>
                      </div>
                  <!-- input input-money -->
                      <div v-if="input.type === 'input-money'">
                          <!-- Provider de validación -->
                          <validation-provider
                              #default="{ errors }"
                              :name=" (typeof input.name  != 'undefined'?input.name:'')"
                              :rules="(typeof input.rules != 'undefined'?  input.rules + '' : '' )"
                          >                <!-- Label -->
                              <p
                                  :for="input.name"
                                  :class="'  text-truncate ' + (typeof input.classLabel != 'undefined'?input.classLabel + ' m-0 p-0 ':'') + ' font-weight-bolder p-0 m-0' "
                              >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
                              <!-- input -->

                              <cleave
                                :id="input.name"
                                :ref="input.name"
                                :name="input.name"
                                :value="form[input.value]"
                                @input="changeData(input.value, $event)"
                                class="bg-white w-100 char-textarea form-control"
                                :disabled="formDisabled || Boolean(input.disabled)"
                                :placeholder="input.placeholder || ''"
                                :raw="false"
                                :options="optionsInputMoney"
                            />

                              <!-- Errores de validación -->
                              <p class="m-0 p-0" v-if="errors[0]"><small class=" m-0 p-0 font-weight-bolder text-danger col-12">{{ errors[0] }}</small></p>
                              <p class="m-0 p-0"><small v-if="errorsPersonalizados[input.name]" class="m-0 p-0 font-weight-bolder text-danger col-12">{{ errorsPersonalizados[input.name] }}</small></p>
                          </validation-provider>
                      </div>
                <!-- input input-asociado -->
                    <div v-if="input.type === 'input-asociado'">
                        <!-- Provider de validación -->
                        <validation-provider
                            #default="{ errors }"
                            :name=" (typeof input.name  != 'undefined'?input.name:'')"
                            :rules="(typeof input.rules != 'undefined'?  input.rules + '' : '' )"
                        >                <!-- Label -->
                            <p
                                :for="input.name"
                                :class="'  text-truncate ' + (typeof input.classLabel != 'undefined'?input.classLabel + ' m-0 p-0 ':'') + ' font-weight-bolder p-0 m-0' "
                            >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
                            <!-- input -->

                            <cleave
                            :id="input.name"
                            :ref="input.name"
                            :name="input.name"
                            :value="form[input.value]"
                            @input="changeData(input.value, $event)"
                            class="bg-white w-100 char-textarea form-control"
                            :disabled="formDisabled || Boolean(input.disabled)"
                            :placeholder="input.placeholder || ''"
                            :raw="false"
                            :options="optionsInputAsociado"
                        />
                        <!-- blocks: [1]
                            :options="optionsInputNumerico" -->

                            <!-- Errores de validación -->
                            <p class="m-0 p-0" v-if="errors[0]"><small class=" m-0 p-0 font-weight-bolder text-danger col-12">{{ errors[0] }}</small></p>
                            <p class="m-0 p-0"><small v-if="errorsPersonalizados[input.name]" class="m-0 p-0 font-weight-bolder text-danger col-12">{{ errorsPersonalizados[input.name] }}</small></p>
                        </validation-provider>
                    </div>
                <!-- input input-number -->
                    <div v-if="input.type === 'input-number'">
                        <!-- Provider de validación -->
                        <validation-provider
                            #default="{ errors }"
                            :name=" (typeof input.name  != 'undefined'?input.name:'')"
                            :rules="(typeof input.rules != 'undefined'?  input.rules + '' : '' )"
                        >                <!-- Label -->
                            <p
                                :for="input.name"
                                :class="'  text-truncate ' + (typeof input.classLabel != 'undefined'?input.classLabel + ' m-0 p-0 ':'') + ' font-weight-bolder p-0 m-0' "
                            >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
                            <cleave
                                :id="input.name"
                                :ref="input.name"
                                :name="input.name"
                                :value="form[input.value]"
                                @input="changeData(input.value, $event)"
                                class="bg-white w-100 char-textarea form-control"
                                :disabled="formDisabled || Boolean(input.disabled)"
                                :placeholder="input.placeholder || ''"
                                :raw="false"
                                :options="input.options"
                            />
                            <p class="m-0 p-0" v-if="errors[0]"><small class=" m-0 p-0 font-weight-bolder text-danger col-12">{{ errors[0] }}</small></p>
                            <p class="m-0 p-0"><small v-if="errorsPersonalizados[input.name]" class="m-0 p-0 font-weight-bolder text-danger col-12">{{ errorsPersonalizados[input.name] }}</small></p>
                        </validation-provider>
                    </div>
                  <!-- input input-select -->
                      <div v-if="input.type === 'input-select'">
                        <customSelect
                            :id="   input.name"
                            :ref="  input.name"
                            :name=" input.name"
                            :input="input"
                            :formDisabled="formDisabled"
                            @changeData="changeValueSelect"
                            :formValue="form[input.value]"
                        />
                      </div>
                  <!-- input input-checkbox -->
                      <div v-if="input.type === 'input-checkbox'">
                          <!-- Provider de validación -->
                          <validation-provider
                              #default="{ errors }"
                              :name=" (typeof input.name  != 'undefined'?input.name:'')"
                              :rules="(typeof input.rules != 'undefined'?  input.rules + '' : '' )"
                          >
                              <!-- Label -->
                              <p
                                  :for="input.name"
                                  :class="'  text-truncate ' + (typeof input.classLabel != 'undefined'?input.classLabel + ' m-0 p-0 ':'') + ' font-weight-bolder p-0 m-0' "
                              >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
                              <!-- input -->
                              <div>
                                  <b-form-checkbox-group
                                      :id="   input.name"
                                      :ref="  input.name"
                                      :name=" input.name"
                                      :options="input.catalogo"
                                      :value="form[input.value]"
                                      :stacked ="typeof input.vertical != 'undefined' ? input.vertical : false "
                                      @input="{ changeData(input.value,$event) }"
                                  />
                              </div>
                              <!-- Errores de validación -->
                              <p class="m-0 p-0" v-if="errors[0]"><small class=" m-0 p-0 font-weight-bolder text-danger col-12">{{ errors[0] }}</small></p>
                          </validation-provider>
                      </div>
                  <!-- input input-switch -->
                      <div v-if="input.type === 'input-switch'" >
                          <!-- Provider de validación -->
                          <validation-provider
                              #default="{ errors }"
                              :name=" (typeof input.name  != 'undefined'?input.name:'')"
                              :rules="(typeof input.rules != 'undefined'?  input.rules + '' : '' )"
                          >
                              <!-- Label -->
                              <p
                                  :for="input.name"
                                  :class="'  text-truncate ' + (typeof input.classLabel != 'undefined'?input.classLabel + ' m-0 p-0 ':'') + ' font-weight-bolder p-0 m-0' "
                              >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
                              <!-- input -->
                              <div class="hh-35 d-flex justify-content-between align-items-center ">
                                  <b-form-checkbox
                                  switch
                                  v-model="form[input.value]"
                                  @change="changeData(input.value, form[input.value])"
                                  >
                                  <label class=" font-weight-bolder ">{{ getLabelSwitch(form[input.value],input.labels) }}</label>
                                  </b-form-checkbox>

                              </div>
                              <!-- Errores de validación -->
                          </validation-provider>
                      </div>
                  <!-- input input-multiple -->
                      <div v-if="input.type === 'input-multiple'" class="">
                          <!-- Provider de validación -->
                            <CustomSwitchMultiple
                                :input="input"
                                :data="form[input.value]"
                                @changeData="(data) => { changeData(input.value, data)}"
                            />
                      </div>
                  </b-col>
              </b-row>
            </validation-observer>
            <!-- Botones de acción -->
            <div v-if="btnsAccion" class="col-12 m-0 p-0 mt-1 d-flex justify-content-end">
              <b-button
                v-if="formDisabled"
                class=""
                variant="relief-warning"
                type="button"
                @click=" formDisabled = false"
              >Editar</b-button>
              <b-button
                v-if="(disabledForm) ? (!formDisabled) : btnCancelar "
                class=" mr-1"
                v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                variant="outline-secondary"
                type="button"
                @click="cancelar()"
              >Cancelar</b-button>
              <b-button
                v-if="!formDisabled"
                class=""
                variant="relief-primary"
                type="submit"
                @click.prevent="validationForm"
              >{{ btnLblSubmit }}</b-button>
            </div>
        </div>
    </component>
  </template>

  <script>
    import {
        BRow,

        BCard,
        BCardTitle,
        BCardSubTitle,
        BCardBody,
        BCol,
        BFormDatepicker,
        BFormGroup,
        BFormInput,
        BFormCheckbox,
        BForm,
        BButton,
        BFormTextarea,
        BInputGroup,
        BInputGroupPrepend,
        BInputGroupAppend,
        BFormCheckboxGroup
    } from 'bootstrap-vue'
    import vSelect from 'vue-select'
    import {
      ValidationProvider,
      ValidationObserver,
      localize,
      extend
    } from 'vee-validate'
    import {
      password,
      required
    } from '@validations'
    import flatPickr from 'vue-flatpickr-component'
    import Ripple from 'vue-ripple-directive'
    import customHelpers  from '@helpers/customHelpers'
    import es from "vee-validate/dist/locale/es.json";
    import VuePhoneNumberInput from 'vue-phone-number-input';
    import 'vue-phone-number-input/dist/vue-phone-number-input.css';
    import Cleave from 'vue-cleave-component'
    import 'cleave.js/dist/addons/cleave-phone.us'
    import customSelect from '@currentComponents/customSelect.vue'
    import CustomSwitchMultiple from '@currentComponents/CustomSwitchMultiple.vue'
    import VuePersianDatetimePicker from 'vue-persian-datetime-picker'

  export default {
    directives: {
        Ripple,
        focus: {
            // Definición de la directiva
            inserted(el) {
                // Cuando se inserta el elemento en el DOM, establece el foco en él
                el.focus();
            }
        }
    },
    components: {
        CustomSwitchMultiple,
        VuePhoneNumberInput,
        VuePersianDatetimePicker,
        BFormCheckboxGroup,
        BRow,
        Cleave,
        flatPickr,
        BFormTextarea,
        BCol,
        vSelect,
        BFormDatepicker,
        BFormGroup,
        BFormInput,
        BFormCheckbox,
        BForm,
        BButton,
        BInputGroup,
        BInputGroupPrepend,
        BInputGroupAppend,
        ValidationProvider,
        ValidationObserver,
        BCard,
        BCardTitle,
        BCardSubTitle,
        BCardBody,
        customSelect,
    },
    data() {
        return {
            calendarOptions: {
                'z-index': 9999,
            },
            errorsPersonalizados : {},
            form : {},
            openModal:false,
            password,
            required,
            formDisabled : false,
            optionsInputMoney : {
                numeral: true,
                prefix: '$ ',
                numeralThousandsGroupStyle: 'thousand',
            },
            optionsMultiple:[],
            selectedOptions:{},
            optionsInputNumerico : {
                // Configuramos el bloque de dígitos enteros
                blocks: [2],
                // Permitimos solo valores numéricos
                numericOnly: true,
                // Establecemos el valor mínimo y máximo
            },
            optionsInputAsociado : {
                // Configuramos el bloque de dígitos enteros
                blocks: [6],
                // Permitimos solo valores numéricos
                numericOnly: true,
                // Establecemos el valor mínimo y máximo
            },
        }
    },
    props: {
      schema: {
        type    : Array,
        default : []
      },
      data: {
        type    : Object,
        default : null
      },
      title: {
        type    : String,
        default : null
      },
      subtitle: {
        type    : String,
        default : null
      },
      classForm: {
        type    : String,
        default : ' p-1 '
      },
      withCard:{
        type    : Boolean,
        default : false,
      },
      disabledForm:{
        type    : Boolean,
        default : false,
      },
      btnCancelar:{
        type    : Boolean,
        default : true,
      },
      btnsAccion:{
        type    : Boolean,
        default : true,
      },
      formLive:{
        type    : Boolean,
        default : false,
      },
      btnLblSubmit : {
        type: String,
        default : 'Guardar'
      },
      classRow : {
        type: String,
        default : ''
      }
    },
    mixins : [customHelpers],
    created() {},
    watch: {
      data(){
        this.inicializar();
      },
      form(){
      },
      tmpMultiple(){
        console.log(this.tmpMultiple);
      },

    },
    computed: {
    },
    beforeMount() {
        this.formDisabled = this.disabledForm,
        localize('es',es);
        this.inicializar();
    },
    mounted() {
    },
    methods: {
        handleOptionChange(value) {
            const selected = Object.keys(this.selectedOptions[value]).filter(
                (key) => this.selectedOptions[key]
            );
        },
        getFormato(input){
            let response = 'DD-MM-YYYY';
            return input.formato ?? response;
        },
        getOptionsNumber(input){
            let options = {
                // Configuramos el bloque de dígitos enteros
                blocks: [2],
                // Permitimos solo valores numéricos
                numericOnly: true,
                // Establecemos el valor mínimo y máximo
            };
            
            if( typeof input.digitos != 'undefined' ){
                options.blocks = [input.digitos];
            }
            if( typeof input.options != 'undefined' ){
                options = input.options;
            }

            return options;
        },
        getDate(input,type){
            if (type == 'min'){
                return input.min ?? null ;
            } else {
                return input.max ?? null ;
            }
        },
        expotFormLive(){
            if (this.formLive == true) {
                this.$emit('exportLive', this.form)
            }
        },
        getOptions(input) {
            let options;
            if (input?.prefix ?? false) {
                options = {...this.optionsInputMoney, prefix : input.prefix}
            } else {
                options = this.optionsInputMoney ?? null; // o un valor predeterminado
            }
            return options;
        },
        getOptionsMoney(input){
            let tmp = this.copyObject(this.optionsInputMoney)
            return tmp
        },
        changeValueSelect(data){
            this.changeData(data.field,data.value)
        },
        changeValueDatePicker(field){
            this.changeData(field,this.form[field])
        },
        changeValueMultiple(input,value,indx){
            let data = this.copyObject(this.form[input.value])
            let tmp =  [];
            let t = this.optionsMultiple[input.name][indx]
            if(value !== false ){
                tmp = [...data,t]
            } else {
                if(data != null){
                    tmp = data.filter((element) => element !== t);
                }
            }
            this.changeData(input.value,this.copyObject(tmp))
        },
        getLabelSwitch(valor,labels){
            let texto = 'Faltan los labels'
            if (typeof labels == 'object') {
                texto = valor ? labels.on : labels.off
                texto = typeof texto == 'undefined' ? 'lol' : texto
            }
            return texto;
        },
        changeData(field,valor){
            this.$set(this.form,field,valor);
            this.validacionesExternas()
            this.expotFormLive()
        },
        changeFormat(input,valor){
            this.form[input] = valor;
        },
        getForm(){
            return this.form
        },
        onContext(ctx) {
            this.formatted = ctx.selectedFormatted
            this.selected = ctx.selectedYMD
        },
        cancelar(){
            if( this.disabledForm ){
                this.formDisabled = true;
            }else{
                this.$emit('cancelar');
            }
        },
        async inicializar(){
            let tmp = {};
            let index = 0;
            for (const item of this.schema) {
                let valor = null
                if(item.type == 'input-checkbox'){
                    valor = this.data == null ? [] : ( this.data.hasOwnProperty(item.value) ? this.data[item.value] : [] )
                }else if(item.type == 'input-number'){
                    item.options = this.getOptionsNumber(item);
                    valor = this.data == null ? null : ( this.data.hasOwnProperty(item.value) ? parseInt(this.data[item.value]) : null )
                }else if(item.type == 'input-switch'){                                                                  
                    valor = this.data == null ? false : ( this.data.hasOwnProperty(item.value) ? this.data[item.value] : false )
                }else if(item.type == 'input-money'){
                    valor = this.data == null ? 0 : ( this.data.hasOwnProperty(item.value) ? this.data[item.value] : 0 )
                }else if(item.type == 'input-multiple'){
                    this.optionsMultiple[item.value] = await this.getCatalogo(item);
                    valor = this.data == null ? [] : ( this.data.hasOwnProperty(item.value) ? this.data[item.value] : [] )
                }else{
                    valor = this.data == null ? null : ( this.data.hasOwnProperty(item.value) ? this.data[item.value] : null )
                }
                tmp[item.value] = valor;
                index++;
            }
            this.$set(this,'form',tmp);
        },
        validacionesExternas(){
            let hayErrores = false;
            this.schema.map((field) => {
                if (hayErrores == false) {
                    if (field.type == 'input-phone') {
                        if (!this.$refs[field.name][0].isValid) {
                                this.errorsPersonalizados[field.name] = 'El ' + field.label.toLowerCase() + ' debe de ser valido.'
                                hayErrores = true
                        } else {
                            delete(this.errorsPersonalizados[field.name])
                        }
                    } else if (field.type == 'input-checkbox') {
                        console.log(field.rules)
                    }
                }
            })
            return hayErrores;
        },
        async isValid() {
            const success = await this.$refs.simpleRules.validate();
            const hayErrores = this.validacionesExternas();

            if (hayErrores === false && success) {
                console.log('isValid -> true');
                return true;
            } else {
                console.log('isValid -> false');
                return false;
            }
        },
        // async isValid(){
        //     this.$refs.simpleRules.validate().then(success => {
        //         let hayErrores = this.validacionesExternas();
        //         if (hayErrores == false && success) {
        //             console.log('isValid -> true')
        //             return true
        //         } else {
        //             console.log('isValid -> false')
        //             return false
        //         }
        //     })
        // },
        validationForm() {
            this.$refs.simpleRules.validate().then(success => {
                let hayErrores = this.validacionesExternas();
                if (hayErrores == false && success) {
                    this.$emit('formExport',this.form);
                } else {
                    this.messageSweet({
                        message: 'Faltan campos por rellenar o hay un error con el formulario, revisalo',
                        icon: 'warning',
                    });
                }
            })
        },
        resetForm() {
            this.inicializar();
        },
    },
  }
  </script>

  <style lang="scss">
    @import '~@resources/scss/vue/libs/vue-select.scss';
    @import '~@resources/scss/vue/libs/vue-flatpicker.scss';
    @import '~@resources/scss/base/core/colors/palette-variables.scss';

    @import "../../../../scss/base/bootstrap-extended/_variables.scss";
    .wizard-icon-circle.md.checked{
        border-color: $primary!important;
    }
    .form-group{
        margin-bottom:0px;
    }
    .card-body{
        padding: 0px;
    }
    .vpd-icon-btn {
        display: none!important;
    }
    .vpd-input-group {
        width: 100%!important;
    }
    div.input-group.input-group-merge {
        flex-wrap: nowrap!important;
    }
    .borderPrimary {
        margin-top: 10px!important;
        margin-bottom: 5px!important;
        border-bottom: 2px solid $primary!important;
        color: $primary!important;
        font-size: large;
    }
  </style>
