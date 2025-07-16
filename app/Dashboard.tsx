import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useBooking } from './Context/BookingContext'; // Context global

interface RiwayatItem {
  id: number;
  ruangan: string;
  tanggal: string;
  waktu: string;
}

const Dashboard = () => {
  const router = useRouter();
  const { riwayat, hapusRiwayat } = useBooking();

  const handleDelete = (id: number) => {
    hapusRiwayat(id);
  };

  return (
    <View style={styles.container}>
      {/* Logo Header */}
      <View style={styles.wrapper}>
        <Image
          style={styles.image}
          source={require('../assets/images/unimus.png')}
        />
        <Text style={styles.UNIMUSPACE}>UNIMUSPACE</Text>
      </View>

      {/* Title */}
      <Text style={styles.dashboard}>Dashboard Peminjaman</Text>

      {/* Status Boxes */}
      <View style={styles.bungkus}>
        <View style={styles.box1}>
          <FontAwesome name="clock-o" size={24} color="white" />
          <Text style={styles.boxtext}>Menunggu</Text>
        </View>

        <View style={styles.box2}>
          <FontAwesome name="check-circle" size={24} color="white" />
          <Text style={styles.boxtext}>Disetujui</Text>
        </View>

        <View style={styles.box3}>
          <FontAwesome name="times-circle" size={24} color="white" />
          <Text style={styles.boxtext}>Ditolak</Text>
        </View>
      </View>

{/* Riwayat Title */}
<Text style={styles.riwayatTitle}>Riwayat Peminjaman</Text>


{/* Riwayat List */}
<ScrollView style={{ marginBottom: 80 }}>
  {riwayat.map((item: RiwayatItem) => (
    <View style={styles.card} key={item.id}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{item.ruangan}</Text>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('/Detail')}
          >
            <Text style={styles.buttonText}>Lihat Detail</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#CF0F47' }]}
            onPress={() => hapusRiwayat(item.id)}
          >
            <Text style={styles.buttonText}>Hapus</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.cardText}>{item.tanggal}</Text>
      <Text style={styles.cardText}>{item.waktu}</Text>
    </View>
  ))}
</ScrollView>


      {/* Tombol Booking */}
      <TouchableOpacity
        style={styles.bookingButton}
        onPress={() => router.push('/Booking')}
      >
        <FontAwesome
          name="plus"
          size={16}
          color="white"
          style={{ marginRight: 6 }}
        />
        <Text style={styles.bookingButtonText}>Booking Ruangan</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  UNIMUSPACE: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 5,
    color: '#1E7AFF',
  },
  image: {
    width: 50,
    height: 50,
  },
  dashboard: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  bungkus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  box1: {
    backgroundColor: '#1E7AFF',
    padding: 12,
    borderRadius: 10,
    width: '30%',
    alignItems: 'center',
  },
  box2: {
    backgroundColor: '#00D5AA',
    padding: 12,
    borderRadius: 10,
    width: '30%',
    alignItems: 'center',
  },
  box3: {
    backgroundColor: '#CF0F47',
    padding: 12,
    borderRadius: 10,
    width: '30%',
    alignItems: 'center',
  },
  boxtext: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 4,
  },
  riwayatTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  cardText: {
    color: '#444',
    fontSize: 14,
    marginBottom: 2,
  },
  button: {
    backgroundColor: '#1E7AFF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginLeft: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bookingButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00D5AA',
    paddingVertical: 14,
    borderRadius: 12,
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },
  bookingButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
