import React from 'react'
import Card from '../../../components/ui/Card'

const SourceDistribution = ({ stats }) => {
  const sources = [
    { name: 'Booking.com', percentage: stats.sourcePercentage, color: 'bg-blue-500' },
    { name: 'Direct (Site Web)', percentage: stats.directPercentage, color: 'bg-green-500' },
    { name: 'Walk-in & Autres', percentage: stats.autresPercentage, color: 'bg-gray-500' }
  ]

  return (
    <Card className="border border-gray-200">
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Répartition par source</h3>
        <div className="space-y-4">
          {sources.map((source) => (
            <div key={source.name}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-700">{source.name}</span>
                <span className="text-sm font-semibold text-gray-900">{source.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`${source.color} h-2 rounded-full transition-all`}
                  style={{ width: `${source.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <a href="#" className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
            Détail complet des canaux →
          </a>
        </div>
      </div>
    </Card>
  )
}

export default SourceDistribution
