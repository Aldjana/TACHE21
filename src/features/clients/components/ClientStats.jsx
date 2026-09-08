import React from 'react'
import Card from '../../../components/ui/Card'
import { TrendingUp } from 'lucide-react'

const ClientStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {/* Total Clients */}
      <Card className="border border-gray-200">
        <div className="p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Total clients</p>
          <div className="flex items-end justify-between">
            <p className="text-2xl font-bold text-gray-900">{stats.totalClients.toLocaleString()}</p>
            <div className="flex items-center bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium flex-shrink-0">
              <TrendingUp size={12} className="mr-1" />
              {stats.totalGrowth}
            </div>
          </div>
        </div>
      </Card>

      {/* Clients Fidèles */}
      <Card className="border border-gray-200">
        <div className="p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Clients fidèles</p>
          <p className="text-2xl font-bold text-gray-900 mb-1">{stats.loyalClients}</p>
          <p className="text-xs text-gray-500">{stats.loyalPercentage}</p>
        </div>
      </Card>

      {/* CA Moyen / Client */}
      <Card className="border border-gray-200">
        <div className="p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">CA moyen / client</p>
          <div className="flex items-end justify-between">
            <p className="text-2xl font-bold text-gray-900">{stats.averageRevenue}</p>
            <div className="flex items-center bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium flex-shrink-0">
              <TrendingUp size={12} className="mr-1" />
              {stats.revenueGrowth}
            </div>
          </div>
        </div>
      </Card>

      {/* Nouveaux Ce Mois */}
      <Card className="border border-gray-200">
        <div className="p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Nouveaux ce mois</p>
          <p className="text-2xl font-bold text-gray-900 mb-1">{stats.newThisMonth}</p>
          <p className="text-xs text-gray-500">Objectif: {stats.target}</p>
        </div>
      </Card>
    </div>
  )
}

export default ClientStats
