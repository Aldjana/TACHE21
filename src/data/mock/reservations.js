export const mockReservations = [
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
    arrival: '12/06/2024',
    departure: '15/06/2024',
    amount: 90000,
    paid: 90000,
    balance: 0,
    status: 'CONFIRM',
    source: 'Direct'
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
    arrival: '14/06/2024',
    departure: '16/06/2024',
    amount: 55000,
    paid: 0,
    balance: 55000,
    status: 'ARRIVÉE PRÉVUE',
    source: 'Booking.com'
  },
  {
    id: 'RES-0003',
    client: {
      firstName: 'Jean-Michel',
      lastName: "N'Diaye",
      initials: 'JM'
    },
    room: {
      number: '301',
      type: 'Suite'
    },
    arrival: '11/06/2024',
    departure: '12/06/2024',
    amount: 120000,
    paid: 120000,
    balance: 0,
    status: 'PARTI',
    source: 'Direct'
  },
  {
    id: 'RES-0004',
    client: {
      firstName: 'Aminata',
      lastName: 'Fall',
      initials: 'AF'
    },
    room: {
      number: '102',
      type: 'Standard'
    },
    arrival: '15/06/2024',
    departure: '16/06/2024',
    amount: 45000,
    paid: 45000,
    balance: 0,
    status: 'OCCUPÉE',
    source: 'Direct'
  },
  {
    id: 'RES-0005',
    client: {
      firstName: 'Ibrahima',
      lastName: 'Sow',
      initials: 'IS'
    },
    room: {
      number: '201',
      type: 'Double Deluxe'
    },
    arrival: '16/06/2024',
    departure: '18/06/2024',
    amount: 95000,
    paid: 30000,
    balance: 65000,
    status: 'CONFIRM',
    source: 'Expedia'
  }
]
