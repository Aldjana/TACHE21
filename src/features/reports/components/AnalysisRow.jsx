import React from 'react'
import Card from '../../../components/ui/Card'
import Badge from '../../../components/common/Badge'

const AnalysisRow = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* NB Réservations */}
      <Card className="border border-gray-200">
        <div className="p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">NB réservations</p>
          <p className="text-2xl font-bold text-gray-900 mb-2">{stats.reservations} confirmées</p>
          <div className="flex gap-2">
            <Badge className="bg-green-100 text-green-800 text-xs px-2 py-1">DIRECT {stats.directGrowth}</Badge>
            <Badge className="bg-red-100 text-red-800 text-xs px-2 py-1">OTA {stats.otaGrowth}</Badge>
          </div>
        </div>
      </Card>

      {/* Source principale de revenu */}
      <Card className="border border-gray-200">
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Source principale de revenu</p>
              <p className="text-lg font-bold text-gray-900">{stats.sourcePrincipale}</p>
              <p className="text-xs text-gray-500">Génère {stats.sourcePercentage}% du CA total</p>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <Badge className="bg-blue-100 text-blue-800 text-xs px-2 py-1">{stats.sourcePercentage}% Booking</Badge>
            <Badge className="bg-green-100 text-green-800 text-xs px-2 py-1">{stats.directPercentage}% Direct</Badge>
            <Badge className="bg-gray-100 text-gray-800 text-xs px-2 py-1">{stats.autresPercentage}% Autres</Badge>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default AnalysisRow
