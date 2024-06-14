<?php

session_start();

header('Content-Type: application/json');

require_once 'includes/connexion.php';

// Verificar conexión
if (!$connexion) {
    die(json_encode(['error' => 'Conexión fallida: ' . mysqli_connect_error()]));
}

$id_usuario = $_SESSION['id']; // Aquí puedes cambiar el ID del usuario que quieres buscar

// Escapar el id_usuario para prevenir inyecciones SQL
$id_usuario = mysqli_real_escape_string($connexion, $id_usuario);

$sql = "SELECT correo FROM usuarios WHERE id_usuario = $id_usuario";
$result = mysqli_query($connexion, $sql);

if ($result) {
    if ($result->num_rows > 0) {
        // Obtener los datos de cada fila
        $row = mysqli_fetch_assoc($result);
        $correo = $row["correo"];

        $datos_usuario = array('correo' => $correo);
        echo json_encode($datos_usuario, JSON_PRETTY_PRINT);
    } else {
        echo json_encode(['error' => '0 resultados']);
    }
    mysqli_free_result($result);
} else {
    echo json_encode(['error' => 'Error en la consulta: ' . mysqli_error($connexion)]);
}

mysqli_close($connexion);
?>

