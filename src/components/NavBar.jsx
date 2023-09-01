import { Menu, MenuButton,Button, MenuList, MenuItem, Flex, Box, Spacer} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import logo from '../assets/FMKLogo.png'


const NavBar = () => {
  return (
    <Flex className='Nav'>
        <Box>
          <Link to={"/"}>
          <img src={logo} alt="Fake Music Store Logo" width='370px' height='70px'/>
          </Link>
        </Box>

        <Spacer />
        
        <Menu> 
    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}
                             leftIcon={<ChevronDownIcon />}>
      Categories
    </MenuButton>
    <MenuList>
      <MenuItem>
    <Link to={`/category/Guitars`}>
       Guitars
       </Link>
       </MenuItem>
       
      
      <MenuItem>
      <Link to={`/category/Basses`}>
      Basses
      </Link>
      </MenuItem>


      <MenuItem>
      <Link to={`/category/Stompboxes`}>
      Stopmboxes
      </Link>
      </MenuItem>

      <Spacer />
    </MenuList>
  </Menu>
  <Spacer />

  <Box className='controls'>
    <ul>
  <li> <Link to="/about">About</Link> </li>
  <li> <Link to="/contact">Contact</Link> </li>
    </ul>
  </Box>

  <Box p="2">
<Link to={"/cart"}>
  < CartWidget />
  </Link>
  </Box>
  </Flex>
  )
}

export default NavBar