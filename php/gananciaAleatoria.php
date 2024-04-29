<?php

sleep( 5 );
$xmlData = file_get_contents( 'php://input' );
$xml = simplexml_load_string( $xmlData );
$nombre = isset( $xml->nombre ) ? ( string )$xml->nombre : 'Anónimo';
$gananciaMaxima = rand( 0, 100 );

$response = [
    'mensaje' => 'Felicidades Sr. ' . $nombre . ', has ganado $' . $gananciaMaxima . ' pesos'
];

header( 'Content-Type: application/json' );
echo json_encode( $response );

?>
