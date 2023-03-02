import styled from 'styled-components'
import { resolveResponsiveProp } from '../../styles/mixins'
import Container from '../Container/Container'
import { respondBelow } from '../../styles/mediaQueries'
interface WrapperProps {
  color: string
}

const Wrapper = styled(Container)<WrapperProps>`
  background: linear-gradient(${({ theme, color }) => theme.colors[color]});
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 40px;
  overflow: hidden;
  @media ${respondBelow.xl} {
    border-radius: 24px;
  }
  ${({ direction }) =>
    resolveResponsiveProp({
      type: 'flex-direction',
      value: direction || 'column',
    })}
`
export default Wrapper
