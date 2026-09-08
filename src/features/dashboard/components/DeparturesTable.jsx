import React from 'react'
import Card from '../../../components/ui/Card'
import Badge from '../../../components/common/Badge'
import Button from '../../../components/common/Button'

const DeparturesTable = ({ departures, onViewAll, onCheckOut }) => {
  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Départs du jour</h3>
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
              <th className="pb-3 font-medium">SOLDE</th>
              <th className="pb-3 font-medium">STATUT CHAMBRE</th>
              <th className="pb-3 font-medium">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {departures.map((departure) => (
              <tr key={departure.id} className="border-b border-gray-100 last:border-0">
                <td className="py-3">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold mr-3">
                      {departure.client.initials}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {departure.client.firstName} {departure.client.lastName}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 text-sm text-gray-600">
                  {departure.room.number}
                </td>
                <td className="py-3">
                  <span className={`font-semibold ${departure.balance === 0 ? 'text-green-600' : 'text-gray-900'}`}>
                    {departure.balance.toLocaleString()} FCFA
                  </span>
                </td>
                <td className="py-3">
                  <Badge variant="info">{departure.roomStatus}</Badge>
                </td>
                <td className="py-3">
                  <Button 
                    size="sm" 
                    variant="secondary"
                    className="border-dashed"
                    onClick={() => onCheckOut && onCheckOut(departure.id)}
                  >
                    Check-out
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default DeparturesTable