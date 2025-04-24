import React from 'react'

export const Card = ({ title, price, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-72 mx-auto hover:scale-105 transition-transform duration-300">
      <div className="w-full h-60 bg-gray-100 flex items-center justify-center">
        <img src={image} alt={title} className="h-full object-contain" />
      </div>
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <h3 className="text-md text-gray-500">{price}</h3>
      </div>
    </div>
  )
}
