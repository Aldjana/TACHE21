import React from 'react'
import Button from '../../../components/common/Button'
import { Search, Sliders, Plus } from 'lucide-react'

const ClientFilters = () => {
  return (
    <div className="flex items-center gap-4 w-fit">
      <div className="relative w-80">
        <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Rechercher par nom, email ou téléphone..."
          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <select className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-700 outline-none focus:ring-2 focus:ring-emerald-500 w-40">
        <option>Type de client</option>
        <option>Particulier</option>
        <option>Entreprise</option>
        <option>VIP</option>
      </select>

      <Button variant="secondary" icon={Sliders}>Plus de filtres</Button>
      <Button variant="success" icon={Plus}>Ajouter client</Button>
    </div>
  )
}

export default ClientFilters
