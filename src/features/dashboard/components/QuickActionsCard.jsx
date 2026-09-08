import React from 'react'
import Card from '../../../components/ui/Card'
import Button from '../../../components/common/Button'
import { Plus, CreditCard, LogIn, LogOut, Wallet } from 'lucide-react'

const QuickActionsCard = ({ actions, onActionClick }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Plus':
        return Plus
      case 'CreditCard':
        return CreditCard
      case 'LogIn':
        return LogIn
      case 'LogOut':
        return LogOut
      case 'Wallet':
        return Wallet
      default:
        return Plus
    }
  }

  return (
    <Card>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Actions rapides</h3>
      <div className="space-y-2">
        {actions.map((action) => {
          const Icon = getIcon(action.icon)
          return (
            <Button
              key={action.id}
              variant={action.primary ? 'primary' : 'secondary'}
              className={`w-full justify-start ${action.primary ? 'bg-slate-900 text-white hover:bg-slate-800' : ''}`}
              icon={Icon}
              onClick={() => onActionClick && onActionClick(action.id)}
            >
              {action.label}
            </Button>
          )
        })}
      </div>
    </Card>
  )
}

export default QuickActionsCard