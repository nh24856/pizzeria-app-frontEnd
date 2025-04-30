import React from 'react'

const ProductAddModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-700 ">
        <div className="bg-white rounded-lg shadow-lg w-96 p-5 relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            ✖
          </button>
          {children}
        </div>
      </div>
    );
  };

export default ProductAddModal
