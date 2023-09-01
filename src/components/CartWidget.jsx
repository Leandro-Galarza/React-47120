import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { Flex, Box } from '@chakra-ui/react'
import cartIcon from '../assets/Shoppingcarticon.png'

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Flex>
      <Box>
      <Link to='/cart' className='cart' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
          <img src={cartIcon} alt="cart image"  width = '30px' height = '30px' />
          <span className='number'>{totalQuantity}</span>
      </Link>
      </Box>
      </Flex>
  )
}



export default CartWidget;