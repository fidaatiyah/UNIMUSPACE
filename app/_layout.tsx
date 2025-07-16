import { Slot } from 'expo-router';
import { BookingProvider } from './Context/BookingContext';

export default function Layout() {
  return (
    <BookingProvider>
      <Slot />
    </BookingProvider>
  );
}
