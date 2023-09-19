import { useContext } from "react"
import { CartContext} from "../context/CartContext"
import CartItem from "./CartItem"
import { Link } from "react-router-dom"
import { Button, Center } from "@chakra-ui/react"

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div className="eCC">
        <Center>

        <img className="eCH"
          src="https://img.freepik.com/premium-photo/person-feeling-loneliness-surreal-illustration_796245-319.jpg"
          alt="Empty cart/empty heart"/>
          <Button className="eCB">
        <Link to="/">Back to Home</Link>
        </Button>
        </Center>
        <div className="eCT">
        <h1>Your cart is currently empty</h1>
        <h1>empty as the empty that remains </h1>
        <h1>when she left </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="Cart">
      <h1>Cart</h1>
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <h2 className="Cart__Total">Total: ${total}</h2>
      <Button onClick={() => clearCart()}>
        Clear Cart
      </Button>
      <br></br>
      <Button className="Cart__Button">
        <Link to="/checkout">
          Buy
        </Link>
      </Button>
    </div>
  );
};

export default Cart