import React from 'react'
import { CartState } from '../context/Context.'
import SingleProduct from './singleProduct';
import Filters from './fitler';
import './styles.css';

const Home = () => {
    const {state:{products}}=CartState();

  return (
    <div className='home'>
        <Filters/>
        <div className="productContainer">
            {
                products.map((prod)=>{
                 return   <SingleProduct product={prod} key={prod.id} />
                })
            }
        </div>
    </div>
  )
}

export default Home;