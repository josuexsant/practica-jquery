
<?php
header('Content-Type: text/html; charset=ISO-8859-1');
$file = fopen('../gananciaMax.txt', 'r') or die('No se pudo abrir el archivo');
$contenido = fread($file, filesize('../gananciaMax.txt'));
fclose($file);
?>