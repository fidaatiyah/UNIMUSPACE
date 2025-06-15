import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import React from 'react';
import { CheckCircle, Clock, XCircle } from 'lucide-react-native';

const statusColor = {
  Menunggu: 'bg-blue-500',
  Disetujui: 'bg-green-500',
  Ditolak: 'bg-red-500',
};

const dataStat = [
  { label: 'Menunggu', count: 2, icon: <Clock color="white" size={20} /> },
  { label: 'Disetujui', count: 3, icon: <CheckCircle color="white" size={20} /> },
  { label: 'Ditolak', count: 1, icon: <XCircle color="white" size={20} /> },
];

const riwayat = [
  {
    ruangan: 'Aula Serbaguna',
    tanggal: '15 Mei 2025',
    jam: '10.00 – 12.00',
    status: 'Disetujui',
  },
  {
    ruangan: 'Ruang Rapat A',
    tanggal: '15 Mei 2025',
    jam: '10.00 – 12.00',
    status: 'Ditolak',
  },
  {
    ruangan: 'Aula Serbaguna',
    tanggal: '15 Mei 2025',
    jam: '10.00 – 12.00',
    status: 'Disetujui',
  },
];

export default function Dashboard() {
  return (
    <ScrollView className="flex-1 bg-white px-4 pt-12">
      {/* Logo & Title */}
      <View className="flex-row items-center mb-4">
        <Image
          source={require('../assets/images/unimuspace-logo.png')}
          className="w-8 h-8 mr-2"
        />
        <Text className="text-xl font-bold text-blue-600">UNIMUSPACE</Text>
      </View>

      {/* Heading */}
      <Text className="text-2xl font-bold mb-4">Dashboard Peminjaman</Text>

      {/* Status Summary */}
      <View className="flex-row justify-between mb-6">
        {dataStat.map((item, i) => (
          <View
            key={i}
            className={`flex-1 mr-2 last:mr-0 p-3 rounded-lg ${statusColor[item.label as 'Menunggu' | 'Disetujui' | 'Ditolak']} items-center`}
            >

            {item.icon}
            <Text className="text-white font-semibold mt-1">{item.label}</Text>
            <Text className="text-white text-lg font-bold">{item.count}</Text>
          </View>
        ))}
      </View>

      {/* Riwayat */}
      <Text className="text-lg font-bold mb-2">Riwayat Peminjaman</Text>

      {riwayat.map((item, i) => (
        <View
          key={i}
          className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-3"
        >
          <View className="flex-row justify-between items-center mb-1">
            <Text className="text-base font-bold">{item.ruangan}</Text>
            <View
              className={`${
                item.status === 'Disetujui'
                  ? 'bg-green-200 text-green-800'
                  : 'bg-red-200 text-red-800'
              } px-2 py-0.5 rounded-full`}
            >
              <Text
                className={`text-xs font-semibold ${
                  item.status === 'Disetujui' ? 'text-green-800' : 'text-red-800'
                }`}
              >
                {item.status}
              </Text>
            </View>
          </View>
          <Text className="text-sm text-gray-700">{item.tanggal}</Text>
          <Text className="text-sm text-gray-700 mb-2">{item.jam}</Text>
          <TouchableOpacity className="self-end bg-blue-500 px-3 py-1.5 rounded-md">
            <Text className="text-white text-sm font-semibold">Lihat Detail</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}
