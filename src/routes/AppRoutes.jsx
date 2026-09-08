import React from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import DashboardLayout from '../layouts/DashboardLayout'
import Dashboard from '../pages/Dashboard/Dashboard'
import Reservations from '../pages/Reservations/Reservations'
import NewReservation from '../pages/Reservations/NewReservation'
import ReservationDetail from '../pages/Reservations/ReservationDetail'
import Planning from '../pages/Planning/Planning'
import Rooms from '../pages/Rooms/Rooms'
import Clients from '../pages/Clients/Clients'
import Payments from '../pages/Payments/Payments'
import Cash from '../pages/Cash/Cash'
import Invoices from '../pages/Invoices/Invoices'
import Housekeeping from '../pages/Housekeeping/Housekeeping'
import Reports from '../pages/Reports/Reports'
import Settings from '../pages/Settings/Settings'
import CheckIn from '../pages/Reservations/CheckIn'
import CheckOut from '../pages/Reservations/CheckOut'

const AppRoutes = () => {
  const navigate = useNavigate()

  const handleNewReservation = () => {
    navigate('/reservations/new')
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      
      <Route element={<DashboardLayout title="Tableau de bord" subtitle="Vue d'ensemble de l'activité de l'établissement aujourd'hui" showNewButton onNewClick={handleNewReservation} />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      
      <Route element={<DashboardLayout title="Réservations" subtitle="Gérez les réservations, arrivées, départs et paiements" showNewButton onNewClick={handleNewReservation} />}>
        <Route path="/reservations" element={<Reservations />} />
      </Route>
      
      <Route element={<DashboardLayout title="Nouvelle réservation" subtitle="Créez une nouvelle réservation" />}>
        <Route path="/reservations/new" element={<NewReservation />} />
      </Route>
      
      <Route element={<DashboardLayout title="Détail réservation" subtitle="Informations détaillées de la réservation" />}>
        <Route path="/reservations/:id" element={<ReservationDetail />} />
      </Route>
      
      <Route element={<DashboardLayout title="Planning des chambres" subtitle="Visualisez et gérez l'occupation des chambres" />}>
        <Route path="/planning" element={<Planning />} />
      </Route>
      
      <Route element={<DashboardLayout title="Chambres" subtitle="Gérez les chambres et leurs statuts" />}>
        <Route path="/rooms" element={<Rooms />} />
      </Route>
      
      <Route element={<DashboardLayout title="Clients" subtitle="Gérez la base de données clients" />}>
        <Route path="/clients" element={<Clients />} />
      </Route>
      
      <Route element={<DashboardLayout title="Paiements" subtitle="Suivez et gérez les paiements" />}>
        <Route path="/payments" element={<Payments />} />
      </Route>
      
      <Route element={<DashboardLayout title="Caisse" subtitle="Gestion des opérations de caisse" />}>
        <Route path="/cash" element={<Cash />} />
      </Route>
      
      <Route element={<DashboardLayout title="Factures" subtitle="Gérez les factures clients" />}>
        <Route path="/invoices" element={<Invoices />} />
      </Route>
      
      <Route element={<DashboardLayout title="Ménage" subtitle="Gérez le statut de ménage des chambres" />}>
        <Route path="/housekeeping" element={<Housekeeping />} />
      </Route>
      
      <Route element={<DashboardLayout title="Rapports" subtitle="Analysez les performances de l'hôtel" />}>
        <Route path="/reports" element={<Reports />} />
      </Route>
      
      <Route element={<DashboardLayout title="Paramètres" subtitle="Configurez l'application" />}>
        <Route path="/settings" element={<Settings />} />
      </Route>
      
      <Route element={<DashboardLayout title="Check-in Client" subtitle="Enregistrement de l'arrivée du client" />}>
        <Route path="/reservations/:id/check-in" element={<CheckIn />} />
      </Route>
      
      <Route element={<DashboardLayout title="Check-out Client" subtitle="Enregistrement du départ du client" />}>
        <Route path="/reservations/:id/check-out" element={<CheckOut />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
