export const validateUser = (inputUser) => {
  let valid = false
  const nameRegex = /^[a-zA-Z]{4,50}$/

  if (nameRegex.test(inputUser)) {
    valid = !valid
    console.log(nameRegex.test(inputUser))
  }

  return valid
}
