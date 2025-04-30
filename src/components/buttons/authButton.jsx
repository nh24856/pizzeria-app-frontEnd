import React from 'react'

const Button = ({btnName}) => {
  return (

      <button className="w-full bg-red-400 text-white p-3 rounded-lg hover:bg-red-600">
            {btnName}
        </button>
  )
}

export default Button
