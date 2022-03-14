import {
  Circle,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import {
  bgGradient,
  primaryColor,
  primaryDarkColor,
  primaryLightColor,
  secondaryDarkColor,
  secondaryLightColor,
} from '../../theme'
import ThemeText from '../Typography/ThemeText'
import { useRouter } from 'next/router'

interface Props {
  page: string
}

const MobileDrawer = ({ page }: Props) => {
  const router = useRouter()

  return (
    <Flex display={{ base: 'flex', md: 'none' }} zIndex="20">
      <Menu>
        <MenuButton pr={4}>
          <GiHamburgerMenu size="20px" style={{ color: primaryColor }} />
        </MenuButton>
        <MenuList
          color="white"
          background={secondaryLightColor}
          borderColor={secondaryLightColor}
        >
          <MenuGroup title="Pages" fontSize="20px" color={primaryDarkColor}>
            <MenuItem
              _focus={{ background: '#AEBDF3' }}
              onClick={() => router.push('#HomeSection')}
            >
              {page === 'HomeSection' && (
                <Circle
                  justifyContent="center"
                  size="8px"
                  mr={2}
                  bg={primaryColor}
                />
              )}

              <ThemeText
                type="h3"
                text="Home"
                style={{
                  color:
                    page === 'HomeSection' ? primaryColor : primaryDarkColor,
                }}
              />
            </MenuItem>
            <MenuItem
              _focus={{ background: '#AEBDF3' }}
              onClick={() => router.push('#AboutSection')}
            >
              {page === 'AboutSection' && (
                <Circle
                  justifyContent="center"
                  size="8px"
                  mr={2}
                  bg={primaryColor}
                />
              )}
              <ThemeText
                type="h3"
                text="About"
                style={{
                  color:
                    page === 'AboutSection' ? primaryColor : primaryDarkColor,
                }}
              />
            </MenuItem>
            <MenuItem
              _focus={{ background: '#AEBDF3' }}
              onClick={() => router.push('#ProjectsSection')}
            >
              {page === 'ProjectsSection' && (
                <Circle
                  justifyContent="center"
                  size="8px"
                  mr={2}
                  bg={primaryColor}
                />
              )}
              <ThemeText
                type="h3"
                text="Projects"
                style={{
                  color:
                    page === 'ProjectsSection'
                      ? primaryColor
                      : primaryDarkColor,
                }}
              />
            </MenuItem>
            <MenuItem
              _focus={{ background: '#AEBDF3' }}
              onClick={() => router.push('#ContactSection')}
            >
              {page === 'ContactSection' && (
                <Circle
                  justifyContent="center"
                  size="8px"
                  mr={2}
                  bg={primaryColor}
                />
              )}
              <ThemeText
                type="h3"
                text="Contact me"
                style={{
                  color:
                    page === 'ContactSection' ? primaryColor : primaryDarkColor,
                }}
              />
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default MobileDrawer
