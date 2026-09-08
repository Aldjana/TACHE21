import React, { useState } from 'react'
import Button from '../../components/common/Button'
import { Plus } from 'lucide-react'
import HousekeepingKPI from '../../features/housekeeping/components/HousekeepingKPI'
import HousekeepingTabs from '../../features/housekeeping/components/HousekeepingTabs'
import RoomCard from '../../features/housekeeping/components/RoomCard'
import AddTaskCard from '../../features/housekeeping/components/AddTaskCard'
import { kpiStats, rooms } from '../../features/housekeeping/data/housekeepingData'

const Housekeeping = () => {
  const [activeTab, setActiveTab] = useState('to_clean')

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Ménage</h1>
          <p className="text-sm text-gray-500 mt-1">Suivez les chambres à nettoyer et à préparer</p>
        </div>
        <Button variant="primary" icon={Plus}>Nouvelle réservation</Button>
      </div>

      {/* KPI Cards */}
      <HousekeepingKPI stats={kpiStats} />

      {/* Tabs */}
      <HousekeepingTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Room Grid */}
      <div className="grid grid-cols-3 gap-4">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
        <AddTaskCard />
      </div>
    </div>
  )
}

export default Housekeeping
