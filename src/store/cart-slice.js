import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantity: 0,
        totalPrice: 0,
        changed:false
    },
    reducers:{
        replaceCartItems(state, action){
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
            state.totalPrice= action.payload.totalPrice;
        },

        addItemToCart(state, action){
            const newItem= action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id)
            state.totalQuantity++;
            state.changed = true;
            if(!existingItem){
                state.items.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalItemPrice: newItem.price, 
                    image: newItem.image,
                })
                state.totalPrice = state.totalPrice + newItem.price;
            }else{
                existingItem.quantity++;
                existingItem.totalItemPrice= existingItem.totalItemPrice +existingItem.price;
                state.totalPrice =  state.totalPrice + existingItem.price;
            }
        },
        removeItemFromCart(state, action){
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id)
            state.totalQuantity--;
            state.changed = true;
            if(existingItem.quantity === 1){
                state.items= state.items.filter(item => item.id !== id)
                state.totalPrice = state.totalPrice - existingItem.price;

            }else{
                existingItem.quantity--;
                state.totalPrice = state.totalPrice - existingItem.price;
            }
        },
        removeAll(state,action){
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id)
            state.totalQuantity = state.totalQuantity - existingItem.quantity;
            state.changed = true;

            if(existingItem){
                state.totalPrice= state.totalPrice - (existingItem.price*existingItem.quantity);
                existingItem.quantity = 0;
                state.items= state.items.filter(item => item.id !== id)
            }

        }
    }
})  

export const cartActions= cartSlice.actions;

export default cartSlice;