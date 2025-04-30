import React from 'react'

const ProdButtons = ({ label, onClick, type = "button" }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className="w-full text-white bg-yellow-400 hover:bg-yellow-500 rounded-lg px-5 py-2.5">
        {label}
      </button>
    );
  };

export default ProdButtons
