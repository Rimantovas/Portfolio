import { Box, Button, Flex, HStack } from '@chakra-ui/react'
import React from 'react'
import ThemeText from './Typography/ThemeText'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import {
  primaryColor,
  primaryDarkColor,
  secondaryDarkColor,
  secondaryLightColor,
} from '../theme'
import Particles from 'react-tsparticles'

const Banner = () => {
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
    backgroundMode: false,
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
          mode: 'bubble',
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
        distance: 50,
        enable: true,
        opacity: 0.8,
      },
      move: {
        attract: {
          rotate: {
            x: 600,
            y: 1200,
          },
        },
        enable: true,
        outModes: {
          default: 'bounce',
          bottom: 'bounce',
          left: 'bounce',
          right: 'bounce',
          top: 'bounce',
        },
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
        },
        value: 2,
        animation: {
          speed: 40,
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
          opacity: 0.5,
        },
      },
      enable: true,
      inline: {
        arrangement: 'equidistant',
      },
      move: {
        radius: 20,
        type: 'path',
      },
      scale: 1,
      type: 'inline',
      url: '/smalldeer.svg',
    },
  }
  const initParticles = async (main: any) => {}
  return (
    <Flex>
      <Flex
        className="section"
        id="HomeSection"
        maxW="1200px"
        w="100%"
        minHeight="100vh"
        p={5}
        justify="center"
        alignItems="center"
        alignSelf="center"
      >
        <Flex w="40%" flexDir="column" justify="start">
          <Box h="5rem" />
          <Flex flexDir="column">
            <ThemeText
              type="h2"
              text="Web / app developer"
              style={{ color: primaryColor }}
            />
            <ThemeText isGlitch type="h1" text="Hey, I'm Rimas Povilaitis" />
            <Box h="3rem" />
            <ThemeText
              type="h3"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
          </Flex>

          <HStack w="80%" p={5} spacing={10} justify="center">
            <BsGithub size="50px" color={primaryDarkColor} />
            <BsLinkedin size="50px" color={primaryDarkColor} />
            <SiGmail size="50px" color={primaryDarkColor} />
          </HStack>
          <Flex w="80%" p={5} justify="center">
            <Button p={5} w="200px" h="80px">
              <ThemeText
                type="h2"
                text="Let's talk"
                style={{ color: 'white', fontWeight: 'normal' }}
              />
            </Button>
          </Flex>
        </Flex>
        <Flex w="60%" h="60vh" flexDir="row" position="relative">
          <Particles
            style={{
              position: 'relative',
              height: '100%',
              width: '100%',
            }}
            options={options2}
            init={initParticles}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Banner
