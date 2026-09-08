import React from 'react'

const Select = ({ 
  label, 
  options = [], 
  value, 
  onChange, 
  className = '', 
  error,
  disabled = false,
  placeholder = 'Sélectionner...',
  ...props 
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`
          w-full rounded-button border px-3 py-3 text-sm bg-white min-h-[44px]
          ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-slate-900'}
          ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
          focus:outline-none focus:ring-2 focus:border-transparent
          ${className}
        `}
        {...props}
      >
        {placeholder && (
          <option value="">{placeholder}</option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-xs text-red-600">{error}</p>
      )}
    </div>
  )
}

export default Select
