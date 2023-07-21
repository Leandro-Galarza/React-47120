import React from 'react'
import NavBar from './components/NavBar'
import ItemListCointainer from './components/ItemListCointainer'

const App = () => {

  return (
    <>
  <NavBar/>
  < ItemListCointainer
  greeting="Welcome to Fake Music Store"
   />
    </>
  )
}

export default App