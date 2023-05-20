<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <!-- <link rel="icon" href="<%= BASE_URL %>favicon.ico"> -->

  <title>Voluntariado de Guerrero -  Cruz Roja Mexicana</title>
    <!-- <link rel="apple-touch-icon" sizes="180x180" href="{{ asset(mix('js/app.js')) }}/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset(mix('js/app.js')) }}/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset(mix('js/app.js')) }}/favicon-16x16.png">
    <link rel="manifest" href="{{ asset(mix('js/app.js')) }}/site.webmanifest">
    <link rel="mask-icon" href="{{ asset(mix('js/app.js')) }}/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff"> -->
  <!-- Splash Screen/Loader Styles -->
  <link rel="stylesheet" type="text/css" href="{{ asset(mix('css/loader.css')) }}" />

  <!-- Styles -->
  <link rel="stylesheet" href="{{ asset(mix('css/core.css')) }}">

  <!-- Favicon -->
  <link rel="shortcut icon" href="{{ asset('logo.png') }}">

  <!-- Font -->
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"
    rel="stylesheet">
</head>

<body>
  <noscript>
    <strong>Lo sentimos, si puede ver esta pantalla comuniquese con su proveedor a este correo: info@donjuanbymelida.com

.</strong>
  </noscript>
  <div id="loading-bg">
    <div class="loading-logo">
      <img src="{{ asset('Plan Corto.png') }}" alt="Logo" />
    </div>
    <div class="loading">
      <div class="effect-1 effects"></div>
      <div class="effect-2 effects"></div>
      <div class="effect-3 effects"></div>
    </div>
    <div class="loading-back"></div>
  </div>
  <div id="app">
  </div>

  <script src="{{ asset(mix('js/app.js')) }}"></script>

</body>

</html>
