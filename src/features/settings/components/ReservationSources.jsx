import React from 'react'
import Card from '../../../components/ui/Card'
import Badge from '../../../components/common/Badge'
import Button from '../../../components/common/Button'
import { X, Globe } from 'lucide-react'

const ReservationSources = ({ sources }) => {
  return (
    <Card className="border border-gray-200">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <Globe size={20} className="text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-900">Sources de réservation</h3>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {sources.map((source) => (
            <Badge key={source.id} className="bg-gray-100 text-gray-800 text-sm px-3 py-2 flex items-center gap-2 border border-gray-200">
              {source.name}
              <X size={14} className="cursor-pointer hover:text-gray-600" />
            </Badge>
          ))}
        </div>
        <Button variant="secondary" className="border-dashed">+ Source</Button>
      </div>
    </Card>
  )
}

export default ReservationSources
