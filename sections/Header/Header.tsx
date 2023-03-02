import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../assets/images/logo.svg'
import Box from '../../components/Box/Box'
import Button from '../../components/Button/Button'

const Header = () => (
  <Box direction='row' justify='center' align='center' isFullWidth>
    <Box
      pt={[60, 32]}
      pb={[32, 56]}
      pl={[24, 80]}
      pr={[24, 80]}
      direction='row'
      justify='space-between'
      align='center'
      bgColor='background'
      maxWidth={1440}
      isFullWidth
    >
      <Image src={Logo} alt='Company logo' width='130' height='18' />
      <Link href='#form' style={{ textDecoration: 'none' }} scroll={false}>
        <Button width={[166, 230]} height={52} variant='cta_transparent'>
          Get early access
        </Button>
      </Link>
    </Box>
  </Box>
)

export default Header
