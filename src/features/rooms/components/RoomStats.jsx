import React from 'react'
import Card from '../../../components/ui/Card'
import { TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react'

const RoomStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="border border-gray-200">
        <div className="p-4">
          <p className="text-sm text-gray-600 mb-1">TOTAL CHAMBRES</p>
          <div className="flex items-end justify-between">
            <p className="text-3xl font-bold text-gray-900">42</p>
            <div className="flex items-center text-green-600 text-sm">
              <TrendingUp size={16} className="mr-1" />
              <span>+100%</span>
            </div>
          </div>
        </div>
      </Card>

      <Card className="border border-gray-200">
        <div className="p-4">
          <p className="text-sm text-gray-600 mb-1">DISPONIBLES</p>
          <div className="flex items-end justify-between">
            <p className="text-3xl font-bold text-gray-900">28</p>
            <p className="text-sm text-gray-500">66% du parc</p>
          </div>
        </div>
      </Card>

      <Card className="border border-gray-200">
        <div className="p-4">
          <p className="text-sm text-gray-600 mb-1">EN MAINTENANCE</p>
          <div className="flex items-end justify-between">
            <p className="text-3xl font-bold text-gray-900">3</p>
            <div className="flex items-center text-red-600 text-sm">
              <AlertTriangle size={16} className="mr-1" />
              <span>Urgent: 1</span>
            </div>
          </div>
        </div>
      </Card>

      <Card className="border border-gray-200">
        <div className="p-4">
          <p className="text-sm text-gray-600 mb-1">TAUX D'OCCUPATION</p>
          <div className="flex items-end justify-between">
            <p className="text-3xl font-bold text-gray-900">34%</p>
            <div className="flex items-center text-red-600 text-sm">
              <TrendingDown size={16} className="mr-1" />
              <span>-5%</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default RoomStats
