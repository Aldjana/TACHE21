import React from 'react'
import Card from '../../../components/ui/Card'
import Button from '../../../components/common/Button'
import { Check, Banknote, Smartphone, ArrowRightLeft, CreditCard } from 'lucide-react'

const PaymentModes = ({ modes }) => {
  const getIcon = (name) => {
    switch (name) {
      case 'Espèces':
        return <Banknote size={20} className="text-emerald-600" />
      case 'Wave':
        return <Smartphone size={20} className="text-blue-600" />
      case 'Orange Money':
        return <ArrowRightLeft size={20} className="text-orange-600" />
      case 'Carte Bancaire':
        return <CreditCard size={20} className="text-gray-400" />
      default:
        return null
    }
  }

  return (
    <Card className="border border-gray-200 lg:col-span-1">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <CreditCard size={20} className="text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-900">Modes de paiement</h3>
        </div>
        <div className="space-y-3">
          {modes.map((mode) => (
            <label 
              key={mode.id} 
              className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors ${
                mode.checked 
                  ? 'bg-white border-gray-300' 
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="flex items-center gap-3">
                {getIcon(mode.name)}
                <span className={`text-sm ${mode.checked ? 'text-gray-900' : 'text-gray-400'}`}>
                  {mode.name}
                </span>
              </div>
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                mode.checked ? 'bg-emerald-500 border-emerald-500' : 'border-gray-300'
              }`}>
                {mode.checked && <Check size={14} className="text-white" />}
              </div>
            </label>
          ))}
        </div>
        <div className="mt-4">
          <Button variant="secondary" className="w-full border-dashed">+ AJOUTER UN MODE</Button>
        </div>
      </div>
    </Card>
  )
}

export default PaymentModes
