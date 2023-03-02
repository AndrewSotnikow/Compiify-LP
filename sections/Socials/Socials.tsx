import Image from 'next/image'
import FB from '../../assets/images/facebook.svg'
import LI from '../../assets/images/linkedin.svg'
import TW from '../../assets/images/twitter.svg'
import Box from '../../components/Box/Box'

const Socials = () => {
  return (
    <Box direction='row' justify='center' align='center' mt={48} pb={[40, 59]}>
      <Box
        width={[240, 296]}
        direction='row'
        justify='space-between'
        align='center'
      >
        <Box width={[32, 64]} height={[32, 64]}>
          <Image
            src={TW}
            alt='Alt text for the picture'
            width='64'
            height='64'
          />
        </Box>
        <Box width={[32, 64]} height={[32, 64]}>
          <Image
            src={LI}
            alt='Alt text for the picture'
            width='64'
            height='64'
          />
        </Box>
        <Box width={[32, 64]} height={[32, 64]}>
          <Image
            src={FB}
            alt='Alt text for the picture'
            width='64'
            height='64'
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Socials
