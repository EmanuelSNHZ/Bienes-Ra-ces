<?php
    $nombreTitulo = 'Anuncio';
    include 'includes/templates/header.php';
?>

    <main class="contenedor seccion contenido-centrado">
        <h1>Casa en Venta frente al bosque</h1>
        <picture>
            <source srcset="build/img/destacada.webp" type="image/webp">
            <source srcset="build/img/destacada.jpg" type="image/jpeg">
                <img loading="lazy" src="build/img/destacada.jpg" alt="Imagen de la Propiedad">
        </picture>
        <div class="resumen-propiedad">
            <p class="precio">$1.000.000</p>
            <ul class="iconos-caracteristicas">
                <li>
                    <img class="icono-darkmode" loading="lazy" src="build/img/icono_wc.svg" alt="Icono wc">
                    <p>3</p>
                </li>
                <li>
                    <img class="icono-darkmode" loading="lazy" src="build/img/icono_estacionamiento.svg" alt="Icono Estacionamiento">
                    <p>4</p>
                </li>
                <li>
                    <img class="icono-darkmode" loading="lazy" src="build/img/icono_dormitorio.svg" alt="Icono Dormitorios">
                    <p>5</p>
                </li>
            </ul>
            <p>
                Donec eget ex cursus, lobortis dui nec, pulvinar dolor. Fusce aliquam, risus a tincidunt aliquet, massa lacus aliquam risus, eget consectetur risus enim sit amet felis. Cras orci risus, laoreet pretium risus non, hendrerit ullamcorper dolor. Duis rutrum consequat nibh, sed bibendum nisi vehicula sed. Curabitur tempus nulla sed elit laoreet bibendum. Ut iaculis porta dui, et consectetur mauris. Aenean in fringilla eros. Mauris vitae dolor eros. Morbi aliquet ipsum nec aliquam cursus. Curabitur justo ex, viverra vel facilisis ut, aliquam eget sem. Vestibulum et dolor sit amet purus auctor auctor. Quisque porta libero non gravida mollis. Integer in lacus convallis, fermentum lorem in, ultrices tortor. Aenean id ullamcorper felis.
            </p>
            <p>
                Maecenas varius, dui id malesuada commodo, eros risus aliquam nunc, eu vestibulum mauris dolor nec odio. Nullam ligula nisi, tristique ut iaculis ac, porta ac ipsum. Maecenas nec odio vel metus mollis pellentesque sed pretium erat. Praesent euismod ipsum nec tincidunt fringilla. Fusce vitae accumsan enim.
            </p>
        </div>
    </main>

<?php include 'includes/templates/foother.php'; ?>