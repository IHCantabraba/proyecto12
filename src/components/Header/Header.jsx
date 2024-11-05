import { NavLink } from 'react-router-dom'
import './Header.css'
import React from 'react'
import { useCart } from '../CustomProvider/CustomProvider'

const Header = () => {
  const items = useCart()

  return (
    <header>
      <div id='companyLogo'>
        <img
          className='header-img'
          id='icono'
          src='../icon_No_BG.png'
          alt='icono'
        />
        <title className='header-title'>Hiking Tracks & Equipment</title>
      </div>
      <nav>
        <ul>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/register'>Register</NavLink>
          <NavLink to='/products'>Productos </NavLink>
          <NavLink to='/FavProducts'>Favourites ({items.length})</NavLink>
        </ul>
      </nav>
    </header>
  )
}

export default Header
