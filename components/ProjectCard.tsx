import {
  AspectRatio,
  Box,
  Button,
  Flex,
  HStack,
  ScaleFade,
  Slide,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { ReactNode, useState } from 'react'
import { Motion } from 'tsparticles/Options/Classes/Motion/Motion'
import { cardGradient, textColor, primary } from '../theme'
import Tag from './Tag'
import ThemeText from './Typography/ThemeText'

interface Props {
  imageUrl: string
  title: string
  description: string
  tags: string[]
  siteUrl?: string
}

const ProjectCard = ({
  imageUrl,
  title,
  description,
  tags,
  siteUrl,
}: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <AspectRatio
      w="100%"
      ratio={3 / 2}
      display="flex"
      m={{ base: 1, md: 4 }}
      maxWidth="600px"
      borderRadius="15px"
      overflow="hidden"
      onMouseEnter={() => {
        setIsOpen(true)
      }}
      onMouseLeave={() => {
        setIsOpen(false)
      }}
      onClick={() => setIsOpen(true)}
      flexDir="row"
      backgroundSize="200%"
      background={`url('${imageUrl}')`}
      backgroundPosition="center"
      alignItems="flex-end"
      alignContent="flex-end"
    >
      <motion.div
        style={{
          background: 'rgba(0,0,0,0)',
          width: '100%',
          display: 'flex',
          opacity: '0%',
        }}
        whileHover={{
          background: 'rgba(0,0,0,0.5)',
          opacity: '100%',
          scale: 1.1,
        }}
      >
        <Flex
          marginTop="auto"
          flexDir="column"
          p={10}
          w="100%"
          h="100%"
          bottom="0px"
          // borderRadius="15px 15px 0px 0px"
          //   bgColor={secondaryLightColor}
          // bgGradient={cardGradient}
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <ThemeText type="h2" text={title} style={{ color: textColor }} />
          <ThemeText
            type="p"
            style={{ noOfLines: 5, color: textColor }}
            text={description}
          />
          <HStack mt={{ base: 1, md: 5 }} spacing={2}>
            <a
              target="_blank"
              href={siteUrl ?? undefined}
              style={{ pointerEvents: siteUrl ? 'all' : 'none' }}
              rel="noreferrer"
            >
              <Button bgColor={siteUrl ? primary : textColor}>
                Visit project
              </Button>
            </a>
            {tags && tags.map((tag) => <Tag tag={tag} key={tag} />)}
          </HStack>
        </Flex>
        {/* <Slide
        direction="bottom"
        in={isOpen}
        style={{
          display: 'flex',
          zIndex: 10,
          position: 'relative',
          width: '100%',
        }}
      >
        
      </Slide> */}
      </motion.div>
    </AspectRatio>
  )
}

export default ProjectCard
