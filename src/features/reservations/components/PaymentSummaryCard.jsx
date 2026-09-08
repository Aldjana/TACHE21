import React from 'react'
import { CreditCard } from 'lucide-react'

const PaymentsCard = ({ payments, transactions }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex flex-col gap-4 mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Paiements & Transactions</h3>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-gray-500">TOTAL</p>
            <p className="font-bold text-gray-900">{payments.total.toLocaleString()} FCFA</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">PAYÉ</p>
            <p className="font-bold text-green-600">{payments.paid.toLocaleString()} FCFA</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">SOLDE</p>
            <p className="font-bold text-orange-600">{payments.balance.toLocaleString()} FCFA</p>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">ID TRANSACTION</th>
              <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">DATE</th>
              <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">MÉTHODE</th>
              <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">STATUT</th>
              <th className="text-right py-3 px-4 text-xs font-medium text-gray-500 uppercase">MONTANT</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length > 0 ? (
              transactions.map((trx) => (
                <tr key={trx.id} className="border-b border-gray-100">
                  <td className="py-3 px-4 text-sm font-medium text-gray-900">{trx.id}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{trx.date}</td>
                  <td className="py-3 px-4 text-sm text-gray-600 flex items-center gap-2">
                    <CreditCard size={16} className="text-gray-500" /> {trx.method}
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      trx.status === 'RÉUSSI' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {trx.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm font-bold text-gray-900 text-right">{trx.amount} FCFA</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-8 px-4 text-center text-sm text-gray-500">
                  Aucune transaction enregistrée
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PaymentsCard