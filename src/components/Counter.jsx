import { Button } from "@chakra-ui/react"
import { useState } from "react"

const Counter = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(1)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className='Counter'>
            <div className='Controls'>
                <Button className='Button' onClick={decrement}>-</Button>
                <h4 className='Number'>{quantity}</h4>
                <Button className='Button' onClick={increment}>+</Button>
            </div>
            <div>
                <Button className='ButtonBuy' onClick={() => onAdd(quantity)} disabled={!stock} >
                    Add to cart
                </Button>
            </div>
        </div>
    )
}

export default Counter;