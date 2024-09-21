export const validatePhone = (inputPhone) => {
  let valid = false
  const phoneRegex =
    /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/

  if (phoneRegex.test(inputPhone)) {
    valid = !valid
    console.log(phoneRegex.test(inputPhone))
  }

  return valid
}
