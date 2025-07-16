import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Detail() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Peminjaman</Text>

      <Text style={styles.subtitle}>Aula Serbaguna</Text>

      <Text style={styles.detailText}>🗓 Tanggal: 15 Mei 2025</Text>
      <Text style={styles.detailText}>⏰ Waktu: 10.00 – 12.00</Text>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          Ruangan ini tersedia karena digunakan untuk kegiatan perkuliahan, rapat dosen, maupun acara lainnya pada waktu tersebut.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    color: '#1E7AFF',
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  infoBox: {
    marginTop: 20,
    backgroundColor: '#E00F00',
    padding: 16,
    borderRadius: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#005577',
  },
});
