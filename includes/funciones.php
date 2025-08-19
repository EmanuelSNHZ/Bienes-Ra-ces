<?php

require "app.php";

function incluirTemplate( $nombre, $nombreTitulo = '', $inicio = false ) {
    include TEMPLATES_URL . "/{$nombre}.php";
};