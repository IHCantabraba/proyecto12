import './ModalMessage.css'
import React from 'react'

const ModalMessage = ({ state, action }) => {
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
      <button onClick={() => action(!state)}> Ok!</button>
    </div>
  )
}

export default ModalMessage
