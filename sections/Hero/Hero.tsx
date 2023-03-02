import Image from 'next/image'
import Box from '../../components/Box/Box'
import Text from '../../components/Text/Text'
import Wrapper from './styles'
import background from '../../assets/images/hero_bg.png'
import backgroundMobile from '../../assets/images/hero_bg_mobile.png'
import screen from '../../assets/images/screen.png'
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage'
import useResolutions from '../../styles/useResolutions'
import { useEffect } from 'react'

const Hero = () => {
  const { isTabletWidth } = useResolutions()
  const mobileStyles = {
    position: 'absolute',
    width: '100%',
    height: 'auto',
    top: '110px',
  }
  const desktopStyles = {
    position: 'absolute',
    left: '90px',
    top: '70px',
    width: '100%',
    height: 'auto',
  }

  const backgroundImage = isTabletWidth ? backgroundMobile : background
  const backgroundStyles = isTabletWidth ? mobileStyles : desktopStyles

  useEffect(() => {}, [isTabletWidth])

  return (
    <Wrapper
      isFullWidth
      align='center'
      justify='center'
      pl={[24, 0]}
      pr={[24, 0]}
    >
      <BackgroundImage
        src={backgroundImage.src}
        maxWidth={1360}
        maxHeight={1111}
        style={backgroundStyles}
        priority={true}
      />
      <Box align='center' justify='center'>
        <Text variant='heading1' align='center'>
          Say goodbye to spreadsheets!
        </Text>
        <Text variant='heading4' mt={24} color='grey_800' align='center'>
          Perform compensation review like never before
        </Text>
      </Box>
      <Box mt={35} maxWidth={775} maxHeight={497}>
        <Image
          alt='software interface image'
          src={screen}
          quality={100}
          style={{
            width: '100%',
            height: 'auto',
          }}
          priority
        />
      </Box>
      <Box align='center' justify='center' mt={[48, 57]} mb={37} maxWidth={717}>
        <Text variant='body' align='center'>
          Compiify automates your compensation workflows, provides market pay
          ranges, and integrates with your HR systems, enabling you to make
          equitable and transparent compensation decisions.
        </Text>
      </Box>
    </Wrapper>
  )
}

export default Hero
