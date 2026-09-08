import React from 'react'
import Card from '../../../components/ui/Card'
import Badge from '../../../components/common/Badge'

const PaymentModes = ({ modes }) => {
  const getBorderColor = (color) => {
    switch (color) {
      case 'green': return 'border-l-green-500'
      case 'blue': return 'border-l-blue-500'
      case 'orange': return 'border-l-orange-500'
      case 'gray': return 'border-l-gray-500'
      default: return 'border-l-gray-500'
    }
  }

  const totalAmount = modes.reduce((sum, mode) => sum + mode.amount, 0)

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Modes de Paiement</h3>
        <Badge className="bg-gray-100 text-gray-800 text-sm px-3 py-1">
          TOTAL: {totalAmount.toLocaleString()} FCFA
        </Badge>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {modes.map((mode) => (
          <Card key={mode.name} className={`border border-gray-200 border-l-4 ${getBorderColor(mode.color)}`}>
            <div className="p-4">
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{mode.name}</p>
              <p className="text-2xl font-bold text-gray-900 mb-1">{(mode.amount / 1000).toFixed(0)}k</p>
              <p className="text-xs text-gray-500">{mode.percentage}% des transactions</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default PaymentModes
