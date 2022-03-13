import { Flex } from '@chakra-ui/react'
import React from 'react'
import { bgGradient } from '../theme'
import ProjectCard from './ProjectCard'
import ThemeText from './Typography/ThemeText'
import {
  SiFlutter,
  SiFirebase,
  SiChakraui,
  SiNextdotjs,
  SiReact,
  SiGooglecloud,
} from 'react-icons/si'
const Projects = () => {
  const style = {}
  return (
    <Flex
      className="section"
      id="ProjectsSection"
      justifyContent="center"
      alignSelf="center"
      minH="100vh"
      w="100%"
      maxW="1600px"
      p={5}
      flexDir="column"
    >
      <Flex justifyContent="center" w="100%" wrap="wrap" display="inline-flex">
        <ProjectCard
          imageUrl="/project1.png"
          title="Lorem"
          description="Lorem Ipsum "
          siteUrl=""
          tags={['flutter', 'firebase', 'chakra']}
        />
        <ProjectCard
          imageUrl="/project1.png"
          title="Lorem"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          siteUrl="https://stackoverflow.com/questions/65632698/how-to-open-a-link-in-a-new-tab-in-nextjs"
          tags={['flutter', 'firebase', 'chakra']}
        />
        <ProjectCard
          imageUrl="/project1.png"
          title="Lorem"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          siteUrl=""
          tags={['flutter', 'firebase', 'chakra']}
        />
        <ProjectCard
          imageUrl="/project1.png"
          title="Lorem"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          siteUrl=""
          tags={['flutter', 'firebase', 'chakra']}
        />
      </Flex>
    </Flex>
  )
}

export default Projects
