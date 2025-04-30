import React from 'react'

const ImageField = ({ onChange }) => {
    return (
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Upload file
        </label>
        <input
          type="file"
          name="file"
          onChange={onChange}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
        />
        <p className='mt-1 text-sm text-gray-500' id='file_input_help'>PNG, JEPG or JPG</p>
      </div>
    );
  };

export default ImageField
