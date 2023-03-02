import Section from '../../components/Section/Section'
import Box from '../../components/Box/Box'
import Text from '../../components/Text/Text'
import Image from 'next/image'
import avatars from '../../assets/images/avatars.png'
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage'
import dotsImage from '../../assets/images/dots.svg'
import Form from '../../components/Form/Form'

const FormSection = () => {
  const desktopStyles = {
    position: 'absolute',
    left: '226px',
    top: '43px',
    width: '100%',
    height: 'auto',
  }
  const mobileStyles = {
    position: 'absolute',
    left: '94px',
    top: '43px',
    width: '100%',
    height: 'auto',
  }
  return (
    <Box mt={96}>
      <Section
        bgColor='gradient_bg'
        pt={[40, 64]}
        pb={[40, 64]}
        pl={[32, 80]}
        pr={[32, 80]}
        direction={['column', 'row']}
        id='form'
      >
        <BackgroundImage
          src={dotsImage}
          maxWidth={208}
          maxHeight={208}
          desktopStyles={desktopStyles}
          mobileStyles={mobileStyles}
        />
        <Box maxWidth={416}>
          <Text variant='heading2' color='white' mb={[32, 60]}>
            Our beta testing program is launching soon. Sign up today
            to&nbsp;enroll and learn more.
          </Text>
          <Image src={avatars} alt='users avatars' width={240} height={40} />
        </Box>
        <Box maxWidth={600} isFullWidth mt={[40, 0]}>
          <Form />
        </Box>
      </Section>
    </Box>
  )
}

export default FormSection
