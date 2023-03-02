import { Spacing } from '../../styles/spacing'
import Wrapper from './styles'

export type Direction = 'row' | 'column' | 'column-reverse' | 'row-reverse'

interface ISection extends Spacing {
  children: React.ReactNode
  bgColor: string
  id?: string
  direction?: Direction | [Direction, Direction]
}

const Section = (props: ISection) => {
  return (
    <Wrapper
      color={props.bgColor}
      direction={props.direction || 'row'}
      {...props}
      isFullWidth
    >
      {props.children}
    </Wrapper>
  )
}

export default Section
