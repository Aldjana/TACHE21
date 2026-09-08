import React from 'react'
import { Clock, CheckCircle, CreditCard, Edit, PlusCircle } from 'lucide-react'

const HistoryCard = ({ history }) => {
  const getIcon = (icon) => {
    switch (icon) {
      case 'CheckCircle':
        return CheckCircle
      case 'CreditCard':
        return CreditCard
      case 'Edit':
        return Edit
      case 'PlusCircle':
        return PlusCircle
      default:
        return CheckCircle
    }
  }

  const getIconBg = (icon) => {
    switch (icon) {
      case 'CheckCircle':
        return 'bg-green-100 text-green-600'
      case 'CreditCard':
        return 'bg-gray-100 text-gray-600'
      case 'Edit':
        return 'bg-gray-100 text-gray-600'
      case 'PlusCircle':
        return 'bg-gray-900 text-white'
      default:
        return 'bg-gray-100 text-gray-600'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Historique</h3>
        <Clock size={20} className="text-gray-500" />
      </div>
      <div className="space-y-4">
        {history.map((item, index) => {
          const Icon = getIcon(item.icon)
          const iconBg = getIconBg(item.icon)
          const isLast = index === history.length - 1
          
          return (
            <div key={index} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${iconBg}`}>
                  <Icon size={16} />
                </div>
                {!isLast && <div className="w-0.5 h-full bg-gray-200 mt-2"></div>}
              </div>
              <div className={`flex-1 ${!isLast ? 'pb-4' : ''}`}>
                <p className="font-medium text-gray-900">{item.action}</p>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HistoryCard