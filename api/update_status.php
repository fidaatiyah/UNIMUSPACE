<?php
header('Content-Type: application/json');
include '../config/koneksi.php';

$data = json_decode(file_get_contents("php://input"));
$id = $data->id ?? '';
$status = $data->status ?? '';

$response = [];

if ($id && $status) {
    $query = "UPDATE peminjaman SET status = '$status' WHERE id = '$id'";
    if (mysqli_query($koneksi, $query)) {
        $response['status'] = true;
        $response['message'] = 'Status diperbarui';
    } else {
        $response['status'] = false;
        $response['message'] = 'Gagal update status';
    }
} else {
    $response['status'] = false;
    $response['message'] = 'ID dan status wajib diisi';
}

echo json_encode($response);
?>
