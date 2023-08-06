import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Cart  from "../components/Cart/Cart";
import { fetchCartData, sendCartData } from "../store/cart-actions"

let isInitial =true;

const CartPage = () =>{
    const dispatch = useDispatch();
    const cart= useSelector(state => state.cart);
    
    useEffect(()=>{
        dispatch(fetchCartData());
    },[dispatch]);

    useEffect(()=>{
        if(isInitial){
            isInitial= false;
            return;
        }
        if(cart.changed){
            dispatch(sendCartData(cart));
        }
    },[cart, dispatch]);

    return (
        <Cart/>
    )
}

export default CartPage;