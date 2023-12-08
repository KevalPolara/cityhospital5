import { ADD_MEDICINE, DELETE_MEDICINE, ERROR_MEDICINE, GET_MEDICINE, LOADING_MEDICINE, UPDATE_MEDICINE } from "../ActionTypes";

const initialState={
    isLoading : false,
    medicine : [],
    errors : null

}

export const medicineDatareducer=(state=initialState,action)=>{
    // console.log(action);    

    switch(action.type){

        case ERROR_MEDICINE:
            return {
                isLoading:false,
                medicine:[],
                errors: action.payload
            }

        case LOADING_MEDICINE:
            return{
                isLoading : true,
                medicine : [],
                 errors : null
            }
            
        case GET_MEDICINE :
            return {
                isLoading:false,
                medicine :action.payload,
                errors : null
            }

        case ADD_MEDICINE :
            return{
                ...state,
                medicine:state.medicine.concat(action.payload)
            }

        case UPDATE_MEDICINE :

            return{
                ...state,
                medicine:state.medicine.map((v)=>{
                    if(v.id === action.payload.id){
                        return action.payload
                    }else{
                        return v
                    }
                })
            }

        case DELETE_MEDICINE:
            return{
                ...state,
                medicine: state.medicine.filter((v)=>v.id !==action.payload)   
            }

        default:
            return state
    }
    

}