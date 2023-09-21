import { Menu, MenuButton,Button, MenuList, MenuItem, Flex, Box, Spacer, Center} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import logo from '../assets/FMKLogo.png'
import cartIcon from '../assets/shoppingCartIcon.png'


const NavBar = () => {
  return (
    <Flex className='Nav'>
        <Box>
          <Link to={"/"}>
          <img src={logo} alt="Fake Music Store Logo" width='370px' height='70px'/>
          </Link>
        </Box>

        <Spacer />
        <Center>
        <Menu> 
          <div className='ChevronB'>
    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}
                             leftIcon={<ChevronDownIcon />}>
      Categories
    </MenuButton>
    </div>



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
  </Center>
  <Spacer />

  <Box className='controls'>
    <ul className='controlsbtn'>
  <li> <Link to="/about">About</Link> </li>
  <li> <Link to="/contact">Contact</Link> </li>
    </ul>
  </Box>

  <Box p="2">
<Link to={"/cart"}>
<img src={cartIcon} width='32px' height='32px' ></img>

  </Link>
  </Box>
  </Flex>
  )
}

export default NavBar