import Section from '../../components/Section/Section'
import Box from '../../components/Box/Box'
import Text from '../../components/Text/Text'
import Image from 'next/image'
import screen from '../../assets/images/screen4.png'
import Button from '../../components/Button/Button'
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage'
import bluredColors from '../../assets/images/bluredColors.png'
import Link from 'next/link'

const TransparencySection = () => {
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
          desktopStyles={{
            position: 'absolute',
            left: '-230px',
            top: '-210px',
          }}
          mobileStyles={{
            position: 'absolute',
            left: '-90px',
            top: '-200px',
            transform: 'scale(1.4)',
            maxHeight: '350px',
          }}
          priority={true}
        />
        <Box maxWidth={[600, 504]}>
          <Text variant='heading3' color='grey_900'>
            Provide transparency to managers and employees
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
              quality={100}
            />
          </Box>
          <Text variant='body' color='grey_800' mt={24} mb={24}>
            Share final compensation decisions with managers with one click.
            Then, communicate with employees through a sleek & Interactive
            employee portal, so everyone understands the full value of their
            total rewards, increasing job satisfaction and retention.
          </Text>
          <Link href='#form' style={{ textDecoration: 'none' }} scroll={false}>
            <Button width={177} height={52} variant='basicButton'>
              Learn more
            </Button>
          </Link>
        </Box>
        <Box maxWidth={584} maxHeight={374} display={['none', 'flex']}>
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
      </Section>
    </Box>
  )
}

export default TransparencySection
