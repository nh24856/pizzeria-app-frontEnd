import React from 'react'

const Background = ({children}) => {
  return (
      <div className="relative flex justify-center items-center h-screen bg-yellow-100 bg-cover">
      {children}
    </div>
  )
}

export default Background
