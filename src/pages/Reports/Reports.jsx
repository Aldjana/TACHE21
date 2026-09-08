import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/common/Button'
import { Plus, FileText, Table } from 'lucide-react'
import ReportsFilters from '../../features/reports/components/ReportsFilters'
import ReportsKPI from '../../features/reports/components/ReportsKPI'
import AnalysisRow from '../../features/reports/components/AnalysisRow'
import RevenueChart from '../../features/reports/components/RevenueChart'
import SourceDistribution from '../../features/reports/components/SourceDistribution'
import PaymentModes from '../../features/reports/components/PaymentModes'
import TransactionsTable from '../../features/reports/components/TransactionsTable'
import { kpiStats, analysisStats, paymentModes, transactions } from '../../features/reports/data/reportsData'

const Reports = () => {
  const navigate = useNavigate()

  const handleExportPDF = () => {
    console.log('Export PDF')
  }

  const handleExportExcel = () => {
    console.log('Export Excel')
  }

  const handleNewReservation = () => {
    navigate('/reservations/new')
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Rapports</h1>
        <div className="flex items-center gap-2">
          <Button variant="secondary" icon={FileText} onClick={handleExportPDF}>Exporter PDF</Button>
          <Button variant="secondary" icon={Table} onClick={handleExportExcel}>Excel</Button>
          <Button variant="primary" icon={Plus} onClick={handleNewReservation}>Nouvelle réservation</Button>
        </div>
      </div>

      {/* Filters */}
      <ReportsFilters />

      {/* KPI Cards */}
      <ReportsKPI stats={kpiStats} />

      {/* Analysis Row */}
      <AnalysisRow stats={analysisStats} />

      {/* Chart and Distribution */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <RevenueChart />
        </div>
        <div>
          <SourceDistribution stats={analysisStats} />
        </div>
      </div>

      {/* Payment Modes */}
      <PaymentModes modes={paymentModes} />

      {/* Transactions Table */}
      <TransactionsTable transactions={transactions} />
    </div>
  )
}

export default Reports
