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
          <div className='fieldContainer'>
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
            {errors.validarNombre && (
              <p className='errorMsg'>{errors.validarNombre.message}</p>
            )}
          </div>
          <div className='fieldContainer'>
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
            {errors.validarCorreo && (
              <p className='errorMsg'>{errors.validarCorreo.message}</p>
            )}
          </div>
          <div className='fieldContainer'>
            <fieldset
              style={{
                border: errors?.validarTfno?.message
                  ? borderErrorStyle
                  : fieldsetBorder
              }}
              className='fieldsets'
            >
              <legend
                className='required'
                style={{
                  color: errors?.validarTfno?.message && 'red'
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
            {errors?.validarTfno && (
              <p className='errorMsg'>{errors.validarTfno.message}</p>
            )}
          </div>
          <div className='fieldContainer'>
            <fieldset className='fieldsets gender'>
              <legend>Gender</legend>
              <select className='gender-select' id='Gender' ref={inputGender}>
                <option className='options' value='unspecified'>
                  -
                </option>
                <option className='options' value='female'>
                  Female
                </option>
                <option className='options' value='male'>
                  Male
                </option>
              </select>
            </fieldset>
          </div>
          <div className='fieldContainer'>
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
            {errors.validarFechaNaz && (
              <p className='errorMsg'>{errors.validarFechaNaz.message}</p>
            )}
          </div>
          <div className='fieldContainer'>
            <fieldset className='fieldsets'>
              <legend>Country</legend>
              <input type='text' id='country' ref={inputCountry} />
            </fieldset>
          </div>
          <div className='fieldContainer'>
            <fieldset className='fieldsets'>
              <legend>City</legend>
              <input type='text' id='city' ref={inputCity} />
            </fieldset>
          </div>
          <div className='fieldContainer'>
            <fieldset
              style={{
                border: errors?.validarContraseña?.message
                  ? borderErrorStyle
                  : fieldsetBorder
              }}
              className='fieldsets'
            >
              <legend
                style={{
                  color: errors?.validarContraseña?.message && 'red'
                }}
                className='required'
              >
                Password
              </legend>
              <input type='password' id='password' ref={inputPassword} />
            </fieldset>
            {errors.validarContraseña ? (
              <p className='errorMsg'>{errors.validarContraseña.message}</p>
            ) : (
              errors.validaMatch && (
                <p className='errorMsg'>{errors.validarMatch.message}</p>
              )
            )}
          </div>
          <div className='fieldContainer'>
            <fieldset
              style={{
                border: errors?.validarMatch?.message
                  ? borderErrorStyle
                  : fieldsetBorder
              }}
              className='fieldsets'
            >
              <legend
                style={{
                  color: errors?.validarMatch?.message && 'red'
                }}
                className='required'
              >
                Verify Password
              </legend>
              <input
                type='password'
                id='veryfyPassword'
                ref={inputVerifyPasword}
              />
            </fieldset>
            {errors.validarMatch && (
              <p className='errorMsg'>{errors.validarMatch.message}</p>
            )}
          </div>
          <button className='formBtn'>Registrarse!</button>
        </form>
      </div>
    </>
  )
}

export default RegisterForm
