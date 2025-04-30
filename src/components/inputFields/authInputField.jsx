import React from 'react'

const InputField = ({type, name, placeholder, value, onChange}) => {
  return (
      <input
      type= {type}
      name= {name}
      placeholder= {placeholder}
      value= {value}
      onChange={onChange}
      className= "w-full p-3 border rounded-lg mb-4"
      />
  )
}

export default InputField
