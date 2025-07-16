<?php
include '../config/koneksi.php';
header('Content-Type: application/json');



$data = json_decode(file_get_contents("php://input"));

$user_id = $data->user_id ?? '';
$ruangan_id = $data->ruangan_id ?? '';
$tanggal = $data->tanggal ?? '';
$waktu = $data->waktu ?? '';
$status = 'menunggu';

$query = "INSERT INTO peminjaman (user_id, ruangan_id, tanggal, waktu, status) 
          VALUES ('$user_id', '$ruangan_id', '$tanggal', '$waktu', '$status')";

$response = [];

if (mysqli_query($koneksi, $query)) {
    $response['status'] = true;
    $response['message'] = 'Booking berhasil';
} else {
    $response['status'] = false;
    $response['message'] = 'Gagal booking';
}

echo json_encode($response);
?>
