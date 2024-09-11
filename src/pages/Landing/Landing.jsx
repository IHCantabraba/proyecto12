import { NavLink } from 'react-router-dom'
import './Landing.css'
import React, { useState } from 'react'
import RegisterForm from '../RegisterForm/RegisterForm'

const Landing = () => {
  const [showModal, setShowModal] = useState(true)
  return (
    <div className='modal-message'>
      <title className='modal-title'>Hiking Tracks & Equipment</title>
      <p>
        Este página web nace de un ejercico de aprendizaje y pretende ser un
        punto de encuentro para todos aquellos que amen los deportes de montaña
        y les guste:
      </p>
      <ul>
        <li>Grabar y compartir sus tracks</li>
        <li>Consultar y descargar tracks</li>
        <li>
          Estar actualizados en materiales de montaña, opiniones y tendencias.
        </li>
      </ul>
      <NavLink className='hyperlink' to='/register'>
        <button className='modal-btn'>Ok!</button>
      </NavLink>
    </div>
  )
}

export default Landing
