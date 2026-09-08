import React from 'react'
import { FileText, Download, CheckCircle } from 'lucide-react'

const DocumentsCard = ({ documents, onDownload }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Documents</h3>
        <FileText size={20} className="text-gray-500" />
      </div>
      <div className="flex flex-col gap-4">
        {documents.map((doc, index) => (
          <div 
            key={index} 
            className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            onClick={() => onDownload && onDownload(doc)}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              doc.type === 'Reçu' ? 'bg-green-100' : 'bg-red-100'
            }`}>
              {doc.type === 'Reçu' ? (
                <CheckCircle size={20} className="text-green-600" />
              ) : (
                <FileText size={20} className="text-red-600" />
              )}
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">{doc.name}</p>
              <p className="text-xs text-gray-500">{doc.type} • {doc.date}</p>
            </div>
            <Download size={18} className="text-gray-500" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default DocumentsCard