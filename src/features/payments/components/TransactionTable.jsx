import React from 'react'
import Card from '../../../components/ui/Card'
import Badge from '../../../components/common/Badge'
import Button from '../../../components/common/Button'
import { Download, MoreVertical, CreditCard, Plus } from 'lucide-react'

const TransactionTable = ({ transactions }) => {
  const getPaymentModeBadge = (mode) => {
    switch (mode) {
      case 'ESPÈCES':
        return 'bg-green-100 text-green-800'
      case 'WAVE':
        return 'bg-amber-100 text-amber-800'
      case 'CARTE BLEUE':
        return 'bg-blue-100 text-blue-800'
      case 'ORANGE M.':
        return 'bg-pink-100 text-pink-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <Card className="border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Journal des Transactions</h3>
          <Button variant="secondary" icon={Download}>Exporter CSV</Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">Date</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">Réservation</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">Client</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">Montant</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">Mode</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">Référence</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">Enregistré par</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-4 text-sm text-gray-600">{transaction.date}</td>
                <td className="py-4 px-4 text-sm font-medium text-gray-900">{transaction.reservation}</td>
                <td className="py-4 px-4 text-sm text-gray-600">{transaction.client}</td>
                <td className="py-4 px-4 text-sm font-semibold text-gray-900">{transaction.amount.toLocaleString()} XOF</td>
                <td className="py-4 px-4">
                  <Badge className={`text-xs px-2 py-1 ${getPaymentModeBadge(transaction.mode)}`}>
                    {transaction.mode}
                  </Badge>
                </td>
                <td className="py-4 px-4 text-sm text-gray-600">{transaction.reference}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-semibold text-xs">
                      {transaction.registeredBy}
                    </div>
                    <span className="text-sm text-gray-600">{transaction.registeredByName}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreVertical size={16} className="text-gray-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between p-4 border-t border-gray-200">
        <p className="text-sm text-gray-500">Affichage de 1 à {transactions.length} sur 142 transactions</p>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 hover:bg-gray-100 rounded-lg text-sm text-gray-600">Précédent</button>
          <button className="px-3 py-1.5 bg-emerald-500 text-white rounded-lg text-sm font-medium">1</button>
          <button className="px-3 py-1.5 hover:bg-gray-100 rounded-lg text-sm text-gray-600">2</button>
          <button className="px-3 py-1.5 hover:bg-gray-100 rounded-lg text-sm text-gray-600">3</button>
          <button className="px-3 py-1.5 hover:bg-gray-100 rounded-lg text-sm text-gray-600">Suiv...</button>
        </div>
      </div>

      {/* Floating action button */}
      <div className="fixed bottom-6 right-6">
        <Button variant="primary" icon={CreditCard} className="rounded-full shadow-lg">
          <Plus size={20} className="mr-2" />
          Nouveau paiement
        </Button>
      </div>
    </Card>
  )
}

export default TransactionTable
