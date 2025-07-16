<?php
header('Content-Type: application/json');
include '../config/koneksi.php';

$response = [];

$query = "SELECT * FROM peminjaman ORDER BY id DESC";
$result = mysqli_query($koneksi, $query);

if ($result) {
    $data = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
    $response['status'] = true;
    $response['data'] = $data;
} else {
    $response['status'] = false;
    $response['message'] = 'Gagal mengambil data dari database';
}

echo json_encode($response);

?>
