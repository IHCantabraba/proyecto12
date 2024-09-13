import './RegisterForm.css'
import React, { useRef, useState } from 'react'

const RegisterForm = () => {
  console.log('SOY EL FORMULARIO Y ME RE-RENDERIZO')
  const [errors, setErrors] = useState({})

  const inputUserName = useRef()
  const inputMail = useRef()
  const inputContact = useRef()
  const inputGender = useRef()
  const inputDatOfBirth = useRef()
  const inputCity = useRef()
  const inputCountry = useRef()
  const today = new Date()
  const currentYear = today.getFullYear()
  /* controlar el envío
    acciones despues del click. 
      Evitar recarga d ela página
      Controlar errores */
  const submit = (e) => {
    e.preventDefault()
    if (
      parseInt(inputDatOfBirth.current.value.slice(0, 4)) >
      currentYear - 16
    ) {
      setErrors({
        ...errors,
        date: {
          message: 'You need to be at least 16 years old',
          ref: inputDatOfBirth.current.vale
        }
      })
    } else {
      console.log({
        name: inputUserName,
        email: inputMail,
        contact: inputContact,
        gender: inputGender,
        dateOfBirth: inputDatOfBirth,
        city: inputCity,
        country: inputCountry
      })
    }
  }

  return (
    <div className='register-form'>
      <h2>Register Form</h2>
      <form onSubmit={submit}>
        <fieldset className='name'>
          <legend>Name</legend>
          <input type='text' id='name' />
        </fieldset>
        <fieldset className='mail'>
          <legend>Email</legend>
          <input type='text' id='mail' />
        </fieldset>
        <fieldset className='phone'>
          <legend>Phone</legend>
          <input type='number' id='Contact' />
        </fieldset>
        <fieldset className='gender'>
          <legend>Gender</legend>
          <select id='Gender'>
            <option value='female'>Female</option>
            <option value='male'>Male</option>
          </select>
        </fieldset>
        <fieldset className='birthday'>
          <legend>Date of birth</legend>
          <input type='date' id='birthday' />
        </fieldset>
        <fieldset className='country'>
          <legend>Country</legend>
          <input type='text' id='country' />
        </fieldset>
        <fieldset className='city'>
          <legend>City</legend>
          <input type='text' id='city' />
        </fieldset>
      </form>
    </div>
  )
}

export default RegisterForm
