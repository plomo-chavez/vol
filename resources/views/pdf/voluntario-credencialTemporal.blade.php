<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="./styles/styleCredencialTemporal.css" />
  <title>Credencial Temporal #{{$numeroAsociado}}</title>
</head>
<body> 
<footer> @include('pdf.includes.footer', ['fechaImpresa' => $fechaImpresa]) </footer>
<main>
    <div class="contenedor spaceBetween">
        <!-- <div class="columna">
            <div class="texto-center">
                <img style="width: 170px; height: 30px; " src="https://voluntariado-gro.com/images/elementos/cr.png" />
            </div>
            <p class="titulo text mb"> TARJETA DE PERMISO PROVISIONAL</p>
            <div class="divMensajeRojo mb">
                <p class="texto-center texto-dias"> PARA PRESTAR SERVICIOS POR <br> 60 DÍAS</p>
            </div>
            <p class="texto-center texto-negritas mb">ADSCRITO (A) A: VOLUNTARIADO </p>
            <p class="texto-center texto-small text mb">Esta tarjeta no es válida sin firma y sello<br />los detalles de su uso se encuentra al reverso.</p>
            <div style=" height: 100px;" class=" items-center mb">
                <div style="width: 50%;" class="items-center">
                    <img style="width: 70px; height: 80px;" src="https://voluntariado-gro.com/images/elementos/voluntario.png" />
                </div>
                <div style="width: 50%;" class="texto-negritas">
                    <p class="nombre">Emitida:</p>
                    <p class="nombre">Emitida:</p>
                    <p class="nombre">Emitida:</p>
                </div>
            </div>
            <div class="mb dcontenedor">
                <div class="columsna">
                    <p class="subtitulo texto-red">AUTORIZA </p>
                    <div style="height: 35px; width: 100%; margin: 0 auto;">
                        <img style="width: 42px; height: 42px; left: 20px; top: 9px; position: absolute" src="https://voluntariado-gro.com/images/elementos/firma.png" />
                        <img style="width: 37px; height: 37px; left: 45px; top: 8px; position: absolute" src="https://voluntariado-gro.com/images/elementos/sello.png" />
                    </div>
                    <p class="texto-firma texto-negritas">ING.ANTONIO CÁRDENAS VALENCIA </p>
                    <p class="texto-firma">COORDINADOR ESTATAL DE VOLUNTARIADO </p>
                </div>
                <div class="columnsa">
                    <p class="subtitulo texto-negritas mb">Vigencia</p>
                    <div  class="mb" style="display: flex;">
                        <div style="width: 50%;" class="texto-negritas">
                            <p class="subtitulo">Emitida:</p>
                            <p class="subtitulo texto-red">01/08/2023</p>
                        </div>
                        <div style="width: 50%;" class="texto-negritas">
                            <p class="subtitulo">Vigencia:</p>
                            <p class="subtitulo texto-red">01/08/2023</p>
                        </div>
                    </div>
                    <div class="mb texto-negritas">
                        <p class="subtitulo">Código de Control:</p>
                        <p class="subtitulo texto-red">VOL23120021</p>
                    </div>
                    <p class="subtitulo texto-negritas">DELEGACIÓN ESTATAL GUERRERO</p>
                </div>
            </div>
        </div> -->
        <div class="columna p2">
            <div class="texto-center">
                <img style="width: 170px; height: 30px; " src="https://voluntariado-gro.com/images/elementos/cr.png" />
            </div>
            <div class="">
                <p class="texto-indicaciones">
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
            <div class="divQR">
                <img style="width: 40px; height: 40px; " src="https://voluntariado-gro.com/images/elementos/qr.png" />
                <img style="width: 40px; height: 45px; "src="https://voluntariado-gro.com/images/elementos/voluntariado.png" />
            </div>
        </div>
        <div class="columna p2">
            <div class="texto-center">
                <img style="width: 170px; height: 30px; " src="https://voluntariado-gro.com/images/elementos/cr.png" />
            </div>
            <div class="">
                <p class="texto-indicaciones">
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
            <div class="divQR">
                <img style="width: 40px; height: 40px; " src="https://voluntariado-gro.com/images/elementos/qr.png" />
                <img style="width: 40px; height: 45px; "src="https://voluntariado-gro.com/images/elementos/voluntariado.png" />
            </div>
        </div>
    </div>
</main>
</body>
</html>