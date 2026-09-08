import React from 'react'
import Card from '../../../components/ui/Card'
import { Search, Filter } from 'lucide-react'

const RoomFilters = () => {
  return (
    <Card className="border border-gray-200">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center flex-1 mr-4">
          <Search size={18} className="text-gray-400 mr-3" />
          <input 
            type="text"
            placeholder="Rechercher par N° ou type..."
            className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400"
          />
        </div>
        
        <div className="flex items-center gap-3">
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-500">
            <option>Tous les types</option>
            <option>Standard</option>
            <option>Double Luxe</option>
            <option>Suite Royale</option>
          </select>
          
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-500">
            <option>Tous les statuts</option>
            <option>Disponible</option>
            <option>Occupée</option>
            <option>Réservée</option>
            <option>Maintenance</option>
          </select>
        </div>
      </div>
    </Card>
  )
}

export default RoomFilters
