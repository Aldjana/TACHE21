import React from 'react'
import Card from '../../../components/ui/Card'
import { TrendingUp } from 'lucide-react'

const CashStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {/* Encaissement Total */}
      <Card className="border border-gray-200 h-full">
        <div className="p-4 flex flex-col justify-between h-full">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Encaissement total</p>
          <div className="flex items-end justify-between">
            <p className="text-2xl font-bold text-gray-900">{stats.totalEncaissement.toLocaleString()} FCFA</p>
            <div className="flex items-center bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ml-2">
              <TrendingUp size={12} className="mr-1" />
              {stats.totalGrowth}
            </div>
          </div>
        </div>
      </Card>

      {/* Espèces */}
      <Card className="border border-gray-200 h-full">
        <div className="p-4 flex flex-col justify-between h-full">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Espèces</p>
          <p className="text-2xl font-bold text-gray-900">{stats.especes.toLocaleString()} FCFA</p>
        </div>
      </Card>

      {/* Wave */}
      <Card className="border border-gray-200 h-full">
        <div className="p-4 flex flex-col justify-between h-full">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Wave</p>
          <p className="text-2xl font-bold text-gray-900">{stats.wave.toLocaleString()} FCFA</p>
        </div>
      </Card>

      {/* OM */}
      <Card className="border border-gray-200 h-full">
        <div className="p-4 flex flex-col justify-between h-full">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">OM</p>
          <p className="text-2xl font-bold text-gray-900">{stats.om.toLocaleString()} FCFA</p>
        </div>
      </Card>

      {/* Carte */}
      <Card className="border border-gray-200 h-full">
        <div className="p-4 flex flex-col justify-between h-full">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Carte</p>
          <p className="text-2xl font-bold text-gray-900">{stats.carte.toLocaleString()} FCFA</p>
        </div>
      </Card>

      {/* Virement */}
      <Card className="border border-gray-200 h-full">
        <div className="p-4 flex flex-col justify-between h-full">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Virement</p>
          <p className="text-2xl font-bold text-gray-900">{stats.virement.toLocaleString()} FCFA</p>
        </div>
      </Card>

      {/* Paiements */}
      <Card className="border border-gray-200 h-full">
        <div className="p-4 flex flex-col justify-between h-full">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Paiements</p>
          <p className="text-2xl font-bold text-gray-900">{stats.paiements} <span className="text-sm font-normal text-gray-600">Transactions</span></p>
        </div>
      </Card>
    </div>
  )
}

export default CashStats
