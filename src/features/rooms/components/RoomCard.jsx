import React from 'react'
import Card from '../../../components/ui/Card'
import Badge from '../../../components/common/Badge'
import Button from '../../../components/common/Button'
import { Users, Calendar, Clock, MoreVertical } from 'lucide-react'

const RoomCard = ({ room }) => {
  const getStatusConfig = (status) => {
    switch (status) {
      case 'Disponible':
        return { bg: 'bg-green-100', text: 'text-green-800' }
      case 'Occupée':
        return { bg: 'bg-gray-700', text: 'text-white' }
      case 'Réservée':
        return { bg: 'bg-amber-700', text: 'text-white' }
      case 'Maintenance':
        return { bg: 'bg-gray-400', text: 'text-white' }
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-800' }
    }
  }

  const statusConfig = getStatusConfig(room.status)

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={room.image} 
          alt={`Chambre ${room.number}`}
          className={`w-full h-48 object-cover ${room.status === 'Maintenance' ? 'grayscale' : ''}`}
        />
        <div className="absolute top-3 right-3">
          <Badge className={`${statusConfig.bg} ${statusConfig.text} text-xs px-3 py-1`}>
            {room.status}
          </Badge>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <div className="flex items-center gap-2 text-white">
            <Users size={16} />
            <span className="text-sm font-medium">{room.capacity} personnes</span>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-900">Ch. {room.number}</h3>
          <span className="text-sm font-semibold text-gray-600">{room.type}</span>
        </div>
        
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-2xl font-bold text-gray-900">{room.price.toLocaleString()} FCFA</span>
          <span className="text-sm text-gray-500">PAR NUIT</span>
        </div>

        {room.status === 'Disponible' && (
          <div className="bg-gray-50 rounded-lg p-3 mb-4">
            <p className="text-xs text-gray-600">Prochaine rés. : {room.nextReservation}</p>
          </div>
        )}

        {room.status === 'Occupée' && (
          <div className="bg-blue-50 rounded-lg p-3 mb-4">
            <p className="text-xs font-semibold text-blue-900 mb-1">OCCUPANT ACTUEL</p>
            <p className="text-sm font-medium text-blue-800">{room.guestInitials} {room.guestName}</p>
          </div>
        )}

        {room.status === 'Réservée' && (
          <div className="bg-amber-50 rounded-lg p-3 mb-4">
            <p className="text-xs text-gray-600 mb-1">Check-in prévu :</p>
            <p className="text-sm font-semibold text-amber-900">{room.checkInTime}</p>
            <div className="w-full bg-amber-200 rounded-full h-1.5 mt-2">
              <div className="bg-amber-600 h-1.5 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
        )}

        <div className="flex gap-2">
          {room.status === 'Disponible' && (
            <>
              <Button variant="secondary" size="sm" className="flex-1">Détails</Button>
              <Button variant="primary" size="sm" className="flex-1">Réserver</Button>
            </>
          )}
          
          {room.status === 'Occupée' && (
            <>
              <Button variant="secondary" size="sm" className="flex-1">Fiche Client</Button>
              <Button variant="secondary" size="sm" className="px-3">
                <MoreVertical size={16} />
              </Button>
            </>
          )}
          
          {room.status === 'Réservée' && (
            <>
              <Button variant="secondary" size="sm" className="flex-1">Détails</Button>
              <Button variant="success" size="sm" className="flex-1">Check-in</Button>
            </>
          )}

          {room.status === 'Maintenance' && (
            <Button variant="secondary" size="sm" className="flex-1">Détails</Button>
          )}
        </div>
      </div>
    </Card>
  )
}

export default RoomCard
