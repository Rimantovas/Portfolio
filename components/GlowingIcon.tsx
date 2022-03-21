import { CSSProperties } from '@emotion/serialize'
import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'
import { textColor, primary } from '../theme'

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
        color={textColor}
        whileHover={{
          scale: 1.1,
          backgroundColor: primary,
          color: textColor,
          textShadow: `0 0 8px ${primary}`,
          boxShadow: `0 0 5px white, 0 0 15px ${primary}`,
        }}
        whileTap={{
          scale: 1.1,
          backgroundColor: primary,
          color: textColor,
          textShadow: `0 0 8px ${primary}`,
          boxShadow: `0 0 5px white, 0 0 15px ${primary}`,
        }}
      >
        {children}
      </motion.div>
    </a>
  )
}

export default GlowingIcon
