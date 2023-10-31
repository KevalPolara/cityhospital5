import { createSlice } from "@reduxjs/toolkit"

const initialState={

    cart :[]
}

export const cartSlice=createSlice({
    name : 'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            let check = state.cart.some(v => v.id === action.payload.id);
            console.log(check);
      
            let index = state.cart.findIndex(v => v.id === action.payload.id);
            console.log(index);
      
            if (check) {
              state.cart[index].qty++;
            } else {
              state.cart.push(action.payload);
            }

            console.log(state.cart);
        } ,

        incrementCart : (state,action)=>{
          let index1=state.cart.findIndex(v=>v.id===action.payload);
          state.cart[index1].qty++; 
          
          
        }, 
        
        decrementCart: (state,action)=>{
          let index2=state.cart.findIndex(v=>v.id===action.payload);

          if( state.cart[index2].qty > 1){
          state.cart[index2].qty--;
          }

        },

        deleteCart: (state,action)=>{

          state.cart=state.cart.filter((v)=>v.id!==action.payload);          

        }
        
        

    }
})

export const {addToCart,incrementCart,decrementCart,deleteCart}=cartSlice.actions
export default cartSlice.reducer