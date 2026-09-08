import React from 'react'
import Card from '../../../components/ui/Card'
import Button from '../../../components/common/Button'
import { LogIn, LogOut, FileText, Edit, MessageCircle } from 'lucide-react'

const ReservationQuickActions = ({ actions, onActionClick }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'LogIn':
        return LogIn
      case 'LogOut':
        return LogOut
      case 'FileText':
        return FileText
      case 'Edit':
        return Edit
      case 'MessageCircle':
        return MessageCircle
      default:
        return LogIn
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
              variant="secondary"
              className="w-full justify-start"
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

export default ReservationQuickActions