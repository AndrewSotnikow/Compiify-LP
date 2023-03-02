import axios from 'axios'
import { useState, SyntheticEvent, useEffect } from 'react'
import Box from '../Box/Box'
import Text from '../Text/Text'
import Button from '../Button/Button'
import Wrapper, { Input, Label, Textarea } from './styles'
import Image from 'next/image'
import success from '../../assets/images/success.svg'
import {
  validateMaxCharacters,
  validateMinCharacters,
  validateEmail,
} from './helpers'

interface IFormError {
  firstNameError: string | boolean
  lastNameError: string | boolean
  emailError: string | boolean
}

const Form = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isValid, setIsValid] = useState(true)
  const [isSent, setIsSent] = useState(false)
  const [isError, setIsError] = useState<IFormError>({
    firstNameError: '',
    lastNameError: '',
    emailError: '',
  })

  const validateInput = (type: string, value: string): boolean => {
    let error: string | boolean = true

    if (type === 'email') error = validateEmail(value)
    if (type === 'firstName' || type === 'lastName')
      error = validateMaxCharacters(value, 100)
    if (type === 'firstName' || type === 'lastName')
      error = validateMinCharacters(value, 3)

    setIsError((prev) => ({ ...prev, [`${type}Error`]: error }))
    return !!error || isValid
  }

  const submitForm = (e: SyntheticEvent) => {
    setIsValid(false)

    e.preventDefault()

    firstName && validateInput('firstName', firstName)
    lastName && validateInput('lastName', lastName)
    email && validateInput('email', email)
  }

  const renderError = (name: string, value: string) => {
    if (!isValid && value.length === 0) {
      return (
        <Text
          color='warning'
          variant='warning'
          ml={8}
          style={{ position: 'absolute' }}
        >
          Required *
        </Text>
      )
    } else if (
      !isValid &&
      isError[`${name}Error` as keyof IFormError] !== ''
    ) {
      return (
        <Text
          color='warning'
          variant='warning'
          ml={8}
          style={{ position: 'absolute' }}
        >
          {isError[`${name}Error` as keyof IFormError]}
        </Text>
      )
    }
  }

  useEffect(() => {
    if (!isValid) {
      validateInput('firstName', firstName)
      validateInput('lastName', lastName)
      validateInput('email', email)
    }
    const { firstNameError, lastNameError, emailError } = isError

    if (
      firstNameError === false &&
      lastNameError === false &&
      emailError === false
    ) {
      axios.defaults.headers.post['Content-Type'] = 'application/json'
      axios
        .post('https://formsubmit.co/ajax/kg@compiify.com', {
          email: email,
          name: `${firstName} ${lastName}`,
          message: message,
        })
        .then((response) => {
          if (response.status === 200) {
            setIsSent(true)
          }
          console.log(response)
        })
        .catch((error) => console.log(error))
    }
  }, [firstName, email, lastName, isValid])

  return (
    <Box isFullWidth>
      {!isSent ? (
        <Wrapper>
          <Box
            mb={20}
            direction={['column', 'row']}
            gap={[20, 20]}
            maxWidth={[420, 600]}
            align='center'
            isFullWidth
          >
            <Box width={[326, 290]} height={[52, 64]} isFullWidth>
              <Label htmlFor='first'>
                <>
                  <Input
                    type='text'
                    id='first'
                    name='first'
                    placeholder='First Name *'
                    value={firstName}
                    variant='input'
                    isValid={
                      (!!firstName && !!isError.firstNameError && isValid) ||
                      isValid ||
                      !!firstName
                    }
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {renderError('firstName', firstName)}
                </>
              </Label>
            </Box>
            <Box width={[326, 290]} height={[52, 64]} isFullWidth>
              <Label htmlFor='last'>
                <>
                  <Input
                    type='text'
                    id='last'
                    name='last'
                    placeholder='Last Name *'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    variant='input'
                    isValid={
                      (!!lastName && !!isError.lastNameError && isValid) ||
                      isValid ||
                      !!lastName
                    }
                  />
                  {renderError('lastName', lastName)}
                </>
              </Label>
            </Box>
          </Box>
          <Box mb={20} maxWidth={[420, 600]} height={[52, 64]} isFullWidth>
            <Label htmlFor='email'>
              <>
                <Input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Email *'
                  value={email}
                  variant='input'
                  onChange={(e) => setEmail(e.target.value)}
                  isValid={
                    (!!email && !!isError.emailError && isValid) ||
                    isValid ||
                    !!email
                  }
                />
                {renderError('email', email)}
              </>
            </Label>
          </Box>
          <Box mb={20} maxWidth={[420, 600]} isFullWidth>
            <Label htmlFor='textarea'>
              <Textarea
                id='textarea'
                name='textarea'
                variant='input'
                placeholder='Your Note (optional)'
                onChange={(e) => setMessage(e.target.value)}
                color='warning'
                value={message}
              />
            </Label>
          </Box>
          <Button
            onClick={submitForm}
            type='button'
            variant='cta_blue'
            width={[326, 288]}
            height={[72, 64]}
          >
            Get early access
          </Button>
        </Wrapper>
      ) : (
        <Box align='center' isFullWidth>
          <Image
            src={success}
            alt='green success icon'
            width={100}
            height={100}
          />
          <Text variant='success' color='success' mt={20}>
            You&apos;ve successfully joined!
          </Text>
          <Text variant='success' color='success' mt={8}>
            We will contact you shortly
          </Text>
        </Box>
      )}
    </Box>
  )
}

export default Form
