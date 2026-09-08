import React from 'react'
import Card from '../../../components/ui/Card'
import { TrendingUp, TrendingDown } from 'lucide-react'

const ReportsKPI = ({ stats }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {/* CA du mois */}
      <Card className="border border-gray-200">
        <div className="p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">CA du mois</p>
          <div className="flex items-end justify-between mb-2">
            <p className="text-2xl font-bold text-gray-900">{stats.caMois.toLocaleString()} FCFA</p>
            <div className="flex items-center bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
              <TrendingUp size={12} className="mr-1" />
              {stats.caGrowth}
            </div>
          </div>
          <p className="text-xs text-gray-500">vs {stats.caPrevious.toLocaleString()} FCFA (M-1)</p>
        </div>
      </Card>

      {/* Occupation moyenne */}
      <Card className="border border-gray-200">
        <div className="p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Occupation moyenne</p>
          <div className="flex items-end justify-between mb-2">
            <p className="text-2xl font-bold text-gray-900">{stats.occupation}%</p>
            <div className="flex items-center bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium">
              <TrendingDown size={12} className="mr-1" />
              {stats.occupationGrowth}
            </div>
          </div>
          <p className="text-xs text-gray-500">Objectif: {stats.occupationTarget}%</p>
        </div>
      </Card>

      {/* Montant encaissé */}
      <Card className="border border-gray-200">
        <div className="p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Montant encaissé</p>
          <p className="text-2xl font-bold text-gray-900 mb-2">{stats.montantEncaisse.toLocaleString()} FCFA</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>
      </Card>

      {/* Solde impayé */}
      <Card className="border border-gray-200">
        <div className="p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Solde impayé</p>
          <p className="text-2xl font-bold text-red-600 mb-2">{stats.soldeImpaye.toLocaleString()} FCFA</p>
          <p className="text-xs text-gray-500">{stats.dossiersEnAttente} dossiers en attente</p>
        </div>
      </Card>
    </div>
  )
}

export default ReportsKPI
