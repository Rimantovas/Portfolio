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
  const [page, setPage] = useState(0)

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
        <a onClick={() => setPage(0)} href="#HomeSection">
          <Flex flexDir="column" alignItems="center">
            <ThemeText
              type="h2"
              text="Home"
              style={{
                fontSize: page === 0 ? '28px' : '24px',
                color: page === 0 ? primaryColor : secondaryDarkColor,
              }}
            />
            {page === 0 && (
              <Circle
                justifyContent="center"
                size="8px"
                bg={primaryColor}
              ></Circle>
            )}
          </Flex>
        </a>
        <a onClick={() => setPage(1)} href="#AboutSection">
          <Flex flexDir="column" alignItems="center">
            <ThemeText
              type="h2"
              text="About"
              style={{
                fontSize: page === 1 ? '28px' : '24px',
                color: page === 1 ? primaryColor : secondaryDarkColor,
              }}
            />
            {page === 1 && (
              <Circle
                justifyContent="center"
                size="8px"
                bg={primaryColor}
              ></Circle>
            )}
          </Flex>
        </a>

        <a onClick={() => setPage(2)} href="#ProjectsSection">
          <Flex flexDir="column" alignItems="center">
            <ThemeText
              type="h2"
              text="Projects"
              style={{
                fontSize: page === 2 ? '28px' : '24px',
                color: page === 2 ? primaryColor : secondaryDarkColor,
              }}
            />
            {page === 2 && (
              <Circle
                justifyContent="center"
                size="8px"
                bg={primaryColor}
              ></Circle>
            )}
          </Flex>
        </a>
        <a onClick={() => setPage(3)} href="#ContactSection">
          <Flex flexDir="column" alignItems="center">
            <ThemeText
              type="h2"
              text="Contact me"
              style={{
                fontSize: page === 3 ? '28px' : '24px',
                color: page === 3 ? primaryColor : secondaryDarkColor,
              }}
            />
            {page === 3 && (
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
