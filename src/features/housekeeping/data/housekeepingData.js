export const kpiStats = {
  totalAFaire: 14,
  enCours: 4,
  pretes: 22,
  maintenance: 2
}

export const rooms = [
  {
    id: 102,
    number: '102',
    type: 'Suite Deluxe Vue Mer',
    departure: '11:20',
    client: 'M. Diallo',
    priority: 'PRIORITÉ HAUTE',
    note: 'Note: Client attendu à 14:00. Nettoyage urgent requis.',
    status: 'to_clean',
    hasAlert: true
  },
  {
    id: 205,
    number: '205',
    type: 'Chambre Double Standard',
    departure: '10:45',
    client: 'Jean Dupont',
    note: 'Note: Renouveler le set de serviettes spa.',
    status: 'to_clean',
    hasAlert: false
  },
  {
    id: 301,
    number: '301',
    type: 'Twin Executive',
    departure: 'Hier',
    client: 'Sarah K.',
    note: 'Note: Déjà nettoyée, vérifier minibar uniquement.',
    status: 'to_clean',
    hasAlert: false
  },
  {
    id: 108,
    number: '108',
    type: 'Petit Studio',
    departure: '12:00',
    client: 'L. Fall',
    note: 'Note: Demande de désinfection complète.',
    status: 'to_clean',
    hasAlert: false
  },
  {
    id: 402,
    number: '402',
    type: 'Chambre Simple',
    departure: null,
    client: 'Omar Sy',
    note: 'Problème: Fuite d\'eau signalée par le client.',
    status: 'waiting',
    hasAlert: true
  }
]
