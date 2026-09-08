import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/common/Button'
import { Plus } from 'lucide-react'
import ClientStats from '../../features/clients/components/ClientStats'
import ClientFilters from '../../features/clients/components/ClientFilters'
import ClientTable from '../../features/clients/components/ClientTable'
import { clientStats, clients } from '../../features/clients/data/clientsData'

const Clients = () => {
  const navigate = useNavigate()

  const handleNewReservation = () => {
    navigate('/reservations/new')
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Clients</h1>
          <p className="text-sm text-gray-500 mt-1">Consultez l'historique des séjours et les informations clients</p>
        </div>
        <Button variant="primary" icon={Plus} onClick={handleNewReservation}>Nouvelle réservation</Button>
      </div>

      {/* Statistics */}
      <ClientStats stats={clientStats} />

      {/* Filters */}
      <ClientFilters />

      {/* Client Table */}
      <ClientTable clients={clients} />
    </div>
  )
}

export default Clients
