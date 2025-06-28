import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function Booking() {
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../assets/images/unimus.png')} />
        <Text style={styles.brand}>UNIMUSPACE</Text>
      </View>

      <Text style={styles.title}>Form Booking Tempat</Text>

      {/* Form */}
      <View style={styles.form}>
        <Text style={styles.label}>Nama Tempat</Text>
        <TextInput placeholder="" style={styles.input} />

        <Text style={styles.label}>Tanggal</Text>
        <TextInput placeholder="DD-MM-YYYY" style={styles.input} />

        <Text style={styles.label}>Jam Mulai</Text>
        <TextInput placeholder="" style={styles.input} />

        <Text style={styles.label}>Jam Selesai</Text>
        <TextInput placeholder="" style={styles.input} />

        <TouchableOpacity style={styles.button} onPress={() => router.push('/Dashboard')}>
           <Text style={styles.buttonText}>Booking Sekarang</Text>
         </TouchableOpacity>

      </View>
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
