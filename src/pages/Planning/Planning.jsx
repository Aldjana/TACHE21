import React, { useState } from 'react'
import Card from '../../components/ui/Card'
import Button from '../../components/common/Button'
import Select from '../../components/common/Select'
import { mockPlanningData } from '../../data/mock/planning'
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react'

const Planning = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('15 Mai - 21 Mai 2024')
  const [roomTypeFilter, setRoomTypeFilter] = useState('')
  const [statusFilter, setStatusFilter] = useState('')

  const roomTypeOptions = [
    { value: '', label: 'Tous les types' },
    { value: 'Standard', label: 'Standard' },
    { value: 'Suite', label: 'Suite' },
    { value: 'Double Deluxe', label: 'Double Deluxe' },
    { value: 'Suite Présidentielle', label: 'Suite Présidentielle' },
    { value: 'Appartement T3', label: 'Appartement T3' },
  ]

  const statusOptions = [
    { value: '', label: 'Tous les statuts' },
    { value: 'Disponible', label: 'Disponible' },
    { value: 'Réservée', label: 'Réservée' },
    { value: 'Occupée', label: 'Occupée' },
    { value: 'À nettoyer', label: 'À nettoyer' },
    { value: 'Maintenance', label: 'Maintenance' },
    { value: 'Bloquée', label: 'Bloquée' },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Disponible':
        return 'bg-green-100 text-green-800 border-green-300'
      case 'Réservée':
        return 'bg-blue-100 text-blue-800 border-blue-300'
      case 'Occupée':
        return 'bg-gray-700 text-white border-gray-800'
      case 'À nettoyer':
        return 'bg-orange-100 text-orange-800 border-orange-300'
      case 'Maintenance':
        return 'bg-red-100 text-red-800 border-red-300'
      case 'Bloquée':
        return 'bg-gray-200 text-gray-600 border-gray-300'
      default:
        return 'bg-gray-100 text-gray-600 border-gray-300'
    }
  }

  const getStatusDotColor = (status) => {
    switch (status) {
      case 'Disponible':
        return 'bg-green-500'
      case 'Réservée':
        return 'bg-blue-500'
      case 'Occupée':
        return 'bg-gray-700'
      case 'À nettoyer':
        return 'bg-orange-500'
      case 'Maintenance':
        return 'bg-red-500'
      case 'Bloquée':
        return 'bg-gray-400'
      default:
        return 'bg-gray-400'
    }
  }

  const rooms = [
    { number: '101', type: 'Standard' },
    { number: '102', type: 'Standard' },
    { number: '201', type: 'Double Deluxe' },
    { number: '202', type: 'Double Deluxe' },
    { number: '301', type: 'Suite Présidentielle' },
    { number: 'T3-1', type: 'Appartement T3 - Équipé' },
  ]

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card padding="sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-gray-500" />
              <span className="text-sm font-medium text-gray-700">PÉRIODE</span>
              <input
                type="text"
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-3 py-1.5 border border-gray-300 rounded-button text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>
            <Select
              options={roomTypeOptions}
              value={roomTypeFilter}
              onChange={(e) => setRoomTypeFilter(e.target.value)}
              className="w-48"
            />
            <Select
              options={statusOptions}
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-48"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm" icon={ChevronLeft} />
            <Button variant="secondary" size="sm">Aujourd'hui</Button>
            <Button variant="secondary" size="sm" icon={ChevronRight} />
          </div>
        </div>
      </Card>

      {/* Legend */}
      <Card padding="sm">
        <div className="flex items-center gap-6">
          {['Disponible', 'Réservée', 'Occupée', 'À nettoyer', 'Maintenance', 'Bloquée'].map((status) => (
            <div key={status} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${getStatusDotColor(status)}`} />
              <span className="text-xs text-gray-600">{status}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Planning Grid */}
      <Card className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-48 sticky left-0 bg-white">
                CHAMBRE
              </th>
              {mockPlanningData.slice(0, 6).map((day) => (
                <th key={day.date} className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[140px]">
                  <div className="text-gray-900 font-semibold">{day.dayName}</div>
                  <div className="text-gray-500">{day.date}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {rooms.map((room) => (
              <tr key={room.number}>
                <td className="px-4 py-3 text-sm font-medium text-gray-900 sticky left-0 bg-white border-r border-gray-200">
                  <div>Chambre {room.number}</div>
                  <div className="text-xs text-gray-500">{room.type}</div>
                </td>
                {mockPlanningData.slice(0, 6).map((day) => {
                  const roomData = day.rooms.find(r => r.roomNumber === room.number)
                  return (
                    <td key={`${room.number}-${day.date}`} className="px-2 py-2">
                      <div
                        className={`
                          h-20 rounded-lg border-2 p-2 text-xs
                          ${getStatusColor(roomData?.status || 'Disponible')}
                        `}
                      >
                        <div className="font-semibold text-xs mb-1">{roomData?.status || 'LIBRE'}</div>
                        {roomData?.client && (
                          <div className="text-xs opacity-90 truncate">{roomData.client}</div>
                        )}
                        {roomData?.status === 'Disponible' && (
                          <div className="text-xs opacity-90">Disponible</div>
                        )}
                      </div>
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}

export default Planning
