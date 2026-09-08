import React from 'react'
import Card from '../../../components/ui/Card'
import { Sparkles, AlertCircle, Wrench } from 'lucide-react'

const AlertsCard = ({ alerts, totalAlerts }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles':
        return Sparkles
      case 'AlertCircle':
        return AlertCircle
      case 'Wrench':
        return Wrench
      default:
        return AlertCircle
    }
  }

  const getAlertStyles = (color) => {
    switch (color) {
      case 'red':
        return {
          bg: 'bg-red-50',
          border: 'border-red-500',
          iconColor: 'text-red-500'
        }
      case 'orange':
        return {
          bg: 'bg-yellow-50',
          border: 'border-orange-500',
          iconColor: 'text-orange-500'
        }
      case 'gray':
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-400',
          iconColor: 'text-gray-500'
        }
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-400',
          iconColor: 'text-gray-500'
        }
    }
  }

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Alertes</h3>
        <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
          {totalAlerts}
        </span>
      </div>
      <div className="space-y-3">
        {alerts.map((alert) => {
          const Icon = getIcon(alert.icon)
          const styles = getAlertStyles(alert.color)
          
          return (
            <div 
              key={alert.id} 
              className={`p-3 ${styles.bg} rounded-lg border-l-4 ${styles.border}`}
            >
              <div className="flex items-start">
                <Icon className={`w-5 h-5 ${styles.iconColor} mr-3 mt-0.5`} />
                <div>
                  <p className="text-sm font-medium text-gray-900">{alert.title}</p>
                  <p className="text-xs text-gray-500">{alert.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}

export default AlertsCard