import React from 'react'
import { Search } from 'lucide-react'

const SearchBar = ({ 
  placeholder = 'Rechercher...', 
  value = '', 
  onChange,
  className = '',
  ...props 
}) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-button text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        {...props}
      />
    </div>
  )
}

export default SearchBar
