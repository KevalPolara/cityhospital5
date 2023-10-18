import { ADD_MEDICINE, DELETE_MEDICINE, GET_MEDICINE, UPDATE_MEDICINE } from "../ActionTypes";

const initialState={
    isLoading : false,
    medicine : [],
    errors : null

}

export const medicineDatareducer=(state=initialState,action)=>{
    console.log(action);
    

    switch(action.type){
        case GET_MEDICINE :
            return {
                ...state,
                medicine :action.payload
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