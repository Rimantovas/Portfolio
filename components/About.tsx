import { Avatar, Box, Flex, SlideFade, VStack } from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'
import { useInViewport } from 'react-in-viewport'
import { Motion } from 'tsparticles/Options/Classes/Motion/Motion'
import { bgGradient, primary, textColor } from '../theme'
import ThemeText from './Typography/ThemeText'

const About = () => {
  const ref = useRef(null)
  const { enterCount, inViewport } = useInViewport(
    ref,
    { rootMargin: '0px' },
    { disconnectOnLeave: false },
    {}
  )
  const textVariant: Variants = {
    offscreen: {
      opacity: 0,
      x: -30,
    },
    onscreen: {
      opacity: 1,
      x: 0,
    },
  }
  const imageVariant: Variants = {
    offscreen: {
      opacity: 0,
      x: 30,
    },
    onscreen: {
      opacity: 1,
      x: 0,
    },
  }
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
      flexDir={{ base: 'column', md: 'row' }}
      ref={ref}
    >
      <VStack
        spacing={5}
        flexDir="column"
        w={{ base: '100%', md: '30%' }}
        justify="center"
        alignItems="start"
      >
        <motion.div
          initial="offscreen"
          viewport={{ once: true, amount: 0.8 }}
          whileInView="onscreen"
        >
          <motion.div variants={textVariant}>
            <Box>
              <ThemeText
                type="h2"
                text="Who am I?"
                style={{ color: primary }}
              />
              <ThemeText type="h1" text="About me" />
            </Box>
            <ThemeText
              type="h3"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />
          </motion.div>
        </motion.div>
      </VStack>

      <Flex
        pos="relative"
        w={{ base: '80%', md: '40%' }}
        m={{ base: 1, md: 5 }}
        alignItems="center"
      >
        <motion.div
          initial="offscreen"
          viewport={{ once: true, amount: 0.8 }}
          whileInView="onscreen"
        >
          <motion.div variants={imageVariant}>
            <Avatar
              w="100%"
              h="fit-content"
              src="/test.png"
              borderColor={primary}
              borderWidth="2px"
              bgColor={textColor}
            />
          </motion.div>
        </motion.div>
      </Flex>
    </Flex>
  )
}

export default About
