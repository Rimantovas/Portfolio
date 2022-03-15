import {
  AspectRatio,
  Box,
  Button,
  Flex,
  HStack,
  ScaleFade,
  Slide,
} from '@chakra-ui/react'
import Image from 'next/image'
import React, { ReactNode, useState } from 'react'
import {
  cardGradient,
  primaryColor,
  primaryLightColor,
  secondaryDarkColor,
  secondaryLightColor,
} from '../theme'
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
      <Slide
        direction="bottom"
        in={isOpen}
        style={{
          display: 'flex',
          zIndex: 10,
          position: 'relative',
          width: '100%',
        }}
      >
        <Box
          marginTop="auto"
          flexDir="column"
          p={5}
          w="100%"
          bottom="0px"
          borderRadius="15px 15px 0px 0px"
          //   bgColor={secondaryLightColor}
          bgGradient={cardGradient}
          alignItems="flex-start"
          textAlign="start"
        >
          <ThemeText
            type="h2"
            text={title}
            style={{ color: primaryLightColor }}
          />
          <ThemeText
            type="p"
            style={{ noOfLines: 5, color: primaryLightColor }}
            text={description}
          />
          <HStack mt={{ base: 1, md: 5 }} spacing={2}>
            <a
              target="_blank"
              href={siteUrl ?? undefined}
              style={{ pointerEvents: siteUrl ? 'all' : 'none' }}
              rel="noreferrer"
            >
              <Button bgColor={siteUrl ? primaryColor : secondaryDarkColor}>
                Visit project
              </Button>
            </a>
            {tags && tags.map((tag) => <Tag tag={tag} key={tag} />)}
          </HStack>
        </Box>
      </Slide>
    </AspectRatio>
  )
}

export default ProjectCard
