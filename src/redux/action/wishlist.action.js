import { ADD_TO_WISHLIST, COLUR_WISHLIST, DELETE_WISHLIST } from "../ActionTypes"


export const addWishlist=(id)=>(dispatch)=>{
dispatch({type:ADD_TO_WISHLIST,payload:{id:id,qty:1}})
}
export const deleteWishlist=(id)=>(dispatch)=>{
    dispatch({type:DELETE_WISHLIST,payload:id})
}