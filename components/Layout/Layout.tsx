import { Flex } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import Header from './Header'

interface Props {
  selectedTab: number
  children: ReactNode
}

const Layout = ({ selectedTab, children }: Props) => {
  return (
    <Flex flexDir="column" minH="100vh">
      <Header />
      <Flex flex={1} flexDir="column" justifyContent="center">
        {children}{' '}
      </Flex>
    </Flex>
  )
}

export default Layout
