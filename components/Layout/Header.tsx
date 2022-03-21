import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Circle, Flex, HStack, Text, VStack, Button } from '@chakra-ui/react'
import ThemeText from '../Typography/ThemeText'
import { bgGradient, primary, textColor } from '../../theme'
import MobileDrawer from './MobileDrawer'
import GlowingIcon from '../GlowingIcon'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { SiFacebook } from 'react-icons/si'

const Header = () => {
  const [page, setPage] = useState<string>('')

  useEffect(() => {
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
  })

  return (
    <Flex
      p={5}
      justifyContent={{ base: 'flex-end', md: 'center' }}
      w="100%"
      top={0}
      zIndex="10"
    >
      <Flex display={{ base: 'flex', md: 'none' }}>
        <MobileDrawer page={page} />
      </Flex>
      <HStack
        display={{ base: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
        spacing={50}
        justifyContent="center"
      >
        <a href="#HomeSection">
          <Flex flexDir="column" alignItems="center">
            <ThemeText
              type="h2"
              text="Home"
              style={{
                fontSize: page === 'HomeSection' ? '28px' : '24px',
                color: page === 'HomeSection' ? primary : textColor,
              }}
            />
            {page === 'HomeSection' && (
              <Circle justifyContent="center" size="8px" bg={primary}></Circle>
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
                color: page === 'AboutSection' ? primary : textColor,
              }}
            />
            {page === 'AboutSection' && (
              <Circle justifyContent="center" size="8px" bg={primary}></Circle>
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
                color: page === 'ProjectsSection' ? primary : textColor,
              }}
            />
            {page === 'ProjectsSection' && (
              <Circle justifyContent="center" size="8px" bg={primary}></Circle>
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
                color: page === 'ContactSection' ? primary : textColor,
              }}
            />
            {page === 'ContactSection' && (
              <Circle justifyContent="center" size="8px" bg={primary}></Circle>
            )}
          </Flex>
        </a>
      </HStack>
    </Flex>
  )
}
export default Header
