import { GET_DEPARTMENT } from "../ActionTypes";

const initialState={
    isLoading : false,
    departments : [],
    errors : null
}

export const departmentreducer=(state=initialState,action)=>{
    

    switch(action.type){
        case GET_DEPARTMENT :
            return {
                ...state,
                departments :action.payload
            }
        default:
            return state
    }
    
}