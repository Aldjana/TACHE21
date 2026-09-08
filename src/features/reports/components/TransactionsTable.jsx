import React from 'react'
import Card from '../../../components/ui/Card'
import Badge from '../../../components/common/Badge'

const TransactionsTable = ({ transactions }) => {
  const getStatusBadge = (status, color) => {
    if (color === 'green') {
      return 'bg-green-100 text-green-800'
    }
    return 'bg-red-100 text-red-800'
  }

  return (
    <Card className="border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Dernières transactions impactantes</h3>
          <a href="#" className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
            Voir tout le journal →
          </a>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">Client</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">Description</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">Montant</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">Mode</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">Statut</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-semibold text-sm">
                      {transaction.initials}
                    </div>
                    <span className="text-sm font-medium text-gray-900">{transaction.client}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-sm text-gray-600">{transaction.description}</td>
                <td className={`py-4 px-4 text-sm font-semibold ${transaction.statusColor === 'red' ? 'text-red-600' : 'text-gray-900'}`}>
                  {transaction.amount.toLocaleString()} FCFA
                </td>
                <td className="py-4 px-4 text-sm text-gray-600">{transaction.mode}</td>
                <td className="py-4 px-4">
                  <Badge className={`text-xs px-2 py-1 ${getStatusBadge(transaction.status, transaction.statusColor)}`}>
                    {transaction.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default TransactionsTable
