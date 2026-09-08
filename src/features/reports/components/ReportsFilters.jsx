import React from 'react'
import Button from '../../../components/common/Button'

const ReportsFilters = () => {
  return (
    <div className="flex items-center gap-4">
      <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 outline-none focus:ring-2 focus:ring-emerald-500">
        <option>Ce mois-ci</option>
        <option>Cette semaine</option>
        <option>Cette année</option>
        <option>Personnalisé</option>
      </select>

      <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 outline-none focus:ring-2 focus:ring-emerald-500">
        <option>Toutes les sources</option>
        <option>Booking.com</option>
        <option>Direct</option>
        <option>Autres</option>
      </select>

      <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 outline-none focus:ring-2 focus:ring-emerald-500">
        <option>Tous types</option>
        <option>Standard</option>
        <option>Deluxe</option>
        <option>Suite</option>
      </select>

      <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 outline-none focus:ring-2 focus:ring-emerald-500">
        <option>Tous statuts</option>
        <option>Payé</option>
        <option>En attente</option>
        <option>Impayé</option>
      </select>

      <Button variant="success">Appliquer</Button>
    </div>
  )
}

export default ReportsFilters
