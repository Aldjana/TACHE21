import React from 'react'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  type = 'button',
  onClick,
  icon: Icon,
  dashed = false,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-button font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]'
  
  const variants = {
    primary: 'bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900',
    secondary: dashed 
      ? 'bg-white text-slate-900 border-2 border-dashed border-slate-400 hover:bg-gray-50 focus:ring-slate-900'
      : 'bg-white text-slate-900 border border-slate-300 hover:bg-gray-50 focus:ring-slate-900',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-600',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-600',
    ghost: 'bg-transparent text-slate-700 hover:bg-gray-100 focus:ring-slate-900',
  }
  
  const sizes = {
    sm: 'px-3 py-2.5 text-sm',
    md: 'px-4 py-3 text-sm',
    lg: 'px-6 py-3 text-base',
    xl: 'px-8 py-4 text-lg',
  }
  
  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      {children}
    </button>
  )
}

export default Button
