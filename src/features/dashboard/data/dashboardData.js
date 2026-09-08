export const dashboardStats = {
  occupationRate: 72,
  occupationTrend: 5,
  availableRooms: 12,
  occupiedRooms: 18,
  reservedRooms: 7,
  toCleanRooms: 4,
  todayCollections: 485000,
  pendingCollections: 210000,
  todayArrivals: 6,
  todayDepartures: 5
}

export const todayArrivals = [
  {
    id: 1,
    client: {
      initials: 'MD',
      firstName: 'Mamadou',
      lastName: 'Diop'
    },
    room: {
      number: 204,
      type: 'Standard'
    },
    expectedTime: '14:00',
    paymentStatus: 'Avance reçue'
  },
  {
    id: 2,
    client: {
      initials: 'SJ',
      firstName: 'Sarah',
      lastName: 'Johnson'
    },
    room: {
      number: 108,
      type: 'Suite'
    },
    expectedTime: '16:30',
    paymentStatus: 'Non payé'
  }
]

export const todayDepartures = [
  {
    id: 1,
    client: {
      initials: 'AF',
      firstName: 'Aminata',
      lastName: 'Fall'
    },
    room: {
      number: 102
    },
    balance: 0,
    roomStatus: 'Occupée'
  }
]

export const alerts = [
  {
    id: 1,
    title: 'Ménage requis',
    description: '4 chambres à nettoyer',
    color: 'red',
    icon: 'Sparkles',
    count: 4
  },
  {
    id: 2,
    title: 'Paiements en attente',
    description: '2 réservations non payées',
    color: 'orange',
    icon: 'AlertCircle',
    count: 2
  },
  {
    id: 3,
    title: 'Maintenance',
    description: '1 chambre en maintenance',
    color: 'gray',
    icon: 'Wrench',
    count: 1
  }
]

export const quickActions = [
  {
    id: 1,
    label: 'Nouvelle réservation',
    icon: 'Plus',
    primary: true
  },
  {
    id: 2,
    label: 'Enregistrer un paiement',
    icon: 'CreditCard',
    primary: false
  },
  {
    id: 3,
    label: 'Faire un check-in',
    icon: 'LogIn',
    primary: false
  },
  {
    id: 4,
    label: 'Faire un check-out',
    icon: 'LogOut',
    primary: false
  },
  {
    id: 5,
    label: 'Voir la caisse',
    icon: 'Wallet',
    primary: false
  }
]