import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/common/Button'
import { Plus } from 'lucide-react'
import PaymentStats from '../../features/payments/components/PaymentStats'
import PaymentFilters from '../../features/payments/components/PaymentFilters'
import TransactionTable from '../../features/payments/components/TransactionTable'
import { paymentStats, transactions } from '../../features/payments/data/paymentsData'

const Payments = () => {
  const navigate = useNavigate()

  const handleNewReservation = () => {
    navigate('/reservations/new')
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Paiements</h1>
          <p className="text-sm text-gray-500 mt-1">Suivez les avances, soldes et encaissements de votre établissement en temps réel.</p>
        </div>
        <Button variant="primary" icon={Plus} onClick={handleNewReservation}>Nouvelle réservation</Button>
      </div>

      {/* Statistics */}
      <PaymentStats stats={paymentStats} />

      {/* Filters */}
      <PaymentFilters />

      {/* Transaction Table */}
      <TransactionTable transactions={transactions} />
    </div>
  )
}

export default Payments
