<?php 
	$nombre = $_POST["nombre"];
	$correo = $_POST["correo"];
	$telefono = $_POST["telefono"];
	$mensaje = $_POST["mensaje"];

	$contenido = "Nombre: " . $nombre . "\nCorreo: " . $telefono . "\nTelefono:" . $correo . "\nMensaje: " . $mensaje . "\n";


	$fp = fopen("contacto.txt", "a");	
	fwrite($fp,$contenido);
	fclose($fp);
	header("Location:gracias.html");

	
 ?>
while(!feof($file)) {
echo fgets($file). "<br />";
}