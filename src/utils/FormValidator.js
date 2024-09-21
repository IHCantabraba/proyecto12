import { validateDateOfBirth } from './validateDateOfBIrth'
import { ValidateEmail } from './validateEmail'
import { validatePassword } from './validatePassword'
import { validatePhone } from './validatePhone'
import { validateUser } from './validateUser'
import { validatematch } from './validateMatchingPass'
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
  const validatePasseword = validatePassword(contraseña, verifyContraseña)
  const matchingPassword = validatematch(contraseña, verifyContraseña)
  let validationResults = {
    validarNombre: { value: validatedUser, message: '4 chars at least' },
    validarCorreo: { value: validatedEmail, message: 'Bad email pattern' },
    validarTfno: { value: validatedPhone, message: 'Phone number error' },
    validarFechaNaz: {
      value: validatedDateOfBirth,
      message: '16 years  or older'
    },
    validarContraseña: {
      value: validatePasseword,
      message: ' 8 chras, 1 number 1 letter'
    },
    validarMatch: {
      value: matchingPassword,
      message: 'password mismatch or empty'
    }
  }
  // TODO customizar mensaje de error de cada uno
  for (const [clave, valor] of Object.entries(validationResults)) {
    if (valor.value === false) {
      dataErrors = {
        ...dataErrors,
        [clave]: {
          message: valor.message,
          ref: valor.value
        }
      }

      status = false
    }
  }

  return { validationStatus: status, errorsResult: dataErrors }
}
