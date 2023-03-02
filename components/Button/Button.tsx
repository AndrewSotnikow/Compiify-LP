import styled from 'styled-components'
import { ButtonVariant } from '../../styles/types'
import { spacingMixin } from '../../styles/spacing'
import Text from '../Text/Text'
import React from 'react'
import { resolveResponsiveProp } from '../../styles/mixins'
interface IButton {
  variant: ButtonVariant
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  onClick?: (e: React.SyntheticEvent) => void
  width: number | [number, number]
  height: number | [number, number]
}
interface WrapperProps {
  variant: ButtonVariant
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  onClick?: (e: React.SyntheticEvent) => void
  width: number | [number, number]
  height: number | [number, number]
}

const Wrapper = styled.button<WrapperProps>`
  ${({ height }) =>
    height &&
    resolveResponsiveProp({
      type: 'max-height',
      value: height,
      unit: 'px',
    })}

  ${({ width }) =>
    width &&
    resolveResponsiveProp({
      type: 'max-width',
      value: width,
      unit: 'px',
    })}
  width: 100vw;
  height: 100vh;
  color: ${({ theme, variant }) =>
    variant === 'cta_white'
      ? theme.colors.secondary_blue
      : theme.colors.background};
  background: linear-gradient(
        ${({ theme, variant }) =>
          theme.colors[theme.buttonVariants[variant].backgroundColor]},
        ${({ theme, variant }) =>
          theme.colors[theme.buttonVariants[variant].backgroundColor]}
      )
      padding-box,
    linear-gradient(
        ${({ theme, variant }) =>
          theme.colors[theme.buttonVariants[variant].border]}
      )
      border-box;
  border: 2px solid transparent;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${spacingMixin}
`
const Content = styled(Text)`
  display: inline-block;
  background: linear-gradient(
    ${({ theme, variant }) => theme.colors[theme.buttonVariants[variant].color]}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-radius: 10px;

  ${spacingMixin}
`

const Button = ({
  children,
  variant,
  type,
  onClick,
  width,
  height,
}: IButton) => {
  return (
    <Wrapper variant={variant} onClick={onClick} width={width} height={height}>
      <Content variant={variant}>{children}</Content>
    </Wrapper>
  )
}

export default Button
