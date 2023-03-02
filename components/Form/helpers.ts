export const validateMinCharacters = (
  value: string | number,
  min: number
): string | boolean => {
  let error
  const valueString = `${value}`

  if (valueString.length < min) {
    error = `Minimum ${min} characters`
  } else {
    error = false
  }
  return error
}

export const validateMaxCharacters = (
  value: string | number,
  max: number
): string | boolean => {
  let error

  const valueString = `${value}`
  if (valueString.length > max) {
    error = `Maximum ${max} characters`
  } else {
    error = false
  }
  return error
}

export const validateEmail = (value: string | number): string | boolean => {
  let error: string | boolean
  const valueString = `${value}`
  const regex =
    // eslint-disable-next-line no-useless-escape
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,7})+$/
  if (!regex.test(valueString)) {
    error = 'Email is not valid'
  } else {
    error = false
  }

  return error
}
