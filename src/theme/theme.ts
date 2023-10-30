import { palette } from './palette'

// types
import { IBreakpoints, ITheme, Theme } from 'types'

export const defaultTheme: Theme = 'light'

export const breakpoints: IBreakpoints = {
  bigLaptop: 1400,
  laptop: 1200,
  smallLaptop: 992,
  tablet: 768,
  phone: 576,
  smallPhone: 320,
}

const light: ITheme = {
  palette,
  /**
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due to the excessive compositing required
   * by their under-powered GPUs.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The page background.
   */
  background: palette.white,
  /**
   * The main tinting color.
   */
  primary: palette.blue,
  /**
   * The main tinting color, but lighter.
   */
  primaryLighter: palette.lightBlue,
  /**
   * The main tinting color, but darker.
   */
  primaryDarker: palette.darkBlue,
  /**
   * The main opacity tinting color.
   */
  opacityPrimary: palette.blue + '80',
  /**
   * The lighter opacity tinting color.
   */
  lighterOpacityPrimary: palette.blue + '40',
  /**
   * A subtle color used for borders and lines.
   */
  line: palette.grayLighter,
  /**
   * The default color of text in many components.
   */
  text: palette.grayDarkest,
  /**
   * Secondary information.
   */
  textLight: palette.grayDark,
  /**
   * Secondary information.
   */
  textLighter: palette.white,
  /**
   * Secondary information.
   */
  dim: palette.grayLight,
  /**
   * Light Gray Separator
   */
  separator: palette.grayLighter,
  /**
   * Error messages and icons.
   */
  error: palette.summerSun,
  /**
   * Primary gradient.
   */
  gradient: `linear-gradient(to right, ${palette.lightBlue} 0%, ${palette.darkBlue} 100%)`,
  /**
   * Primary opacity gradient.
   */
  opacityGradient: `linear-gradient(to right, rgba(99, 114, 255, 0.8) 0%, rgba(92, 169, 251, 0.8) 100%)`,
  /**
   * Secondary opacity gradient.
   */
  secondaryOpacityGradient: `linear-gradient(to right, rgba(99, 114, 255, 0.3) 0%, rgba(92, 169, 251, 0.3) 100%)`,
  /**
   * Main media breakpoints.
   */
  breakpoints: breakpoints,
}

const dark: ITheme = {
  palette,
  /**
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due to the excessive compositing required
   * by their under-powered GPUs.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The page background.
   */
  background: palette.white,
  /**
   * The main tinting color.
   */
  primary: palette.blue,
  /**
   * The main tinting color, but lighter.
   */
  primaryLighter: palette.lightBlue,
  /**
   * The main tinting color, but darker.
   */
  primaryDarker: palette.darkBlue,
  /**
   * The main opacity tinting color.
   */
  opacityPrimary: palette.blue + '80',
  /**
   * The lighter opacity tinting color.
   */
  lighterOpacityPrimary: palette.blue + '40',
  /**
   * A subtle color used for borders and lines.
   */
  line: palette.grayLighter,
  /**
   * The default color of text in many components.
   */
  text: palette.grayDarkest,
  /**
   * Secondary information.
   */
  textLight: palette.grayDark,
  /**
   * Secondary information.
   */
  textLighter: palette.white,
  /**
   * Secondary information.
   */
  dim: palette.grayLight,
  /**
   * Light Gray Separator
   */
  separator: palette.grayLighter,
  /**
   * Error messages and icons.
   */
  error: palette.summerSun,
  /**
   * Primary gradient.
   */
  gradient: `linear-gradient(to right, ${palette.lightBlue} 0%, ${palette.darkBlue} 100%)`,
  /**
   * Primary opacity gradient.
   */
  opacityGradient: `linear-gradient(to right, rgba(99, 114, 255, 0.8) 0%, rgba(92, 169, 251, 0.8) 100%)`,
  /**
   * Secondary opacity gradient.
   */
  secondaryOpacityGradient: `linear-gradient(to right, rgba(99, 114, 255, 0.4) 0%, rgba(92, 169, 251, 0.3) 100%)`,
  /**
   * Main media breakpoints.
   */
  breakpoints: breakpoints,
}

export const theme = {
  light,
  dark
}
