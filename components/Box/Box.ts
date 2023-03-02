import styled, { css } from 'styled-components/macro'
import { resolveResponsiveProp } from '../../styles/mixins'
import { Spacing, spacingMixin } from '../../styles/spacing'
import { Color } from '../../styles/types'
import useResolutions from '../../styles/useResolutions'

export type Direction = 'row' | 'column' | 'column-reverse' | 'row-reverse'
type Justify =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
export type Align = 'flex-start' | 'flex-end' | 'center' | 'stretch'
type Wrap = 'wrap' | 'nowrap'
type Display = 'none' | 'block' | 'flex'
export interface BoxProps extends Spacing {
  bgColor?: Color
  direction?: Direction | [Direction, Direction]
  justify?: Justify | [Justify, Justify]
  align?: Align | [Align, Align]
  wrap?: Wrap | [Wrap, Wrap]
  gap?: number | [number, number]
  isFullWidth?: boolean
  isFullHeight?: boolean
  hasNoShrink?: boolean
  maxWidth?: number | [number, number]
  maxHeight?: number | [number, number]
  width?: number | [number, number]
  height?: number | [number, number]
  display?: Display | [Display, Display]
}

const Box = styled.div<BoxProps>`
  display: flex;
  background-color: ${({ theme, bgColor }) => bgColor && theme.colors[bgColor]};
  z-index: 1;
  position: relative;
  ${({ height }) =>
    height &&
    resolveResponsiveProp({
      type: 'height',
      value: height,
      unit: 'px',
    })}

  ${({ width }) =>
    width &&
    resolveResponsiveProp({
      type: 'width',
      value: width,
      unit: 'px',
    })}
  ${({ display }) =>
    resolveResponsiveProp({
      type: 'display',
      value: display || 'flex',
    })}
  ${({ isFullWidth }) =>
    isFullWidth &&
    css`
      width: 100%;
    `}
    ${({ maxWidth }) =>
    maxWidth &&
    resolveResponsiveProp({
      type: 'max-width',
      value: maxWidth,
      unit: 'px',
    })}
    ${({ maxHeight }) =>
    maxHeight &&
    resolveResponsiveProp({
      type: 'max-height',
      value: maxHeight,
      unit: 'px',
    })}
    ${({ isFullHeight }) =>
    isFullHeight &&
    css`
      height: 100%;
    `}
    ${({ hasNoShrink }) =>
    hasNoShrink &&
    css`
      flex-shrink: 0;
    `}
    ${({ direction }) =>
    resolveResponsiveProp({
      type: 'flex-direction',
      value: direction || 'column',
    })}
    ${({ justify }) =>
    resolveResponsiveProp({
      type: 'justify-content',
      value: justify || 'flex-start',
    })}
    ${({ align }) =>
    resolveResponsiveProp({
      type: 'align-items',
      value: align || 'flex-start',
    })}
    ${({ wrap }) =>
    resolveResponsiveProp({
      type: 'flex-wrap',
      value: wrap || 'nowrap',
    })}
${({ gap, direction }) => {
    if (!gap) return css``
    const isDirectionArray = Array.isArray(direction)
    const { isTabletWidth } = useResolutions()

    const typeFromDirection = {
      column: 'margin-top',
      'column-reverse': 'margin-top',
      row: 'margin-right',
      'row-reverse': 'margin-left',
    }

    const mobileDirection = isDirectionArray
      ? direction[0]
      : direction || 'column'

    const desktopDirection = isDirectionArray
      ? direction[1]
      : direction || 'column'

    const childrenGap = css`
      ${resolveResponsiveProp({
        type: isTabletWidth
          ? typeFromDirection[mobileDirection]
          : typeFromDirection[desktopDirection],
        value: gap,
        unit: 'px',
      })};
    `

    const zeroGap = css`
      &:last-child {
        ${resolveResponsiveProp({
          type: isTabletWidth
            ? typeFromDirection[mobileDirection]
            : typeFromDirection[desktopDirection],
          value: 0,
          unit: 'px',
        })};
      }
    `

    return (isTabletWidth && mobileDirection === 'column') ||
      (!isTabletWidth && desktopDirection === 'column')
      ? css`
          & > * {
            & + * {
              ${childrenGap};
            }
          }
        `
      : css`
          & > * {
            ${childrenGap};
            ${zeroGap};
          }
        `
  }};

  ${spacingMixin}
`
export default Box
