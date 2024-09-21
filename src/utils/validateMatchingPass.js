export const validatematch = (password, verifyPassword) => {
  let valid = false
  if (verifyPassword === password && password !== '') {
    valid = true
  }
  return valid
}
