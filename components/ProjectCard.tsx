import { AspectRatio, Box, Button, Flex, HStack, Slide } from '@chakra-ui/react'
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
    <Flex
      w={{ base: '45%', sm: '45%', md: '100%', lg: '100%' }}
      h="25vh"
      m={4}
      maxWidth="600px"
      borderRadius="15px"
      overflow="hidden"
      onMouseEnter={() => {
        setIsOpen(true)
      }}
      onMouseLeave={() => {
        setIsOpen(false)
      }}
      onClick={() => setIsOpen((prev) => !prev)}
      flexDir="row"
      backgroundSize="200%"
      background={`url('${imageUrl}')`}
      backgroundPosition="center"
      alignItems="flex-end"
    >
      <Slide
        direction="bottom"
        in={isOpen}
        style={{
          zIndex: 10,
          position: 'relative',
          width: '100%',
          bottom: '0px',
        }}
      >
        <Box
          flexDir="column"
          p={5}
          w="100%"
          bottom="0px"
          borderRadius="15px 15px 0px 0px"
          //   bgColor={secondaryLightColor}
          bgGradient={cardGradient}
        >
          <ThemeText
            type="h1"
            text={title}
            style={{ color: primaryLightColor }}
          />
          <ThemeText
            type="h3"
            style={{ noOfLines: 3, color: primaryLightColor }}
            text={description}
          />
          <HStack mt={5} spacing={5}>
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
    </Flex>
  )
}

export default ProjectCard
