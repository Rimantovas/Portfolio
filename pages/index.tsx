import { Flex, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import About from '../components/About'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Layout from '../components/Layout/Layout'
import Projects from '../components/Projects'

const Home: NextPage = () => {
  return (
    <Layout>
      <Banner />
      <About />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default Home
