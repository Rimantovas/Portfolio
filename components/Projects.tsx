import { Flex } from '@chakra-ui/react'
import React from 'react'
import { bgGradient } from '../theme'
import ThemeText from './Typography/ThemeText'

const Projects = () => {
  return (
    <Flex
      className="section"
      id="ProjectsSection"
      justifyContent="center"
      minH="100vh"
      w="100%"
      p={5}
      flexDir="row"
      wrap="wrap"
      justify="center"
    ></Flex>
  )
}

export default Projects
