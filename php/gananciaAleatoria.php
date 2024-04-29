<?php

sleep(5);
$xmlData = file_get_contents('php://input');
$xml = simplexml_load_string($xmlData);
$nombre = isset($xml->nombre) ? (string)$xml->nombre : 'Anónimo';
$gananciaMaxima = rand(0, 100);

// Creamos un XML de respuesta
$xmlResponse = new SimpleXMLElement('<response></response>');
$xmlResponse->addChild('mensaje', 'Felicidades Sr. ' . $nombre . ', has ganado $' . $gananciaMaxima . ' pesos');
$ganancia = $xmlResponse->addChild('ganancia', $gananciaMaxima);

header('Content-Type: application/xml');
echo $xmlResponse->asXML();

?>
