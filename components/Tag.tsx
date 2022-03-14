import { IconButton } from '@chakra-ui/react'
import React from 'react'
import {
  SiFlutter,
  SiFirebase,
  SiChakraui,
  SiNextdotjs,
  SiReact,
  SiGooglecloud,
} from 'react-icons/si'
import {
  primaryDarkColor,
  primaryLightColor,
  secondaryLightColor,
} from '../theme'

interface Props {
  tag: string
}

const Tag = ({ tag }: Props) => {
  const style = { color: primaryLightColor }

  switch (tag) {
    case 'flutter':
      return (
        <IconButton
          borderRadius="15px"
          bgColor="transparent"
          w="45px"
          h="45px"
          m={0}
          fontSize={{ base: '20px', md: '30px' }}
          _hover={{ bgColor: secondaryLightColor }}
          aria-label="facebook"
          icon={<SiFlutter style={style} />}
        />
      )
    case 'firebase':
      return (
        <IconButton
          borderRadius="15px"
          bgColor="transparent"
          w="45px"
          h="45px"
          m={0}
          fontSize={{ base: '20px', md: '30px' }}
          _hover={{ bgColor: secondaryLightColor }}
          aria-label="facebook"
          icon={<SiFirebase style={style} />}
        />
      )
    case 'chakra':
      return (
        <IconButton
          borderRadius="15px"
          bgColor="transparent"
          w="45px"
          h="45px"
          m={0}
          fontSize={{ base: '20px', md: '30px' }}
          _hover={{ bgColor: secondaryLightColor }}
          aria-label="facebook"
          icon={<SiChakraui style={style} />}
        />
      )
    case 'next':
      return (
        <IconButton
          borderRadius="15px"
          bgColor="transparent"
          w="45px"
          h="45px"
          m={0}
          fontSize={{ base: '20px', md: '30px' }}
          _hover={{ bgColor: secondaryLightColor }}
          aria-label="facebook"
          icon={<SiNextdotjs style={style} />}
        />
      )
    case 'react':
      return (
        <IconButton
          borderRadius="15px"
          bgColor="transparent"
          w="45px"
          h="45px"
          m={0}
          fontSize={{ base: '20px', md: '30px' }}
          _hover={{ bgColor: secondaryLightColor }}
          aria-label="facebook"
          icon={<SiReact style={style} />}
        />
      )
    case 'cloud':
      return (
        <IconButton
          borderRadius="15px"
          bgColor="transparent"
          w="45px"
          h="45px"
          m={0}
          fontSize={{ base: '20px', md: '30px' }}
          _hover={{ bgColor: secondaryLightColor }}
          aria-label="facebook"
          icon={<SiGooglecloud style={style} />}
        />
      )
    default:
      return (
        <IconButton
          borderRadius="15px"
          bgColor="transparent"
          w="45px"
          h="45px"
          m={0}
          fontSize={{ base: '20px', md: '30px' }}
          _hover={{ bgColor: secondaryLightColor }}
          aria-label="facebook"
          icon={<SiFlutter style={style} />}
        />
      )
  }
}

export default Tag
