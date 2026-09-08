import React from 'react'
import { 
  CheckCircle, 
  CreditCard, 
  MessageCircle as Whatsapp, 
  Edit, 
  PlusCircle, 
  ArrowRight, 
  LogOut, 
  FileText, 
  XCircle 
} from 'lucide-react'

const ReservationHeader = ({ onActionClick }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <div className="flex flex-col gap-4">
        {/* Left: Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
            <CheckCircle size={16} /> Confirmée
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
            <CreditCard size={16} /> Partiellement payé
          </span>
          <button 
            onClick={() => onActionClick && onActionClick('whatsapp')}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
          >
            <Whatsapp size={16} /> WhatsApp
          </button>
        </div>

        {/* Right: Action Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap items-center gap-2">
          <button 
            onClick={() => onActionClick && onActionClick('edit')}
            className="px-3 py-1.5 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-1"
          >
            <Edit size={16} /> Modifier
          </button>
          <button 
            onClick={() => onActionClick && onActionClick('payment')}
            className="px-3 py-1.5 bg-[#0B132B] text-white rounded-lg text-sm font-medium hover:bg-[#1a2a4a] transition-colors flex items-center justify-center gap-1"
          >
            <PlusCircle size={16} /> Enregistrer paiement
          </button>
          <button 
            onClick={() => onActionClick && onActionClick('checkin')}
            className="px-3 py-1.5 bg-emerald-600 border-2 border-dashed border-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors flex items-center justify-center gap-1"
          >
            <ArrowRight size={16} /> Faire check-in
          </button>
          <button 
            onClick={() => onActionClick && onActionClick('checkout')}
            className="px-3 py-1.5 bg-orange-600 border-2 border-dashed border-orange-600 text-white rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors flex items-center justify-center gap-1"
          >
            <LogOut size={16} /> Faire check-out
          </button>
          <button 
            onClick={() => onActionClick && onActionClick('invoice')}
            className="px-3 py-1.5 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-1"
          >
            <FileText size={16} /> Générer facture
          </button>
          <button 
            onClick={() => onActionClick && onActionClick('cancel')}
            className="px-3 py-1.5 border border-red-300 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors flex items-center justify-center gap-1"
          >
            <XCircle size={16} /> Annuler
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReservationHeader