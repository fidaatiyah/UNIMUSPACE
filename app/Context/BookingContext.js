import React, { createContext, useContext, useEffect, useState } from 'react';

// 1. Buat Context
const BookingContext = createContext();

// 2. Provider
export const BookingProvider = ({ children }) => {
  const [riwayat, setRiwayat] = useState([]);

  // 3. Ambil data peminjaman
  const fetchRiwayat = async () => {
    try {
      const response = await fetch('http://192.168.1.7/api/get_peminjaman.php');
      const json = await response.json();

      // Cek jika JSON valid
      if (json && Array.isArray(json.data)) {
        setRiwayat(json.data);
      } else {
        console.warn('Format data salah:', json);
        setRiwayat([]);
      }
    } catch (error) {
      console.error('Gagal mengambil data:', error);
    }
  };

  // 4. Ubah status peminjaman
  const setStatus = async (id, status) => {
    try {
      const response = await fetch('http://192.168.1.7/api/update_status.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, status }),
      });

      const result = await response.json();
      if (result.status) {
        fetchRiwayat(); // refresh data jika sukses
      } else {
        console.warn('Update gagal:', result.message || result);
      }
    } catch (err) {
      console.error('Gagal update status:', err);
    }
  };

  // 5. Ambil data saat pertama kali load
  useEffect(() => {
    fetchRiwayat();
  }, []);

  // 6. Kirim context ke semua anak komponen
  return (
    <BookingContext.Provider value={{ riwayat, setStatus }}>
      {children}
    </BookingContext.Provider>
  );
};

// 7. Hook untuk akses context
export const useBooking = () => useContext(BookingContext);

// 8. Default export untuk menghindari error routing
export default BookingContext;
