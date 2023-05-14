<template>
    <div class="container-xxl py-5">
        <div class="container-md">
            <div class="row g-5">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style="min-height: 400px;">
                    <div class="position-relative h-100">
                        <img class="img-fluid position-absolute w-100 h-100" src="../img/about.jpg" alt="" style="object-fit: cover;">
                    </div>
                </div>
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <h6 class="section-title bg-white text-start text-primary pe-3">About Us</h6>
                    <h1 class="mb-4">Bienvenido a Hotel Donjuan</h1>
                    <p class="mb-4">Este hotel se encuentra a 400 metros del puerto deportivo de Cabo San Lucas, en el estado de Baja California Sur. Tiene recepción 24 horas, WiFi gratuita en el vestíbulo, terraza y se halla a 1 km de la playa Medano.</p>
                    <p class="mb-4">Todas las habitaciones del Hotel Melida presentan una decoración funcional y cuentan con aire acondicionado, TV por cable y baño privado con artículos de aseo gratuitos. Las suites también tienen una zona de patio.</p>
                    <p class="mb-4">El hotel dispone de una máquina expendedora de bebidas y se encuentra a 5 minutos a pie de varios bares y restaurantes. El bulevar Lázaro Cárdenas está a 300 metros y el centro comercial Puerto Paraíso, a 5 minutos a pie.</p>
                    <a class="btn btn-primary py-3 px-5 mt-2" href="">Leer más</a>
                </div>
            </div>
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
