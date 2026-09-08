import React from 'react'
import { User, Phone, Globe } from 'lucide-react'

const ClientInfoCard = ({ client }) => {
  const initials = client.name ? client.name.split(' ').map(n => n[0]).join('').toUpperCase() : 'AD'

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Infos client</h3>
        <User size={20} className="text-gray-500" />
      </div>
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-gray-900 text-lg truncate">{client.name}</h4>
          <p className="text-gray-500 text-sm truncate">{client.email}</p>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Phone size={16} className="text-gray-500 flex-shrink-0" />
          <span className="truncate">{client.phone}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Globe size={16} className="text-gray-500 flex-shrink-0" />
          <span className="truncate">{client.country}</span>
        </div>
      </div>
      {client.isVip && (
        <div className="mt-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
            CLIENT VIP
          </span>
        </div>
      )}
    </div>
  )
}

export default ClientInfoCard