<template>
<div class="bg-image">
    <div class="bg-opacity">
        <h1 class="fw-bolder display-2 text-white txtTitle">¿Qué esperas?</h1>
        <p>Reserva con nosotros dando click en el siguiente enlace</p>
        <a class="btn btn-secondary p-2" href="/reservar">Ver disponibilidad</a>
    </div>
</div>
</template>
<script>
    import { BNavbar, BBadge, BNavbarBrand, BNavbarToggle, BNavbarNav, BNavItem, BCollapse, BNavForm, BFormInput, BButton, BNavItemDropdown, BDropdownItem } from 'bootstrap-vue'

    export default {
        name: 'Jumbo',
        components: {
            BButton,
            BNavbar,
            BNavbarBrand,
            BNavbarToggle,
            BNavbarNav,
            BNavItem,
            BCollapse,
            BNavForm,
            BFormInput,
            BButton,
            BNavItemDropdown,
            BDropdownItem
        },
    }
</script>
