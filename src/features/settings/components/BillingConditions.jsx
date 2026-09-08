import React from 'react'
import Card from '../../../components/ui/Card'
import { FileText } from 'lucide-react'

const BillingConditions = ({ conditions }) => {
  return (
    <Card className="border border-gray-200">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <FileText size={20} className="text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-900">Conditions de facturation</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm text-gray-700">Taxe de séjour (par pers/nuit)</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                defaultValue={conditions.taxeSejour}
                className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 outline-none focus:ring-2 focus:ring-emerald-500 text-right"
              />
              <span className="text-sm text-gray-600">FCFA</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label className="text-sm text-gray-700">TVA Applicable</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                defaultValue={conditions.tva}
                className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 outline-none focus:ring-2 focus:ring-emerald-500 text-right"
              />
              <span className="text-sm text-gray-600">%</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label className="text-sm text-gray-700">Délai d'annulation gratuite</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                defaultValue={conditions.delaiAnnulation}
                className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 outline-none focus:ring-2 focus:ring-emerald-500 text-right"
              />
              <span className="text-sm text-gray-600">HEURES</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default BillingConditions
