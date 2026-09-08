import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../components/ui/Card'
import Button from '../../components/common/Button'
import Input from '../../components/common/Input'
import Badge from '../../components/common/Badge'
import { 
  ArrowLeft, 
  User, 
  Calendar, 
  Bed, 
  CreditCard, 
  Info,
  ChevronRight
} from 'lucide-react'

const NewReservation = () => {
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    // Client Info
    firstName: '',
    lastName: '',
    phone: '',
    email: 'm.diop@example.sn',
    clientType: 'Particulier',
    nationality: 'Sénégalaise',
    idNumber: '',
    
    // Stay Info
    arrivalDate: '',
    departureDate: '',
    nights: 1,
    persons: 1,
    roomType: 'Standard Double',
    roomNumber: '101 - (Libre)',
    source: 'Direct / Walk-in',
    
    // Pricing
    pricePerNight: 45000,
    discount: 0,
    total: 45000,
    taxIncluded: true,
    notes: '',
    
    // Payment
    advanceReceived: false,
    advanceAmount: 0,
    paymentMethod: 'Espèces',
    paymentReference: '',
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleBack = () => {
    navigate('/reservations')
  }

  const handleCancel = () => {
    navigate('/reservations')
  }

  const handleConfirm = () => {
    console.log('Confirm reservation:', formData)
    navigate('/reservations')
  }

  const handleConfirmAndCollect = () => {
    console.log('Confirm and collect payment:', formData)
    navigate('/reservations')
  }

  const clientTypeOptions = [
    { value: 'Particulier', label: 'Particulier' },
    { value: 'Entreprise', label: 'Entreprise' },
    { value: 'Agence', label: 'Agence de voyage' },
  ]

  const roomTypeOptions = [
    { value: 'Standard', label: 'Standard' },
    { value: 'Standard Double', label: 'Standard Double' },
    { value: 'Suite', label: 'Suite' },
    { value: 'Double Deluxe', label: 'Double Deluxe' },
    { value: 'Suite Présidentielle', label: 'Suite Présidentielle' },
  ]

  const roomNumberOptions = [
    { value: '101', label: '101 - (Libre)' },
    { value: '102', label: '102 - (Occupée)' },
    { value: '103', label: '103 - (Libre)' },
    { value: '104', label: '104 - (À nettoyer)' },
  ]

  const sourceOptions = [
    { value: 'Direct / Walk-in', label: 'Direct / Walk-in' },
    { value: 'Booking.com', label: 'Booking.com' },
    { value: 'Expedia', label: 'Expedia' },
    { value: 'Autre', label: 'Autre' },
  ]

  return (
    <div className="space-y-6">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-gray-500">
        <span className="hover:text-gray-900 cursor-pointer" onClick={handleBack}>Réservations</span>
        <ChevronRight size={16} className="mx-2" />
        <span className="text-gray-900 font-medium">Nouvelle réservation</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
            {/* Section 1: Client Information */}
            <Card>
              <div className="flex items-center mb-4">
                <User size={20} className="text-gray-500 mr-2" />
                <h2 className="text-lg font-semibold text-gray-900">Section 1: Informations client</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Prénom"
                  placeholder="Ex: Moussa"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                />
                <Input
                  label="Nom"
                  placeholder="Ex: Diop"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                />
                <Input
                  label="Téléphone"
                  placeholder="+221 7x xxx xx xx"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="m.diop@example.sn"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
                <div className="col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Type client</label>
                    <select
                      value={formData.clientType}
                      onChange={(e) => handleInputChange('clientType', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {clientTypeOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                  <Input
                    label="Nationalité"
                    value={formData.nationality}
                    onChange={(e) => handleInputChange('nationality', e.target.value)}
                  />
                </div>
                <div className="col-span-1 sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">ID (Passeport / CNI)</label>
                  <input
                    type="text"
                    placeholder="Numéro de document"
                    value={formData.idNumber}
                    onChange={(e) => handleInputChange('idNumber', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </Card>

            {/* Section 2: Stay */}
            <Card>
              <div className="flex items-center mb-4">
                <Calendar size={20} className="text-gray-500 mr-2" />
                <h2 className="text-lg font-semibold text-gray-900">Section 2: Séjour</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date arrivée</label>
                  <input
                    type="date"
                    placeholder="jj/mm/aaaa"
                    value={formData.arrivalDate}
                    onChange={(e) => handleInputChange('arrivalDate', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Départ</label>
                  <input
                    type="date"
                    placeholder="jj/mm/aaaa"
                    value={formData.departureDate}
                    onChange={(e) => handleInputChange('departureDate', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nuits</label>
                  <input
                    type="number"
                    value={formData.nights}
                    disabled
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-gray-100 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Personnes</label>
                  <input
                    type="number"
                    value={formData.persons}
                    onChange={(e) => handleInputChange('persons', parseInt(e.target.value))}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Type chambre</label>
                    <select
                      value={formData.roomType}
                      onChange={(e) => handleInputChange('roomType', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {roomTypeOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Chambre dispo</label>
                    <select
                      value={formData.roomNumber}
                      onChange={(e) => handleInputChange('roomNumber', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {roomNumberOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-span-1 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Source</label>
                  <select
                    value={formData.source}
                    onChange={(e) => handleInputChange('source', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {sourceOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </Card>

            {/* Section 3: Pricing */}
            <Card>
              <div className="flex items-center mb-4">
                <CreditCard size={20} className="text-gray-500 mr-2" />
                <h2 className="text-lg font-semibold text-gray-900">Section 3: Tarification</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Prix/nuit (FCFA)</label>
                  <input
                    type="text"
                    value={formData.pricePerNight.toLocaleString()}
                    onChange={(e) => handleInputChange('pricePerNight', parseInt(e.target.value.replace(/\s/g, '')))}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Remise (%)</label>
                  <input
                    type="number"
                    value={formData.discount}
                    onChange={(e) => handleInputChange('discount', parseInt(e.target.value))}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Total (FCFA)</label>
                  <input
                    type="text"
                    value={formData.total.toLocaleString()}
                    disabled
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-gray-100 focus:outline-none"
                  />
                </div>
                <div className="col-span-1 sm:col-span-3 flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="taxIncluded"
                    checked={formData.taxIncluded}
                    onChange={(e) => handleInputChange('taxIncluded', e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded flex-shrink-0"
                  />
                  <label htmlFor="taxIncluded" className="text-sm text-gray-700">
                    Taxe de séjour incluse ?
                  </label>
                  <span className="text-sm text-gray-600">(Oui (1000 FCFA/pers))</span>
                </div>
                <div className="col-span-1 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    placeholder="Demandes particulières, allergies, etc..."
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </Card>

            {/* Section 4: Payment Initial */}
            <Card>
              <div className="flex items-center mb-4">
                <CreditCard size={20} className="text-gray-500 mr-2" />
                <h2 className="text-lg font-semibold text-gray-900">Section 4: Paiement initial</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="col-span-1 sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Avance reçue</label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="advanceReceived"
                        checked={formData.advanceReceived === true}
                        onChange={() => handleInputChange('advanceReceived', true)}
                        className="w-4 h-4 text-blue-600 flex-shrink-0"
                      />
                      <span className="text-sm text-gray-700">Oui</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="advanceReceived"
                        checked={formData.advanceReceived === false}
                        onChange={() => handleInputChange('advanceReceived', false)}
                        className="w-4 h-4 text-blue-600 flex-shrink-0"
                      />
                      <span className="text-sm text-gray-700">Non</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Montant (FCFA)</label>
                  <input
                    type="text"
                    value={formData.advanceAmount.toLocaleString()}
                    onChange={(e) => handleInputChange('advanceAmount', parseInt(e.target.value.replace(/\s/g, '')) || 0)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mode de paiement</label>
                  <select
                    value={formData.paymentMethod}
                    onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Espèces">Espèces</option>
                    <option value="Carte bancaire">Carte bancaire</option>
                    <option value="Chèque">Chèque</option>
                    <option value="Virement">Virement</option>
                  </select>
                </div>
                <div className="col-span-1 sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Référence</label>
                  <input
                    type="text"
                    placeholder="ID Transaction / N° Chèque"
                    value={formData.paymentReference}
                    onChange={(e) => handleInputChange('paymentReference', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-white border-2 border-dashed border-blue-500 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors w-full sm:w-auto"
              >
                Annuler
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 bg-white border-2 border-gray-700 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors w-full sm:w-auto"
              >
                Enregistrer option
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 bg-[#0B132B] border-2 border-dashed border-[#0B132B] text-white rounded-lg text-sm font-medium hover:bg-[#1a2a4a] transition-colors w-full sm:w-auto"
              >
                Confirmer
              </button>
              <button
                onClick={handleConfirmAndCollect}
                className="px-4 py-2 bg-[#0B132B] text-white rounded-lg text-sm font-medium hover:bg-[#1a2a4a] transition-colors w-full sm:w-auto"
              >
                Confirmer et encaisser
              </button>
            </div>
          </div>

          {/* Sidebar Summary */}
          <div className="space-y-6">
            {/* Summary Card */}
            <Card className="bg-[#0B132B] text-white">
              <h3 className="text-xl font-semibold mb-4">Résumé</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-400 mb-1">CLIENT</p>
                  <p className="font-medium">Moussa Diop</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">CHAMBRE</p>
                  <p className="font-medium">Standard Double #101</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">PÉRIODE</p>
                  <p className="font-medium">15 Oct — 16 Oct</p>
                  <span className="inline-block mt-1 px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">1 Nuit</span>
                </div>
                <div className="border-t border-gray-600 pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">TOTAL</span>
                    <span className="text-2xl font-bold text-white">45 000 FCFA</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">AVANCE</span>
                    <span className="font-semibold">0 FCFA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">SOLDE RESTANT</span>
                    <span className="text-xl font-bold text-emerald-400">45 000 FCFA</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Room Image */}
            <Card className="p-0">
              <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=500&h=300&fit=crop" 
                  alt="Chambre Premium" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-sm font-medium">Catégorie: Premium Standard</p>
                </div>
              </div>
            </Card>

            {/* Establishment Note */}
            <Card className="bg-blue-50 border border-blue-200">
              <div className="flex items-start gap-2">
                <Info size={18} className="text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-blue-900 mb-2">Note de l'établissement</p>
                  <p className="text-xs text-blue-700 leading-relaxed">
                    Le check-in est à partir de 14h00. Veuillez vous assurer que le document d'identité est scanné lors de l'arrivée physique du client. Les remises de plus de 15% nécessitent une validation manager.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
  )
}

export default NewReservation
