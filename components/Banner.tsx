import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  ScaleFade,
  SlideFade,
} from '@chakra-ui/react'
import React, { useRef } from 'react'
import ThemeText from './Typography/ThemeText'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { SiFacebook, SiGmail } from 'react-icons/si'
import { primary } from '../theme'
import Particles from 'react-tsparticles'
import { PolygonMaskType } from 'tsparticles'
import { useInViewport } from 'react-in-viewport'
import { Motion } from 'tsparticles/Options/Classes/Motion/Motion'
import { motion } from 'framer-motion'
import {
  basicOptions,
  linkOptions,
  upgradedOptions,
} from '../utils/ParticlesConfig'
import GlowingIcon from './GlowingIcon'

const Banner = () => {
  const ref = useRef(null)
  const { enterCount, inViewport } = useInViewport(
    ref,
    { rootMargin: '0px' },
    { disconnectOnLeave: false },
    {}
  )
  return (
    <Flex
      className="section"
      id="HomeSection"
      maxW="1200px"
      w="100%"
      minHeight="100vh"
      p={5}
      justifyContent="center"
      alignItems="center"
      alignSelf="center"
    >
      <Flex
        w={{ base: '100%', sm: '100%', md: '60%', lg: '60%' }}
        flexDir="column"
        justify="start"
        ref={ref}
      >
        <ScaleFade initialScale={0.5} in={inViewport}>
          <Box h="5rem" />
          <Flex flexDir="column">
            <ThemeText
              type="h2"
              text="Web / app developer"
              style={{ color: primary }}
            />

            <ThemeText type="h1" text="Hey, I'm Rimas Povilaitis" />
            <Box h="3rem" />
            <ThemeText
              type="h3"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
          </Flex>

          <HStack
            w={{ base: '100%', md: '80%' }}
            p={5}
            spacing={10}
            justify="center"
          >
            <GlowingIcon
              size="40px"
              isRound
              url="https://github.com/Rimantovas"
            >
              <BsGithub />
            </GlowingIcon>
            <GlowingIcon
              size="40px"
              url="https://www.linkedin.com/in/rimas-povilaitis"
            >
              <BsLinkedin />
            </GlowingIcon>
            <GlowingIcon
              isRound
              size="40px"
              url="https://www.facebook.com/rimas.povilaitis.7"
            >
              <SiFacebook />
            </GlowingIcon>
          </HStack>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Flex w={{ base: '100%', md: '80%' }} p={5} justify="center">
              <a href="#ContactSection">
                <Button p={5} w="200px" h="80px">
                  <ThemeText
                    type="h2"
                    text="Let's talk"
                    style={{ color: 'white', fontWeight: 'normal' }}
                  />
                </Button>
              </a>
            </Flex>
          </motion.div>
        </ScaleFade>
      </Flex>

      <Box
        display={{ base: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
        w="40%"
        h="60vh"
        flexDir="row"
        position="relative"
      >
        <Particles
          id="briedis"
          style={{
            position: 'relative',
            height: '100%',
            width: '100%',
          }}
          options={upgradedOptions}
        />
      </Box>
    </Flex>
  )
}

export default Banner
