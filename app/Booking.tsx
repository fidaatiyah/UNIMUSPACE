import React, { useState } from 'react';
import { TextInput, Text, View, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useBooking } from './Context/BookingContext'; // <- ini penting

export default function Booking() {
  const router = useRouter();
  const { tambahRiwayat } = useBooking();

  const [ruangan, setRuangan] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [jamMulai, setJamMulai] = useState('');
  const [jamSelesai, setJamSelesai] = useState('');

  const handleBooking = () => {
    if (ruangan && tanggal && jamMulai && jamSelesai) {
      tambahRiwayat({
        ruangan,
        tanggal,
        waktu: `${jamMulai} - ${jamSelesai}`,
      });
      router.push('/Dashboard');
    } else {
      alert('Mohon isi semua data!');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo Header */}
      <View style={styles.header}>
        <Image
          source={require('../assets/images/unimus.png')}
          style={styles.logo}
        />
        <Text style={styles.brand}>UNIMUSPACE</Text>
      </View>

      {/* Judul Form */}
      <Text style={styles.title}>Form Booking Tempat</Text>

      {/* Form Input */}
      <View style={styles.form}>
        <Text style={styles.label}>Nama Tempat</Text>
        <TextInput
          placeholder="Masukkan nama ruangan"
          style={styles.input}
          value={ruangan}
          onChangeText={setRuangan}
        />

        <Text style={styles.label}>Tanggal</Text>
        <TextInput
          placeholder="DD-MM-YYYY"
          style={styles.input}
          value={tanggal}
          onChangeText={setTanggal}
        />

        <Text style={styles.label}>Jam Mulai</Text>
        <TextInput
          placeholder="Contoh: 10.00"
          style={styles.input}
          value={jamMulai}
          onChangeText={setJamMulai}
        />

        <Text style={styles.label}>Jam Selesai</Text>
        <TextInput
          placeholder="Contoh: 12.00"
          style={styles.input}
          value={jamSelesai}
          onChangeText={setJamSelesai}
        />
      </View>

      {/* Tombol Submit */}
      <TouchableOpacity onPress={handleBooking} style={styles.button}>
        <Text style={styles.buttonText}>Booking Sekarang</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
  padding: 20,
  backgroundColor: '#FFFFFF',
  paddingTop: 60,
},

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 40,
    height: 40,
  },
  brand: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#1E7AFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E7AFF',
    marginBottom: 30,
  },
  form: {
    gap: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDE3EC',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#F8F9FB',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#1E7AFF',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#1E7AFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
