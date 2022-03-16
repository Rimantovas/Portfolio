import { Button, Flex, HStack, Input, Textarea, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import {
  secondaryDarkColor,
  secondaryLightColor,
  primaryColor,
  primaryDarkColor,
  primaryLightColor,
} from '../theme'

const ContactForm = () => {
  return (
    <VStack spacing={5} w="100%" flexDir="column">
      <HStack w="100%" spacing={5}>
        <motion.div style={{ width: '50%' }} whileTap={{ scale: 1.1 }}>
          <Input
            size="lg"
            borderWidth="2px"
            borderColor={primaryDarkColor}
            _hover={{ borderColor: primaryColor }}
            type="name"
            _placeholder={{ opacity: 0.8, color: primaryDarkColor }}
            focusBorderColor={primaryColor}
            placeholder="Name"
          />
        </motion.div>
        <motion.div style={{ width: '50%' }} whileTap={{ scale: 1.1 }}>
          <Input
            size="lg"
            borderWidth="2px"
            borderColor={primaryDarkColor}
            _hover={{ borderColor: primaryColor }}
            type="email"
            _placeholder={{ opacity: 0.8, color: primaryDarkColor }}
            focusBorderColor={primaryColor}
            placeholder="Email"
          />
        </motion.div>
      </HStack>
      <motion.div style={{ width: '100%' }} whileTap={{ scale: 1.1 }}>
        <Input
          size="lg"
          borderWidth="2px"
          borderColor={primaryDarkColor}
          _hover={{ borderColor: primaryColor }}
          _placeholder={{ opacity: 0.8, color: primaryDarkColor }}
          focusBorderColor={primaryColor}
          placeholder="Subject"
        />
      </motion.div>
      <motion.div style={{ width: '100%' }} whileTap={{ scale: 1.1 }}>
        <Textarea
          size="lg"
          borderWidth="2px"
          resize="none"
          maxH="10rem"
          minH="10rem"
          overflow="hidden"
          maxLength={300}
          borderColor={primaryDarkColor}
          _hover={{ borderColor: primaryColor }}
          _placeholder={{ opacity: 0.8, color: primaryDarkColor }}
          focusBorderColor={primaryColor}
          placeholder="Message"
        ></Textarea>
      </motion.div>
      <motion.div style={{ alignSelf: 'flex-end' }} whileTap={{ scale: 1.2 }}>
        <Button size="lg">Message</Button>
      </motion.div>
    </VStack>
  )
}

export default ContactForm
