import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../components/ui/Card'
import Badge from '../../components/common/Badge'
import Button from '../../components/common/Button'
import SearchBar from '../../components/ui/SearchBar'
import Select from '../../components/common/Select'
import Table from '../../components/ui/Table'
import { mockReservations } from '../../data/mock/reservations'

const Reservations = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [sourceFilter, setSourceFilter] = useState('')

  const handleNewReservation = () => {
    navigate('/reservations/new')
  }

  const handleRowClick = (row) => {
    navigate(`/reservations/${row.id}`)
  }

  const statusOptions = [
    { value: '', label: 'Tous les statuts' },
    { value: 'CONFIRM', label: 'Confirmé' },
    { value: 'ARRIVÉE PRÉVUE', label: 'Arrivée prévue' },
    { value: 'OCCUPÉE', label: 'Occupée' },
    { value: 'PARTI', label: 'Parti' },
  ]

  const sourceOptions = [
    { value: '', label: 'Toutes les sources' },
    { value: 'Direct', label: 'Direct / Walk-in' },
    { value: 'Booking.com', label: 'Booking.com' },
    { value: 'Expedia', label: 'Expedia' },
  ]

  const getStatusBadge = (status) => {
    switch (status) {
      case 'CONFIRM':
        return <Badge variant="success">{status}</Badge>
      case 'ARRIVÉE PRÉVUE':
        return <Badge variant="default">{status}</Badge>
      case 'OCCUPÉE':
        return <Badge variant="info">{status}</Badge>
      case 'PARTI':
        return <Badge variant="default">{status}</Badge>
      default:
        return <Badge variant="default">{status}</Badge>
    }
  }

  const columns = [
    { key: 'id', header: 'N° RÉSERVATION' },
    { 
      key: 'client', 
      header: 'CLIENT',
      render: (value) => `${value.firstName} ${value.lastName}`
    },
    { 
      key: 'room', 
      header: 'CHAMBRE',
      render: (value) => `Ch. ${value.number}`
    },
    { key: 'arrival', header: 'ARRIVÉE' },
    { key: 'departure', header: 'DÉPART' },
    { 
      key: 'amount', 
      header: 'MONTANT',
      render: (value) => `${value.toLocaleString()} FCFA`
    },
    { 
      key: 'paid', 
      header: 'PAYÉ',
      render: (value) => (
        <span className={value > 0 ? 'text-green-600 font-medium' : 'text-gray-900'}>
          {value.toLocaleString()} FCFA
        </span>
      )
    },
    { 
      key: 'balance', 
      header: 'SOLDE',
      render: (value) => (
        <span className={value > 0 ? 'text-red-600 font-medium' : 'text-gray-900'}>
          {value.toLocaleString()} FCFA
        </span>
      )
    },
    { 
      key: 'status', 
      header: 'STATUT RÉS',
      render: (value) => getStatusBadge(value)
    },
  ]

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <Card padding="sm">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1 w-full">
            <SearchBar
              placeholder="Rechercher par nom, chambre, N°..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
            <Select
              options={statusOptions}
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full sm:w-48"
            />
            <Select
              options={sourceOptions}
              value={sourceFilter}
              onChange={(e) => setSourceFilter(e.target.value)}
              className="w-full sm:w-48"
            />
          </div>
        </div>
      </Card>

      {/* Reservations Table */}
      <Card>
        <Table
          columns={columns}
          data={mockReservations}
          onRowClick={handleRowClick}
        />
        <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm text-gray-500">Affichage 1-{mockReservations.length} sur {mockReservations.length} réservations</p>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" disabled>Précédent</Button>
            <Button variant="secondary" size="sm" disabled>Suivant</Button>
          </div>
        </div>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card>
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-full mr-4 flex-shrink-0">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">ARRIVÉES DU JOUR</p>
              <p className="text-xl sm:text-2xl font-semibold text-gray-900">14</p>
              <p className="text-xs text-green-600">+12%</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center">
            <div className="p-3 bg-orange-100 rounded-full mr-4 flex-shrink-0">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">DÉPARTS DU JOUR</p>
              <p className="text-xl sm:text-2xl font-semibold text-gray-900">09</p>
              <p className="text-xs text-orange-600">8 attendus</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Reservations
