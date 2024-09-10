import { NavLink } from 'react-router-dom'
import './Header.css'
import React from 'react'

const Header = () => {
  return (
    <header>
      <div id='companyLogo'>
        <img id='icono' src='../icon_No_BG.png' alt='icono' />
        <title>Hiking Tracks & Equipment</title>
      </div>
      <nav>
        <ul>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/register'>Register</NavLink>
          <NavLink to='/products'>Productos</NavLink>
        </ul>
      </nav>
    </header>
  )
}

export default Header
