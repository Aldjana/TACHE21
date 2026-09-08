import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navigationConfig } from '../../constants/navigation'
import * as Icons from 'lucide-react'
import { X } from 'lucide-react'

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation()

  const getIcon = (iconName) => {
    const Icon = Icons[iconName]
    return Icon ? <Icon size={18} /> : null
  }

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }

  return (
    <>
      {/* Mobile Sidebar */}
      <aside 
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-sidebar-bg flex flex-col transform transition-transform duration-300 ease-in-out lg:hidden
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Logo Section */}
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-white">Hôtel Démo Dakar</h1>
            <p className="text-xs text-sidebar-textMuted mt-1">SaaS PMS</p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          {navigationConfig.map((section) => (
            <div key={section.section} className="mb-6">
              <h3 className="px-4 mb-2 text-xs font-semibold text-sidebar-textMuted uppercase tracking-wider">
                {section.section}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      onClick={() => onClose && onClose()}
                      className={({ isActive }) => `
                        flex items-center px-4 py-2.5 text-sm transition-colors
                        ${isActive 
                          ? 'bg-sidebar-active text-white border-l-4 border-green-500' 
                          : 'text-sidebar-text hover:bg-sidebar-hover border-l-4 border-transparent'
                        }
                      `}
                    >
                      <span className="mr-3">{getIcon(item.icon)}</span>
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-semibold text-sm">
              A
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">Awa</p>
              <p className="text-xs text-sidebar-textMuted">Réception</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:left-0 lg:w-64 lg:bg-sidebar-bg">
        {/* Logo Section */}
        <div className="p-4 border-b border-gray-800">
          <div>
            <h1 className="text-lg font-bold text-white">Hôtel Démo Dakar</h1>
            <p className="text-xs text-sidebar-textMuted mt-1">SaaS PMS</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          {navigationConfig.map((section) => (
            <div key={section.section} className="mb-6">
              <h3 className="px-4 mb-2 text-xs font-semibold text-sidebar-textMuted uppercase tracking-wider">
                {section.section}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => `
                        flex items-center px-4 py-2.5 text-sm transition-colors
                        ${isActive 
                          ? 'bg-sidebar-active text-white border-l-4 border-green-500' 
                          : 'text-sidebar-text hover:bg-sidebar-hover border-l-4 border-transparent'
                        }
                      `}
                    >
                      <span className="mr-3">{getIcon(item.icon)}</span>
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-semibold text-sm">
              A
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">Awa</p>
              <p className="text-xs text-sidebar-textMuted">Réception</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
