import { ADD_TO_WISHLIST, COLUR_WISHLIST, DELETE_WISHLIST, REMOVE_WISHLIST } from "../ActionTypes"

export const addWishlist=(id)=>(dispatch)=>{
dispatch({type:ADD_TO_WISHLIST,payload:{id:id,qty:1}})
}

export const deleteWishlist=(id)=>(dispatch)=>{
    dispatch({type:DELETE_WISHLIST,payload:id})
}

export const colourWishlist=(id)=>(dispatch)=>{
    dispatch({type:COLUR_WISHLIST,payload:id})
}

export const removeWishlist = (id) =>(dispatch) =>{
    dispatch({type : REMOVE_WISHLIST , payload : id})
}