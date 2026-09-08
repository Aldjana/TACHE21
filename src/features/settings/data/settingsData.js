export const establishmentInfo = {
  hotelName: 'Hôtel Démo Dakar',
  phone: '+221 33 800 00 00',
  address: 'Avenue Cheikh Anta Diop, Dakar',
  email: 'contact@demodakar.sn'
}

export const paymentModes = [
  { id: 1, name: 'Espèces', checked: true },
  { id: 2, name: 'Wave', checked: true },
  { id: 3, name: 'Orange Money', checked: true },
  { id: 4, name: 'Carte Bancaire', checked: false }
]

export const users = [
  {
    id: 1,
    initials: 'AN',
    name: 'Awa Ndiaye',
    email: 'awa.n@demodakar.sn',
    role: 'ADMIN',
    status: 'Actif',
    lastConnection: 'Il y a 5 min'
  },
  {
    id: 2,
    initials: 'MB',
    name: 'Mamadou Ba',
    email: 'm.ba@demodakar.sn',
    role: 'MANAGER',
    status: 'Actif',
    lastConnection: 'Aujourd\'hui, 09:15'
  },
  {
    id: 3,
    initials: 'FS',
    name: 'Fatou Sarr',
    email: 'fatou.s@demodakar.sn',
    role: 'RÉCEPTIONNISTE',
    status: 'Actif',
    lastConnection: 'Hier, 18:40'
  },
  {
    id: 4,
    initials: 'AD',
    name: 'Abdou Diallo',
    email: 'a.diallo@demodakar.sn',
    role: 'MÉNAGE',
    status: 'Hors-ligne',
    lastConnection: '12 Oct 2023'
  }
]

export const roomTypes = [
  {
    id: 1,
    name: 'Chambre Standard',
    units: 12,
    features: 'Lit Queen, Douche, TV, WiFi',
    price: 45000
  },
  {
    id: 2,
    name: 'Suite Junior',
    units: 4,
    features: 'Lit King, Salon, Vue Mer, Baignoire',
    price: 75000
  },
  {
    id: 3,
    name: 'Suite Royale',
    units: 2,
    features: '2 Chambres, Vue Panoramique, Jacuzzi',
    price: 150000
  }
]

export const reservationSources = [
  { id: 1, name: 'Booking.com' },
  { id: 2, name: 'Expedia' },
  { id: 3, name: 'Direct (Site Web)' },
  { id: 4, name: 'Téléphone' }
]

export const billingConditions = {
  taxeSejour: 1000,
  tva: 18,
  delaiAnnulation: 48
}
