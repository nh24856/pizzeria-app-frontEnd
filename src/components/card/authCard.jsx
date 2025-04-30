import React from 'react'

const Card = ({children}) => {
  return (
    
      <div className="bg-white p-15 rounded-xl shadow-lg w-100 absolute inset-y right-30">
      {children}
    </div>
  )
}

export default Card
