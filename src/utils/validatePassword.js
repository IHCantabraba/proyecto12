/* REGEX */
// ^                               // Matches the start of the string
// (?=.*[A-Z])                     // Positive lookahead to cheack for presence of a uppercase letter
// (?=.*[a-z])                     // Positive lookahead to cheack for presence of an lowercase letter
// (?=.*\d)                        // Positive lookahead to cheack for presence of a number
// (?=.*[-+_!@#$%^&*.,?])          // Positive lookahead to cheack for presence of a special character letter
// [a-zA-Z\d]                      // Matches a "non-special" character at the start of the string
// [a-zA-Z\d\-+_!@#$%^&*.,?]{7,}   // Matche any allowed character 7+ times
// [a-zA-Z\d]                      // Makes sure the last (minimum 8th) character isn't special
// $                               // Matches the end of the string

export const validatePassword = (password, VerifyPassword) => {
  let valid = false
  const passRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?])[a-zA-Z\d][a-zA-Z\d\-+_!@#$%^&*.,?]{8,}[a-zA-Z\d]$/
  // TODO separar esto para saber cuando e sun missmatch o cuando no valid
  if (passRegex.test(password) && passRegex.test(VerifyPassword)) {
    if (VerifyPassword === passRegex) {
      valid = true
    }
  }
  return valid
}