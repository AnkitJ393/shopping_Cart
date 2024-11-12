import React, { useMemo } from 'react'
import { CartState } from '../context/Context.'
import SingleProduct from './singleProduct';
import Filters from './fitler';
import './styles.css';

const Home = () => {
  const { state: { products },productState:{byStock,byFastDelivery,byRating,sort,searchQuery} } = CartState();

  const filteredProducts = useMemo(() => {
    return products
      .filter((prod) => 
      (!byStock || prod.inStock) && 
        (!byFastDelivery || prod.fastDelivery) &&
        (byRating ? prod.rating >= byRating : true)
      )
      .filter((prod) => 
        searchQuery ? prod.name.toLowerCase().includes(searchQuery.toLowerCase()) : true
      )
      .sort((a, b) => 
        sort === 'lowToHigh' ? a.price - b.price : sort === 'highToLow' ? b.price - a.price : 0
      );
  }, [products, byStock, byFastDelivery, byRating, sort, searchQuery]);

  console.log(filteredProducts)

  return (
    <div className='home'>
        <Filters/>
        <div className="productContainer">
            {
                filteredProducts.map((prod)=>{
                 return   <SingleProduct product={prod} key={prod.id} />
                })
            }
        </div>
    </div>
  )
}

export default Home;