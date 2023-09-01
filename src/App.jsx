import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import NavBar from './components/NavBar'
import ItemListCointainer from './components/ItemListCointainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import CartWidget from './components/CartWidget'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import ItemListContainer from './components/ItemListCointainer'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
    <BrowserRouter>
    <CartProvider>
      <NavBar/>
      <CartWidget/>
<Routes>
<Route path='/' element={<ItemListContainer />} />
<Route exact path='/category/:categoryId' element={<ItemListCointainer/>} />
<Route exact path='/item/:itemId' element={<ItemDetailContainer/>} />
<Route exact path='/cart' element={<Cart/>} />
<Route exact path='/checkout' element={<Checkout/>} />
<Route exact path="/" element={<Home/>} />
<Route exact path="/about" element={<About/>} />
<Route exact path="/contact" element={<Contact/>} />
</Routes> 
</CartProvider>
<Footer/>
    </BrowserRouter> 
    </div>
  )
}

export default App;