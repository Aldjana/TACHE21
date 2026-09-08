import React, { useState } from 'react'
import Card from '../../../components/ui/Card'
import Button from '../../../components/common/Button'
import { StickyNote } from 'lucide-react'

const CashNotes = () => {
  const [note, setNote] = useState('')

  return (
    <Card className="border border-gray-200">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <StickyNote size={18} className="text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-900">Notes de caisse</h3>
        </div>

        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Inscrivez ici les observations particulières, écarts constatés ou instructions pour l'équipe de nuit..."
          className="w-full h-32 p-3 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-teal-500 resize-none mb-4"
        />

        <div className="bg-amber-50 border-l-4 border-amber-500 p-3 rounded-r-lg mb-4">
          <p className="text-sm font-semibold text-amber-900 mb-1">Rappel de procédure</p>
          <p className="text-xs text-amber-800">Vérifiez systématiquement les reçus pour tout paiement par terminal de carte bancaire.</p>
        </div>

        <Button variant="secondary" className="w-full">Enregistrer la note</Button>
      </div>
    </Card>
  )
}

export default CashNotes
