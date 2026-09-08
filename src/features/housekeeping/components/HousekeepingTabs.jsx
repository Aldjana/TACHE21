import React, { useState } from 'react'

const HousekeepingTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'to_clean', label: 'À nettoyer', count: 14 },
    { id: 'in_progress', label: 'En cours', count: 4 },
    { id: 'ready', label: 'Prêtes', count: 22 },
    { id: 'maintenance', label: 'Maintenance', count: 2 }
  ]

  return (
    <div className="flex items-center gap-6 border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`pb-3 text-sm font-medium transition-colors ${
            activeTab === tab.id
              ? 'text-emerald-600 border-b-2 border-emerald-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {tab.label} ({tab.count})
        </button>
      ))}
    </div>
  )
}

export default HousekeepingTabs
