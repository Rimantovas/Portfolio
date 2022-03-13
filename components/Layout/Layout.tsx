import { Flex } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { bgGradient } from '../../theme'
import Header from './Header'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Flex flexDir="column" minH="100vh" background={bgGradient}>
      <Header />
      <Flex flex={1} flexDir="column" justifyContent="center">
        {children}{' '}
      </Flex>
    </Flex>
  )
}

export default Layout
