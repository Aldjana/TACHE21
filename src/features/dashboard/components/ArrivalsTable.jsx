import React from 'react'
import Card from '../../../components/ui/Card'
import Badge from '../../../components/common/Badge'
import Button from '../../../components/common/Button'

const ArrivalsTable = ({ arrivals, onViewAll, onCheckIn }) => {
  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Arrivées du jour</h3>
        <button 
          className="text-sm text-blue-600 hover:text-blue-800 font-medium"
          onClick={onViewAll}
        >
          VOIR TOUT
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500 border-b">
              <th className="pb-3 font-medium">CLIENT</th>
              <th className="pb-3 font-medium">CHAMBRE</th>
              <th className="pb-3 font-medium">HEURE PRÉVUE</th>
              <th className="pb-3 font-medium">STATUT PAIEMENT</th>
              <th className="pb-3 font-medium">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {arrivals.map((arrival) => (
              <tr key={arrival.id} className="border-b border-gray-100 last:border-0">
                <td className="py-3">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold mr-3">
                      {arrival.client.initials}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {arrival.client.firstName} {arrival.client.lastName}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 text-sm text-gray-600">
                  {arrival.room.number} ({arrival.room.type})
                </td>
                <td className="py-3 text-sm text-gray-600">{arrival.expectedTime}</td>
                <td className="py-3">
                  <Badge variant={arrival.paymentStatus === 'Avance reçue' ? 'success' : 'danger'}>
                    {arrival.paymentStatus}
                  </Badge>
                </td>
                <td className="py-3">
                  {arrival.paymentStatus === 'Avance reçue' ? (
                    <Button 
                      size="sm" 
                      variant="secondary"
                      dashed
                      onClick={() => onCheckIn && onCheckIn(arrival.id)}
                    >
                      Check-in
                    </Button>
                  ) : (
                    <Button 
                      size="sm"
                      onClick={() => onCheckIn && onCheckIn(arrival.id)}
                    >
                      Check-in
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default ArrivalsTable