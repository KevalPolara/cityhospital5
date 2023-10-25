import { ADD_TO_CART, DECREMENT_CART, DELETE_CART, INCREMENT_CART } from "../ActionTypes";

const initialState = {
  isLoading: false,
  cart: [],
  error: null,
};

export const cartReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    
    case ADD_TO_CART:
      let check = state.cart.some(v => v.id === action.payload.id);
      console.log(check);

      let index = state.cart.findIndex(v => v.id === action.payload.id);
      console.log(index);

      if (check) {
        state.cart[index].qty++;
      } else {
        state.cart.push(action.payload);
      }

      return {
        isLoading: false,
        cart: state.cart,
        error: null
      };

      case INCREMENT_CART:
        let index1=state.cart.findIndex(v=>v.id===action.payload);
        state.cart[index1].qty++;

        return{
          isLoading: false,
          cart: state.cart,
          error: null
        }

        case DECREMENT_CART:
          let index2=state.cart.findIndex(v=>v.id===action.payload);

          if( state.cart[index2].qty > 1){
          state.cart[index2].qty--;
          }
  
          return{
            isLoading: false,
            cart: state.cart,
            error: null
          }

        case DELETE_CART:
          return {
           ...state,
            cart:state.cart.filter((v)=>v.id!==action.payload)
          }


    default:
      return state;
  }
};
