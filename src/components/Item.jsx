import { Link } from 'react-router-dom'
import {Button} from '@chakra-ui/react'

const Item = ({ id, name, img, price, stock }) => {

  return (


    <article className='CardItem'>
    <header className='Header'>
        <h2 className='ItemHeader'>
            {name}
        </h2>
    </header>
    <picture>
        <img src={img} alt={name} className='ItemImg' />
    </picture>
    <section>
        <p className='Info'>
            Price: ${price}
        </p>
        <p className='Info'>
            Stock: {stock}
        </p>
    </section>
    <footer className='ItemFooter'>
        <Button className='ButtonFooter'>
            <Link to={`/item/${id}`} className='Option'>Show More</Link>
        </Button>
    </footer>
</article>
)

}

export default Item;