import React from 'react'
import Card from '../../../components/ui/Card'
import Badge from '../../../components/common/Badge'
import { CheckCircle } from 'lucide-react'

const TransactionsCard = ({ transactions }) => {
  return (
    <Card>
      <div className="space-y-3">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <CheckCircle size={18} className="text-green-600 mr-3" />
              <div>
                <p className="font-medium text-gray-900">{transaction.id}</p>
                <p className="text-sm text-gray-500">{transaction.date} • {transaction.method}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-900">{transaction.amount.toLocaleString()} FCFA</p>
              <Badge variant="success" size="sm">{transaction.status}</Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default TransactionsCard