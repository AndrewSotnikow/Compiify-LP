import styled from 'styled-components/macro'
import { Spacing, spacingMixin } from '../../styles/spacing'
import { resolveResponsiveProp } from '../../styles/mixins'
import { respondAbove } from '../../styles/mediaQueries'
import { TextVariant, Color } from '../../styles/types'
type Align = 'left' | 'right' | 'center'

export interface TextProps extends Spacing {
  variant?: TextVariant
  fontWeight?: 'Regular' | 'Medium' | 'Bold'
  color?: Color
  align?: Align | [Align, Align]
}

const Text = styled.p<TextProps>`
  color: ${({ theme, color }) => color && theme.colors[color]};
  font-family: ${({ theme, variant }) =>
    theme.textVariants[variant].fontFamily};
  font-size: ${({ theme, variant }) =>
    theme.textVariants[variant].fontSizeMobile}px;
  line-height: ${({ theme, variant }) =>
    theme.textVariants[variant].lineHeightMobile}px;

  ${({ align }) =>
    align &&
    resolveResponsiveProp({
      type: 'text-align',
      value: align,
    })}
  @media ${respondAbove.xl} {
    font-size: ${({ theme, variant }) =>
      theme.textVariants[variant].fontSizeDesktop}px;
    line-height: ${({ theme, variant }) =>
      theme.textVariants[variant].lineHeightDesktop}px;
  }
  ${spacingMixin}
`
export default Text
