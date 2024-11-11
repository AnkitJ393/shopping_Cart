import { createContext, useContext, useReducer } from "react";
import { faker } from '@faker-js/faker';
import { cartReducer } from "./Reducer";

const cartContext=createContext();

    const products = [...Array(20)].map(()=>({
        id:faker.string.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image:faker.image.url(),
        inStock:faker.helpers.arrayElement([0,3,5,6,7]),
        fastDelivery:faker.datatype.boolean,
        rating:faker.helpers.arrayElement([1,2,3,4,5,6])
    }));

  

const Context=({children})=>{
    const [state,dispatch]=useReducer(cartReducer,{
        products:products,
        cart:[]
    })


    return <cartContext.Provider value={{state,dispatch}} > {children}  </cartContext.Provider>
}

export const CartState=()=>{
    return  useContext(cartContext);
}

export default Context;