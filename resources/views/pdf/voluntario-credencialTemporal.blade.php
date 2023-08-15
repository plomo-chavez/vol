<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Credencial Temporal #{{$numeroAsociado}}</title>
</head>
<body> 
<footer> @include('pdf.includes.footer', ['fechaImpresa' => $fechaImpresa]) </footer>
<main>
    <div class="contenedorCard">
        <div class="columnaL">
            <div class="card">
                <div class="wwfull p2">
                    <div class="wwfull texto-center mp0 mt-1">
                    <img style="width: 170px; height: 30px; " src="{{$imgCR}}" />
                    </div>
                    <div class="wwfull texto-black mp0">
                        <p class="titulo text mp0">TARJETA DE PERMISO PROVISIONAL</p>
                    </div>
                </div>
                <div class="divMensajeRojo mp0">
                    <p class="texto-center texto-dias mp0"> PARA PRESTAR SERVICIOS POR <br> 60 DÍAS</p>
                </div>
                <div class="wwfull mp0">
                    <p class="texto-center texto-negritas mp0">ADSCRITO (A) A: VOLUNTARIADO </p>
                    <p class="texto-center texto-small text mp0">Esta tarjeta no es válida sin firma y sello<br />los detalles de su uso se encuentra al reverso.</p>
                </div>
                <div  class="wwCard h100px">
                    <div class="columnaL h100px">
                        <img class="imgVoluntario" src="{{$imgVoluntario}}" />
                    </div>
                    <div class="columnaR h100px " >
                        <p class="nombre">{{$nombre}}</p>
                        <p class="nombre">{{$primerApellido}}</p>
                        <p class="nombre">{{$segundoApellido}}</p>
                    </div>
                </div>
                <div  class="wwCard ">
                    <div class="columnaL">
                        <p class="subtitulo texto-red">AUTORIZA </p>
                        <div style="height: 35px; width: 100%; margin: 0 auto;">
                            <img class="imgFirma" src="{{$uriFirma}}" />
                            <img class="imgSello" src="{{$uriSello}}" />
                        </div>
                        <p class="texto-firma texto-negritas">{{$coordinador}}</p>
                        <p class="texto-firma">COORDINADOR ESTATAL DE VOLUNTARIADO </p>
                    </div>
                    <div class="columnaR">
                        <div>
                            <div class="wwfull mb-1">
                                <p class="subtitulo texto-negritas mp0">Vigencia</p>
                            </div>
                            <div class="wwCard2 mb-1">
                                <div class="columnaL">
                                    <p class="subtitulo wwfull mp0">Emitida:</p>
                                    <p class="subtitulo wwfull mp0 texto-red">{{$fechaInicio}}</p>
                                </div>
                                <div class="columnaR">
                                    <p class="subtitulo wwfull mp0">Vigencia:</p>
                                    <p class="subtitulo wwfull mp0 texto-red">{{$fechaFin}}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="wwCard2 texto-negritas mb-1">
                            <p class="subtitulo wwfull mp0  ">Código de Control:</p>
                            <p class="subtitulo wwfull mp0 texto-red">{{$numeroInterno}}</p>
                        </div>
                        
                        <div class="wwCard2 texto-negritas mb-1">
                            <p class="subtitulo texto-negritas">DELEGACIÓN ESTATAL GUERRERO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="columnaR">
            <div class="card">
                <div class="p2">
                    <div class="wwfull texto-center mp0 mt-1">
                        <img style="width: 170px; height: 30px; " src="{{$imgCR}}" />
                    </div>
                    <div class="mb-2">
                        <p class="texto-indicaciones mp0">
                            La presente tarjeta es de uso interno del Área de Voluntariado de Cruz Roja Mexicana, autoriza e
                            identifica al interesado para prestar servicio como colaborador voluntario de forma exclusiva en las
                            actividades del Programa o Área institucional en la cual se encuentra adscrito.<br /><br />Es válida
                            únicamente durante el periodo de 60 días naturales, tiempo en que el colaborador deberá cumplir con las
                            horas de servicio mínimas requeridas para demostrar su participación activa en la
                            institución.<br /><br />En ese tiempo deberá poner al día su seguro de vida y cubrir su formación básica
                            institucional<br /><br />Una vez cubiertos los tiempos establecidos y los requisitos arriba mencionados
                            podrá solicitar el registro o renovación de la credencial Institucional correspondientes.
                        </p>
                    </div>
                    <div class="divQR mp0">
                        <img style="width: 40px; height: 40px; " src="{{$qrCode}}" />
                        <img style="width: 40px; height: 45px; " src="{{$imgVoluntariado}}" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
</body>
</html>