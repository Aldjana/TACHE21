import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/common/Button'
import { Filter, Plus } from 'lucide-react'
import RoomStats from '../../features/rooms/components/RoomStats'
import RoomFilters from '../../features/rooms/components/RoomFilters'
import RoomCard from '../../features/rooms/components/RoomCard'
import { rooms } from '../../features/rooms/data/rooms'

const Rooms = () => {
  const navigate = useNavigate()

  const handleAddRoom = () => {
    console.log('Add room')
  }

  const handleAdvancedFilters = () => {
    console.log('Advanced filters')
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Chambres</h1>
          <p className="text-sm text-gray-500 mt-1">Gérez les chambres, tarifs et statuts</p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" icon={Filter} onClick={handleAdvancedFilters}>Filtres avancés</Button>
          <Button variant="primary" icon={Plus} onClick={handleAddRoom}>Ajouter une chambre</Button>
        </div>
      </div>

      {/* Search and Filters */}
      <RoomFilters />

      {/* Statistics */}
      <RoomStats />

      {/* Room Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  )
}

export default Rooms