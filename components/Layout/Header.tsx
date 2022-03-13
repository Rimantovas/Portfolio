import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Circle, Flex, HStack, Text, VStack, Button } from '@chakra-ui/react'
import ThemeText from '../Typography/ThemeText'
import {
  bgGradient,
  primaryColor,
  primaryDarkColor,
  secondaryDarkColor,
} from '../../theme'

const Header = () => {
  const [page, setPage] = useState<string>('')

  window.onscroll = () => {
    var current: string | null = ''
    const sections = document.getElementsByClassName('section')
    console.log(`=== ${sections.length}`)
    Array.prototype.forEach.call(sections, function (section) {
      const sectionTop = section.offsetTop - 80
      if (scrollY >= sectionTop) {
        current = section.getAttribute('id')
      }
    })
    setPage(current ?? '')
  }

  return (
    <Flex
      bgColor="rgba(155, 167, 214, 0.4)"
      p={5}
      justifyContent="center"
      w="100%"
      position="sticky"
      top={0}
      zIndex="10"
    >
      <HStack spacing={50} justifyContent="center">
        <a href="#HomeSection">
          <Flex flexDir="column" alignItems="center">
            <ThemeText
              type="h2"
              text="Home"
              style={{
                fontSize: page === 'HomeSection' ? '28px' : '24px',
                color:
                  page === 'HomeSection' ? primaryColor : secondaryDarkColor,
              }}
            />
            {page === 'HomeSection' && (
              <Circle
                justifyContent="center"
                size="8px"
                bg={primaryColor}
              ></Circle>
            )}
          </Flex>
        </a>
        <a href="#AboutSection">
          <Flex flexDir="column" alignItems="center">
            <ThemeText
              type="h2"
              text="About"
              style={{
                fontSize: page === 'AboutSection' ? '28px' : '24px',
                color:
                  page === 'AboutSection' ? primaryColor : secondaryDarkColor,
              }}
            />
            {page === 'AboutSection' && (
              <Circle
                justifyContent="center"
                size="8px"
                bg={primaryColor}
              ></Circle>
            )}
          </Flex>
        </a>

        <a href="#ProjectsSection">
          <Flex flexDir="column" alignItems="center">
            <ThemeText
              type="h2"
              text="Projects"
              style={{
                fontSize: page === 'ProjectsSection' ? '28px' : '24px',
                color:
                  page === 'ProjectsSection'
                    ? primaryColor
                    : secondaryDarkColor,
              }}
            />
            {page === 'ProjectsSection' && (
              <Circle
                justifyContent="center"
                size="8px"
                bg={primaryColor}
              ></Circle>
            )}
          </Flex>
        </a>
        <a href="#ContactSection">
          <Flex flexDir="column" alignItems="center">
            <ThemeText
              type="h2"
              text="Contact me"
              style={{
                fontSize: page === 'ContactSection' ? '28px' : '24px',
                color:
                  page === 'ContactSection' ? primaryColor : secondaryDarkColor,
              }}
            />
            {page === 'ContactSection' && (
              <Circle
                justifyContent="center"
                size="8px"
                bg={primaryColor}
              ></Circle>
            )}
          </Flex>
        </a>
      </HStack>
    </Flex>
  )
}
export default Header
