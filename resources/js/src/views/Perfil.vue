<template>
    <b-card class="ww-300 pp-custom">
        <div>
          <div class="wwfull">
        <!-- User avatar -->
            <div class="wwfull mb-2 text-center">
                <b-avatar
                    size="60"
                    :src="userData.avatar"
                    variant="light-primary"
                    badge
                    class="mx-auto badge-minimal"
                    badge-variant="success"
                />
            </div>
            <div class="d-flex flex-column">
                <div class="mb-1">
                    <h4 class=" wwfull text-center font-weight-bolder mb-1">{{ userData.usuario }}</h4>
                    <p class=" wwfull text-small text-center mb-0">{{ userData.email }}</p>
                    <p class=" wwfull text-small text-center mb-0">{{ userData.tipoUsuario }}</p>
                </div>
            </div>
        <!-- User Stats -->
            <div class="d-flex align-items-center mb-2">
                <div class="d-flex align-items-center mr-2">
                    <b-avatar variant="light-primary" rounded > <feather-icon icon="ClockIcon" size="18" /> </b-avatar>
                    <div class="ml-1">
                        <h5 class="mb-0">23 k </h5>
                        <small>Horas mensuales</small>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-column">
              <div class="d-flex flex-wrap justify-content-center">
                <b-button :to="{ name: 'apps-users-edit', params: { id: userData.id } }" variant="primary" class="mm-1"> Cambio de contraseña </b-button>
                <b-button :to="{ name: 'apps-users-edit', params: { id: userData.id } }" variant="primary" class="mm-1"> Detalles de voluntario </b-button>
                <b-button variant="outline-danger" class=" mm-1" > Cerrar sesión </b-button>
              </div>
            </div>
        <!-- Right Col: Table -->
            <!-- <b-col
                cols="12"
                xl="6"
            >
                <table class="mt-2 mt-xl-0 w-100">
                <tr>
                    <th class="pb-50">
                    <feather-icon
                        icon="UserIcon"
                        class="mr-75"
                    />
                    <span class="font-weight-bold">Username</span>
                    </th>
                    <td class="pb-50">
                    {{ userData.username }}
                    </td>
                </tr>
                <tr>
                    <th class="pb-50">
                    <feather-icon
                        icon="CheckIcon"
                        class="mr-75"
                    />
                    <span class="font-weight-bold">Status</span>
                    </th>
                    <td class="pb-50 text-capitalize">
                    {{ userData.status }}
                    </td>
                </tr>
                <tr>
                    <th class="pb-50">
                    <feather-icon
                        icon="StarIcon"
                        class="mr-75"
                    />
                    <span class="font-weight-bold">Role</span>
                    </th>
                    <td class="pb-50 text-capitalize">
                    {{ userData.role }}
                    </td>
                </tr>
                <tr>
                    <th class="pb-50">
                    <feather-icon
                        icon="FlagIcon"
                        class="mr-75"
                    />
                    <span class="font-weight-bold">Country</span>
                    </th>
                    <td class="pb-50">
                    {{ userData.country }}
                    </td>
                </tr>
                <tr>
                    <th>
                    <feather-icon
                        icon="PhoneIcon"
                        class="mr-75"
                    />
                    <span class="font-weight-bold">Contact</span>
                    </th>
                    <td>
                    {{ userData.contact }}
                    </td>
                </tr>
                </table>
            </b-col> -->
          </div>
        </div>
    </b-card>
  </template>
  
  <script>
  import {
    BCard, BButton, BAvatar, BRow, BCol,
  } from 'bootstrap-vue'
  import { avatarText } from '@core/utils/filter'
  import useUsersList from './useUsersList'
  
  export default {
    components: {
      BCard, BButton, BRow, BCol, BAvatar,
    },
    data() {
        return {
        userData: JSON.parse(localStorage.getItem('userData')),
        avatarText,
        }
    },
  }
  </script>
  
  <style>
  
  </style>
  