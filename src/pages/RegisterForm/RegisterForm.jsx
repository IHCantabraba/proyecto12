import './RegisterForm.css'
import React, { useRef, useState } from 'react'
import { formValidator } from '../../utils/FormValidator'

const RegisterForm = () => {
  const borderErrorStyle = '2px solid red'
  const fieldsetBorder = '2px solid black'
  console.log('SOY EL FORMULARIO Y ME RE-RENDERIZO')
  const [errors, setErrors] = useState({})

  const inputUserName = useRef()
  const inputMail = useRef()
  const inputContact = useRef()
  const inputPrefix = useRef()
  const inputGender = useRef()
  const inputDateOfBirth = useRef()
  const inputCity = useRef()
  const inputCountry = useRef()
  const today = new Date()
  const currentYear = today.getFullYear()
  const inputPassword = useRef()
  const inputVerifyPasword = useRef()
  /* controlar el envío
    acciones despues del click. 
      Evitar recarga d ela página
      Controlar errores */
  const submit = (e) => {
    e.preventDefault()
    /* verificar datos */
    /* obejto con los datos introducidos */
    const formInput = {
      nombre: inputUserName.current.value,
      correo: inputMail.current.value,
      contacto: inputContact.current.value,
      prefix: inputPrefix.current.value,
      genero: inputGender.current.value,
      fechaNacimiento: inputDateOfBirth.current.value,
      ciudad: inputCity.current.value,
      pais: inputCountry.current.value,
      contraseña: inputPassword.current.value,
      verifyContraseña: inputVerifyPasword.current.value
    }
    /* instanciar función de validación */
    const validationResults = formValidator(formInput)
    /* si no ha pasado la validación insertar erorres */
    if (!validationResults.validationStatus) {
      console.log(validationResults.errorsResult)
      console.log('inserting errors')
      setErrors(validationResults.errorsResult)
    }

    console.log({
      name: inputUserName.current.value,
      email: inputMail.current.value,
      prefix: inputPrefix.current.value,
      contact: inputContact.current.value,
      gender: inputGender.current.value,
      dateOfBirth: inputDateOfBirth.current.value,
      city: inputCity.current.value,
      country: inputCountry.current.value,
      password: inputPassword.current.value,
      VerifyPass: inputVerifyPasword.current.value
    })
  }

  return (
    <>
      <div className='register-page'>
        <h2>Register Form</h2>
        <form onSubmit={submit} className='register-form'>
          <fieldset
            style={{
              border: errors?.validarNombre?.message
                ? borderErrorStyle
                : fieldsetBorder
            }}
            className='fieldsets'
          >
            <legend
              className='required'
              style={{
                color: errors?.validarNombre?.message && 'red'
              }}
            >
              Name
            </legend>
            <input type='text' id='name' ref={inputUserName} />
          </fieldset>
          <fieldset
            style={{
              border: errors?.validarCorreo?.message
                ? borderErrorStyle
                : fieldsetBorder
            }}
            className='fieldsets'
          >
            <legend
              className='required'
              style={{
                color: errors?.validarCorreo?.message && 'red'
              }}
            >
              Email
            </legend>
            <input type='text' id='mail' ref={inputMail} />
          </fieldset>
          <fieldset
            style={{
              border: errors?.validarCorreo?.message
                ? borderErrorStyle
                : fieldsetBorder
            }}
            className='fieldsets'
          >
            <legend
              className='required'
              style={{
                color: errors?.validarCorreo?.message && 'red'
              }}
            >
              Phone
            </legend>
            <div className='phonediv'>
              <select name='prefix' id='prefix' ref={inputPrefix}>
                <option value=' '> </option>
                <option value='+34'>+34</option>
                <option value='+49'>+49</option>
              </select>
              <input type='number' id='Contact' ref={inputContact} />
            </div>
          </fieldset>
          <fieldset className='fieldsets'>
            <legend>Gender</legend>
            <select id='Gender' ref={inputGender}>
              <option value='unspecified'>-</option>
              <option value='female'>Female</option>
              <option value='male'>Male</option>
            </select>
          </fieldset>
          <fieldset
            style={{
              border: errors?.validarFechaNaz?.message
                ? borderErrorStyle
                : fieldsetBorder
            }}
            className='fieldsets'
          >
            <legend
              style={{
                color: errors?.validarFechaNaz?.message && 'red'
              }}
              className='required'
            >
              Date of birth
            </legend>
            <input type='date' id='birthday' ref={inputDateOfBirth} />
          </fieldset>
          <fieldset className='fieldsets'>
            <legend>Country</legend>
            <input type='text' id='country' ref={inputCountry} />
          </fieldset>
          <fieldset className='fieldsets'>
            <legend>City</legend>
            <input type='text' id='city' ref={inputCity} />
          </fieldset>
          <fieldset className='fieldsets'>
            <legend className='required'>Password</legend>
            <input type='password' id='password' ref={inputPassword} />
          </fieldset>
          <fieldset className='fieldsets'>
            <legend className='required'>Verify Password</legend>
            <input type='text' id='veryfyPassword' ref={inputVerifyPasword} />
          </fieldset>
          <button className='formBtn'>Registrarse!</button>
        </form>
      </div>
    </>
  )
}

export default RegisterForm
