import { Flex } from '@chakra-ui/react'
import React from 'react'

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
    ></Flex>
  )
}

export default Contact
