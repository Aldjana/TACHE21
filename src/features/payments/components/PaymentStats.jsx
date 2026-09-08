import React from 'react'
import Card from '../../../components/ui/Card'
import { TrendingUp, Banknote, Antenna, CreditCard, Building2 } from 'lucide-react'

const PaymentStats = ({ stats }) => {
  return (
    <div className="space-y-4">
      {/* Ligne 1 : 5 cartes horizontalement */}
      <div className="grid grid-cols-5 gap-4">
        {/* Total Encaissé */}
        <Card className="border border-gray-200">
          <div className="p-4">
            <div className="flex items-end justify-between mb-2">
              <p className="text-xs text-gray-500 uppercase tracking-wide">Total encaissé</p>
              <div className="flex items-center bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                <TrendingUp size={12} className="mr-1" />
                {stats.totalGrowth}
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stats.totalEncaisse.toLocaleString()} XOF</p>
          </div>
        </Card>

        {/* Espèces */}
        <Card className="border border-gray-200">
          <div className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Banknote size={16} className="text-gray-600" />
              <p className="text-xs text-gray-500 uppercase tracking-wide">Espèces</p>
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-2">{(stats.especes / 1000).toFixed(0)}k</p>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div className="bg-gray-800 h-1.5 rounded-full" style={{ width: '36%' }}></div>
            </div>
          </div>
        </Card>

        {/* Wave */}
        <Card className="border border-gray-200">
          <div className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Antenna size={16} className="text-gray-600" />
              <p className="text-xs text-gray-500 uppercase tracking-wide">Wave</p>
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-2">{(stats.wave / 1000).toFixed(0)}k</p>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '26%' }}></div>
            </div>
          </div>
        </Card>

        {/* Orange Money */}
        <Card className="border border-gray-200">
          <div className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Building2 size={16} className="text-gray-600" />
              <p className="text-xs text-gray-500 uppercase tracking-wide">Orange Money</p>
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-2">{(stats.om / 1000).toFixed(0)}k</p>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div className="bg-amber-700 h-1.5 rounded-full" style={{ width: '22%' }}></div>
            </div>
          </div>
        </Card>

        {/* Carte */}
        <Card className="border border-gray-200">
          <div className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <CreditCard size={16} className="text-gray-600" />
              <p className="text-xs text-gray-500 uppercase tracking-wide">Carte</p>
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-2">{(stats.carte / 1000).toFixed(0)}k</p>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '12%' }}></div>
            </div>
          </div>
        </Card>
      </div>

      {/* Ligne 2 : Virement seul aligné à gauche */}
      <div className="grid grid-cols-5 gap-4">
        <Card className="border border-gray-200">
          <div className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Building2 size={16} className="text-gray-600" />
              <p className="text-xs text-gray-500 uppercase tracking-wide">Virement</p>
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-2">{(stats.virement / 1000).toFixed(0)}k</p>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div className="bg-gray-400 h-1.5 rounded-full" style={{ width: '3%' }}></div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default PaymentStats
