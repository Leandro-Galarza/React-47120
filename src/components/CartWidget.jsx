import { SunIcon } from '@chakra-ui/icons'
import {Flex, Box, Spacer, } from '@chakra-ui/react'
import React from 'react'
import cartIcon from '../assets/Shoppingcarticon.png'


const CartWidget = () => {
  return (
    <Flex>
        <Box>
        <p className='counter'>3</p>
        </Box>
        < Spacer />
        <Box>
            <img src={cartIcon} alt="cart image" width='30px' height='30px' />
        </Box>
        </Flex>

  )
}

export default CartWidget