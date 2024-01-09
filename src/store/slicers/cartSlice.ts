import { createSlice } from "@reduxjs/toolkit";
interface StateType{
    cartItems:Array<any>
}
const initialState:StateType = {
	cartItems:[]
};

export const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            state.cartItems.push(action.payload)
        },
        removeFromCart(state,action){
            state.cartItems=[...state.cartItems.filter(item=>item.id!==action.payload.id)]
        },
        clearCart(state){
            state.cartItems=[]
        }

    }
})
export const {addToCart,removeFromCart,clearCart}=cartSlice.actions;
export default cartSlice.reducer