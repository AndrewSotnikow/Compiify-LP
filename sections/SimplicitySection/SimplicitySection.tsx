import Section from '../../components/Section/Section'
import Box from '../../components/Box/Box'
import Text from '../../components/Text/Text'
import Image from 'next/image'
import screen from '../../assets/images/screen3.png'
import Button from '../../components/Button/Button'
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage'
import bluredColors from '../../assets/images/bluredColors.png'
import Link from 'next/link'

const SimplicitySection = () => {
  return (
    <Box mt={96}>
      <Section
        bgColor='white'
        pt={[40, 64]}
        pb={[40, 64]}
        pl={[24, 64]}
        pr={[24, 64]}
        direction={['column', 'row']}
      >
        <BackgroundImage
          src={bluredColors.src}
          maxWidth={557}
          maxHeight={557}
          priority={true}
          desktopStyles={{
            position: 'absolute',
            left: '840px',
            top: ' -210px',
          }}
          mobileStyles={{
            position: 'absolute',
            left: '-90px',
            top: '-200px',
            transform: 'scale(1.4)',
            maxHeight: '350px',
          }}
        />
        <Box
          maxWidth={584}
          maxHeight={374}
          mr={[0, 24]}
          display={['none', 'flex']}
        >
          <Image
            src={screen}
            alt='software interface image'
            sizes='100vw'
            style={{
              width: '100vw',
              height: 'auto',
            }}
            priority
          />
        </Box>
        <Box maxWidth={[600, 504]}>
          <Text variant='heading3' color='grey_900'>
            Simplify Compensation Reviews and Save Time
          </Text>
          <Box
            maxWidth={775}
            maxHeight={497}
            mt={[32, 0]}
            display={['flex', 'none']}
          >
            <Image
              src={screen}
              alt='software interface image'
              sizes='100vw'
              style={{
                width: '100vw',
                height: 'auto',
              }}
              priority
            />
          </Box>
          <Text variant='body' color='grey_800' mt={[32, 24]} mb={[32, 24]}>
            No need to run compensation on broken spreadsheets & never ending
            manual processes. Make compensation decisions faster & free of
            errors through collaborative Approval. Customize your eligibility,
            merit adjustments and promotion workflows in one centralized hub
          </Text>
          <Link href='#form' style={{ textDecoration: 'none' }} scroll={false}>
            <Button width={177} height={52} variant='basicButton'>
              Learn more
            </Button>
          </Link>
        </Box>
      </Section>
    </Box>
  )
}

export default SimplicitySection
