import styled from 'styled-components'
import { TextVariant } from '../../styles/types'
import { respondAbove } from '../../styles/mediaQueries'

interface InputProps {
  isValid: boolean
  variant?: TextVariant
}
interface TextareaProps {
  variant?: TextVariant
}

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
export const Input = styled.input<InputProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  gap: 10px;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(
        ${({ theme }) => theme.colors['white']},
        ${({ theme }) => theme.colors['white']}
      )
      padding-box,
    linear-gradient(${({ theme }) => theme.colors['btn_border']}) border-box;

  border: ${({ theme, isValid }) =>
    `2px solid ${isValid ? 'transparent' : theme.colors['warning']}}`};
  font-family: ${({ theme }) => theme.textVariants.input.fontFamily};
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors['grey_800']};

  &::placeholder {
    font-family: ${({ theme }) => theme.textVariants.input.fontFamily};
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    color: ${({ theme, isValid }) =>
      theme.colors[isValid ? 'blue_200' : 'warning']};
    font-size: ${({ theme, variant }) =>
      theme.textVariants[variant].fontSizeMobile}px;
    line-height: ${({ theme, variant }) =>
      theme.textVariants[variant].lineHeightMobile}px;
    color: ${({ theme }) => theme.colors['blue_200']};

    @media ${respondAbove.xl} {
      font-size: ${({ theme, variant }) =>
        theme.textVariants[variant].fontSizeDesktop}px;
      line-height: ${({ theme, variant }) =>
        theme.textVariants[variant].lineHeightDesktop}px;
    }
  }
`
export const Textarea = styled.textarea<TextareaProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  gap: 10px;
  width: 100%;
  height: 100px;
  border-radius: 12px;
  background: linear-gradient(
        ${({ theme }) => theme.colors['white']},
        ${({ theme }) => theme.colors['white']}
      )
      padding-box,
    linear-gradient(${({ theme }) => theme.colors['btn_border']}) border-box;
  border: 2px solid transparent;
  font-family: ${({ theme }) => theme.textVariants.input.fontFamily};
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors['grey_800']};

  &::placeholder {
    font-family: ${({ theme }) => theme.textVariants.input.fontFamily};
    font-style: normal;
    font-weight: 500;
    font-size: ${({ theme, variant }) =>
      theme.textVariants[variant].fontSizeMobile}px;
    line-height: ${({ theme, variant }) =>
      theme.textVariants[variant].lineHeightMobile}px;
    color: ${({ theme }) => theme.colors['blue_200']};

    @media ${respondAbove.xl} {
      font-size: ${({ theme, variant }) =>
        theme.textVariants[variant].fontSizeDesktop}px;
      line-height: ${({ theme, variant }) =>
        theme.textVariants[variant].lineHeightDesktop}px;
    }
  }
`

export const Label = styled.label`
  width: 100%;
  height: 100%;
`

export default Wrapper
