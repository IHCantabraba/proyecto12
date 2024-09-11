import { NavLink } from 'react-router-dom'
import './Header.css'
import React, { useState } from 'react'
import ModalMessage from '../ModalMessage/ModalMessage'

const Header = () => {
  console.log('soy el HEADER y me renderizo')
  const [showModal, setShowModal] = useState(false)

  return (
    <header>
      <div id='companyLogo'>
        <img id='icono' src='../icon_No_BG.png' alt='icono' />
        <title
          className='header-title'
          onClick={() => setShowModal(!showModal)}
        >
          Hiking Tracks & Equipment
        </title>
        {showModal && <ModalMessage state={showModal} action={setShowModal} />}
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
