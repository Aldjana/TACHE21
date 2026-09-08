import React from 'react'
import Card from '../../../components/ui/Card'
import Button from '../../../components/common/Button'
import { Building } from 'lucide-react'

const EstablishmentInfo = ({ info }) => {
  return (
    <Card className="border border-gray-200 lg:col-span-2">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <Building size={20} className="text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-900">Informations établissement</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-500 uppercase tracking-wide mb-1">NOM DE L'HÔTEL</label>
            <input
              type="text"
              defaultValue={info.hotelName}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 uppercase tracking-wide mb-1">TÉLÉPHONE</label>
            <input
              type="text"
              defaultValue={info.phone}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 uppercase tracking-wide mb-1">ADRESSE</label>
            <input
              type="text"
              defaultValue={info.address}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 uppercase tracking-wide mb-1">EMAIL DE CONTACT</label>
            <input
              type="email"
              defaultValue={info.email}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <Button variant="primary">Enregistrer les modifications</Button>
        </div>
      </div>
    </Card>
  )
}

export default EstablishmentInfo
