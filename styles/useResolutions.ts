import { useEffect, useState } from 'react'
import { breakpoints } from './mediaQueries'

interface IResolutions {
  isSmallDesktopWidth: boolean
  isTabletWidth: boolean
  isMobileWidth: boolean
}

function getWindowSize() {
  if (typeof window === 'undefined') return
  const { innerWidth, screen } = window
  return { innerWidth, screen }
}

const useResolutions = (): IResolutions => {
  const [windowSize, setWindowSize] = useState(getWindowSize())
  const [isSmallDesktopWidth, setIsSmallDesktopWidth] = useState(false)
  const [isTabletWidth, setIsTabletWidth] = useState(false)
  const [isMobileWidth, setIsMobileWidth] = useState(false)

  function handleWindowResize() {
    if (windowSize) {
      setIsSmallDesktopWidth(
        windowSize.screen.width < breakpoints.xl ||
          windowSize.innerWidth < breakpoints.xl
      )
      setIsTabletWidth(
        windowSize.screen.width < breakpoints.lg ||
          windowSize.innerWidth < breakpoints.lg
      )
      setIsMobileWidth(
        windowSize.screen.width < breakpoints.md ||
          windowSize.innerWidth < breakpoints.md
      )
    }
  }

  useEffect(() => {
    setTimeout(() => {
      handleWindowResize()
      return
    }, 100)

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [windowSize])

  return {
    isSmallDesktopWidth,
    isTabletWidth,
    isMobileWidth,
  }
}

export default useResolutions
