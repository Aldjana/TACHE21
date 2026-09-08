export const kpiStats = {
  caMois: 4250000,
  caGrowth: '+12.5%',
  caPrevious: 3780000,
  occupation: 78.4,
  occupationGrowth: '-2.1%',
  occupationTarget: 85,
  montantEncaisse: 3120000,
  soldeImpaye: 1130000,
  dossiersEnAttente: 24
}

export const analysisStats = {
  reservations: 156,
  directGrowth: '+40%',
  otaGrowth: '-12%',
  sourcePrincipale: 'Booking.com',
  sourcePercentage: 45,
  directPercentage: 30,
  autresPercentage: 25
}

export const paymentModes = [
  { name: 'ESPÈCES', amount: 1450000, percentage: 46, color: 'green' },
  { name: 'CB / WAVE / OM', amount: 1120000, percentage: 35, color: 'blue' },
  { name: 'VIREMENT', amount: 450000, percentage: 14, color: 'orange' },
  { name: 'CHÈQUE', amount: 100000, percentage: 5, color: 'gray' }
]

export const transactions = [
  {
    id: 1,
    initials: 'MD',
    client: 'Mamadou Diallo',
    description: 'Solde Chambre 204 — 3 Nuits',
    amount: 185000,
    mode: 'Orange Money',
    status: 'CONFIRMÉ',
    statusColor: 'green'
  },
  {
    id: 2,
    initials: 'SK',
    client: 'Sarah Kone',
    description: 'Acompte Booking Suite 101',
    amount: 75000,
    mode: 'CB Visa',
    status: 'CONFIRMÉ',
    statusColor: 'green'
  },
  {
    id: 3,
    initials: 'JN',
    client: 'Jean Ndiaye',
    description: 'Annulation sans préavis - Frais',
    amount: 45000,
    mode: 'Non payé',
    status: 'IMPAYÉ',
    statusColor: 'red'
  }
]
