import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Badge,
    Button,
    Container,
    Dropdown,
    FormControl,
    Nav,
    Navbar,
  } from "react-bootstrap";

 
  import { FaShoppingCart } from "react-icons/fa";
import { CartState } from '../context/Context.';
import { AiFillDelete } from 'react-icons/ai';

const Header = () => {

    const {state:{cart},dispatch,productDispatch}=CartState();


  return (
    <Navbar bg='dark' variant='dark '>
        <Container>
            <Navbar.Brand>
                 <Link to="/"> Shopping Cart </Link>   
            </Navbar.Brand>
            {useLocation().pathname.split("/")[1] !== "cart" && (
            <Navbar.Text className='search' >
                <FormControl 
                    style={{width:500}}
                    placeholder='Search a Product'
                        type='search'
                     aria-label="Search"
                    className='m-auto'   
                    onChange={(e) => {
                        productDispatch({
                          type: "FILTER_BY_SEARCH",
                          payload: e.target.value,
                        });
                      }} 
                />  
            </Navbar.Text>
            )}
            <Nav>
                <Dropdown >
                    <Dropdown.Toggle variant="success">
                        <FaShoppingCart color="white" fontSize="25px" />
                        <Badge>{cart.length}</Badge>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{minWidth:350 ,left:'-195px'}}>
                        {cart.length>0
                            ?
                                <>
                                {cart.map((prod)=>{
                                    return <span className='cartitem' key={prod.id}>
                                        <img
                                            src={prod.image}
                                            className='cartItemImg'
                                            alt={prod.name}
                                        />
                                        <div className='cartItemDetail'>
                                            <span>{prod.name}</span>
                                            <span>₹ {Math.ceil(prod.price)} </span>
                                        </div>
                                        <AiFillDelete
                                           fontSize='20px'
                                           style={{cursor:'pointer'}}
                                            onClick={()=> 
                                                dispatch({
                                                    type:'REMOVE_FROM_CART',
                                                    payload:prod
                                                })
                                            
                                            }
                                        
                                        />

                                    </span>

                                })}
                                <Link to="/cart">
                                    <Button style={{ width: "95%", margin: "0 10px" }}>
                                       Go To Cart
                                    </Button>
                                </Link>
                            </>
                         
                            :
                                <span style={{padding:10}}>Cart is Empty!</span>
                        }
                    </Dropdown.Menu>

                </Dropdown>



            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header