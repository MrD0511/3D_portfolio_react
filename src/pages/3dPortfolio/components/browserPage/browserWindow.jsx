import React from 'react';

const CompactCRTBrowserWindow = ({ children }) => {
  return (
    <div className="w-full bg-gray-900 rounded-none shadow-lg ">
      <div className="bg-gray-800 px-3 py-1 rounded-t-none flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-red-500 mr-1"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500 mr-1"></div>
          <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
          <span className="text-white text-sm">My Portfolio</span>
        </div>
        <div className="flex items-center">
          <div className="w-5 h-5 text-white cursor-pointer">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z" />
              <path d="M11 15h2v2h-2zm0-8h2v6h-2z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 rounded-b-none relative">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-800 rounded-b-none"></div>
        <div className="relative z-10 bg-gray-800 p-4 rounded-b-none" style={{
          boxShadow: 'inset 0 0 10px 5px rgba(0, 0, 0, 0.5)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderTop: 'none'
        }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CompactCRTBrowserWindow;