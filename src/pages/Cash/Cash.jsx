import React from 'react'
import Button from '../../components/common/Button'
import { FileText, Table, Lock } from 'lucide-react'
import CashStats from '../../features/caisse/components/CashStats'
import TransactionTable from '../../features/caisse/components/TransactionTable'
import RemainingBalance from '../../features/caisse/components/RemainingBalance'
import CashNotes from '../../features/caisse/components/CashNotes'
import { cashStats, transactions, remainingBalance } from '../../features/caisse/data/caisseData'

const Cash = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Contrôlez les encaissements de la journée</h1>
          <p className="text-sm text-gray-500 mt-1">Récapitulatif financier et gestion des flux de trésorerie en temps réel.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" icon={FileText}>Exporter PDF</Button>
          <Button variant="secondary" icon={Table}>Exporter Excel</Button>
          <Button variant="success" icon={Lock}>Clôturer la caisse</Button>
        </div>
      </div>

      {/* Statistics */}
      <CashStats stats={cashStats} />

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Transaction Table - Takes 2/3 of width */}
        <div className="lg:col-span-2">
          <TransactionTable transactions={transactions} />
        </div>

        {/* Right Sidebar - Takes 1/3 of width */}
        <div className="space-y-6">
          <RemainingBalance balance={remainingBalance} />
          <CashNotes />
        </div>
      </div>
    </div>
  )
}

export default Cash
