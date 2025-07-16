<?php
$host = "localhost";
$user = "root";
$pass = "";
$db   = "unimuspace"; 

$koneksi = mysqli_connect($host, $user, $pass, $db);
if (!$koneksi) {
    die(json_encode(["status" => false, "message" => "Koneksi gagal"]));
}
