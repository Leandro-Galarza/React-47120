import { useContext, useState } from 'react'
import { db } from "../config/Firebase"
import { CartContext } from '../context/CartContext'
import { Timestamp, addDoc, collection, getDocs,query, where, writeBatch, documentId } from 'firebase/firestore'
import CheckoutForm from './CheckoutForm'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'products')
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })
            if (outOfStock.length === 0) {
                await batch.commit()
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error('Hay productos que estan fuera de stock')
            }
        } catch (error) {
  
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="Checkout">
            {loading && <h1 className="loadingMessage">processing your payment...</h1>}
            {orderId ? (
                <div>
                    <h1 className="order-id">El id de su orden es: {orderId}</h1>
                    <h2 className="Gracias">Thanks for buying on Fake music Store!</h2>
                    <img
                        src="https://i.gifer.com/origin/61/61b07c5d234ac62a485bbc1ef5cb0da8_w200.webp"
                        alt="thxfor"
                        className="thxImg"
                    />
                </div>
            ) : (
                <div>
                    <h1 className="checkoutbuy">buy order</h1>
                    <CheckoutForm onConfirm={createOrder} />
                </div>
            )}
        </div>
    );
};

export default Checkout;