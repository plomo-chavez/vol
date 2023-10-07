<!DOCTYPE html>
<html lang="es-MX">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
  <title>Ficha de registro #{{$numeroInterno ?? '' }}</title>
  <link rel="stylesheet" href="./style.css" />
</head>
<body> 
<footer> @include('pdf.includes.footer', ['fechaImpresa' => $fechaImpresa]) </footer>
<main>
    <div> @include('pdf.includes.header', ['tituloDocumento' => $tituloDocumento]) </div>
    <div>  
        <table class="tbRegistro">
            <tbody>
                <tr><td colspan="60"  class="tdRed"><p><span class="textTitulo">DATOS GENERALES</span></p></td></tr>
                <!-- <tr>
                    <td colspan="20" class="tdSubtitulo"><p><span>Nombre (s):</span></p></td>
                    <td colspan="20" class="tdSubtitulo"><p><span>Apellido paterno:</span></p></td>
                    <td colspan="20" class="tdSubtitulo"><p><span style="">Apellido materno:</span></p></td>
                </tr>
                <tr>
                    <td colspan="20"><p><span>&nbsp;</span></p></td>
                    <td colspan="20"><p><span>{{$primerApellido ?? '' }}</span></p></td>
                    <td colspan="20"><p><span>{{$segundoApellido ?? '' }}</span></p></td>
                </tr> -->
                <tr>
                    <td colspan="10" class="tdSubtitulo"><p><span>Numero Interno:</span></p></td>
                    <td colspan="10" class="tdSubtitulo"><p><span>Numero de asociado:</span></p></td>
                    <td colspan="40" class="tdSubtitulo"><p><span style="">Nombre del voluntario:</span></p></td>
                </tr>
                <tr>
                    <td colspan="10"><p><span>{{$numeroInterno ?? '' }}</span></p></td>
                    <td colspan="10"><p><span>{{$numeroAsociado ?? '' }}</span></p></td>
                    <td colspan="40"><p><span>{{$nombreCompleto ?? '' }}</span></p></td>
                </tr>
                <tr>
                    <td colspan="15" class="tdSubtitulo"><p><span>CURP:</span></p></td>
                    <td colspan="10" class="tdSubtitulo"><p><span>Fecha de nacimiento:</span></p></td>
                    <td colspan="5"  class="tdSubtitulo"><p><span>Edad:</span></p></td>
                    <td colspan="15" class="tdSubtitulo"><p><span>Lugar de nacimiento:</span></p></td>
                    <td colspan="15" class="tdSubtitulo"><p><span>Nacionalidad:</span></p></td>
                </tr>
                <tr>
                    <td colspan="15"><p><span>{{$curp ?? '' }}</span></p></td>
                    <td colspan="10"><p><span>{{$fechaNacimiento ?? '' }}</span></p></td>
                    <td colspan="5" ><p><span>{{$edad ?? '' }} años</span></p></td>
                    <td colspan="15"><p><span>{{$lugarNacimiento ?? '' }}</span></p></td>
                    <td colspan="15"><p><span>{{$nacionalidad ?? '' }}</span></p></td>
                </tr>
                <tr>
                    <td colspan="10"  class="w15 tdSubtitulo"><p><span>Sexo:</span></p></td>
                    <td colspan="10" class="w15 "><p><span>{{$sexo ?? '' }}</span></p></td>
                    <td colspan="10" class="w15 tdSubtitulo"><p><span>Estado civil:</span></p></td>
                    <td colspan="10" class="w15 "><p><span>{{$estadoCivil ?? '' }}</span></p></td>
                    <td colspan="10" class="w15 tdSubtitulo"><p><span>Tipo de sangre:</span></p></td>
                    <td colspan="10" class="w15 "><p><span>{{$tipoSangre ?? '' }}</span></p></td>
                </tr>
                <tr>
                    <td colspan="20" class="tdSubtitulo"><p><span>Capacidades diferentes:</span></p></td>
                    <td colspan="20" class="tdSubtitulo"><p><span>Enfermedades:</span></p></td>
                    <td colspan="20" class="tdSubtitulo"><p><span>Alergias:</span></p></td>
                </tr>
                <tr>
                    <td colspan="20"><p><span>{{$capacidadesDiferentes ?? '' }}</span></p></td>
                    <td colspan="20"><p><span>{{$enfermedades ?? '' }}</span></p></td>
                    <td colspan="20"><p><span>{{$alergias ?? '' }}</span></p></td>
                </tr>
            </tbody>
        </table>
        <table class="tbRegistro">
            <tbody>
                <tr><td colspan="8"  class="tdRed"><p><span class="textTitulo">DATOS DE CONTACTO</span></p></td></tr>
                <tr>
                    <td class="w10 tdSubtitulo"><p><span>Dirección:</span></p></td>
                    <td class="w30 "><p><span>{{$direccion ?? '' }}</span></p></td>
                    <td class="w10 tdSubtitulo"><p><span>No. ext.:</span></p></td>
                    <td class="w10 "><p><span>{{$noExt ?? '' }}</span></p></td>
                    <td class="w10 tdSubtitulo"><p><span>No. Int.:</span></p></td>
                    <td class="w10 "><p><span>{{$noInt ?? '' }}</span></p></td>
                    <td class="w10 tdSubtitulo"><p><span>C.P.</span></p></td>
                    <td class="w10 "><p><span>{{$cp ?? '' }}</span></p></td>
                </tr>
            </tbody>
        </table>
        <table class="tbRegistro">
            <tbody>
                <tr>
                    <td class=" w10 tdSubtitulo"><p><span>Colonia:</span></p></td>
                    <td class=" w30 "><p><span>{{$colonia ?? '' }}</span></p></td>
                    <td class=" w20 tdSubtitulo"><p><span>Ciudad:</span></p></td>
                    <td class="  "><p><span>{{$ciudad ?? '' }}</span></p></td>
                </tr>
                <tr>
                    <td class="tdSubtitulo"><p><span>Estado:</span></p></td>
                    <td class="  "><p><span>{{$estado ?? '' }}</span></p></td>
                    <td class="tdSubtitulo"><p><span>Correo electrónico:</span></p></td>
                    <td class="  "><p><span>{{$correo ?? '' }}</span></p></td>
                </tr>
            </tbody>
        </table>
        <table class="tbRegistro">
            <tbody>
                <tr>
                    <td class="w10 tdSubtitulo"><p><span>Tel. part:</span></p></td>
                    <td ><p><span>{{$telPart ?? '' }}</span></p></td>
                    <td  class="w10 tdSubtitulo"><p><span>Tel. trab:</span></p></td>
                    <td ><p><span>{{$telTrab ?? '' }}</span></p></td>
                    <td class="w10 tdSubtitulo"><p><span>Cel.:</span></p></td>
                    <td ><p><span>{{$cel ?? '' }}</span></p></td>
                </tr>
            </tbody>
        </table>
        <table class="tbRegistro">
            <tbody>
                <tr><td colspan="2"  class="tdRed"><p><span class="textTitulo">DATOS PROFESIONALES</span></p></td></tr>
                <tr>
                    <td   class=" w50 tdSubtitulo"><p><span>Grado de estudios:</span></p></td>
                    <td   class=" w50 tdSubtitulo"><p><span>Profesión:</span></p></td>
                </tr>
                <tr>
                    <td ><p><span>{{$gradoEstudios ?? '' }}</span></p></td>
                    <td ><p><span>{{$profesion ?? '' }}</span></p></td>
                </tr>
                <tr>
                    <td   class="tdSubtitulo"><p><span>Ocupación actual:</span></p></td>
                    <td   class="tdSubtitulo"><p><span>Empresa o institución en donde labora:</span></p></td>
                </tr>
                <tr>
                    <td ><p><span>{{$ocupacionActual ?? '' }}</span></p></td>
                    <td ><p><span>{{$empresaInstitucion ?? '' }}</span></p></td>
                </tr>
            </tbody>
        </table>
        <table class="tbRegistro">
            <tbody>
                <tr>
                    <td class="tdSubtitulo"><p><span>Idioma extranjero:</span></p></td>
                    <td class="w20"><p><span>{{$idioma1 ?? '' }}</span></p></td>
                    <td class="w10 tdSubtitulo"><p><span>Nivel %:</span></p></td>
                    <td class="w8"><p><span>{{$nivelIdioma1 ?? '' }}</span></p></td>
                    <td class="w10 tdSubtitulo"><p><span>Pasaporte:</span></p></td>
                    <td class=""><p><span>{{$pasaporte ?? '' }}</span></p></td>
                    <td class="w5 tdSubtitulo"><p><span>Vence:</span></p></td>
                    <td class=" "><p><span>{{$pasaporteVence ?? '' }}</span></p></td>
                </tr>
                <tr>
                    <td class=" tdSubtitulo"><p><span>Idioma extranjero:</span></p></td>
                    <td class=" "><p><span>{{$idioma2 ?? '' }}</span></p></td>
                    <td class=" tdSubtitulo"><p><span>Nivel %:</span></p></td>
                    <td class=" "><p><span>{{$nivelIdioma2 ?? '' }}</span></p></td>
                    <td class=" tdSubtitulo"><p><span>Visa:</span></p></td>
                    <td class=" "><p><span>{{$visa ?? '' }}</span></p></td>
                    <td class=" tdSubtitulo"><p><span>Vence:</span></p></td>
                    <td class=""><p><span>{{$visaVence ?? '' }}</span></p></td>
                </tr>
            </tbody>
        </table>
        <table class="tbRegistro">
            <tbody>
                <tr>
                    <td colspan="30"  class="w50 tdSubtitulo"><p><span>&iquest;Cómo te enteraste de Cruz Roja y su Voluntariado?:</span></p></td>
                    <td colspan="30"  class="w50 tdSubtitulo"><p><span>¿Por qué te interesa ser voluntario en Cruz Roja?:</span></p></td>
                </tr>
                <tr>
                    <td colspan="5"  class="tdSubtitulo"><p><span>Radio</span></p></td>
                    <td colspan="5"  class="tdSubtitulo"><p><span>TV</span></p></td>
                    <td colspan="5"  class="tdSubtitulo"><p><span>Internet</span></p></td>
                    <td colspan="5"  class="tdSubtitulo"><p><span>Colecta</span></p></td>
                    <td colspan="5"  class="tdSubtitulo"><p><span>Voluntarios</span></p></td>
                    <td colspan="5"  class="tdSubtitulo"><p><span>Otros</span></p></td>
                    <td colspan="30" rowspan="2"><p><span>{{$interesVoluntario ?? '' }}</span></p></td>
                </tr>
                <tr>

                    <td colspan="5"><p><span>{{ optional(collect(json_decode($medios, true)))->pluck('label')->contains('Radio') ? 'X' : ' ' }}</span></p></td>
                    <td colspan="5"><p><span>{{ optional(collect(json_decode($medios, true)))->pluck('label')->contains('TV') ? 'X' : ' ' }}</span></p></td>
                    <td colspan="5"><p><span>{{ optional(collect(json_decode($medios, true)))->pluck('label')->contains('Internet') ? 'X' : ' ' }}</span></p></td>
                    <td colspan="5"><p><span>{{ optional(collect(json_decode($medios, true)))->pluck('label')->contains('Colecta') ? 'X' : ' ' }}</span></p></td>
                    <td colspan="5"><p><span>{{ optional(collect(json_decode($medios, true)))->pluck('label')->contains('Voluntarios') ? 'X' : ' ' }}</span></p></td>
                    <td colspan="5"><p><span>{{ optional(collect(json_decode($medios, true)))->pluck('label')->contains('Otros') ? 'X' : ' ' }}</span></p></td>
                </tr>
                <tr>
                    <td colspan="30"  class="tdSubtitulo"><p><span>Qu&eacute; espera recibir de la Cruz Roja:</span></p></td>
                    <td colspan="30"  class="tdSubtitulo"><p><span>Qué crees poder aportar a la Cruz Roja:</span></p></td>
                </tr>
                <tr>
                    <td colspan="30"><p><span>{{$recibirCR ?? '' }}</span></p></td>
                    <td colspan="30"><p><span>{{$aportarCR ?? '' }}</span></p></td>
                </tr>
            </tbody>
        </table>
        <table class="tbRegistro">
            <tbody>
                <tr>
                    <td   class="w50 tdSubtitulo"><p><span>¿Alguna vez has sido voluntario de alguna institución?:</span></p></td>
                    <td class="w10 tdSubtitulo"><p><span>¿Cual?:</span></p></td>
                    <td class="w30"><p><span>{{$cualInstitucion ?? '' }}</span></p></td>
                </tr>
            </tbody>
        </table>
        <table class="tbRegistro">
            <tbody>
                <tr>
                    <td colspan="36"  class=" w60 tdRed"><p><span class="textTitulo">DISPONIBILIDAD</span></p></td>
                    <td colspan="24"  class=" w40 tdRed"><p><span class="textTitulo">CONTACTO EN CASO DE EMERGENCIA</span></p></td>
                </tr>
                <tr>
                    <td colspan="21" class=" w21 tdSubtitulo"><p><span>D&iacute;as</span></p></td>
                    <td colspan="15" class=" w33 tdSubtitulo"><p><span>Turno</span></p></td>
                    <td colspan="2"  class=" w10 tdSubtitulo"><p><span>Nombre:</span></p></td>
                    <td colspan="22" class=" w30 "><p><span>{{$contactoNombre ?? '' }}</span></p></td>
                </tr>
                <tr>
                    <td colspan="3"  class="tdSubtitulo"><p><span>L</span></p></td>
                    <td colspan="3"  class="tdSubtitulo"><p><span>M</span></p></td>
                    <td colspan="3"  class="tdSubtitulo"><p><span>M</span></p></td>
                    <td colspan="3"  class="tdSubtitulo"><p><span>J</span></p></td>
                    <td colspan="3"  class="tdSubtitulo"><p><span>V</span></p></td>
                    <td colspan="3"  class="tdSubtitulo"><p><span>S</span></p></td>
                    <td colspan="3"  class="tdSubtitulo"><p><span>D</span></p></td>
                    <td colspan="5"  class="tdSubtitulo"><p><span>Mat.</span></p></td>
                    <td colspan="5"  class="tdSubtitulo"><p><span>Vesp.</span></p></td>
                    <td colspan="5"  class="tdSubtitulo"><p><span>Discont.</span></p></td>
                    <td colspan="2"  class="tdSubtitulo"><p><span>Tel. part:</span></p></td>
                    <td colspan="22"><p><span>{{$contactoTelefono ?? '' }}</span></p></td>
                </tr>
                <tr>
                    <td colspan="3"><p><span>{{ optional(collect(json_decode($disponibilidadDias, true)))->pluck('label')->contains('Lunes') ? 'X' : ' ' }}</span></p></td>
                    <td colspan="3"><p><span>{{ optional(collect(json_decode($disponibilidadDias, true)))->pluck('label')->contains('Martes') ? 'X' : ' ' }}</span></p></td>
                    <td colspan="3"><p><span>{{ optional(collect(json_decode($disponibilidadDias, true)))->pluck('label')->contains('Miercoles') ? 'X' : ' ' }}</span></p></td>
                    <td colspan="3"><p><span>{{ optional(collect(json_decode($disponibilidadDias, true)))->pluck('label')->contains('Jueves') ? 'X' : ' ' }}</span></p></td>
                    <td colspan="3"><p><span>{{ optional(collect(json_decode($disponibilidadDias, true)))->pluck('label')->contains('Viernes') ? 'X' : ' ' }}</span></p></td>
                    <td colspan="3"><p><span>{{ optional(collect(json_decode($disponibilidadDias, true)))->pluck('label')->contains('Sabado') ? 'X' : ' ' }}</span></p></td>
                    <td colspan="3"><p><span>{{ optional(collect(json_decode($disponibilidadDias, true)))->pluck('label')->contains('Domingo') ? 'X' : ' ' }}</span></p></td>
                    <td colspan="5"><p><span>{{ optional(collect(json_decode($disponibilidadTurnos, true)))->pluck('label')->contains('Matutino') ? 'X' : ' ' }}</span></p></td>
                    <td colspan="5"><p><span>{{ optional(collect(json_decode($disponibilidadTurnos, true)))->pluck('label')->contains('Vespertino') ? 'X' : ' ' }}</span></p></td>
                    <td colspan="5"><p><span>{{ optional(collect(json_decode($disponibilidadTurnos, true)))->pluck('label')->contains('Discontinuo') ? 'X' : ' ' }}</span></p></td>
                    <td colspan="2"  class="tdSubtitulo"><p><span>Cel:</span></p></td>
                    <td colspan="22"><p><span>{{$contactoCelular ?? '' }}</span></p></td>
                </tr>
                <tr>
                    <td colspan="15"  class="tdSubtitulo"><p><span>Horario de:</span></p></td>
                    <td colspan="11"><p><span>{{$disponibilidadHorarioInicio ?? '' }}</span></p></td>
                    <td colspan="5"  class="tdSubtitulo"><p><span>a:</span></p></td>
                    <td colspan="5"><p><span>{{$disponibilidadHorarioFin ?? '' }}</span></p></td>
                    <td colspan="2"  class="tdSubtitulo"><p><span>Parentesco:</span></p></td>
                    <td colspan="22"><p><span>{{$contactoParentesco ?? '' }}</span></p></td>
                </tr>
            </tbody>
        </table>
        <table class="tbRegistro">
            <tbody>
                <tr>
                    <td colspan="4"  class="tdRed">
                        <p><span class="textTitulo">ESPACIO EXCLUSIVO DEL ÁREA DE VOLUNTARIADO (NO LLENAR):</span></p>
                    </td>
                </tr>
                <tr>
                    <td  class=" w25 tdSubtitulo"><p><span>Recibido y atendido por:</span></p></td>
                    <td class=" w25 "><p><span>&nbsp;</span></p></td>
                    <td  class="w25 tdSubtitulo"><p><span>Fecha de entrevista - orientación:</span></p></td>
                    <td class=" w25 "><p><span>&nbsp;</span></p></td>
                </tr>
                <tr>

                    <td  class="tdSubtitulo"><p><span>Area actual:</span></p></td>
                    <td><p><span>{{$area ?? ''}}</span></p></td>
                    <td  class="tdSubtitulo"><p><span>Fecha incorporación a Cruz Roja:</span></p></td>
                    <td><p><span>{{$fechaIngresoArea ?? ''}}</span></p></td>
                </tr>
                <tr><td colspan="4"  class="tdSubtitulo"><p><span>Observaciones:</span></p></td></tr>
                <tr><td colspan="4" class="h50" ><p><span>{{$comentarios ?? ''}}</span></p></td></tr>
                <!-- <tr><td colspan="4" class="ht"><p><span>&nbsp;</span></p></td></tr> -->
                <tr><td colspan="4"  class="tdSubtitulo"><p><span>Certifico que la información y datos proporcionados anteriores son verdaderos y doy mi consentimiento a Cruz Roja Mexicana para que los  archive en sus expedientes.</span></p></td></tr>
            </tbody>
        </table>
        <table class="tbRegistro">
            <tbody>
                <tr>
                    <td class=" w33 alignVM tdSubtitulo"><p><span>Fecha de llenado:</span></p></td>
                    <td class=" w25 alignVM tdSubtitulo"><p><span>Nombre y firma del aspirante.</span></p></td>
                    <td class=" w25 alignVM tdSubtitulo"><p><span>Código QR.</span></p></td> 
                </tr>
                <tr>
                    <td class=" w25 alignVM " ><p><span>&nbsp;</span></p></td>
                    <td class=" w33 alignVB" rowspan="3"><p><span>{{$nombreCompleto ?? '' }}</span></p></td>
                    <td class=" w33 "        rowspan="3"><img src="{{$qrCode ?? '' }}" alt="Imagen" style="height: 70px;"></td>
                </tr>
                <tr><td class=" w25 alignVM h10 tdSubtitulo" ><p><span>Recepción del formato:</span></p></td></tr>
                <tr>
                    <td class=" w25 alignVM " ><p><span>&nbsp;</span></p></td>
                </tr>
            </tbody>
        </table>
        <p style="margin-bottom:0pt; text-align:center; line-height:115%; font-size:8pt;"><span style="font-family:'Arial Narrow';">Cruz Roja Mexicana - Área de Voluntariado / Ciclo de Gestión: Formato 002</span></p>
    </div>
</main>
</body>
</html>