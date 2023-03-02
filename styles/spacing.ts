import { css } from 'styled-components/macro'
import { resolveResponsiveProp } from './mixins'

type Space =
  | 0
  | 8
  | 16
  | 20
  | 24
  | 32
  | 35
  | 37
  | 40
  | 48
  | 56
  | 57
  | 59
  | 60
  | 64
  | 80
  | 96

export type ResponsiveSpace = Space | [Space, Space]

export interface Spacing {
  margin?: ResponsiveSpace
  mt?: ResponsiveSpace
  mr?: ResponsiveSpace
  mb?: ResponsiveSpace
  ml?: ResponsiveSpace
  padding?: ResponsiveSpace
  pt?: ResponsiveSpace
  pr?: ResponsiveSpace
  pb?: ResponsiveSpace
  pl?: ResponsiveSpace
}

export const spacingMixin = css<Spacing>`
  ${({ margin }) =>
    margin &&
    resolveResponsiveProp({ type: 'margin', value: margin, unit: 'px' })};
  ${({ ml }) =>
    ml &&
    resolveResponsiveProp({ type: 'margin-left', value: ml, unit: 'px' })};
  ${({ mr }) =>
    mr &&
    resolveResponsiveProp({ type: 'margin-right', value: mr, unit: 'px' })};
  ${({ mb }) =>
    mb &&
    resolveResponsiveProp({
      type: 'margin-bottom',
      value: mb,
      unit: 'px',
    })};
  ${({ mt }) =>
    mt && resolveResponsiveProp({ type: 'margin-top', value: mt, unit: 'px' })};
  ${({ padding }) =>
    padding &&
    resolveResponsiveProp({ type: 'padding', value: padding, unit: 'px' })};
  ${({ pl }) =>
    pl &&
    resolveResponsiveProp({ type: 'padding-left', value: pl, unit: 'px' })};
  ${({ pr }) =>
    pr &&
    resolveResponsiveProp({
      type: 'padding-right',
      value: pr,
      unit: 'px',
    })};
  ${({ pb }) =>
    pb &&
    resolveResponsiveProp({
      type: 'padding-bottom',
      value: pb,
      unit: 'px',
    })};
  ${({ pt }) =>
    pt &&
    resolveResponsiveProp({ type: 'padding-top', value: pt, unit: 'px' })};
`
