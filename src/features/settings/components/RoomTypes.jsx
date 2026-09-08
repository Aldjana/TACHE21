import React from 'react'
import Card from '../../../components/ui/Card'
import Badge from '../../../components/common/Badge'
import { Plus, Bed } from 'lucide-react'

const RoomTypes = ({ roomTypes }) => {
  return (
    <Card className="border border-gray-200">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <Bed size={20} className="text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-900">Types de chambres</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {roomTypes.map((room) => (
            <Card key={room.id} className="border border-gray-200">
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-base font-semibold text-gray-900">{room.name}</h4>
                  <Badge className="bg-blue-100 text-blue-800 text-xs px-2 py-1">{room.units} UNITES</Badge>
                </div>
                <p className="text-sm text-gray-500 mb-3">{room.features}</p>
                <p className="text-lg font-bold text-emerald-600">{room.price.toLocaleString()} FCFA / nuit</p>
              </div>
            </Card>
          ))}
          <Card className="border-2 border-dashed border-gray-300 bg-transparent">
            <div className="p-4 flex flex-col items-center justify-center h-full min-h-[120px]">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                <Plus size={20} className="text-gray-400" />
              </div>
              <p className="text-sm font-medium text-gray-500 uppercase">Nouveau type</p>
            </div>
          </Card>
        </div>
      </div>
    </Card>
  )
}

export default RoomTypes
