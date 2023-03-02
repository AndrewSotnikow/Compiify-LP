export const breakpoints = {
  xxl: 1440,
  xl: 1200,
  lg: 1080,
  md: 768,
  sm: 576,
  xs: 375,
  xxs: 320,
}

export const respondAbove = {
  xxs: `(min-width: ${breakpoints.xxs}px)`,
  xs: `(min-width: ${breakpoints.xs}px)`,
  sm: `(min-width: ${breakpoints.sm}px)`,
  md: `(min-width: ${breakpoints.md}px)`,
  lg: `(min-width: ${breakpoints.lg}px)`,
  xl: `(min-width: ${breakpoints.xl}px)`,
  xxl: `(min-width: ${breakpoints.xxl}px)`,
}

export const respondBelow = {
  xxs: `(max-width: ${breakpoints.xxs}px)`,
  xs: `(max-width: ${breakpoints.xs}px)`,
  sm: `(max-width: ${breakpoints.sm}px)`,
  md: `(max-width: ${breakpoints.md}px)`,
  lg: `(max-width: ${breakpoints.lg}px)`,
  xl: `(max-width: ${breakpoints.xl}px)`,
  xxl: `(max-width: ${breakpoints.xxl}px)`,
}
