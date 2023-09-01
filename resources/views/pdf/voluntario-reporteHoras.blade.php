<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="./style.css" />
  <title>Reporte de horas voluntarias</title>
</head>
<body> 
<footer> @include('pdf.includes.footer', ['fechaImpresa' => $fechaImpresa]) </footer>
<main>
  <table class="tableTitulo">
    <tbody>
      <tr>
        <td>
          <p>
          </p>
        </td>
        <td class="celda90">
          <h4 class="tituloFormato" width="100%" style="">Gestión del Voluntariado</h4>
          <h3 class="tituloFormato text-primary">REPORTE DE HORAS VOLUNTARIAS</h3>
        </td>
      </tr>
    </tbody>
  </table>
  <table class="table mb-2">
    <tbody>
      <tr class="titulo">
        <td colspan="6"><H3 class="mp-0">DATOS GENERALES</H3></td>
      </tr>
      <tr class="subtitulo">
        <td>Numero interno</td>
        <td>Numero asociado</td>
        <td>Voluntario</td>
        <td>Mes</td>
        <td>Año</td>
        <td>Tiempo</td>
      </tr>
      <tr class="">
        <td class="w-30 textCenter " >{{$numeroInterno}}</td>
        <td class="w-30 textCenter " >{{$numeroAsociado}}</td>
        <td class="w-120">{{$voluntario}}</td>
        <td class="w-40 textCenter " >{{$mesLabel}}</td>
        <td class="w-40 textCenter " >{{$anio}}</td>
        <td class="w-110 textCenter ft-10">{{$tiempoLabel}}</td>
      </tr>
    </tbody>
  </table>
  <table class="table">
    <tbody>
      <tr class="titulo">
        <td colspan="7"><H3 class="mp-0">HORAS VOLUNTARIAS</H3></td>
      </tr>
      <tr class="subtitulo ft-8">
        <td class="w-20" >Index</td>
        <td class="w-100">Área</td>
        <td class="w-100">Actividad</td>
        <td class="w-120">Tiempo</td>
        <td class="w-fecha" >Hora inicio</td>
        <td class="w-fecha" >Hora fin</td>
        <td class="w-fecha" >Fecha Registro</td>
      </tr>
      @if(count($horasVoluntarias) > 0)
        @foreach($horasVoluntarias as $hora)
          <tr class="ft-8">
            <td class="textCenter">{{$hora['index']}}</td>
            <td>{{$hora['area']}}</td>
            <td>{{$hora['actividad']}}</td>
            <td>{{$hora['tiempo']}}</td>
            <td>{{$hora['horaInicio']}}</td>
            <td>{{$hora['horaFin']}}</td>
            <td>{{$hora['fechaRegistro']}}</td>
          </tr>
        @endforeach
      @else
        <tr>
          <td colspan="7">No se encontraron registros de horas voluntarias.</td>
        </tr>
      @endif
    </tbody>
  </table>
</main>
</body>
</html>