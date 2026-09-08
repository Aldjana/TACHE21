import React from 'react'
import Card from '../../../components/ui/Card'
import Button from '../../../components/common/Button'
import { Bed } from 'lucide-react'

const RoomDetailsCard = ({ room, onChangeRoom }) => {
  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Détails chambre</h3>
        <Button variant="secondary" size="sm" onClick={onChangeRoom}>
          Changer chambre
        </Button>
      </div>
      <div className="flex items-start">
        <Bed size={18} className="text-gray-500 mr-3 mt-0.5" />
        <div>
          <p className="font-medium text-gray-900">Chambre {room.number} - {room.type}</p>
          <p className="text-sm text-gray-500 mt-1">{room.capacity}, {room.view}</p>
        </div>
      </div>
    </Card>
  )
}

export default RoomDetailsCard