import React from 'react'
import { Menu, MenuButton,Button, MenuList, MenuItem, Flex, Box, Spacer} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import logo from '../assets/FMKLogo.png'

const NavBar = () => {
  return (
    <Flex>
        <Box>
          <img src={logo} alt="Fake Music Store Logo" width='370px' height='70px'/>
        </Box>
        <Spacer />
        <Menu> 
    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}
    leftIcon={<ChevronDownIcon />}>
      Categories
    </MenuButton>
    <MenuList>
      <MenuItem>Guitar</MenuItem>
      <MenuItem>Bass Guitar</MenuItem>
      <MenuItem>Stopmboxes</MenuItem>
      <MenuItem>Amps</MenuItem>
      <Spacer />
    </MenuList>
  </Menu>
  <Spacer />
  <Box p="2">
  < CartWidget />
  </Box>
  </Flex>
  )
}

export default NavBar