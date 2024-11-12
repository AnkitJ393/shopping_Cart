import React from 'react'
import { CartState } from '../context/Context.'
import SingleProduct from './singleProduct';
import Filters from './fitler';
import './styles.css';

const Home = () => {
  const { state: { products },productState:{byStock,byFastDelivery,byRating,sort,searchQuery} } = CartState();

  const transformProducts=()=>{
    let sortedProducts=products;
    
    if(byFastDelivery){
      sortedProducts=sortedProducts.filter((prod)=>prod.fastDelivery);
    }

    if(!byStock){
      sortedProducts=sortedProducts.filter(prod=>prod.inStock);
    }

    if(byRating){
      sortedProducts=sortedProducts.filter((prod)=>prod.rating >=byRating)
    }

    
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : sort==='highToLow'? b.price - a.price:null
      );
    }
   

    console.log(sortedProducts)
    if(searchQuery){
      sortedProducts=sortedProducts.filter((prod)=>prod.name.toLowerCase().includes(searchQuery));
    }

    return sortedProducts;
  }

  return (
    <div className='home'>
        <Filters/>
        <div className="productContainer">
            {
                transformProducts().map((prod)=>{
                 return   <SingleProduct product={prod} key={prod.id} />
                })
            }
        </div>
    </div>
  )
}

export default Home;