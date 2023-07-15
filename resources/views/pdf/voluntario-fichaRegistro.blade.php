<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Reservación # {{ $folio }}</title>

<style type="text/css">
    * {
        font-family: Verdana, Arial, sans-serif;
    }
    table{
        font-size: x-small;
    }
    tfoot tr td{
        font-weight: bold;
        font-size: x-small;
    }
    tr td{
      height: 15px!important;
    }
    td{
      width: 33.3333%!important;
    }
    tdFull{
      width: 100%!important;
    }
    .gray {
        background-color: lightgray
    }
    .trHead {
        background-color: #c2c2c2!important;
        text-align:center!important;
    }
    .imgResponsivo {
      max-width: 100%;
      height: auto;
    }
    .textJustify {
        text-align:justify!important;
    }
    .textCenter {
        text-align:center!important;
    }
</style>

</head>
<body>
  <table width="100%">
    <tbody>
      <tr>
        <td>
          <p>
            <img 
              class="imgResponsivo" 
              style="width: 100px!important;"
              src="./images/_/_/_/_/donjuan/resources/js/src/assets/images/logo/logoCompleto.png" 
              alt="" 
            />
          </p>
        </td>
        <td width="60%">
          <h4 class="text-center" width="100%" style=" margin-bottom:0px!important; text-align: right;">TARJETA DE REGISTRO / REGISTRATION CARD</h4>
          <h4 class="text-center" width="100%" style=" margin:0px!important; text-align: right;">Folio: {{$folio}}</h4>
          <h4 class="text-center" width="100%" style=" margin:0px!important; text-align: right;">Fecha: {{$fechaRegistro}}</h4>
        </td>
      </tr>
    </tbody>
  </table>
  <table border="1" style="border-collapse: collapse; width: 100%;">
    <tbody>
      <tr class="trHead">
        <td style="" colspan="3"><strong>NOMBRE COMPLETO / FULL NAME</strong></td>
      </tr>
      <tr class="">
        <td  class="textCenter" colspan="3">{{ $reserva['nombre'] }} {{ $reserva['primerApellido'] }} {{ $reserva['segundoApellido'] }}</td>
      </tr>
      <tr class="trHead">
        <td style=" "><strong>LLEGADA / ARRIVAL</strong></td>
        <td style=" "><strong>SALIDA / DEPARTURE</strong></td>
        <td style=" "><strong> NOCHES/NIGHTS </strong></td>
      </tr>
      <tr class="">
        <td  class="textCenter">{{ $fechaInicio }}</td>
        <td  class="textCenter">{{ $fechaFin }}</td>
        <td  class="textCenter">{{ $noches }}</td>
      </tr>
      <tr class="trHead">
        <td  class="textCenter"><strong>TEL / PHONE NUMBER</strong></td>
        <td  class="textCenter"><strong>CORREO ELECTRONICO / EMAIL</strong></td>
        <td  class="textCenter"><strong>MOTIVO DE VIAJE / PURPOSE OF TRIP</strong></td>
      </tr>
      <tr class="">
        <td  class="textCenter">{{ $reserva['telefono'] }}</td>
        <td  class="textCenter">{{ $reserva['correo'] }}</td>
        <td  class="textCenter">Falta</td>
      </tr>
      <tr class="trHead">
        <td style="" colspan="3"><strong>DIRECCI&Oacute;N / ADDRESS</strong></td>
      </tr>
      <tr class="">
        <td style="" colspan="3">Falta</td>
      </tr>
    </tbody>
  </table>
  <table border="1" style="border-collapse: collapse; width: 100%;">
    <tbody>
      <tr class="trHead">
        <td style=""><strong>CIUDAD / CITY</strong></td>
        <td style=""><strong>PAIS / COUNTRY</strong></td>
        <td style=""><strong>NACIONALIDAD / NACIONALITY</strong></td>
      </tr>
      <tr class="">
        <td style=""></td>
        <td style=""></td>
        <td style=""></td>
      </tr>
    </tbody>
  </table>
  <table border="1" style="border-collapse: collapse; width: 100%;">
    <tbody>
      <tr class="trHead">
        <td style=""><strong> ACOMPA&Ntilde;ANTES / ROOMATES </strong></td>
      </tr>
      @if ($acompaniantes)
        @foreach ($acompaniantes as $item)
          <tr class="">
            <td>Con acompañantes</td>
          </tr>
        @endforeach
      @else
        <tr class="">
          <td class="textCenter" >Sin acompañantes</td>
        </tr>
      @endif
    </tbody>
  </table>
  <table border="1" style="border-collapse: collapse; width: 100%;">
    <tbody>
      <tr class="trHead">
        <td style="" colspan="3"><strong> HABITACIONES / ROOMS </strong></td>
      </tr>
      <tr class="trHead">
        <td style="width:50%!important;"><strong>HABITACI&Oacute;N</strong></td>
        <td style="width:25%!important;"><strong>TARIFA</strong></td>
        <td style="width:25%!important;"><strong>TOTAL</strong></td>
      </tr>
      @if ($habitaciones)
        @foreach ($habitaciones as $item)
          <tr class="">
            <td style="">{{$item['nombre']}}</td>
            <td class="textCenter">$ {{$item['tarifa']}}</td>
            <td class="textCenter">$ {{$item['total']}}</td>
          </tr>
        @endforeach
      @else
      <tr class="">
        <td class="textCenter" colspan="3">No se registraron habitaciones</td>
      </tr>
      @endif
      <tr class="">
        <td colspan="2"class="trHead"><strong>SUBTOTAL</strong></td>
        <td class="textCenter"><strong>$ {{$totalMoney}}</strong></td>
      </tr>
    </tbody>
  </table>
  <table  border="0" style="width: 100%;">
  <tbody>
    <tr class="tdFull">
      <td class="textJustify tdFull" style="" colspan="3">
        <p>
          He convenido con el hotel que el precio de hospedaje señalado en el recuadro respectivo, no quedando comprendido en este, precio de alimentos ni otros gastos originados. El hotel no se hace responsable por objetos olvidados en las habitaciones y para prevenir cualquier situación me ha sido recomendado el uso de caja de seguridad. Se dispone de estacionamiento. El hotel no se hace responsable por daños causados al vehículo ni por objetos olvidados en su interior. La tarifa diaria está sujeta a un 16% de impuesto Federal y un cargo local del 3% por concepto del impuesto al hospedaje. Por favor ver al reverso.
          <br>
          <br>
          I have agreed with the Hotel to the daily rate specified in the corresponding space and which does not include food and miscellaneous expenses. The Hotel is not responsible for valuables left in the rooms and I have received advice to use the safety deposit boxes. Parking space is available. The Hotel is not responsible for any damages or objects left in your vehicle. Daily rates are subject to 16% State Tax and local charge of 3% corresponding to hospitality tax. Please read the reverse side.
        </p>
      </td>
    </tr>
    <tr class="textCenter" >
      <td style="" colspan="3"><strong> Firma de quien reserva </strong></td>
    </tr>
    <tr class="">
      <td style=""></td>
      <td style="border-bottom: 1px solid black;"></td>
      <td style=""></td>
    </tr>
    <tr class="">
      <td style=""></td>
      <td class="textCenter">{{ $reserva['nombre'] }} {{ $reserva['primerApellido'] }} {{ $reserva['segundoApellido'] }}</td>
      <td style=""></td>
    </tr>
  </tbody>
</table>
</body>
</html>
