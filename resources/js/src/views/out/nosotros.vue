<template>
    <div>
        <LinkCSS />
        <Navbar />
        <Jumbo />
        <About />

        <!-- Team Start -->
        <div class="container-xxl py-5">
            <div class="container-md">
                <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 class="section-title bg-white text-center text-primary px-3">Travel Guide</h6>
                    <h1 class="mb-5">Meet Our Guide</h1>
                </div>
                <div class="row g-4">
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="team-item">
                            <div class="overflow-hidden">
                                <img class="img-fluid" src="./img/team-1.jpg" alt="">
                            </div>
                            <div class="position-relative d-flex justify-content-center" style="margin-top: -19px;">
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                            <div class="text-center p-4">
                                <h5 class="mb-0">Full Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="team-item">
                            <div class="overflow-hidden">
                                <img class="img-fluid" src="./img/team-2.jpg" alt="">
                            </div>
                            <div class="position-relative d-flex justify-content-center" style="margin-top: -19px;">
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                            <div class="text-center p-4">
                                <h5 class="mb-0">Full Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="team-item">
                            <div class="overflow-hidden">
                                <img class="img-fluid" src="./img/team-3.jpg" alt="">
                            </div>
                            <div class="position-relative d-flex justify-content-center" style="margin-top: -19px;">
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                            <div class="text-center p-4">
                                <h5 class="mb-0">Full Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div class="team-item">
                            <div class="overflow-hidden">
                                <img class="img-fluid" src="./img/team-4.jpg" alt="">
                            </div>
                            <div class="position-relative d-flex justify-content-center" style="margin-top: -19px;">
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                            <div class="text-center p-4">
                                <h5 class="mb-0">Full Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Team End -->
        <Pie />
    </div>

  </template>
    <script>
    import LinkCSS from './components/linksCSS.vue'
    import Navbar from './components/navbar.vue'
    import Jumbo from './components/jumbo.vue'
    import About from './components/about.vue'
    import Services from './components/services.vue'
    import Habitaciones from './components/habitaciones.vue'
    import Booking from './components/booking.vue'
    import Steps from './components/steps.vue'
    import Pie from './components/footer.vue'
    import { BNavbar, BBadge, BNavbarBrand, BNavbarToggle, BNavbarNav, BNavItem, BCollapse, BNavForm, BFormInput, BButton, BNavItemDropdown, BDropdownItem } from 'bootstrap-vue'
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import './lib/animate/animate.min.css';
    import './lib/owlcarousel/assets/owl.carousel.min.css';
    import './css/myStyle.css';

        export default {
            name: 'Inicio',
            components: {
                Navbar,
                LinkCSS,
                Jumbo,
                About,
                Services,
                Habitaciones,
                Booking,
                Steps,
                Pie,
            },
            mounted() {
                const jqueryScript = document.createElement('script');
                jqueryScript.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
                document.body.appendChild(jqueryScript);

                const bootstrapScript = document.createElement('script');
                bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js';
                document.body.appendChild(bootstrapScript);

                // const icons = document.createElement('script');
                // icons.src = 'https://use.fontawesome.com/37d27d8488.js';
                // document.body.appendChild(icons);

                const wowScript = document.createElement('script');
                wowScript.src = 'lib/wow/wow.min.js';
                document.body.appendChild(wowScript);

                const easingScript = document.createElement('script');
                easingScript.src = 'lib/easing/easing.min.js';
                document.body.appendChild(easingScript);

                const waypointsScript = document.createElement('script');
                waypointsScript.src = 'lib/waypoints/waypoints.min.js';
                document.body.appendChild(waypointsScript);

                const owlcarouselScript = document.createElement('script');
                owlcarouselScript.src = 'lib/owlcarousel/owl.carousel.min.js';
                document.body.appendChild(owlcarouselScript);

                const momentScript = document.createElement('script');
                momentScript.src = 'lib/tempusdominus/js/moment.min.js';
                document.body.appendChild(momentScript);

                const momenttimezoneScript = document.createElement('script');
                momenttimezoneScript.src = 'lib/tempusdominus/js/moment-timezone.min.js';
                document.body.appendChild(momenttimezoneScript);

                const tempusdominusScript = document.createElement('script');
                tempusdominusScript.src = 'lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js';
                document.body.appendChild(tempusdominusScript);
            }
        }
    </script>


  <style>


  </style>
