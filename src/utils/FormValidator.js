import { validateDateOfBirth } from './validateDateOfBIrth'
import { ValidateEmail } from './validateEmail'
import { validatePhone } from './validatePhone'
import { validateUser } from './validateUser'

export const formValidator = ({
  nombre,
  correo,
  contacto,
  prefix,
  genero,
  fechaNacimiento,
  ciudad,
  pais,
  contraseña,
  verifyContraseña
}) => {
  let status
  let dataErrors = {}

  const validatedUser = validateUser(nombre)
  const validatedEmail = ValidateEmail(correo)
  const validatedPhone = validatePhone(`${prefix}` + `${String(contacto)}`)
  const validatedDateOfBirth = validateDateOfBirth(fechaNacimiento)
  let validationResults = {
    validarNombre: validatedUser,
    validarCorreo: validatedEmail,
    validarTfno: validatedPhone,
    validarFechaNaz: validatedDateOfBirth
  }
  // TODO customizar mensaje de error de cada uno
  for (const [clave, valor] of Object.entries(validationResults)) {
    console.log(`${clave}: ${valor}`)
    if (valor === false) {
      console.log(`valor de la clave ${clave} no ha pasado el filtro`)
      dataErrors = {
        ...dataErrors,
        [clave]: { message: `valor del campo ${clave} invalido`, ref: valor }
      }

      status = false
    }
  }

  return { validationStatus: status, errorsResult: dataErrors }
}
