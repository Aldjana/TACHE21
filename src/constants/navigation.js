export const navigationConfig = [
  {
    section: 'MAIN',
    items: [
      { label: 'Tableau de bord', path: '/dashboard', icon: 'LayoutDashboard' },
      { label: 'Planning', path: '/planning', icon: 'Calendar' },
      { label: 'Réservations', path: '/reservations', icon: 'CalendarDays' },
      { label: 'Chambres', path: '/rooms', icon: 'BedDouble' },
      { label: 'Clients', path: '/clients', icon: 'Users' },
    ]
  },
  {
    section: 'FINANCE',
    items: [
      { label: 'Paiements', path: '/payments', icon: 'CreditCard' },
      { label: 'Caisse', path: '/cash', icon: 'Wallet' },
      { label: 'Factures', path: '/invoices', icon: 'FileText' },
    ]
  },
  {
    section: 'OPÉRATIONS',
    items: [
      { label: 'Ménage', path: '/housekeeping', icon: 'Sparkles' },
      { label: 'Rapports', path: '/reports', icon: 'BarChart3' },
      { label: 'Paramètres', path: '/settings', icon: 'Settings' },
    ]
  }
]
