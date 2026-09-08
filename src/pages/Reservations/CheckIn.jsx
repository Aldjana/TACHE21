import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Card from '../../components/ui/Card'
import Button from '../../components/common/Button'
import Badge from '../../components/common/Badge'
import { 
  ArrowLeft, 
  User, 
  Calendar, 
  Bed, 
  CreditCard, 
  CheckCircle, 
  Wifi,
  Coffee,
  ChevronRight,
  Info
} from 'lucide-react'

const CheckIn = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  
  const [checklist, setChecklist] = useState({
    identityVerified: false,
    paymentVerified: false,
    roomReady: false,
    conditionsAccepted: false
  })

  const reservation = {
    id: 'RES-2024-8821',
    client: {
      name: 'Mamadou Diouf',
      email: 'm.diouf@email.sn',
      phone: '+221 77 123 45 67'
    },
    stay: {
      arrival: '12 Mai 2024',
      departure: '15 Mai 2024',
      nights: 3
    },
    room: {
      number: '402',
      type: 'Suite Royale'
    },
    total: 510000,
    paid: 465000,
    balance: 45000,
    amenities: [
      'Wifi Haut Débit Inclus',
      'Petit-déjeuner (2 pers)',
      'Minibar inclus (étages VIP)'
    ],
    note: 'Client VIP - Arrivée tardive prévue (23h). Préparer le welcome pack.'
  }

  const handleBack = () => {
    navigate(`/reservations/${id}`)
  }

  const handleChecklistChange = (field) => {
    setChecklist(prev => ({ ...prev, [field]: !prev[field] }))
  }

  const handleCheckIn = () => {
    console.log('Check-in validated')
    navigate(`/reservations/${id}`)
  }

  const allChecked = Object.values(checklist).every(v => v)

  return (
    <div className="space-y-6">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-gray-500">
        <span className="hover:text-gray-900 cursor-pointer" onClick={handleBack}>Réservations</span>
        <ChevronRight size={16} className="mx-2" />
        <span className="hover:text-gray-900 cursor-pointer" onClick={handleBack}>#{reservation.id}</span>
        <ChevronRight size={16} className="mx-2" />
        <span className="text-gray-900 font-medium">Check-in</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Client Information */}
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{reservation.client.name}</h3>
                <p className="text-sm text-gray-500">{reservation.client.email}</p>
                <p className="text-sm text-gray-500">{reservation.client.phone}</p>
              </div>
            </div>
          </Card>

          {/* Reservation Details */}
          <Card>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Bed size={20} className="text-gray-500 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">CHAMBRE</p>
                  <p className="font-medium text-gray-900">{reservation.room.type} #{reservation.room.number}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar size={20} className="text-gray-500 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">ARRIVÉE</p>
                  <p className="font-medium text-gray-900">{reservation.stay.arrival}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar size={20} className="text-gray-500 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">DÉPART</p>
                  <p className="font-medium text-gray-900">{reservation.stay.departure}</p>
                  <p className="text-sm text-gray-500 mt-1">{reservation.stay.nights} nuits</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Mandatory Check-in Steps */}
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Étapes obligatoires du check-in</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg">
                <input
                  type="checkbox"
                  id="identityVerified"
                  checked={checklist.identityVerified}
                  onChange={() => handleChecklistChange('identityVerified')}
                  className="w-5 h-5 text-blue-600 rounded mt-0.5 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <label htmlFor="identityVerified" className="font-medium text-gray-900 cursor-pointer">Identité vérifiée</label>
                  <p className="text-sm text-gray-500 mt-1">Vérifier la pièce d'identité du client et enregistrer les informations</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg">
                <input
                  type="checkbox"
                  id="paymentVerified"
                  checked={checklist.paymentVerified}
                  onChange={() => handleChecklistChange('paymentVerified')}
                  className="w-5 h-5 text-blue-600 rounded mt-0.5 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <label htmlFor="paymentVerified" className="font-medium text-gray-900 cursor-pointer">Paiement vérifié</label>
                  <p className="text-sm text-gray-500 mt-1">Confirmer que le paiement ou l'acompte a été reçu</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg">
                <input
                  type="checkbox"
                  id="roomReady"
                  checked={checklist.roomReady}
                  onChange={() => handleChecklistChange('roomReady')}
                  className="w-5 h-5 text-blue-600 rounded mt-0.5 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <label htmlFor="roomReady" className="font-medium text-gray-900 cursor-pointer">Chambre prête</label>
                  <p className="text-sm text-gray-500 mt-1">S'assurer que la chambre a été nettoyée et est prête à être occupée</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg">
                <input
                  type="checkbox"
                  id="conditionsAccepted"
                  checked={checklist.conditionsAccepted}
                  onChange={() => handleChecklistChange('conditionsAccepted')}
                  className="w-5 h-5 text-blue-600 rounded mt-0.5 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <label htmlFor="conditionsAccepted" className="font-medium text-gray-900 cursor-pointer">Conditions acceptées</label>
                  <p className="text-sm text-gray-500 mt-1">Le client a signé et accepté les conditions de l'hôtel</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Financial Summary */}
          <Card className="bg-slate-800 text-white">
            <h3 className="text-lg font-semibold mb-4">RÉSUMÉ FINANCIER</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Montant Total</span>
                <span className="font-semibold">{reservation.total.toLocaleString()} FCFA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Déjà Payé</span>
                <span className="font-semibold text-green-400">{reservation.paid.toLocaleString()} FCFA</span>
              </div>
              <div className="border-t border-gray-600 pt-3 mt-3">
                <p className="text-gray-400 text-sm mb-2">RESTE À PAYER</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Solde</span>
                  <span className="text-2xl font-bold text-green-400">{reservation.balance.toLocaleString()} FCFA</span>
                </div>
              </div>
            </div>
            <Button variant="primary" className="w-full mt-6 bg-green-600 hover:bg-green-700" icon={CreditCard}>
              Enregistrer un paiement
            </Button>
          </Card>

          {/* Room Image and Details */}
          <Card className="p-0">
            <div className="relative h-48 bg-gray-200 rounded-t-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=500&h=300&fit=crop" 
                alt="Chambre Suite Royale" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white text-sm font-medium">Catégorie: Suite Royale</p>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Détails de l'hébergement</h3>
              <div className="space-y-2">
                {reservation.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    {index === 0 && <Wifi size={16} className="text-gray-500" />}
                    {index === 1 && <Coffee size={16} className="text-gray-500" />}
                    {index === 2 && <Coffee size={16} className="text-gray-500" />}
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Reservation Note */}
          <Card className="bg-blue-50 border-blue-200">
            <div className="flex items-start gap-2">
              <Info size={18} className="text-blue-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-blue-900 mb-1">NOTE DE RÉSERVATION</p>
                <p className="text-sm text-blue-700">{reservation.note}</p>
              </div>
            </div>
          </Card>

          {/* Actions */}
          <Card>
            <div className="space-y-2">
              <Button 
                variant="primary" 
                className="w-full" 
                icon={CheckCircle}
                disabled={!allChecked}
                onClick={handleCheckIn}
              >
                Valider le check-in
              </Button>
              <Button variant="secondary" className="w-full" onClick={handleBack}>
                Annuler
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default CheckIn
