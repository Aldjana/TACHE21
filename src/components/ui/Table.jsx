import React from 'react'

const Table = ({ 
  columns = [], 
  data = [], 
  className = '',
  onRowClick,
  ...props 
}) => {
  return (
    <div className={`overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0 ${className}`}>
      <table className="w-full min-w-[800px]" {...props}>
        <thead>
          <tr className="border-b border-gray-200">
            {columns.map((column, index) => (
              <th 
                key={index}
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr 
              key={rowIndex}
              className={`hover:bg-gray-50 ${onRowClick ? 'cursor-pointer' : ''}`}
              onClick={() => onRowClick && onRowClick(row)}
            >
              {columns.map((column, colIndex) => (
                <td 
                  key={colIndex}
                  className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap"
                >
                  {column.render ? column.render(row[column.key], row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
