import React from 'react'

export const Navbar = ({children,styles}) => {
  return (
    <nav className={styles}>
        {children}
    </nav>
  )
}
