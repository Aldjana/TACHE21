import React from 'react'
import Card from '../../../components/ui/Card'
import Badge from '../../../components/common/Badge'
import { Eye, Plus, Clock, ChevronLeft, ChevronRight } from 'lucide-react'

const ClientTable = ({ clients }) => {
  const getClientTypeBadge = (type) => {
    switch (type) {
      case 'PARTICULIER':
        return 'bg-green-100 text-green-800'
      case 'ENTREPRISE':
        return 'bg-blue-100 text-blue-800'
      case 'VIP':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <Card className="border border-gray-200">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">Nom</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">Contact</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">Type client</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">Dernier séjour</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">Séjours</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">Montant total</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">Action</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-semibold text-sm">
                      {client.initials}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{client.name}</p>
                      <p className="text-xs text-gray-500">ID: #{client.id}</p>
                      {client.representative && (
                        <p className="text-xs text-gray-500">Rep: {client.representative}</p>
                      )}
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <p className="text-sm text-gray-600">{client.phone}</p>
                  <p className="text-sm text-gray-500">{client.email}</p>
                </td>
                <td className="py-4 px-4">
                  <Badge className={`text-xs px-2 py-1 ${getClientTypeBadge(client.type)}`}>
                    {client.type}
                  </Badge>
                </td>
                <td className="py-4 px-4 text-sm text-gray-600">{client.lastStay}</td>
                <td className="py-4 px-4 text-sm font-semibold text-gray-900">{client.stays}</td>
                <td className="py-4 px-4 text-sm font-semibold text-gray-900">{client.totalAmount.toLocaleString()} FCFA</td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                      <Eye size={16} className="text-gray-500" />
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                      <Plus size={16} className="text-gray-500" />
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                      <Clock size={16} className="text-gray-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between p-4 border-t border-gray-200">
        <p className="text-sm text-gray-500">Affichage de 1 à {clients.length} sur 1,284 clients</p>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ChevronLeft size={16} className="text-gray-500" />
          </button>
          <button className="px-3 py-1 bg-emerald-500 text-white rounded-lg text-sm font-medium">1</button>
          <button className="px-3 py-1 hover:bg-gray-100 rounded-lg text-sm text-gray-600">2</button>
          <button className="px-3 py-1 hover:bg-gray-100 rounded-lg text-sm text-gray-600">3</button>
          <span className="text-gray-400">...</span>
          <button className="px-3 py-1 hover:bg-gray-100 rounded-lg text-sm text-gray-600">128</button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ChevronRight size={16} className="text-gray-500" />
          </button>
        </div>
      </div>
    </Card>
  )
}

export default ClientTable
