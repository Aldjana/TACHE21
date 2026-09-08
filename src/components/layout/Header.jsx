import React from 'react'
import { Bell, User, Menu } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Header = ({ title, subtitle, showNewButton = false, onNewClick, onMenuToggle }) => {
  const navigate = useNavigate()

  return (
    <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4 sticky top-0 z-30">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <Menu size={24} />
          </button>
          <div>
            <h1 className="text-lg sm:text-xl font-semibold text-gray-900">{title}</h1>
            {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
          </div>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4">
          {showNewButton && (
            <button
              onClick={onNewClick}
              className="hidden sm:inline-flex items-center px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-button hover:bg-slate-800 transition-colors"
            >
              Nouvelle réservation
            </button>
          )}
          
          <button className="relative p-2 text-gray-500 hover:text-gray-700 transition-colors">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <div className="hidden sm:flex items-center">
            <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-semibold text-sm">
              A
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Awa - Réception</p>
              <p className="text-xs text-green-600">EN LIGNE</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
