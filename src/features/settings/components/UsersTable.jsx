import React from 'react'
import Card from '../../../components/ui/Card'
import Badge from '../../../components/common/Badge'
import Button from '../../../components/common/Button'
import { Edit2, Trash2 } from 'lucide-react'

const UsersTable = ({ users }) => {
  const getRoleBadge = (role) => {
    switch (role) {
      case 'ADMIN':
        return 'bg-gray-900 text-white'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusDot = (status) => {
    return status === 'Actif' ? 'bg-green-500' : 'bg-gray-400'
  }

  return (
    <Card className="border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Utilisateurs et rôles</h3>
          <Button variant="secondary">+ Nouvel utilisateur</Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">Utilisateur</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">Rôle</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">Statut</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">Dernière connexion</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-semibold text-sm">
                      {user.initials}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <Badge className={`text-xs px-2 py-1 ${getRoleBadge(user.role)}`}>
                    {user.role}
                  </Badge>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${getStatusDot(user.status)}`}></div>
                    <span className="text-sm text-gray-700">{user.status}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-sm text-gray-600">{user.lastConnection}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <Button variant="secondary" icon={Edit2} className="px-2 py-1" />
                    <Button variant="secondary" icon={Trash2} className="px-2 py-1 text-red-600 hover:text-red-700" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default UsersTable
