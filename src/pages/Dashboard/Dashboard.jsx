import React from 'react'
import { useNavigate } from 'react-router-dom'
import KPICard from '../../features/dashboard/components/KPICard'
import FinancialCard from '../../features/dashboard/components/FinancialCard'
import ArrivalsTable from '../../features/dashboard/components/ArrivalsTable'
import DeparturesTable from '../../features/dashboard/components/DeparturesTable'
import QuickActionsCard from '../../features/dashboard/components/QuickActionsCard'
import AlertsCard from '../../features/dashboard/components/AlertsCard'
import { 
  dashboardStats, 
  todayArrivals, 
  todayDepartures, 
  alerts, 
  quickActions 
} from '../../features/dashboard/data/dashboardData'

const Dashboard = () => {
  const navigate = useNavigate()

  const handleNewReservation = () => {
    navigate('/reservations/new')
  }

  const handleQuickAction = (actionId) => {
    switch (actionId) {
      case 1:
        handleNewReservation()
        break
      case 2:
        // Navigate to payment registration
        break
      case 3:
        // Navigate to check-in
        break
      case 4:
        // Navigate to check-out
        break
      case 5:
        // Navigate to cash register
        break
      default:
        break
    }
  }

  const handleCheckIn = (arrivalId) => {
    // Handle check-in logic
    console.log('Check-in for arrival:', arrivalId)
  }

  const handleCheckOut = (departureId) => {
    // Handle check-out logic
    console.log('Check-out for departure:', departureId)
  }

  const handleViewAllArrivals = () => {
    // Navigate to all arrivals
  }

  const handleViewAllDepartures = () => {
    // Navigate to all departures
  }

  const handleViewFinancialDetails = () => {
    // Navigate to financial details
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* 1. SECTION SUPERIEURE : TITRE & EN-TÊTE */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
          Vue d'ensemble de l'activité de l'établissement aujourd'hui
        </h1>
        <p className="text-sm text-gray-500 mt-1">Données mises à jour en temps réel.</p>
      </div>

      {/* 2. RANGÉE DES KPI (5 CARTES EN GRILLE) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        <KPICard 
          title="TAUX D'OCCUPATION"
          value={`${dashboardStats.occupationRate} %`}
          variant="dark"
          trend={`+${dashboardStats.occupationTrend} % vs hier`}
        />
        <KPICard 
          title="DISPONIBLES"
          value={dashboardStats.availableRooms}
          underlineColor="green"
        />
        <KPICard 
          title="OCCUPÉES"
          value={dashboardStats.occupiedRooms}
          underlineColor="black"
        />
        <KPICard 
          title="RÉSERVÉES"
          value={`0${dashboardStats.reservedRooms}`}
          underlineColor="yellow"
        />
        <KPICard 
          title="À NETTOYER"
          value={`0${dashboardStats.toCleanRooms}`}
          variant="cleaning"
        />
      </div>

      {/* 3. RANGÉE FINANCIÈRE ET FLUX */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        <FinancialCard
          label="ENCAISSEMENTS DU JOUR"
          value={`${dashboardStats.todayCollections.toLocaleString()} FCFA`}
          subLabel="Solde à encaisser"
          subValue={`${dashboardStats.pendingCollections.toLocaleString()} FCFA`}
          linkText="Voir détails"
          variant="encaissements"
          onLinkClick={handleViewFinancialDetails}
        />
        <FinancialCard
          label="ARRIVÉES"
          value={dashboardStats.todayArrivals}
          subValue="check-ins"
        />
        <FinancialCard
          label="DÉPARTS"
          value={dashboardStats.todayDepartures}
          subValue="check-outs"
        />
      </div>

      {/* 4. SECTION PRINCIPALE (TABLEAUX & PANNEAUX LATÉRAUX) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Colonne Gauche (2/3) - 2 Tableaux empilés */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          <ArrivalsTable 
            arrivals={todayArrivals}
            onViewAll={handleViewAllArrivals}
            onCheckIn={handleCheckIn}
          />
          <DeparturesTable 
            departures={todayDepartures}
            onViewAll={handleViewAllDepartures}
            onCheckOut={handleCheckOut}
          />
        </div>

        {/* Colonne Droite (1/3) - 2 Cartes empilées */}
        <div className="space-y-4 sm:space-y-6">
          <QuickActionsCard 
            actions={quickActions}
            onActionClick={handleQuickAction}
          />
          <AlertsCard 
            alerts={alerts}
            totalAlerts={7}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
