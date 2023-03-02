import { css } from 'styled-components/macro'
import { respondAbove } from '../styles/mediaQueries'

type Value = string | number

type PropertyProps = {
  type: string
  value: Value | [Value, Value]
  unit?: string
}

export const resolveResponsiveProp = ({ type, value, unit }: PropertyProps) => {
  const isArray = Array.isArray(value)

  return css`
    ${`${type}: ${isArray ? value[0] : value}${unit || ''}`};

    @media ${respondAbove.xl} {
      ${`${type}: ${isArray ? value[1] : value}${unit || ''}`};
    }
  `
}
