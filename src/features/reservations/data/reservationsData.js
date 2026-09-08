export const mockReservation = {
  id: 'RES-0001',
  status: 'Confirmée',
  paymentStatus: 'Partiellement payé',
  client: {
    name: 'Abdoulaye Diop',
    email: 'abdoulaye.diop@email.com',
    phone: '+221 77 123 45 67',
    country: 'Sénégal',
    isVip: true
  },
  stay: {
    arrival: '12 Oct. 2023',
    arrivalTime: '14:00',
    departure: '15 Oct. 2023',
    departureTime: '11:00',
    nights: 3,
    rateType: 'Tarif Standard'
  },
  room: {
    number: '204',
    type: 'Suite Junior',
    capacity: '2 Adultes',
    view: 'Vue Mer'
  },
  payments: {
    total: 450000,
    paid: 150000,
    balance: 300000
  },
  transactions: [
    {
      id: 'TRX-9821',
      date: '10 Oct. 2023 14:22',
      method: 'Carte Bancaire',
      status: 'RÉUSSI',
      amount: 150000
    }
  ],
  documents: [
    { name: 'Facture_RES0001.pdf', type: 'Proforma', date: '12 Oct 2023' },
    { name: 'Reçu_Acompte.pdf', type: 'Paiement', date: '10 Oct 2023' }
  ],
  history: [
    { date: "Aujourd'hui, 09:15", action: 'Réservation confirmée', author: 'Awa (Réception)' },
    { date: '10 Oct. 2023, 14:22', action: 'Acompte enregistré', author: 'Système (Stripe)' },
    { date: '08 Oct. 2023, 10:30', action: 'Modification des dates de séjour', author: 'Admin' },
    { date: '05 Oct. 2023, 16:45', action: 'Réservation créée', author: 'Client (WhatsApp)' }
  ]
}

export const reservationActions = [
  { id: 'edit', label: 'Modifier', icon: 'Edit', variant: 'secondary' },
  { id: 'payment', label: 'Enregistrer paiement', icon: 'CreditCard', variant: 'secondary' },
  { id: 'checkin', label: 'Faire check-in', icon: 'LogIn', variant: 'secondary' },
  { id: 'invoice', label: 'Générer facture', icon: 'FileText', variant: 'secondary' },
  { id: 'cancel', label: 'Annuler', icon: 'X', variant: 'danger' },
  { id: 'whatsapp', label: 'WhatsApp', icon: 'MessageCircle', variant: 'success' }
]

export const quickActions = [
  { id: 'checkin', label: 'Faire check-in', icon: 'LogIn' },
  { id: 'checkout', label: 'Faire check-out', icon: 'LogOut' },
  { id: 'invoice', label: 'Générer facture', icon: 'FileText' },
  { id: 'edit', label: 'Modifier réservation', icon: 'Edit' },
  { id: 'contact', label: 'Contacter client', icon: 'MessageCircle' }
]