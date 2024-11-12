import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Rating from './rating'
import './styles.css'
import { CartState } from '../context/Context.'

const SingleProduct = ({product}) => {

    const {
        state:{cart},
        dispatch,
    } =CartState()

  return (
    <div className='products'>
        <Card>
            <Card.Img  style={{ width: '100%', height: '200px', objectFit: 'cover' }} variant='top' src={product.image}  alt={product.name} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Subtitle  style={{paddingBottom:10}}>
                    
                    <span>₹ {Math.ceil(product.price)}</span>
                    {product.fastDelivery 
                        ? 
                            <div>Fast Delivery</div>
                        :
                            <div>4 days delivery</div>
                    }
                    <Rating rating={product.rating} />

                </Card.Subtitle>
                    {cart.some((p)=>p.id===product.id)
                     ?
                        <Button 
                            variant='danger'  
                            onClick={()=>
                                dispatch({
                                    type:'REMOVE_FROM_CART',
                                    payload:product
                                })
                            }>
                            Remove from Cart
                        </Button>
                     :
                        <Button
                            disabled={!product.inStock}
                            onClick={()=>
                                dispatch({
                                    type:'ADD_TO_CART',
                                    payload:product
                                })
                            }>
                            { !product.inStock ?'Out of Stock':'Add to Cart'}
                        </Button>
                     }
                    
            </Card.Body>
        </Card>
    </div>
  )
}

export default SingleProduct