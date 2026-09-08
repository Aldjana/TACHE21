import React from 'react'
import Card from '../../../components/ui/Card'

const HousekeepingKPI = ({ stats }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {/* Total à faire */}
      <Card className="border border-gray-200">
        <div className="p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Total à faire</p>
          <p className="text-2xl font-bold text-gray-900">{stats.totalAFaire} Chambers</p>
        </div>
      </Card>

      {/* En cours */}
      <Card className="border border-gray-200">
        <div className="p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">En cours</p>
          <p className="text-2xl font-bold text-gray-900">{stats.enCours} Chambers</p>
        </div>
      </Card>

      {/* Prêtes */}
      <Card className="border border-gray-200 border-l-4 border-l-green-500">
        <div className="p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Prêtes</p>
          <p className="text-2xl font-bold text-gray-900">{stats.pretes} Chambers</p>
        </div>
      </Card>

      {/* Maintenance */}
      <Card className="border border-gray-200 border-l-4 border-l-red-500">
        <div className="p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Maintenance</p>
          <p className="text-2xl font-bold text-red-600">{stats.maintenance} Urgent</p>
        </div>
      </Card>
    </div>
  )
}

export default HousekeepingKPI
