import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useBooking } from './Context/BookingContext';

const AdminDashboard = () => {
  const router = useRouter();
  const { riwayat, setStatus } = useBooking(); // pastikan fungsi setStatus ada di Context

  const handleApprove = (id: number) => {
    setStatus(id, 'Disetujui');
    Alert.alert('Berhasil', 'Peminjaman disetujui.');
  };

  const handleReject = (id: number) => {
    setStatus(id, 'Ditolak');
    Alert.alert('Berhasil', 'Peminjaman ditolak.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard Admin</Text>

      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        {riwayat.length === 0 && (
          <Text style={{ textAlign: 'center', color: '#888' }}>Tidak ada data peminjaman</Text>
        )}

        {riwayat.map((item: { id: React.Key | null | undefined; ruangan: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; tanggal: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; waktu: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; status: any; }) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.room}>{item.ruangan}</Text>
            <Text>{item.tanggal} | {item.waktu}</Text>
            <Text style={styles.statusText}>Status: {item.status || 'Menunggu'}</Text>

            <View style={styles.actions}>
              <TouchableOpacity
                style={styles.approve}
                onPress={() => {
                  if (typeof item.id === 'number') {
                    handleApprove(item.id);
                  } else {
                    Alert.alert('Error', 'ID peminjaman tidak valid.');
                  }
                }}
              >
                <FontAwesome name="check" color="white" size={16} />
                <Text style={styles.btnText}>Setujui</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.reject}
                onPress={() => {
                  if (typeof item.id === 'number') {
                    handleReject(item.id);
                  } else {
                    Alert.alert('Error', 'ID peminjaman tidak valid.');
                  }
                }}
              >
                <FontAwesome name="times" color="white" size={16} />
                <Text style={styles.btnText}>Tolak</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default AdminDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E7AFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#F8F9FB',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },
  room: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  statusText: {
    marginTop: 4,
    fontWeight: '600',
    color: '#555',
  },
  actions: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 10,
  },
  approve: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00D5AA',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  reject: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#CF0F47',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  btnText: {
    color: 'white',
    marginLeft: 6,
    fontWeight: 'bold',
  },
});
