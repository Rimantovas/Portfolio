import { Flex, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Image from 'next/image'
import About from '../components/About'
import Banner from '../components/Banner'
import Layout from '../components/Layout/Layout'
import Projects from '../components/Projects'
import ThemeText from '../components/Typography/ThemeText'

const Home: NextPage = () => {
  if (typeof window) {
    require('pathseg')
  }
  return (
    <Layout>
      <Banner />
      <About />
      <Projects />
    </Layout>
  )
}

export default Home
