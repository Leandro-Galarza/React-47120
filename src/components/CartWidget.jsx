import { Flex, Box } from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import cartIcon from '../assets/ShoppingCartIcon.png'


const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Flex>
      <Box>
        
      <Link to='/cart' className='cart' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
          <img className='icon-cart' src={cartIcon} alt="cart image"  width ='300px' height ='300px' />
      </Link>
      
      </Box>
      <span className='number'>{totalQuantity}</span>
      </Flex>
  )
}



export default CartWidget;