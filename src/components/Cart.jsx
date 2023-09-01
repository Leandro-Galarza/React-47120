import { useContext } from "react"
import { CartContext} from "../context/CartContext"
import CartItem from "./CartItem"
import { Link } from "react-router-dom"
import { Button } from "@chakra-ui/react"

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>Empty Cart</h1>
        <img
          src="https://pbs.twimg.com/media/FJK-epaXEAYaQFv?format=jpg&name=small"
          alt="Compra invisible"/>
        <p>Que no cunda el pánico...</p>
        <p>Talvez las compras sean invisibles!</p>
        <Link to="/">Volver A Productos</Link>
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