import { Room, Booking } from './types';

export const rooms: Room[] = [
  {
    id: '1',
    name: 'Habitación Deluxe Doble',
    description: 'Elegante habitación con dos camas matrimoniales, aire acondicionado, ventilador de techo y cómodo sillón. Decorada con pisos de mármol en patrón damero y techo de madera que refleja el estilo arquitectónico único de Casa Concha.',
    price: 180,
    capacity: 4,
    amenities: ['WiFi', 'Aire Acondicionado', 'Ventilador de Techo', 'Dos Camas Matrimoniales', 'Sillón', 'Persianas'],
    images: [
      'https://res.cloudinary.com/dmmnflrj5/image/upload/v1749683482/Copia_de_2-_U4C9729_mstqs4.jpg',
      'https://res.cloudinary.com/dmmnflrj5/image/upload/v1749683482/Copia_de_1-_U4C9725_sgxzog.jpg',
      'https://res.cloudinary.com/dmmnflrj5/image/upload/v1749683481/4-_U4C9732_qfz03a.jpg',
      'https://res.cloudinary.com/dmmnflrj5/image/upload/v1749683480/3-_U4C9731_bvy9yd.jpg'
    ],
    available: true
  },
  {
    id: '2',
    name: 'Habitación Individual Superior',
    description: 'Habitación confortable con cama matrimonial, diseñada para brindar máximo confort con aire acondicionado y ventilador de techo. Cuenta con los acabados característicos de Casa Concha.',
    price: 120,
    capacity: 2,
    amenities: ['WiFi', 'Aire Acondicionado', 'Ventilador de Techo', 'Cama Matrimonial', 'Escritorio'],
    images: [
      'https://res.cloudinary.com/dmmnflrj5/image/upload/v1749683574/1-_U4C9675_rrle2n.jpg',
      'https://res.cloudinary.com/dmmnflrj5/image/upload/v1749683572/3-_U4C9740_cebnq3.jpg',
      'https://res.cloudinary.com/dmmnflrj5/image/upload/v1749683571/4-_U4C9743_ipqvv7.jpg'
    ],
    available: true
  },
  {
    id: '3',
    name: 'Habitación Familiar',
    description: 'Amplia habitación familiar con espacio adicional, perfecta para familias o grupos pequeños. Incluye todas las comodidades modernas con el toque distintivo de Casa Concha.',
    price: 200,
    capacity: 6,
    amenities: ['WiFi', 'Aire Acondicionado', 'Ventilador de Techo', 'Camas Múltiples', 'Área de Estar'],
    images: [
      'https://res.cloudinary.com/dmmnflrj5/image/upload/v1749683595/1-_U4C9690_hkvdam.jpg',
      'https://res.cloudinary.com/dmmnflrj5/image/upload/v1749683598/2-_U4C9694_hijfp0.jpg',
      'https://res.cloudinary.com/dmmnflrj5/image/upload/v1749683597/3-_U4C9745_g8zfo3.jpg',
      'https://res.cloudinary.com/dmmnflrj5/image/upload/v1749683600/4-_U4C9747_hew0an.jpg',
      'https://res.cloudinary.com/dmmnflrj5/image/upload/v1749683594/5-_U4C9748_o9gpns.jpg'
    ],
    available: true
  },
  {
    id: '4',
    name: 'Habitación Estándar',
    description: 'Habitación cómoda y funcional con todas las amenidades básicas necesarias para una estancia agradable en Casa Concha.',
    price: 100,
    capacity: 2,
    amenities: ['WiFi', 'Aire Acondicionado', 'Ventilador de Techo', 'Cama Matrimonial'],
    images: [
      'https://res.cloudinary.com/dmmnflrj5/image/upload/v1749683608/1-_U4C9846_nqgxkb.jpg',
      'https://res.cloudinary.com/dmmnflrj5/image/upload/v1749683607/2-_U4C9847_k6y1rd.jpg',
      'https://res.cloudinary.com/dmmnflrj5/image/upload/v1749683610/3-_U4C9859_yu1lwb.jpg',
      'https://res.cloudinary.com/dmmnflrj5/image/upload/v1749683611/4-_U4C9860_lulzgv.jpg',
      'https://res.cloudinary.com/dmmnflrj5/image/upload/v1749683605/5-_U4C9861_e0jo40.jpg'
    ],
    available: true
  },
  {
    id: '5',
    name: 'Habitación Premium',
    description: 'Habitación premium con acabados de lujo y vista privilegiada. Diseñada para huéspedes que buscan una experiencia superior en Casa Concha.',
    price: 250,
    capacity: 3,
    amenities: ['WiFi', 'Aire Acondicionado', 'Ventilador de Techo', 'Cama King Size', 'Balcón Privado', 'Vista Panorámica'],
    images: [
      'https://res.cloudinary.com/dmmnflrj5/image/upload/v1749683682/1-_U4C9713_fx5cqs.jpg',
      'https://res.cloudinary.com/dmmnflrj5/image/upload/v1749683680/2-_U4C9752_too6bv.jpg',
      'https://res.cloudinary.com/dmmnflrj5/image/upload/v1749683679/3-_U4C9754_sljjqz.jpg'
    ],
    available: true
  },
  {
    id: '6',
    name: 'Suite Ejecutiva',
    description: 'La suite más exclusiva de Casa Concha, con sala de estar independiente y todos los lujos. Perfecta para estancias prolongadas o huéspedes VIP.',
    price: 300,
    capacity: 4,
    amenities: ['WiFi', 'Aire Acondicionado', 'Ventilador de Techo', 'Sala de Estar', 'Cama King Size', 'Minibar', 'Balcón Privado'],
    images: [
      'https://res.cloudinary.com/dmmnflrj5/image/upload/v1749683693/1-_U4C9760_x25ukr.jpg',
      'https://res.cloudinary.com/dmmnflrj5/image/upload/v1749683691/2-_U4C9772_vcv4xp.jpg',
      'https://res.cloudinary.com/dmmnflrj5/image/upload/v1749683689/3-_U4C9774_aawmka.jpg',
      'https://res.cloudinary.com/dmmnflrj5/image/upload/v1749683687/4-_U4C9777_tswjxn.jpg'
    ],
    available: true
  }
];

export const bookings: Booking[] = [
  {
    id: '1',
    roomId: '1',
    checkIn: '2023-06-15',
    checkOut: '2023-06-20',
    guestName: 'John Doe',
    guestEmail: 'john.doe@example.com',
    guestPhone: '+1 (555) 123-4567',
    numberOfGuests: 2,
    status: 'confirmed',
    totalPrice: 1250
  },
  {
    id: '2',
    roomId: '2',
    checkIn: '2023-07-10',
    checkOut: '2023-07-15',
    guestName: 'Jane Smith',
    guestEmail: 'jane.smith@example.com',
    guestPhone: '+1 (555) 987-6543',
    numberOfGuests: 2,
    status: 'pending',
    totalPrice: 1750
  },
  {
    id: '3',
    roomId: '1',
    checkIn: '2023-08-05',
    checkOut: '2023-08-10',
    guestName: 'Robert Johnson',
    guestEmail: 'robert.j@example.com',
    guestPhone: '+1 (555) 456-7890',
    numberOfGuests: 1,
    status: 'confirmed',
    totalPrice: 1250
  }
];

export const hotelInfo = {
  name: 'Hotel Casa Santa Cruz ',
  description: 'Experience luxury and comfort at our premier destination',
  address: '123 Seaside Blvd, Ocean City',
  phone: '+1 (555) 123-4567',
  email: 'reservations@casaconcha.com'
};
