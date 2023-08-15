import {  useState, useMemo } from "react"
import Counter from "./Counter"
import { Link } from "react-router-dom"


const ItemDetail = ({id, name, price, category, img, stock}) => {




    const [quantity, setQuantity] = useState(1)

    const handleAdd = () => {
        const item = {
            id, 
            name, 
            price, 
            category,  
            img, 
            stock, 
            quantity
        }
        
        addToCart(item)
    }

    
    const handleBack = () => {
        navigate(-1)
    }

    const date = useMemo(() => new Date().toLocaleString(), [quantity])

    return (
        <div className="container my-5">
            <h2>{name}</h2>

            <img className="img" src={img} alt={name}/>
 
            <h4>Price: ${price}</h4>
            <br/>

            <small>Category: {category}</small>
            <br/>
        
            {
                isInCart(id)
                    ?   <Link className="btn btn-success" to="/cart">Confirm buy</Link>
                    :   <Counter
                            max={stock}
                            quantity={quantity}
                            setQuantity={setQuantity}
                            handleAdd={handleAdd}
                        />
            }
            <button onClick={handleBack} className="btn btn-primary">Back</button>
        </div>
    )
}

export default ItemDetail