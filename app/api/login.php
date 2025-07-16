<?php
header('Content-Type: application/json');
include '../config/koneksi.php';

$data = json_decode(file_get_contents("php://input"));

$nim = $data->nim ?? '';
$password = $data->password ?? '';

$response = [];

if (!preg_match('/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/', $nim)) {
    $response['status'] = false;
    $response['message'] = 'NIM harus mengandung huruf dan angka';
    echo json_encode($response); exit;
}

if (!preg_match('/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/', $password)) {
    $response['status'] = false;
    $response['message'] = 'Password minimal 6 karakter dan harus mengandung huruf dan angka';
    echo json_encode($response); exit;
}

$query = "SELECT * FROM users WHERE nim='$nim' AND password='$password'";
$result = mysqli_query($koneksi, $query);

if ($result && mysqli_num_rows($result) == 1) {
    $user = mysqli_fetch_assoc($result);
    $response['status'] = true;
    $response['message'] = 'Login berhasil';
    $response['role'] = $user['role'];
    $response['user_id'] = $user['id'];
} else {
    $response['status'] = false;
    $response['message'] = 'NIM atau Password salah';
}

echo json_encode($response);
?>
