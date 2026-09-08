import React from 'react'
import Card from '../../../components/ui/Card'
import Button from '../../../components/common/Button'
import { Search } from 'lucide-react'

const PaymentFilters = () => {
  return (
    <Card className="border border-gray-200">
      <div className="p-4">
        <div className="flex gap-4">
          {/* Recherche */}
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-600 mb-1">RECHERCHE</label>
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Référence, client, rés"
                className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="mt-2">
              <Button variant="primary" className="w-full">Filtrer</Button>
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">DATE</label>
            <input
              type="text"
              placeholder="jj/mm/aaaa"
              className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Mode */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">MODE</label>
            <select className="min-w-[160px] px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 outline-none focus:ring-2 focus:ring-emerald-500">
              <option>Tous les modes</option>
              <option>Espèces</option>
              <option>Wave</option>
              <option>Orange Money</option>
              <option>Carte</option>
              <option>Virement</option>
            </select>
          </div>

          {/* Utilisateur */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">UTILISATEUR</label>
            <select className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 outline-none focus:ring-2 focus:ring-emerald-500">
              <option>Tous</option>
              <option>Awa</option>
              <option>Moussa</option>
            </select>
          </div>

          {/* Statut */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">STATUT</label>
            <select className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 outline-none focus:ring-2 focus:ring-emerald-500">
              <option>Confirmé</option>
              <option>En attente</option>
              <option>Annulé</option>
            </select>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default PaymentFilters
