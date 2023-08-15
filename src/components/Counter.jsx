import { Button } from "@chakra-ui/react"

const Counter = ({ quantity, setquantity, handleAdd }) => {
    

  const handleSumar = () => {
      quantity < max && setquantity(quantity + 1)
  }

  const handleRestar = () => {
      quantity > 1 && setquantity(quantity - 1)
  }


  return (
      <div>
          <button 
              onClick={handleRestar} 
              className={`btn  ${quantity === 1 ? "btn btn-primary" : "btn btn-primary"}`}
              disabled={quantity === 1}
          >
              -
          </button>

          <span className="mx-1">{quantity}</span>
          <button 
              onClick={handleSumar} 
              className={quantity === max ? "btn btn-primary" : "btn btn-primary"}
              disabled={quantity === max}
          >
              +
          </button>
          <br/>
          <button onClick={handleAdd} className="btn btn-success my-2">Add to cart</button>
      </div>
  )
}

export default Counter