import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { addAlpha } from '../utils/ColorManipulation'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}
export const chakraSizeToPx = (size: string) => {
  switch (size) {
    case '2xs':
      return 16
    case 'xs':
      return 24
    case 'sm':
      return 32
    case 'md':
      return 48
    case 'lg':
      return 64
    case 'xl':
      return 96
    case '2xl':
      return 128
    default:
      return 32
  }
}

// export const primaryColor = '#1547DC' //primary
// export const primaryLightColor = '#EBECEC' //bg
// export const secondaryLightColor = '#9BA7D6' //secondary
// export const primaryDarkColor = '#15192A' //text
// export const secondaryDarkColor = '#4B4C58' //text

export const textColor = '#edf2f4'
export const secondaryTextColor = '#8d99ae'
export const bgColor = '#010108'
export const primary = '#7232f2'
export const lightColor = '#f6b3e5'

export const gradienttest =
  'linear-gradient(134deg, rgba(114, 50, 242, 1) 0%, rgba(195, 140, 255, 1) 100%)'

// export const primaryColor = '#310A5D' //primary
// export const primaryLightColor = '#000' //bg
// export const secondaryLightColor = '#411E8F' //secondary
// export const primaryDarkColor = '#fff' //text
// export const secondaryDarkColor = '#fff' //text

// export const bgGradient = `radial-gradient(circle at 0% 0%, ${addAlpha(
//   primaryColor,
//   0.3
// )} 0%, rgba(100, 0, 0, 0) 100%),
// radial-gradient(circle at 100% 53%, ${addAlpha(
//   secondaryLightColor,
//   0.1
// )} 15%, rgba(100, 0, 0, 0) 100%),
// radial-gradient(circle at 0% 100%, ${addAlpha(
//   primaryColor,
//   0.5
// )} 10%, rgba(0, 0, 0, 0) 100%)
// `

export const bgGradient = `radial-gradient(circle at 0% 0%, ${addAlpha(
  primary,
  0.1
)} 0%, rgba(0, 0, 0, 0) 100%),
radial-gradient(circle at 0% 53%, ${addAlpha(
  primary,
  0.3
)} 0%, rgba(0, 0, 0, 0) 100%),
radial-gradient(circle at 100% 100%, ${addAlpha(
  primary,
  0.1
)} 0%, rgba(0, 0, 0, 0) 100%)
`

export const cardGradient =
  'linear-gradient(37deg, rgba(25, 47, 133, 1) 0%, rgba(21, 71, 220, 1) 100%)'
const theme: any = extendTheme({
  config,
  styles: {
    global: {
      body: {
        color: textColor,
        bgColor: bgColor,
      },
      _focus: {
        boxShadow: 'none !important',
      },
      outline: 'none',
    },
  },

  fonts: {
    heading: 'Nunito',
    body: 'Nunito',
  },

  components: {
    Badge: {
      baseStyle: {
        fontSize: '9px',
        fontWeight: 700,
        lineHeight: '13px',
        letterSpacing: '-0.011em',
      },
    },
    Link: {
      baseStyle: {
        fontSize: '12px',
        lineHeight: '13px',
        letterSpacing: '-0.011em',
      },
    },
    Textarea: {
      variants: {
        outline: (props: any) => ({
          field: {
            border: mode('2px solid #353945', '2px solid #E6E8EC')(props),
            borderColor: mode('#353945', '#777E90')(props),
            borderRadius: '8px',
            _focus: {
              borderColor: mode('#353945', '#777E90')(props),
            },
            _hover: {
              borderColor: mode('#353945', '#777E90')(props),
            },
            _active: {
              borderColor: mode('#353945', '#777E90')(props),
            },
          },
          addon: {
            border: mode('2px solid #353945', '2px solid #E6E8EC')(props),
            borderColor: mode('#353945', '#777E90')(props),
            borderRadius: '8px',
          },
        }),
      },
    },
    Button: {
      baseStyle: {
        borderRadius: 'full',
      },
      sizes: {
        md: {
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '16px',
          letterSpacing: '-0.011em',
        },
        sm: {
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '10px',
          letterSpacing: '-0.011em',
          bg: '#353945',
        },
      },
      variants: {
        solid: {
          bgColor: primary,
          color: 'white',
          _hover: {
            bgGradient: gradienttest,
            _disabled: {
              bgGradient: gradienttest,
            },
          },
          _active: {
            bgGradient: gradienttest,
            transform: 'scale(0.95)',
          },
        },
      },
    },
  },
})

export default theme
