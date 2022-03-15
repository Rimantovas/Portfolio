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
import {
  primaryColor,
  primaryDarkColor,
  primaryLightColor,
  secondaryDarkColor,
  secondaryLightColor,
} from '../theme'
import Particles from 'react-tsparticles'
import { PolygonMaskType } from 'tsparticles'
import { useInViewport } from 'react-in-viewport'
import { Motion } from 'tsparticles/Options/Classes/Motion/Motion'
import { motion } from 'framer-motion'

const Banner = () => {
  const ref = useRef(null)
  const { enterCount, inViewport } = useInViewport(
    ref,
    { rootMargin: '0px' },
    { disconnectOnLeave: false },
    {}
  )
  const options = {
    preset: 'links',
    background: {
      color: 'none',
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'bubble',
        },
      },
    },
    particles: {
      links: {
        distance: 150,
        enable: true,
      },
      move: {
        enable: true,
      },
      size: {
        value: 1,
      },
      shape: {
        type: 'circle',
      },
    },
    fullScreen: false,
    backgroundMode: true,
  }
  const options2 = {
    background: {
      color: 'none',
    },
    fullScreen: false,
    backgroundMode: false,
    detectRetina: false,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'grab',
        },
        onDiv: {
          selectors: '#repulse-div',
          mode: 'repulse',
        },
        onHover: {
          enable: true,
          mode: ['bubble', 'connect'],
        },
      },
      modes: {
        bubble: {
          distance: 40,
          duration: 2,
          opacity: 0.5,
          size: 12,
          color: primaryColor,
        },
        connect: {
          color: {
            value: primaryColor,
          },
          distance: 50,
          lineLinked: { opacity: 0.5 },
          radius: 60,
        },
        grab: {
          distance: 400,
        },
        slow: {
          factor: 1,
          radius: 0,
        },
      },
    },
    particles: {
      color: {
        value: secondaryLightColor,
      },
      links: {
        color: {
          value: secondaryLightColor,
        },
        scale: 2,
        distance: 50,
        enable: true,
        opacity: 0.8,
      },
      move: {
        attract: {
          rotate: {
            x: 1000,
            y: 1200,
          },
        },
        enable: true,
        outModes: 'bounce' as const,
        speed: 1,
      },
      number: {
        density: {
          area: 20000,
        },
        value: 200,
      },
      opacity: {
        value: {
          min: 0.05,
          max: 0.8,
        },
        animation: {
          enable: true,
          minimumValue: 0.05,
        },
      },
      size: {
        random: {
          enable: true,
          minimumValue: 1,
        },
        value: 2,
        animation: {
          speed: 50,
          minimumValue: 0.1,
        },
      },
    },
    polygon: {
      draw: {
        enable: true,
        stroke: {
          color: {
            value: primaryColor,
          },
          width: 0.3,
          opacity: 0.3,
        },
      },
      enable: true,
      inline: {
        arrangement: 'equidistant' as const,
      },
      move: {
        radius: 30,
        type: 'path' as const,
      },
      scale: 1,
      type: 'inline' as PolygonMaskType,
      url: '/smalldeer.svg',
    },
  }
  return (
    <Flex
      className="section"
      id="HomeSection"
      maxW="1200px"
      w="100%"
      minHeight="100vh"
      p={5}
      justifyContent="center"
      alignItems={{ base: 'flex-start', md: 'center' }}
      alignSelf="center"
    >
      <Flex
        w={{ base: '100%', sm: '100%', md: '40%', lg: '40%' }}
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
              style={{ color: primaryColor }}
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
            <a
              target="_blank"
              href="https://github.com/Rimantovas"
              rel="noreferrer"
            >
              <motion.div
                style={{ borderRadius: '50%' }}
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
                <BsGithub size="40px" />
              </motion.div>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/rimas-povilaitis"
              rel="noreferrer"
            >
              <motion.div
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
                <BsLinkedin size="40px" />
              </motion.div>
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/rimas.povilaitis.7"
              rel="noreferrer"
            >
              <motion.div
                style={{ borderRadius: '50%' }}
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
                <SiFacebook size="40px" />
              </motion.div>
            </a>
          </HStack>
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
        </ScaleFade>
      </Flex>

      <Flex
        display={{ base: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
        w="60%"
        h="60vh"
        flexDir="row"
        position="relative"
      >
        <Particles
          style={{
            position: 'relative',
            height: '100%',
            width: '100%',
          }}
          options={options2}
        />
      </Flex>
    </Flex>
  )
}

export default Banner
