import React from 'react'



export const InputFiltre = ({contentInput,SearchProduct}) => {
  return (
    <input 
  type="text" 
  value={contentInput}
  onChange={SearchProduct}
  placeholder="Buscar..." 
  className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition"
  />
  )
}
