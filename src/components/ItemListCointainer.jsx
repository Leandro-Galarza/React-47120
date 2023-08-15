import React from 'react'
import { useState, useEffect } from 'react'
import { Center } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {


      const products = ( "Products")
      const q = categoryId 
                  ? query(products, where("category", "==", categoryId))
                  : products

          .then((resp) => {
              const items = resp.docs.map((doc) => ({...doc.data(), id: doc.id}))
              setProducts(items)
          })
          .catch(e => console.log(e))
          .finally(() => setLoading(false))

  }, [categoryId])

                      
  return (
      <div className="container my-5">
          {
              loading
                  ? <h2>Loading...</h2>
                  : <ItemList items={products}/>
          }
      </div>
  )
}

export default ItemListContainer