<?php
header('Content-Type: application/json');
include '../config/koneksi.php';

$data = json_decode(file_get_contents("php://input"));

$nim = $data->nim ?? '';
$password = $data->password ?? '';
$role = $data->role ?? 'mahasiswa'; // Default ke mahasiswa

$response = [];

// Validasi NIM harus kombinasi huruf & angka
if (!preg_match('/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/', $nim)) {
    $response['status'] = false;
    $response['message'] = 'NIM harus mengandung huruf dan angka';
    echo json_encode($response); exit;
}

// Validasi Password minimal 6 karakter dan harus kombinasi huruf & angka
if (!preg_match('/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/', $password)) {
    $response['status'] = false;
    $response['message'] = 'Password minimal 6 karakter dan harus mengandung huruf dan angka';
    echo json_encode($response); exit;
}

// Cek apakah NIM sudah terdaftar
$cek = mysqli_query($koneksi, "SELECT * FROM users WHERE nim='$nim'");
if (mysqli_num_rows($cek) > 0) {
    $response['status'] = false;
    $response['message'] = 'NIM sudah digunakan';
    echo json_encode($response); exit;
}

// Insert ke database
$query = "INSERT INTO users (nim, password, role) VALUES ('$nim', '$password', '$role')";
if (mysqli_query($koneksi, $query)) {
    $response['status'] = true;
    $response['message'] = 'Registrasi berhasil';
} else {
    $response['status'] = false;
    $response['message'] = 'Gagal registrasi';
}

echo json_encode($response);
?>
