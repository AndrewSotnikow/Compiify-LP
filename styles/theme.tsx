import { DefaultTheme } from 'styled-components'

const colorNames = {
  gradient_light: '94.65deg, #FFFFFF 1.88%, #E5D0FF 96.27%',
  btn_border: '94.65deg, #004EDA 1.88%, #9747FF 96.27%',
  gradient_bg: '87.19deg, #0046CF 2.56%, #0173FF 54.34%, #9747FF 105.14%',
  grey_900: '#303540',
  grey_800: '#444A58',
  primary_blue: '#001DA1',
  secondary_blue: '#0165EF',
  blue_200: '#98A7ED',
  white: '#FFFFFF',
  white_50: '#E7EAFB',
  background: '#ECF1FF',
  black: '#131313',
  warning: '#FF6B00',
  success: '#C2E9D1',
}

const theme: DefaultTheme = {
  colors: {
    ...colorNames,
  },

  textVariants: {
    heading1: {
      fontSizeDesktop: 50,
      lineHeightDesktop: 44,
      fontSizeMobile: 32,
      lineHeightMobile: 38,
      fontFamily: 'Poppins-Bold',
    },
    heading2: {
      fontSizeDesktop: 32,
      lineHeightDesktop: 44,
      fontSizeMobile: 24,
      lineHeightMobile: 34,
      fontFamily: 'Poppins-SemiBold',
    },
    heading3: {
      fontSizeDesktop: 24,
      lineHeightDesktop: 34,
      fontSizeMobile: 20,
      lineHeightMobile: 28,
      fontFamily: 'Poppins-Bold',
    },
    heading4: {
      fontSizeDesktop: 32,
      lineHeightDesktop: 40,
      fontSizeMobile: 20,
      lineHeightMobile: 24,
      fontFamily: 'Poppins-Regular',
    },
    body: {
      fontSizeDesktop: 16,
      lineHeightDesktop: 28,
      fontSizeMobile: 16,
      lineHeightMobile: 28,
      fontFamily: 'Poppins-Regular',
    },
    cta_transparent: {
      fontSizeDesktop: 16,
      lineHeightDesktop: 20,
      fontSizeMobile: 16,
      lineHeightMobile: 20,
      fontFamily: 'Poppins-Regular',
    },
    cta_white: {
      fontSizeDesktop: 20,
      lineHeightDesktop: 24,
      fontSizeMobile: 20,
      lineHeightMobile: 24,
      fontFamily: 'Poppins-Medium',
    },
    cta_blue: {
      fontSizeDesktop: 20,
      lineHeightDesktop: 24,
      fontSizeMobile: 20,
      lineHeightMobile: 24,
      fontFamily: 'Poppins-Medium',
    },
    basicButton: {
      fontSizeDesktop: 16,
      lineHeightDesktop: 20,
      fontSizeMobile: 16,
      lineHeightMobile: 20,
      fontFamily: 'Poppins-Medium',
    },
    input: {
      fontSizeDesktop: 20,
      lineHeightDesktop: 24,
      fontSizeMobile: 16,
      lineHeightMobile: 24,
      fontFamily: 'Poppins-Medium',
    },
    warning: {
      fontSizeDesktop: 12,
      lineHeightDesktop: 16,
      fontSizeMobile: 12,
      lineHeightMobile: 16,
      fontFamily: 'Poppins-Medium',
    },
    success: {
      fontSizeDesktop: 32,
      lineHeightDesktop: 44,
      fontSizeMobile: 24,
      lineHeightMobile: 34,
      fontFamily: 'Poppins-Medium',
    },
  },

  buttonVariants: {
    basicButton: {
      width: 177,
      height: 52,
      backgroundColor: 'secondary_blue',
      color: 'gradient_light',
      border: 'btn_border',
      fontVariant: 'basicButton',
    },
    cta_transparent: {
      width: 177,
      height: 52,
      backgroundColor: 'background',
      color: 'btn_border',
      border: 'btn_border',
      fontVariant: 'cta_transparent',
    },
    cta_white: {
      width: 177,
      height: 72,
      backgroundColor: 'white_50',
      color: 'btn_border',
      border: 'btn_border',
      fontVariant: 'cta',
    },
    cta_blue: {
      width: 288,
      height: 72,
      backgroundColor: 'primary_blue',
      color: 'gradient_light',
      border: 'btn_border',
      fontVariant: 'cta_transparent',
    },
  },
}

export type ThemeType = typeof theme

export default theme
