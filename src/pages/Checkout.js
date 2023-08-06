import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCartData } from '../store/cart-actions';
import Checkout from "../components/CheckoutForm/Checkout/Checkout";

const CheckoutPage = () => {
    const [ errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();
    const [ order, setOrder ]= useState({});
    const cart= useSelector(state=> state.cart)
    
    useEffect(()=>{
        dispatch(fetchCartData())
    },[dispatch]);

    const handleCaptureCheckout= async(checkoutId, newOrder)=>{
        try {
            const incomingOrder= await fetch('https://perfectsnack-c967e-default-rtdb.firebaseio.com/checkout.json',{
                method: "PUT",
                body: JSON.stringify({
                    checkoutId,
                    newOrder
                }),
                headers: {
                    "content-type": "application/json"
                }        
            })
            if(!incomingOrder.ok){
                throw new Error("Sending Checkout data failed");
            }else{
                console.log("Success");
            }

            setOrder(newOrder);

        } catch (error) {
            setErrorMessage({message: error});
        }
    }

    return (
        <div>
            <Checkout 
            cart={cart}
            order={order}
            onCaptureCheckout= {handleCaptureCheckout}
            error={errorMessage}
            />
        </div>
    )
}

export default CheckoutPage;