import Meals from "../components/Meals/Meals"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendCartData, fetchCartData } from "../store/cart-actions";
import Navbar from "../components/UI/Navbar";
import Carousel from "../components/UI/Carousel";

let isInitial=true;

const Homepage= ()=>{
  const dispatch = useDispatch();
  const cart= useSelector(state => state.cart)

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

  const [ meals, setMeals ] = useState([])
  const [isLoading, setIsLoading]=useState(true)
  useEffect(()=>{
    const fetchMeals= async ()=>{
      const response = await fetch('https://perfectsnack-c967e-default-rtdb.firebaseio.com/Meals.json');
      const data = await response.json();
      setMeals(data.Meal.Pizza)
      setIsLoading(false);
    }
    fetchMeals();
  },[])
    return(
      <>
        <Navbar/>
        <Meals meal={meals} isLoading={isLoading}/>
        <Carousel/>
      </>
    )
}

export default Homepage;