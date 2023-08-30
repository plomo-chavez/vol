<template>
<b-card
    class="card-browser-states"
    :title="title"
    no-body
  >
    <b-card-body class="p-1 pb-0">
      <div class="wwfull d-flex justify-content-between">

        <div class=" d-flex align-items-end flex-wrap " >
          <h4 v-if="title != null" class="col-12 m-0 p-0">{{ title }} </h4>
          <div  v-if="config.btnNuevo || config.btnFiltrar || typeof config.btnOtros == 'array'">
              <b-button v-if="config.btnNuevo"   @click="() => { $emit('mtdNuevo') }"   >Nuevo</b-button>
              <b-button v-if="config.btnFiltrar" @click="() => { $emit('mtdFiltrar') }" >Filtrar</b-button>
              <b-dropdown v-if="typeof config.btnOtros == 'array'" right text="Otras acciones">
                <template v-for="(btnOtro, index) in config.btnOtros">
                    <b-dropdown-item v-if="typeof btnOtro.function == 'function'" :key="index" @click="btnOtro.function()">{{ btnOtro.label }}</b-dropdown-item>
                </template>
              </b-dropdown>
          </div>
        </div>
        <!-- filter -->
        <div class=" d-flex align-items-end flex-wrap " >
        <b-form-group v-if="config.buscador" >
            <b-input-group size="sm">
              <b-form-input
                id="filterInput"
                v-model="filter"
                type="search"
                placeholder="Buscar ..."
              />
              <b-input-group-append>
                <b-button
                  :disabled="!filter"
                  variant="primary"
                  @click="filter = ''"
                >
                  <feather-icon icon="TrashIcon" />
                </b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </div>
      </div>
    </b-card-body>

<!--     
  class="position" 
-->

    <b-table
      striped
      hover
      responsive
      :per-page="perPage"
      :current-page="currentPage"
      :items="data"
      :fields="fields"
      :filter="filter"
      :filter-included-fields="filterOn"
      @filtered="onFiltered"
    >
    <template v-for="(field, index, item) in fields" v-slot:[`cell(${field.key})`]="data">
        <div v-if="field.type === 'switch'">
            <feather-icon v-if="data.item[field.key]"  size="21" icon="CheckIcon" class="text-success" />
            <feather-icon v-if="!data.item[field.key]" size="21" icon="SlashIcon" class="text-danger" />
        </div>
        <div v-else-if="field.type === 'index'">
            <p class="fw-bolder">{{ data.index + 1 }}</p>
        </div>
        <div v-else-if="field.type === 'fecha'">
            <p class="fw-bolder">{{ formatoFechaYMD(data.item[field.key]) }}</p>
        </div>
        <div v-else-if="field.type === 'fechaTime'">
            <small><p class="fw-bolder">{{ formatoFechaYMD(data.item[field.key],true) }}</p></small>
        </div>
        <div v-else-if="field.type === 'object'">
            <div v-for="(item,key) in data.item[field.key] ">
                <small clas="text-sm" v-for="(value) in item">{{ capitalize(key) }}: {{ value }}</small>
            </div>
        </div>
        <div v-else-if="field.type === 'money'">
            <small>{{data.item[field.key]}}</small>
        </div>
        <div v-else-if="field.type === 'actions' && showCellActions" class="d-flex flex-wrap justify-content-center col-12">
            <div class="iconVistaUno cursor-pointer text-warning fw-bolder"   v-if="(typeof config.cellActions.btnEditar          == 'undefined' ? true : config.cellActions.btnEditar )"         @click=" emitirInfo('mdoEditar', data.item)"><feather-icon size="16" icon="EditIcon" /></div>
            <div class="iconVistaUno cursor-pointer text-danger fw-bolder"    v-if="(typeof config.cellActions.btnEliminar        == 'undefined' ? true : config.cellActions.btnEliminar )"       @click=" emitirInfo('mdoEliminar', data.item)"><feather-icon size="16" icon="Trash2Icon" /></div>
            <div class="iconVistaUno cursor-pointer text-info fw-bolder"      v-if="(typeof config.cellActions.btnView            == 'undefined' ? true : config.cellActions.btnView )"       @click=" emitirInfo('mdoView', data.item)"><feather-icon size="16" icon="EyeIcon" /></div>
            <div class="iconVistaUno cursor-pointer text-secondary fw-bolder" v-if="(typeof config.cellActions.btnChangePassword  == 'undefined' ? true : config.cellActions.btnChangePassword )" @click=" emitirInfo('mdoChangePassword', data.item)"><feather-icon size="16" icon="KeyIcon" /></div>
        </div>
        <div v-else-if="field.type === 'text'" class="d-flex flex-wrap">
            <p>{{data.item[field.key]}}</p>
        </div>
        <!-- <div v-else>
        <p>{{data.item[field.key]}}</p>
        </div> -->
    </template>
    </b-table>

    <b-card-body class="d-flex justify-content-between flex-wrap pt-0">
      <!-- PerPage Paginatio -->
      <div>
        <p>
            Mostrando {{ (currentPage - 1) * perPage + 1 }} - {{ (currentPage * perPage) > totalRows ? totalRows : (currentPage * perPage) }} de {{ totalRows }} registros.
        </p>

      </div>
      <!-- pagination -->
      <div>
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          first-number
          last-number
          prev-class="prev-item"
          next-class="next-item"
          class="mb-0"
        >
          <template #prev-text>
            <feather-icon
              icon="ChevronLeftIcon"
              size="18"
            />
          </template>
          <template #next-text>
            <feather-icon
              icon="ChevronRightIcon"
              size="18"
            />
          </template>
        </b-pagination>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
import {
    BCard,
    BTable,
    BAvatar,
    BBadge,
    BFormGroup,
    BDropdown,
    BDropdownItem,
    BDropdownDivider,
    BFormSelect,
    BPagination,
    BInputGroup,
    BFormInput,
    BInputGroupAppend,
    BButton,
    BCardBody,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import customHelpers  from '@helpers/customHelpers'
export default {
  directives: {
    Ripple,
  },
  mixins : [customHelpers],
  components: {
    BCard,
    BDropdown,
    BDropdownItem,
    BDropdownDivider,
    BTable,
    BAvatar,
    BBadge,
    BFormGroup,
    BFormSelect,
    BPagination,
    BInputGroup,
    BFormInput,
    BInputGroupAppend,
    BButton,
    BCardBody,
  },
  data() {
    return {
        perPage: 10,
        currentPage: 1,
        totalRows: 1,
        filter: null,
        filterOn: [],
        fields: [],
      /* eslint-disable global-require */

      /* eslint-disable global-require */
        status: [
            {1: 'Current', 2: 'Professional', 3: 'Rejected', 4: 'Resigned', 5: 'Applied',},
            {1: 'light-primary', 2: 'light-success', 3: 'light-danger', 4: 'light-warning', 5: 'light-info',}
        ],
    }
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => ({ text: f.label, value: f.key }))
    },
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.data.length
    let tmp = this.copyObject(this.columnas)
    if (this.showCellActions) {
      tmp.unshift({
            key     : 'actions',
            type    : 'actions',
            label   : 'Acciones',
            thClass : "text-center ww-100",
            tdClass : "text-center p-0 m-0  ww-100",
      })
    }
    if (typeof this.config.index == 'undefined' ? true : this.config.index) {
        tmp.unshift({
            key     : 'index',
            type    : 'index',
            label   : 'Index',
            thClass : "text-center ww-80",
            tdClass : "text-center p-0 m-0  ww-80",
        })
    }
    this.fields =  this.copyObject(tmp)
  },
  props: {
    data: {
      type: Array,
      default : [],
    },
    columnas: {
      type: Array,
      default : [],
    },
    title: {
      type: String,
      default : null,
    },
    showCellActions: {
      type: Boolean,
      default : true,
    },
    config: {
        type: Object,
        default: function() {
        // Retorna el valor predeterminado del prop como un nuevo objeto
            return {
                showCellActions: true,
                cellActions: {
                  btnEditar         : true,
                  btnEliminar       : true,
                  btnView           : true,
                  btnChangePassword : true,
                },
                index     : true,
                buscador  : true,
                btnNuevo  : true,
                btnFiltrar: true,
                btnOtros  : null,
            };
        }
    }
  },
  methods: {
    emitirInfo(metodo,info){
        this.$emit(metodo,info)
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
  },
}
</script>
