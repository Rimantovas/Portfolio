import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

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

export const primaryColor = '#1547DC'
export const primaryLightColor = '#EBECEC'
export const secondaryLightColor = '#9BA7D6'
export const primaryDarkColor = '#15192A'
export const secondaryDarkColor = '#4B4C58'


export const bgGradient = `radial-gradient(circle at 0% 0%, rgba(155, 167, 214, 0.7) 0%, rgba(235, 236, 236, 0) 100%),
radial-gradient(circle at 100% 53%, rgba(255, 167, 214, 0.1) 15%, rgba(235, 236, 236, 0) 100%),
radial-gradient(circle at 0% 100%, rgba(155, 167, 214, 1) 10%, rgba(235, 236, 236, 0) 100%)
`
export const cardGradient =
  'linear-gradient(37deg, rgba(25, 47, 133, 1) 0%, rgba(21, 71, 220, 1) 100%)'
const theme: any = extendTheme({
  config,
  styles: {
    global: {
      body: {
        color: primaryDarkColor,
        bgColor: primaryLightColor,
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
          bgColor: primaryColor,
          color: 'white',
          _hover: {
            bg: primaryColor,
            _disabled: {
              bg: secondaryDarkColor,
            },
          },
          _active: {
            bg: primaryColor,
            transform: 'scale(0.95)',
          },
        },
        outline: {
          bgGradient: 'none',
          color: primaryDarkColor,
          border: '2px solid ',
          borderColor: primaryColor,
          borderRadius: '25px',
          _hover: {
            bg: secondaryLightColor,
            _disabled: {
              bg: 'none',
            },
          },
          _active: {
            bg: 'none',
            transform: 'scale(0.95)',
          },
        },
      },
    },
  },
})

export default theme
