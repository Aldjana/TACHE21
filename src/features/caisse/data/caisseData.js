export const cashStats = {
  totalEncaissement: 1245000,
  totalGrowth: '+12%',
  especes: 450000,
  wave: 280000,
  om: 125000,
  carte: 390000,
  virement: 0,
  paiements: 18
}

export const transactions = [
  {
    id: 1,
    time: '08:45',
    client: 'Mamadou Sy',
    reservation: '#RES-2904',
    amount: 75000,
    mode: 'Espèces',
    user: 'Awa'
  },
  {
    id: 2,
    time: '09:12',
    client: 'Jean Dupont',
    reservation: '#RES-2905',
    amount: 120000,
    mode: 'Carte',
    user: 'Awa'
  },
  {
    id: 3,
    time: '10:30',
    client: 'Fatou Ndiaye',
    reservation: '#RES-2906',
    amount: 45000,
    mode: 'Wave',
    user: 'Awa'
  },
  {
    id: 4,
    time: '11:15',
    client: 'OCP Group',
    reservation: '#RES-2908',
    amount: 450000,
    mode: 'Espèces',
    user: 'Awa'
  },
  {
    id: 5,
    time: '12:05',
    client: 'Marie Koné',
    reservation: '#RES-2910',
    amount: 65000,
    mode: 'OM',
    user: 'Awa'
  }
]

export const remainingBalance = {
  amount: 345500,
  note: 'Basé sur les départs prévus aujourd\'hui.'
}
