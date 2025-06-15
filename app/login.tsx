import { View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();
  const [nim, setNim] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (!nim || !email) {
      Alert.alert('Oops!', 'NIM dan Email harus diisi.');
      return;
    }
    router.push('/dashboard');
  };

  return (
    <View className="flex-1 bg-white justify-center items-center px-6">
      {/* Logo */}
      <Image
        source={require('../assets/images/unimuspace.png')}
        className="w-32 h-32 mb-6"
        resizeMode="contain"
      />

      {/* Title */}
      <Text className="text-3xl font-bold text-blue-600 mb-2 tracking-wide">
        UNIMUSpace
      </Text>
      <Text className="text-base text-gray-600 mb-8">
        Masuk dengan akun mahasiswa
      </Text>

      {/* Form */}
      <View className="w-full mb-4">
        <Text className="mb-1 text-gray-700 font-medium">NIM</Text>
        <TextInput
          value={nim}
          onChangeText={setNim}
          placeholder="Masukkan NIM"
          className="bg-gray-100 rounded-lg px-4 py-3 border border-gray-300 text-base"
        />
      </View>

      <View className="w-full mb-6">
        <Text className="mb-1 text-gray-700 font-medium">Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Masukkan Email"
          keyboardType="email-address"
          className="bg-gray-100 rounded-lg px-4 py-3 border border-gray-300 text-base"
        />
      </View>

      {/* Button */}
      <TouchableOpacity
        onPress={handleLogin}
        className="bg-blue-500 w-full py-4 rounded-xl items-center shadow-md"
      >
        <Text className="text-white text-lg font-semibold">Login</Text>
      </TouchableOpacity>
    </View>
  );
}
