export const mockStatistics = {
  occupationRate: 72,
  occupationTrend: 5,
  availableRooms: 12,
  occupiedRooms: 18,
  reservedRooms: 7,
  toCleanRooms: 4,
  todayArrivals: 14,
  todayDepartures: 9,
  expectedDepartures: 8,
  todayCollections: 485000,
  pendingCollections: 210000,
}

export const mockTodayArrivals = [
  {
    id: 'RES-0001',
    client: {
      firstName: 'Mamadou',
      lastName: 'Diop',
      initials: 'MD'
    },
    room: {
      number: '204',
      type: 'Standard'
    },
    expectedTime: '14:00',
    paymentStatus: 'Avance reçue',
    status: 'pending'
  },
  {
    id: 'RES-0002',
    client: {
      firstName: 'Sarah',
      lastName: 'Johnson',
      initials: 'SJ'
    },
    room: {
      number: '108',
      type: 'Suite'
    },
    expectedTime: '16:30',
    paymentStatus: 'Non payé',
    status: 'pending'
  }
]

export const mockTodayDepartures = [
  {
    id: 'RES-0003',
    client: {
      firstName: 'Aminata',
      lastName: 'Fall',
      initials: 'AF'
    },
    room: {
      number: '102',
      type: 'Standard'
    },
    balance: 0,
    roomStatus: 'Occupée',
    status: 'pending'
  }
]

export const mockAlerts = [
  {
    type: 'housekeeping',
    title: 'Ménage requis',
    description: '4 chambres à nettoyer',
    count: 4,
    icon: 'Sparkles',
    color: 'red'
  },
  {
    type: 'payments',
    title: 'Paiements en attente',
    description: '2 réservations non payées',
    count: 2,
    icon: 'AlertCircle',
    color: 'orange'
  },
  {
    type: 'maintenance',
    title: 'Maintenance',
    description: '1 chambre en maintenance',
    count: 1,
    icon: 'Wrench',
    color: 'gray'
  }
]
