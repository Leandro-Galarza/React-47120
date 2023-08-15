import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import React from 'react'


const ItemDetailContainer = () => {

const [item, setItem] = useState(null);
const id = useParams().id

useEffect(() => {
    getItemId(Id)
    .then((res) => {
        setItem(res);
    })
},) [Id]

}

export default ItemDetailContainer