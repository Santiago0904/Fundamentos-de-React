import React from 'react'
import { Navbar } from '../Navbar/Navbar.jsx'
import { ItemNavbar } from '../../Components/ItemNavbar/ItemNavbar.jsx'

export const Header = () => {
  return (
    <header className="shadow-md bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <h1 className="text-3xl font-bold mb-2">RICK AND MORTY API</h1>
        <Navbar styles="flex gap-6 items-center">
          <ItemNavbar content="Cards" styles="mr-15"/>
          <ItemNavbar content="Gift" styles="mr-15"/>
          <ItemNavbar content="Home" styles="mr-15"/>
        </Navbar>
      </div>
    </header>
  )
}
