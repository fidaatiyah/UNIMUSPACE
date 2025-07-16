import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';

export default function Login() {
  const router = useRouter();
  const [nim, setNim] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Contoh pengecekan role sederhana
    if (nim === 'admin' && password === 'admin123') {
      router.push('/AdminDashboard'); // ganti dengan route admin kamu
    } else if (nim && password) {
      router.push('/Dashboard'); // user biasa (mahasiswa/dosen)
    } else {
      Alert.alert('Login Gagal', 'NIM atau Password salah!');
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/images/unimuspace.png')} />
      <Text style={styles.welcomeText}>login or sign up</Text>
      
      <View style={styles.wrapper}>
        <TextInput
          style={styles.inputNIM}
          placeholder="NIM"
          placeholderTextColor="#888"
          value={nim}
          onChangeText={setNim}
        />
        <TextInput
          style={styles.inputPassword}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    top: 50,
    width: 300,
    height: 300,
    marginBottom: 10,
  },
  wrapper: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,

  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#1E7AFF',
  },
  inputNIM: {
    height: 48,
    width: 300,
    backgroundColor: '#DFDFDF',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 12,
    borderRadius: 8,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
  },
  inputPassword: {
    height: 48,
    backgroundColor: '#dfdfdf',
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 12,
    borderRadius: 8,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
  },
  button :{
    height: 48,
    backgroundColor: '#1E7AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 16,
  },
    roleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 12,
    marginBottom: 12,
  },
  roleButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    backgroundColor: '#ccc',
  },
  activeRole: {
    backgroundColor: '#1E7AFF',
  },
  roleText: {
    color: '#fff',
    fontWeight: 'bold',
  },

})

