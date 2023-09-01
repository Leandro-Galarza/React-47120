import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext} from "../context/CartContext"
import Counter from "./Counter"
import { Button,Box } from "@chakra-ui/react"


const ItemDetail = ({ id, Itemname, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)

  const { addItem } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
      setQuantityAdded(quantity)

      const item = {id,name,price}

      addItem(item, quantity)
  }

  return (
    <div>
      <div className="item-detail">
        <img src={img} alt={name} />

        <h3>{Itemname}</h3>

        <h2>Description</h2>
        <p>{description}</p>

        <p>Price:$ {price}</p>

        <p>{item.category}</p>

        <Button>Add to Cart</Button>
        {
          quantityAdded > 0 ? (
         <Link to='/cart' className="OptionDetail">End buy</Link>
          ) : (
          <Counter initial={1} stock={stock} onAdd={handleOnAdd} />
               )
            }
      </div>
      </div>
    )
  }
  
  export default ItemDetail;