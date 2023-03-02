import Image from 'next/image'
import useResolutions from '../../styles/useResolutions'
import ImageWrapper from './styles'


interface BackgroundImage {
  src: string
  style?: object
  maxWidth: number
  maxHeight: number
  priority?: boolean
  mobileStyles?: object 
  desktopStyles?: object
}

const BackgroundImage = ({
  src,

  maxHeight,
  maxWidth,
  mobileStyles,
  desktopStyles,
  priority = false,
}: BackgroundImage) => {
  const { isTabletWidth } = useResolutions()
  const backgroundStyles = isTabletWidth ? mobileStyles : desktopStyles

  return (
    <ImageWrapper
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      isFullWidth
      isFullHeight
    >
      <Image
        alt='background image'
        src={src}
        quality={100}
        sizes='100vw'
        width={maxWidth}
        height={maxHeight}
        style={backgroundStyles}
        priority={priority}
      />
    </ImageWrapper>
  )
}

export default BackgroundImage
