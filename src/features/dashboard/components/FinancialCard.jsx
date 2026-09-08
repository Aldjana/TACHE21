import React from 'react'
import Card from '../../../components/ui/Card'
import { ArrowRight } from 'lucide-react'

const FinancialCard = ({ 
  label, 
  value, 
  subValue, 
  subLabel, 
  linkText, 
  onLinkClick,
  variant = 'default',
  className = ''
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'encaissements':
        return 'lg:col-span-2'
      default:
        return ''
    }
  }

  return (
    <Card className={`${getVariantStyles()} ${className}`}>
      {variant === 'encaissements' ? (
        <>
          <div className="text-sm text-gray-500 uppercase mb-2">{label}</div>
          <div className="text-3xl font-bold text-[#03543F] mb-4">{value}</div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-gray-500">{subLabel}</span>
              <span className="ml-2 font-semibold text-gray-900">{subValue}</span>
            </div>
            <button 
              className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center"
              onClick={onLinkClick}
            >
              {linkText} <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="text-sm text-gray-500 mb-2">{label}</div>
          <div className="text-3xl font-bold text-gray-900">{value}</div>
          <div className="text-sm text-gray-500">{subValue}</div>
        </>
      )}
    </Card>
  )
}

export default FinancialCard