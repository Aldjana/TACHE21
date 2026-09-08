import React from 'react'
import Card from '../../../components/ui/Card'
import { Plus } from 'lucide-react'

const AddTaskCard = () => {
  return (
    <Card className="border-2 border-dashed border-gray-300 bg-transparent">
      <div className="p-4 flex flex-col items-center justify-center h-full min-h-[200px]">
        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
          <Plus size={24} className="text-gray-400" />
        </div>
        <p className="text-sm font-medium text-gray-600 mb-1">Ajouter une tâche</p>
        <p className="text-xs text-gray-400 text-center">Inspecter une zone commune</p>
      </div>
    </Card>
  )
}

export default AddTaskCard
