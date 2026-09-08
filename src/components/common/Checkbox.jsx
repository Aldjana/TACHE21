import React from 'react'

const Checkbox = ({ 
  label, 
  checked, 
  onChange, 
  disabled = false, 
  className = '',
  ...props 
}) => {
  return (
    <label className={`inline-flex items-center cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="w-4 h-4 text-slate-900 border-gray-300 rounded focus:ring-slate-900 focus:ring-2"
        {...props}
      />
      {label && <span className="ml-2 text-sm text-gray-700">{label}</span>}
    </label>
  )
}

export default Checkbox
