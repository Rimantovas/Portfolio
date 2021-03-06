import React from 'react'
import { Text, TextProps } from '@chakra-ui/react'
interface Props {
  type: string
  text: string
  isGlitch?: boolean
  style?: TextProps
  _hover?: CSSObject
}
import '@fontsource/nunito'
import GlitchText from '../GlitchText'
import { CSSObject } from '@emotion/react'
import { motion } from 'framer-motion'
import { textColor, primary, secondaryTextColor } from '../../theme'

const ThemeText = ({ type, text, style, isGlitch, _hover }: Props) => {
  switch (type) {
    case 'h1':
      return (
        <motion.div
          whileHover={{
            scale: 1.1,
            textShadow: `0 0 7px ${textColor},
          0 0 10px ${textColor},
          0 0 40px ${primary},
          0 0 50px ${primary}`,
          }}
          whileTap={{ scale: 1.1 }}
        >
          <Text
            as="h1"
            fontFamily="Nunito"
            fontStyle="normal"
            fontWeight="bold"
            fontSize={{ base: '28px', sm: '28px', md: '36px', lg: '80px' }}
            lineHeight={{ base: '28px', sm: '28px', md: '36px', lg: '80px' }}
            letterSpacing="-0.011em"
            color={textColor}
            _hover={{
              color: textColor,
              textShadow: `0 0 7px ${textColor},
              0 0 10px ${textColor},
              0 0 40px ${primary},
              0 0 50px ${primary}`,
            }}
            {...style}
          >
            {text}
          </Text>
        </motion.div>
      )
    case 'h2':
      return (
        <Text
          as="h2"
          fontFamily="Nunito"
          fontStyle="normal"
          fontWeight="bold"
          fontSize="24px"
          lineHeight="32px"
          letterSpacing="-0.011em"
          color={secondaryTextColor}
          _hover={_hover}
          {...style}
        >
          {isGlitch ? <GlitchText>{text}</GlitchText> : text}
        </Text>
      )
    case 'h3':
      return (
        <Text
          as="h3"
          fontFamily="Nunito"
          fontStyle="normal"
          fontWeight="bold"
          fontSize="19px"
          lineHeight="25px"
          letterSpacing="-0.011em"
          color={secondaryTextColor}
          _hover={_hover}
          {...style}
        >
          {isGlitch ? <GlitchText>{text}</GlitchText> : text}
        </Text>
      )
    case 'p':
      return (
        <Text
          fontFamily="Nunito"
          fontStyle="normal"
          fontWeight="bold"
          fontSize="15px"
          lineHeight="16px"
          letterSpacing="-0.011em"
          color={secondaryTextColor}
          _hover={_hover}
          {...style}
        >
          {isGlitch ? <GlitchText>{text}</GlitchText> : text}
        </Text>
      )
    default:
      return (
        <Text
          fontFamily="Nunito"
          fontStyle="normal"
          fontWeight="bold"
          fontSize="15px"
          lineHeight="16px"
          letterSpacing="-0.011em"
          color={secondaryTextColor}
          _hover={_hover}
          {...style}
        >
          {isGlitch ? <GlitchText>{text}</GlitchText> : text}
        </Text>
      )
  }
}

export default ThemeText
