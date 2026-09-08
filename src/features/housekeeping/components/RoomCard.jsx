import React from 'react'
import Card from '../../../components/ui/Card'
import Badge from '../../../components/common/Badge'
import Button from '../../../components/common/Button'
import { AlertTriangle, Lock } from 'lucide-react'

const RoomCard = ({ room }) => {
  const getPriorityBadge = (priority) => {
    return 'bg-red-100 text-red-800 border border-red-300'
  }

  const getWaitingBadge = () => {
    return 'bg-gray-100 text-gray-700 border border-gray-300'
  }

  const getNoteBg = (hasAlert) => {
    return hasAlert ? 'bg-red-50 border border-red-200' : 'bg-gray-50 border border-gray-200'
  }

  return (
    <Card className={`border ${room.priority ? 'border-red-300' : 'border-gray-200'}`}>
      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900">Ch. {room.number}</h3>
            <p className="text-sm text-gray-600">{room.type}</p>
          </div>
          {room.priority && (
            <Badge className={`text-xs px-2 py-1 ${getPriorityBadge(room.priority)}`}>
              {room.priority}
            </Badge>
          )}
          {room.status === 'waiting' && (
            <Badge className={`text-xs px-2 py-1 ${getWaitingBadge()}`}>
              EN ATTENTE
            </Badge>
          )}
        </div>

        {/* Departure */}
        {room.departure && (
          <div className="mb-3">
            <p className="text-xs text-gray-500">DÉPART {room.departure}</p>
            <p className="text-sm text-gray-700">{room.client}</p>
          </div>
        )}

        {/* Note */}
        <div className={`p-3 rounded-lg mb-4 ${getNoteBg(room.hasAlert)}`}>
          <p className="text-xs text-gray-700">{room.note}</p>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          {room.status === 'waiting' ? (
            <>
              <Button variant="secondary" icon={Lock} className="flex-1">Bloquée</Button>
              <Button variant="danger" icon={AlertTriangle} className="px-3" />
            </>
          ) : (
            <>
              <Button variant="success" className="flex-1">Marquer propre</Button>
              <Button variant="secondary" icon={AlertTriangle} className="px-3" />
            </>
          )}
        </div>
      </div>
    </Card>
  )
}

export default RoomCard
