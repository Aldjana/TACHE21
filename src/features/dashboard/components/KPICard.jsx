import React from 'react'
import Card from '../../../components/ui/Card'
import { Sparkles, ArrowUp } from 'lucide-react'

const KPICard = ({ 
  title, 
  value, 
  variant = 'default', 
  trend, 
  icon,
  underlineColor 
}) => {
  const getCardStyles = () => {
    switch (variant) {
      case 'dark':
        return 'bg-[#0F172A] text-white'
      case 'cleaning':
        return ''
      default:
        return ''
    }
  }

  const getUnderlineColor = () => {
    switch (underlineColor) {
      case 'green':
        return 'border-green-500'
      case 'black':
        return 'border-black'
      case 'yellow':
        return 'border-yellow-500'
      default:
        return ''
    }
  }

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles':
        return Sparkles
      default:
        return null
    }
  }

  const Icon = variant === 'cleaning' ? Sparkles : icon ? getIcon(icon) : null

  return (
    <Card className={getCardStyles()}>
      {variant === 'dark' ? (
        <>
          <div className="text-xs text-emerald-400 font-medium mb-2">{title}</div>
          <div className="text-3xl font-bold mb-3">{value}</div>
          {trend && (
            <div className="flex items-center text-emerald-400 text-sm">
              <ArrowUp className="w-4 h-4 mr-1" />
              <span>{trend}</span>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">{title}</span>
            {Icon && <Icon className="w-5 h-5 text-red-500" />}
          </div>
          <div className={`text-3xl font-bold ${underlineColor ? `border-b-2 ${getUnderlineColor()} pb-1` : ''} ${variant === 'cleaning' ? 'text-red-600' : 'text-gray-900'}`}>
            {value}
          </div>
        </>
      )}
    </Card>
  )
}

export default KPICard