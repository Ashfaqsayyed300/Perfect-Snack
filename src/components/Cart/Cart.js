import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart=(props)=>{
    const cartItems =useSelector(state=> state.cart.items)
    const totalPrice =useSelector(state=> state.cart.totalPrice)
    const totalQuantity =useSelector(state=> state.cart.totalQuantity)
    let content;

    if(totalQuantity > 0){
        content=  <div>
        <div >
        <hr className="hr"/>

            {cartItems.map(item=>
        <CartItem
                        id={item.id}
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        amount={item.quantity}
                        image={item.image}
                    />
            )}

        </div>
        <div style={{marginTop: "20px"}} className='text-sm-right'>
            <h2 className="" >Subtotal: <span className="text-danger">${totalPrice.toFixed(2)}</span></h2>
            <div>
                <button className='btn btn-success' type="button" >
                    <Link to="/checkout" className="text-light font-weight-bold">
                        Checkout <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>
                        </Link>
                </button>
            </div>
        </div>
    </div>
    }else{
        content= <h1>You have no items in your cart, start adding some!</h1>;
    }
    
    
    return(
            <div className='container mt-3 mb-3'>
                <div className="d-flex justify-content-between">
                <h1 className='' variant="h3">Cart </h1>
                <Link to='/' className="bg-danger p-3 text-light">X</Link>
                </div>
                
                {content}
            </div>
    )
}

export default Cart;