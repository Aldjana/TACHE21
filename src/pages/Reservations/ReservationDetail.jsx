import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReservationHeader from '../../features/reservations/components/ReservationHeader'
import ClientInfoCard from '../../features/reservations/components/ClientInfoCard'
import StayInfoCard from '../../features/reservations/components/StayInfoCard'
import PaymentsCard from '../../features/reservations/components/PaymentSummaryCard'
import DocumentsCard from '../../features/reservations/components/DocumentsCard'
import HistoryCard from '../../features/reservations/components/HistoryCard'

const ReservationDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const handleBack = () => {
    navigate('/reservations')
  }

  const handleHeaderAction = (actionId) => {
    switch (actionId) {
      case 'edit':
        navigate(`/reservations/${id}`)
        break
      case 'payment':
        navigate('/payments')
        break
      case 'checkin':
        navigate(`/reservations/${id}/check-in`)
        break
      case 'checkout':
        navigate(`/reservations/${id}/check-out`)
        break
      case 'invoice':
        navigate('/invoices')
        break
      case 'cancel':
        navigate('/reservations')
        break
      case 'whatsapp':
        window.open('https://wa.me/', '_blank')
        break
      default:
        break
    }
  }

  const handleChangeRoom = () => {
    console.log('Change room')
  }

  const handleDownload = (doc) => {
    console.log('Download document:', doc)
  }

  // Mock data
  const clientData = {
    name: 'Abdoulaye Diop',
    email: 'abdoulaye.diop@email.com',
    phone: '+221 77 123 45 67',
    country: 'Sénégal',
    isVip: true
  }

  const stayData = {
    arrival: '12 Oct. 2023',
    arrivalTime: '14:00',
    departure: '15 Oct. 2023',
    departureTime: '11:00',
    nights: 3,
    rateType: 'Tarif Standard',
    room: 'Chambre 204 — Suite Junior',
    roomDetails: '2 Adultes, Vue Mer'
  }

  const paymentsData = {
    total: 450000,
    paid: 150000,
    balance: 300000
  }

  const transactionsData = [
    {
      id: 'TRX-9821',
      date: '10 Oct. 2023 14:22',
      method: 'Carte Bancaire',
      status: 'RÉUSSI',
      amount: '150.000'
    }
  ]

  const documentsData = [
    {
      name: 'Facture_RES0001.pdf',
      type: 'Proforma',
      date: '12 Oct 2023'
    },
    {
      name: 'Reçu_Acompte.pdf',
      type: 'Reçu',
      date: '10 Oct 2023'
    }
  ]

  const historyData = [
    {
      action: 'Réservation confirmée',
      date: "Aujourd'hui, 09:15 • par Awa (Réception)",
      icon: 'CheckCircle'
    },
    {
      action: 'Acompte enregistré',
      date: '10 Oct. 2023, 14:22 • Système (Stripe)',
      icon: 'CreditCard'
    },
    {
      action: 'Modification des dates de séjour',
      date: '08 Oct. 2023, 10:30 • par Admin',
      icon: 'Edit'
    },
    {
      action: 'Réservation créée',
      date: '05 Oct. 2023, 16:45 • par Client (WhatsApp)',
      icon: 'PlusCircle'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <ReservationHeader onActionClick={handleHeaderAction} />

      {/* Row 1: Client Info & Stay Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <ClientInfoCard client={clientData} />
        </div>
        <div className="lg:col-span-2">
          <StayInfoCard stay={stayData} onChangeRoom={handleChangeRoom} />
        </div>
      </div>

      {/* Row 2: Payments & Transactions */}
      <PaymentsCard payments={paymentsData} transactions={transactionsData} />

      {/* Row 3: Documents & History */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DocumentsCard documents={documentsData} onDownload={handleDownload} />
        <HistoryCard history={historyData} />
      </div>
    </div>
  )
}

export default ReservationDetail
