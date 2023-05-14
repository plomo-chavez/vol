<template>
    <b-navbar toggleable="lg" type="dark" class="navbar-black">
        <b-navbar-brand href="#" class="d-flez justify-content-center">
            <img src="../img/donjuan/iconotipo.png" style="height: 30px;" alt="Logo">
            <span class="txt my-auto text-inline">Hotel Donjuan</span>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="/">Inicio</b-nav-item>
                <b-nav-item href="/nosotros">Nosotros</b-nav-item>
                <b-nav-item href="/contacto">Contactanos</b-nav-item>
                <b-nav-form>
                    <a class="btn btn-secondary p-2" href="/reservar">Reservar</a>
                </b-nav-form>
            </b-navbar-nav>
    </b-collapse>
</b-navbar>
</template>
<script>
    import { BNavbar, BBadge, BNavbarBrand, BNavbarToggle, BNavbarNav, BNavItem, BCollapse, BNavForm, BFormInput, BButton, BNavItemDropdown, BDropdownItem } from 'bootstrap-vue'

    export default {
        name: 'Navbar',
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
