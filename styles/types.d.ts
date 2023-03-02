import 'styled-components/macro'
import { TextVariants, ButtonVariant, ColorVariants } from './variants'

export type Color = ValuesOf<typeof ColorVariants>
export type TextVariant = ValuesOf<typeof TextVariants>
export type ButtonVariant = ValuesOf<typeof ButtonVariant>

interface TextTypography {
  fontSizeMobile: number
  lineHeightMobile: number
  fontSizeDesktop: number
  lineHeightDesktop: number
  fontFamily?: string
}
interface ButtonParams {
  width: number
  height: number
  backgroundColor: string
  color: string
  border: string
  fontVariant: string
}
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<Color, string>
    textVariants: Record<TextVariant, TextTypography>
    buttonVariants: Record<ButtonVariant, ButtonParams>
  }
}
