export const validateDateOfBirth = (date) => {
  let valid = false
  const today = new Date()
  const currentYear = today.getFullYear()
  console.log(currentYear)
  console.log(date.slice(0, 4))
  console.log(currentYear - Number(date.slice(0, 4)))

  if (currentYear - Number(date.slice(0, 4)) >= 16) {
    valid = true
  }
  console.log(`valid value is: ${valid}`)
  return valid
}
