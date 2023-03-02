import Section from '../../components/Section/Section'
import Box from '../../components/Box/Box'
import Text from '../../components/Text/Text'
import Image from 'next/image'
import avatars from '../../assets/images/avatars.png'
import Button from '../../components/Button/Button'
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage'
import dotsImage from '../../assets/images/dots.svg'
import Link from 'next/link'
import useResolutions from '../../styles/useResolutions'

const LaunchingSection = () => {

  const mobileStyles = {
    position: 'absolute',
    left: '92px',
    top: '30px',
    width: '100%',
    height: 'auto',
  }
  const desktopStyles = {
    position: 'absolute',
    left: '605px',
    width: '100%',
    height: 'auto',
  }

  return (
    <>
      <Section
        bgColor='gradient_bg'
        pt={[40, 64]}
        pb={[40, 64]}
        pl={[32, 80]}
        pr={[32, 80]}
        direction={['column', 'row']}
      >
        <BackgroundImage
          src={dotsImage}
          maxWidth={208}
          maxHeight={208}
          mobileStyles={mobileStyles}
          desktopStyles={desktopStyles}
        />
        <Box>
          <Text variant='heading2' color='white' mb={[32, 16]}>
            We are launching soon!
            <br /> Sign up for our early adopter program
          </Text>
          <Image
            src={avatars}
            alt='users avatars'
            width={240}
            height={40}
            sizes='100vw'
          />
        </Box>
        <Box mt={[40, 0]}>
          <Link href='#form' style={{ textDecoration: 'none' }} scroll={false}>
            <Button variant='cta_white' width={[326, 288]} height={[64, 72]}>
              Get early access
            </Button>
          </Link>
        </Box>
      </Section>
    </>
  )
}

export default LaunchingSection
