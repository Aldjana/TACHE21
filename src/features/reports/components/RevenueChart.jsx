import React from 'react'
import Card from '../../../components/ui/Card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const RevenueChart = () => {
  const caData = [
    { day: '01 FÉV', passe: 150, reel: 0, prevision: 0 },
    { day: '', passe: 200, reel: 0, prevision: 0 },
    { day: '', passe: 180, reel: 0, prevision: 0 },
    { day: '05 FÉV', passe: 280, reel: 0, prevision: 0 },
    { day: '', passe: 0, reel: 380, prevision: 0 },
    { day: '', passe: 0, reel: 250, prevision: 0 },
    { day: '10 FÉV', passe: 0, reel: 320, prevision: 0 },
    { day: '', passe: 0, reel: 210, prevision: 0 },
    { day: '15 FÉV', passe: 0, reel: 410, prevision: 0 },
    { day: '', passe: 0, reel: 290, prevision: 0 },
    { day: '20 FÉV', passe: 0, reel: 190, prevision: 0 },
    { day: '', passe: 0, reel: 240, prevision: 0 },
    { day: '25 FÉV', passe: 0, reel: 300, prevision: 0 },
    { day: '', passe: 0, reel: 0, prevision: 240 },
    { day: '28 FÉV', passe: 0, reel: 0, prevision: 260 }
  ]

  return (
    <Card className="border border-gray-200">
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Chiffre d'Affaires par jour</h3>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={caData} barCategoryGap="15%">
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
            <XAxis 
              dataKey="day" 
              stroke="#64748B" 
              fontSize={10} 
              tickLine={false} 
              axisLine={false} 
            />
            <YAxis 
              stroke="#64748B" 
              fontSize={10} 
              tickLine={false} 
              axisLine={false}
            />
            <Tooltip 
              formatter={(value) => `${value}k FCFA`}
              contentStyle={{ 
                backgroundColor: '#fff', 
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                fontSize: '12px'
              }}
            />
            <Bar dataKey="passe" stackId="a" fill="#E5E7EB" radius={[2, 2, 0, 0]} />
            <Bar dataKey="reel" stackId="a" fill="#03543F" radius={[2, 2, 0, 0]} />
            <Bar dataKey="prevision" stackId="a" fill="#9CA3AF" stroke="#4B5563" strokeDasharray="3 3" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

export default RevenueChart
