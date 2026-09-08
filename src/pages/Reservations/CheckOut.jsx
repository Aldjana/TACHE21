import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Card from '../../components/ui/Card'
import Button from '../../components/common/Button'
import { 
  ChevronRight, 
  AlertTriangle, 
  Bed, 
  Calendar, 
  LogOut, 
  FileText, 
  Receipt, 
  TrendingDown, 
  Clock, 
  FileText as Note, 
  CreditCard, 
  CheckCircle, 
  Key,
  Ban
} from 'lucide-react'

const CheckOut = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  
  const [keysReturned, setKeysReturned] = useState(false)
  const [isPaid, setIsPaid] = useState(false)

  const reservation = {
    id: 'RES-2024-8821',
    client: {
      name: 'Mamadou Diouf',
      email: 'm.diouf@email.sn',
      clientType: 'RÉGULIER'
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
    charges: [
      { designation: 'Nuitées (Suite Royale)', quantity: 3, unitPrice: 150000, total: 450000 },
      { designation: 'Petit-déjeuner Buffet', quantity: 3, unitPrice: 15000, total: 45000 },
      { designation: 'Minibar (Sodas/Snacks)', quantity: 1, unitPrice: 12000, total: 12000 },
      { designation: 'Taxe de séjour', quantity: 3, unitPrice: 1000, total: 3000 }
    ],
    total: 510000,
    paid: 465000,
    balance: 45000,
    lastStay: 'Avril 2024 — 2 nuits',
    receptionNote: 'Client fidèle, préfère les étages élevés.'
  }

  const handleBack = () => {
    navigate(`/reservations/${id}`)
  }

  const handlePayNow = () => {
    setIsPaid(true)
  }

  const handleCheckOut = () => {
    console.log('Check-out validated')
    navigate(`/reservations/${id}`)
  }

  return (
    <div className="space-y-6">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-gray-500">
        <span className="hover:text-gray-900 cursor-pointer" onClick={handleBack}>Réservations</span>
        <ChevronRight size={16} className="mx-2" />
        <span className="hover:text-gray-900 cursor-pointer" onClick={handleBack}>#{reservation.id}</span>
        <ChevronRight size={16} className="mx-2" />
        <span className="text-gray-900 font-medium">Check-out</span>
      </div>

      {/* Alert Banner */}
      {!isPaid && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-start gap-3">
              <AlertTriangle size={20} className="text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-red-900">Un solde reste à encaisser avant la clôture du séjour.</p>
                <p className="text-sm text-red-700 mt-1">Veuillez régulariser le paiement de {reservation.balance.toLocaleString()} FCFA pour finaliser la sortie du client.</p>
              </div>
            </div>
            <button 
              onClick={handlePayNow}
              className="text-red-600 font-bold hover:text-red-700 transition-colors text-sm whitespace-nowrap"
            >
              Payer maintenant
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Client & Stay Card */}
          <Card>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{reservation.client.name}</h3>
                <p className="text-sm text-gray-500">{reservation.client.email}</p>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-400 text-green-900 w-fit">
                CLIENT {reservation.client.clientType}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-gray-200">
              <div className="flex items-start gap-3">
                <Bed size={20} className="text-gray-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">CHAMBRE</p>
                  <p className="font-medium text-gray-900">{reservation.room.type} #{reservation.room.number}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar size={20} className="text-gray-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">ARRIVÉE</p>
                  <p className="font-medium text-gray-900">{reservation.stay.arrival}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <LogOut size={20} className="text-gray-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">DÉPART</p>
                  <p className="font-medium text-gray-900">{reservation.stay.departure}</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Charges Table */}
          <Card>
            <h3 className="text-xs font-semibold text-gray-500 uppercase mb-4">DÉTAILS DES FRAIS</h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left text-xs font-medium text-gray-500 pb-3">DÉSIGNATION</th>
                    <th className="text-center text-xs font-medium text-gray-500 pb-3">QUANTITÉ</th>
                    <th className="text-right text-xs font-medium text-gray-500 pb-3">PRIX UNITAIRE</th>
                    <th className="text-right text-xs font-medium text-gray-500 pb-3">TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  {reservation.charges.map((charge, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 text-sm text-gray-900">{charge.designation}</td>
                      <td className="py-3 text-sm text-gray-900 text-center">{charge.quantity}</td>
                      <td className="py-3 text-sm text-gray-900 text-right">{charge.unitPrice.toLocaleString()} FCFA</td>
                      <td className="py-3 text-sm font-medium text-gray-900 text-right">{charge.total.toLocaleString()} FCFA</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-4 pt-4 border-t border-gray-200">
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <FileText size={16} /> Générer facture
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <Receipt size={16} /> Générer reçu
              </button>
              <button className="px-4 py-2 border border-red-300 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors flex items-center justify-center gap-2">
                <TrendingDown size={16} /> Marquer comme créance
              </button>
            </div>
          </Card>

          {/* Footer Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-gray-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 mb-1">DERNIER SÉJOUR</p>
                  <p className="text-sm font-medium text-gray-900">{reservation.lastStay}</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start gap-3">
                <Note size={18} className="text-gray-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 mb-1">NOTES RECEPTION</p>
                  <p className="text-sm text-gray-700">{reservation.receptionNote}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-1 space-y-6">
          {/* Financial Summary */}
          <Card className="bg-[#0B132B] text-white">
            <h3 className="text-xs font-semibold text-gray-400 uppercase mb-4">RÉSUMÉ FINANCIER</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Montant total</span>
                <span className="font-semibold">{reservation.total.toLocaleString()} FCFA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Déjà payé</span>
                <span className="font-semibold text-green-400">{reservation.paid.toLocaleString()} FCFA</span>
              </div>
              <div className="border-t border-gray-600 pt-3 mt-3">
                <p className="text-gray-400 text-sm mb-2">À ENCAISSER</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Solde restant</span>
                  <span className="text-3xl font-bold text-teal-400">{reservation.balance.toLocaleString()} FCFA</span>
                </div>
              </div>
            </div>
            <button 
              onClick={handlePayNow}
              className="w-full mt-6 bg-teal-400 text-gray-900 rounded-lg py-3 font-bold hover:bg-teal-500 transition-colors flex items-center justify-center gap-2"
            >
              <CreditCard size={18} /> Enregistrer paiement final
            </button>
          </Card>

          {/* Validate Check-out */}
          <Card>
            <div className="flex items-start gap-3 mb-4">
              <Key size={20} className="text-gray-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Statut de la chambre</h3>
                <p className="text-sm text-gray-600 mt-1">
                  La chambre #{reservation.room.number} sera marquée comme <span className="font-medium text-gray-900">"Sale - À nettoyer"</span> après validation.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="keysReturned"
                  checked={keysReturned}
                  onChange={(e) => setKeysReturned(e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded flex-shrink-0"
                />
                <label htmlFor="keysReturned" className="text-sm text-gray-700">
                  Clés/Cartes magnétiques restituées
                </label>
              </div>
            </div>
            <button 
              disabled={!isPaid}
              onClick={handleCheckOut}
              className="w-full bg-gray-300 text-gray-500 rounded-lg py-3 font-medium flex items-center justify-center gap-2 cursor-not-allowed"
            >
              <CheckCircle size={18} /> Valider le check-out
            </button>
            {!isPaid && (
              <p className="text-xs text-gray-500 mt-2 text-center">
                Veuillez d'abord solder le compte pour activer ce bouton.
              </p>
            )}
          </Card>

          {/* Close without payment */}
          <div className="flex items-center gap-2 text-sm">
            <Ban size={16} className="text-gray-500" />
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              Clôturer le séjour sans paiement
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut
