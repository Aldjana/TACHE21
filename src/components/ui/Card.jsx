import React from 'react'

const Card = ({ 
  children, 
  className = '', 
  padding = 'md',
  ...props 
}) => {
  const paddings = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8',
  }
  
  // Check if custom background is provided in className
  const hasCustomBg = className.includes('bg-')
  
  return (
    <div 
      className={`${hasCustomBg ? '' : 'bg-white'} rounded-card shadow-card border border-gray-200 ${paddings[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
