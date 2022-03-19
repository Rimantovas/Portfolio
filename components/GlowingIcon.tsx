import { CSSProperties } from '@emotion/serialize'
import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'
import { primaryColor, primaryLightColor, primaryDarkColor } from '../theme'

interface Props {
  children: ReactNode
  isRound?: boolean
  url: string
  size: string
}

const GlowingIcon = ({ children, isRound, url, size }: Props) => {
  return (
    <a target="_blank" href={url} rel="noreferrer">
      <motion.div
        style={{
          borderRadius: isRound ? '50%' : '10%',
          width: size,
          height: size,
          fontSize: size,
        }}
        color={primaryDarkColor}
        whileHover={{
          scale: 1.1,
          backgroundColor: primaryColor,
          color: primaryLightColor,
          textShadow: `0 0 8px ${primaryColor}`,
          boxShadow: `0 0 5px white, 0 0 15px ${primaryColor}`,
        }}
        whileTap={{
          scale: 1.1,
          backgroundColor: primaryColor,
          color: primaryLightColor,
          textShadow: `0 0 8px ${primaryColor}`,
          boxShadow: `0 0 5px white, 0 0 15px ${primaryColor}`,
        }}
      >
        {children}
      </motion.div>
    </a>
  )
}

export default GlowingIcon
