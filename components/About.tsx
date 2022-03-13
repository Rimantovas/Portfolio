import { Avatar, Box, Flex, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { bgGradient, primaryColor, secondaryLightColor } from '../theme'
import ThemeText from './Typography/ThemeText'

const About = () => {
  return (
    <Flex
      className="section"
      id="AboutSection"
      justifyContent="center"
      // bgGradient="radial-gradient(circle at 8% 77%, rgba(155, 167, 214, 1) 0%, rgba(235, 236, 236, 1) 80%)"
      maxW="1200px"
      w="100%"
      minHeight="100vh"
      p={5}
      alignItems="center"
      alignSelf="center"
    >
      <VStack
        spacing={5}
        flexDir="column"
        w="30%"
        justify="center"
        alignItems="start"
      >
        <ThemeText type="h2" text="Who am I?" style={{ color: primaryColor }} />
        <ThemeText type="h1" text="About me" />
        <ThemeText
          type="h3"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
      </VStack>
      <Flex pos="relative" w="40%" m={5} alignItems="center">
        <Avatar
          w="100%"
          h="fit-content"
          src="/test.png"
          borderColor={primaryColor}
          borderWidth="2px"
          bgColor={secondaryLightColor}
        />
      </Flex>
    </Flex>
  )
}

export default About
