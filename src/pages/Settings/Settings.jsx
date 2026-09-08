import React from 'react'
import Button from '../../components/common/Button'
import { Plus, Bell } from 'lucide-react'
import SettingsHeader from '../../features/settings/components/SettingsHeader'
import EstablishmentInfo from '../../features/settings/components/EstablishmentInfo'
import PaymentModes from '../../features/settings/components/PaymentModes'
import UsersTable from '../../features/settings/components/UsersTable'
import RoomTypes from '../../features/settings/components/RoomTypes'
import ReservationSources from '../../features/settings/components/ReservationSources'
import BillingConditions from '../../features/settings/components/BillingConditions'
import { establishmentInfo, paymentModes, users, roomTypes, reservationSources, billingConditions } from '../../features/settings/data/settingsData'

const Settings = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
     

      {/* Section Header */}
      <div className="flex items-center justify-between">
        <SettingsHeader />
        <Button variant="primary" icon={Plus}>Nouvelle réservation</Button>
      </div>

      {/* First Row: Establishment Info & Payment Modes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <EstablishmentInfo info={establishmentInfo} />
        <PaymentModes modes={paymentModes} />
      </div>

      {/* Second Row: Users Table */}
      <UsersTable users={users} />

      {/* Third Row: Room Types & Sources & Billing */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RoomTypes roomTypes={roomTypes} />
        <div className="space-y-6">
          <ReservationSources sources={reservationSources} />
          <BillingConditions conditions={billingConditions} />
        </div>
      </div>
    </div>
  )
}

export default Settings
