import { Flex, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import { BsLinkedin, BsTelegram } from 'react-icons/bs'
import { ImMail4 } from 'react-icons/im'
import { primaryColor } from '../theme'
import ContactForm from './ContactForm'
import GlowingIcon from './GlowingIcon'
import ThemeText from './Typography/ThemeText'

const Contact = () => {
  return (
    <Flex
      className="section"
      id="ContactSection"
      justifyContent="center"
      // bgGradient="radial-gradient(circle at 8% 77%, rgba(155, 167, 214, 1) 0%, rgba(235, 236, 236, 1) 80%)"
      maxW="1200px"
      w="100%"
      minHeight="100vh"
      p={5}
      alignItems="center"
      alignSelf="center"
      flexDir="column"
    >
      <Flex
        alignItems="center"
        p={5}
        m={10}
        alignSelf="center"
        w="70%"
        flexDir="column"
      >
        <Flex flexDir="column" m={5}>
          <ThemeText type="h2" text="" style={{ color: primaryColor }} />

          <ThemeText type="h1" text="Contact me" />
        </Flex>

        <ThemeText
          type="h2"
          text="I'm interested in freelance projects, especially startups with innovative ideas. Send me a message and I can help turn a vision into reality :)"
        />
      </Flex>
      <Flex
        w="100%"
        alignItems="center"
        justifyContent="center"
        flexDir={{ base: 'column', md: 'row' }}
      >
        <Flex w="40%" flexDir="row">
          <VStack alignItems="flex-start" spacing={8}>
            <HStack alignItems="center" spacing={5}>
              <GlowingIcon
                size="60px"
                url="https://www.linkedin.com/in/rimas-povilaitis"
              >
                <BsLinkedin />
              </GlowingIcon>
              <ThemeText type="h2" text="Rimas Povilaitis" />
            </HStack>
            <HStack alignItems="center" spacing={5}>
              <GlowingIcon
                isRound
                size="60px"
                url="https://www.linkedin.com/in/rimas-povilaitis"
              >
                <BsTelegram />
              </GlowingIcon>
              <ThemeText type="h2" text="867713389" />
            </HStack>
            <HStack alignItems="center" spacing={5}>
              <GlowingIcon
                isRound
                size="60px"
                url="https://www.linkedin.com/in/rimas-povilaitis"
              >
                <ImMail4 />
              </GlowingIcon>
              <ThemeText type="h2" text="rimas.pov@gmail.com" />
            </HStack>
          </VStack>
          <VStack
            alignItems="flex-start"
            spacing={15}
            justifyContent="space-evenly"
          ></VStack>
        </Flex>
        <Flex w="60%">
          <ContactForm />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Contact
