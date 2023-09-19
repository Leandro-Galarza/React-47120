import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where} from 'firebase/firestore'
import { db } from '../config/firebase'
import ItemList from '../components/ItemList'


const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);



  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = categoryId
      ? query(collection(db, 'products'), where('category', '==', categoryId))
      : collection(db, 'products');

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
   
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  const handleSearch = (searchTerm) => {
    const filtered = products.filter(
      (product) =>
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.itemname.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <h1>All products</h1>
      <h1>{greeting}</h1>
      {loading ? <p>Loading...</p> : <ItemList products={filteredProducts.length > 0 ? filteredProducts : products} />}
    </div>
  );
};
  
export default ItemListContainer;