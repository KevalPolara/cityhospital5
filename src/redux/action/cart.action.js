import { ADD_TO_CART, DECREMENT_CART, INCREMENT_CART } from "../ActionTypes"

export const addToCart=(id)=>(dispatch)=>{
    
    dispatch({type:ADD_TO_CART, payload:{id:id,qty:1}})

}

export const incrementCart=(id)=>(dispatch)=>{
    dispatch({
        type:INCREMENT_CART,
        payload:id
    })
}

export const decrementCart=(id)=>(dispatch)=>{
    dispatch({
        type:DECREMENT_CART,
        payload:id
    })
}
