import React from 'react'
import Card from '../../../components/ui/Card'
import { Info } from 'lucide-react'

const RemainingBalance = ({ balance }) => {
  return (
    <Card className="bg-[#0F172A] border-none">
      <div className="p-4">
        <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">Solde restant à encaisser</p>
        <div className="mb-4">
          <p className="text-3xl font-bold text-white">{balance.amount.toLocaleString()} FCFA</p>
        </div>
        <div className="flex items-start gap-2">
          <Info size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
          <p className="text-xs text-gray-400">{balance.note}</p>
        </div>
      </div>
    </Card>
  )
}

export default RemainingBalance
