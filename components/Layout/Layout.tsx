import { Flex } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { bgGradient } from '../../theme'
import Header from './Header'
import Particles from 'react-tsparticles'
import { linkOptions } from '../../utils/ParticlesConfig'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Flex flexDir="column" w="100%" minH="100vh" background={bgGradient}>
      <Header />
      <Particles
        id="bg"
        style={{
          position: 'relative',
          minHeight: '100%',
          width: '100%',
        }}
        options={linkOptions}
      ></Particles>
      <Flex flex={1} flexDir="column" justifyContent="center">
        {children}{' '}
      </Flex>
    </Flex>
  )
}

export default Layout
