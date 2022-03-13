import React from 'react'
import {
  SiFlutter,
  SiFirebase,
  SiChakraui,
  SiNextdotjs,
  SiReact,
  SiGooglecloud,
} from 'react-icons/si'
import { primaryLightColor } from '../theme'

interface Props {
  tag: string
}

const Tag = ({ tag }: Props) => {
  const style = { color: primaryLightColor }

  switch (tag) {
    case 'flutter':
      return <SiFlutter size={30} style={style} />
    case 'firebase':
      return <SiFirebase size={30} style={style} />
    case 'chakra':
      return <SiChakraui size={30} style={style} />
    case 'next':
      return <SiNextdotjs size={30} style={style} />
    case 'react':
      return <SiReact size={30} style={style} />
    case 'cloud':
      return <SiGooglecloud size={30} style={style} />
    default:
      return <SiFlutter />
  }
}

export default Tag
