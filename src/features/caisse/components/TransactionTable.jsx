import React, { useState } from 'react'
import Card from '../../../components/ui/Card'
import Badge from '../../../components/common/Badge'
import { Search } from 'lucide-react'

const TransactionTable = ({ transactions }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const getPaymentModeBadge = (mode) => {
    switch (mode) {
      case 'Espèces':
        return 'bg-green-100 text-green-800'
      case 'Carte':
        return 'bg-gray-800 text-white'
      case 'Wave':
        return 'bg-orange-100 text-orange-800'
      case 'OM':
        return 'bg-pink-100 text-pink-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredTransactions = transactions.filter(transaction =>
    transaction.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.reservation.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Card className="border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Détail des transactions</h3>
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-teal-500 w-64"
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">Heure</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">Client</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">Réservation</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">Montant</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">Mode</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">Utilisateur</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction) => (
              <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 text-sm text-gray-600">{transaction.time}</td>
                <td className="py-3 px-4 text-sm font-medium text-gray-900">{transaction.client}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{transaction.reservation}</td>
                <td className="py-3 px-4 text-sm font-semibold text-gray-900">{transaction.amount.toLocaleString()} FCFA</td>
                <td className="py-3 px-4">
                  <Badge className={`text-xs px-2 py-1 ${getPaymentModeBadge(transaction.mode)}`}>
                    {transaction.mode}
                  </Badge>
                </td>
                <td className="py-3 px-4 text-sm text-gray-600">{transaction.user}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-500">Affichage de {filteredTransactions.length} transactions sur {transactions.length}</p>
      </div>
    </Card>
  )
}

export default TransactionTable
