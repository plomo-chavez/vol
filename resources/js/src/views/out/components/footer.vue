<template>
    <!-- Footer Start -->
    <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container-md py-5">
            <div class="row g-5 col-10 mx-auto">
                <div class="col-lg-4 col-sm-12 text-rigth" >
                    <h4 class="text-white mb-3">Mapa del sitio</h4>
                    <a class="text-left btn btn-link col-12" href="/nosotros">Nosotros</a>
                    <a class="text-left btn btn-link col-12" href="/contacto">Contactanos</a>
                    <a class="text-left btn btn-link col-12" href="">Privacy Policy</a>
                    <a class="text-left btn btn-link col-12" href="">Terminos y condiciones</a>
                    <a class="text-left btn btn-link col-12" href="">FAQs & Help</a>
                    <a class="text-left btn btn-link col-12" href="/login">Acceder</a>
                </div>
                <div class="col-lg-6 col-sm-12">
                    <h4 class="text-white mb-3">Contactanos</h4>
                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i> Matamoros y Niños Héroes No. 12, Cabo San Lucas, Mexico</p>
                    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+52 624 143 7395</p>
                    <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@donjuanbymelida.com</p>
                </div>
            </div>
        </div>
        <div class="container-md">
            <div class="copyright">
                <div class="row">
                    <div class="col-10 col-md-12 mx-auto text-center mb-3">
                        &copy; <a class="border-bottom" href="#">Hotel Donjuan by Melida</a>, Todos los derechos reservados.
                        Desarrollado por <a class="border-bottom" href="">Dev Cabo</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer End -->
</template>
<script>
    import { BNavbar, BBadge, BNavbarBrand, BNavbarToggle, BNavbarNav, BNavItem, BCollapse, BNavForm, BFormInput, BButton, BNavItemDropdown, BDropdownItem } from 'bootstrap-vue'

    export default {
        name: 'Steps',
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
