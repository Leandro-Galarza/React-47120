import React from 'react'
import Item from './Item'

const ItemList = ({Items= []}) => {

  return (
    <div>
        {
            Items.map((Products) => <Item key={Products.id} {...Products}/>)
        }
    </div>
)
}

export default ItemList