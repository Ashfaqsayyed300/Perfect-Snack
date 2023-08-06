import { cartActions } from "./cart-slice";

export const sendCartData = (cart)=>{
    return async()=>{
        const sendRequest= async()=>{
            const response = await fetch('https://perfectsnack-c967e-default-rtdb.firebaseio.com/Meals/orders.json',{
                method: "PUT",
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity,
                    totalPrice: cart.totalPrice,                    
                }),
                headers: {
                    "content-type": "application/json"
                }
            });

            if(!response.ok){
                throw new Error("Sending cart data failed!")
            }
        }
            try{
                await sendRequest();
            }catch(error){
                console.log({message: error});
            }
                   
    }
} 

export const fetchCartData= ()=>{
    
    return async (dispatch)=>{

      const fetchData= async()=>{
          const response = await fetch('https://perfectsnack-c967e-default-rtdb.firebaseio.com/Meals/orders.json')
          if(!response.ok){
              throw new Error("Fetching cart data failed.");
            }
            const data = await response.json();
            return data;
        }
        try{
            const cartData = await fetchData();
            dispatch(cartActions.replaceCartItems({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity,
                totalPrice: cartData.totalPrice
            }))
        }catch(error){
            console.log(error);
        }
    }
}