import React from 'react'

const ProductHeading = ({text}) => {
  return (
    <div className='bg-yellow-400 flex flex-col items-center justify-center p-20'>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center">
        {text}
      </h1>    
      {/* Underline Effect */}
      <div className="w-30 h-1 bg-white mt-2"></div>
    </div>
  )
}

export default ProductHeading
