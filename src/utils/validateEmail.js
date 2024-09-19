export const ValidateEmail = (email) => {
  let valid = false
  const mailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (mailregex.test(email)) {
    valid = !valid
    console.log(`After regex email is: ${valid}`)
  }
  return valid
}
