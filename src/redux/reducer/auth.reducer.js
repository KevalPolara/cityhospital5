import { SIGNUP_REQUEST } from "../ActionTypes"

const initialState = 
{
    isLoading : false,
    error : null,
    user : null
}


export const authReducer = (state=initialState,action)=>{

    switch(action.type){
        case SIGNUP_REQUEST :
            return state
         default :
            return state
    }

}