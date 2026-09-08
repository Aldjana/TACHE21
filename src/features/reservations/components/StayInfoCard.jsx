import React from 'react'
import { Bed } from 'lucide-react'

const StayInfoCard = ({ stay, onChangeRoom }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Infos séjour</h3>
        <Bed size={20} className="text-gray-500" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <div>
          <p className="text-xs text-gray-500 mb-1">ARRIVÉE</p>
          <p className="font-bold text-gray-900">{stay.arrival}</p>
          <p className="text-xs text-gray-500">À partir de {stay.arrivalTime}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">DÉPART</p>
          <p className="font-bold text-gray-900">{stay.departure}</p>
          <p className="text-xs text-gray-500">Avant {stay.departureTime}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">DURÉE</p>
          <p className="font-bold text-gray-900">{stay.nights} Nuits</p>
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
            ✓ {stay.rateType}
          </span>
        </div>
      </div>
      <div className="bg-gray-50 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <Bed size={24} className="text-gray-700" />
          <div>
            <p className="font-semibold text-gray-900">{stay.room}</p>
            <p className="text-sm text-gray-500">{stay.roomDetails}</p>
          </div>
        </div>
        <button 
          onClick={onChangeRoom}
          className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors w-full sm:w-auto"
        >
          Changer chambre
        </button>
      </div>
    </div>
  )
}

export default StayInfoCard