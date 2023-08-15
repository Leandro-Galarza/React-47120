import React from 'react'
import {Card, CardHeader,CardBody, CardFooter, Stack, Divider, Heading, Text, Button, Flex, Image,} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({id, name, price, stock, Image }) => {  
    return (
        <div className='product'>
            <img src={img} alt={name}/>
            <h4>{product.name}</h4>
            <p>Price: ${product.price}</p>
            <Link className="Show more" to={`/item/${product.id}`}>Show more</Link>
        </div>
    )
}

export default Item