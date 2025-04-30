import React from 'react'

const ProductInputFields = ({ label, type, name, placeholder, value, onChange }) => {
    return (
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900">
          {label}
        </label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
    );
  };

export default ProductInputFields
