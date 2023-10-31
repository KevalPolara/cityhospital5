import { ADD_DOCTOR, DELETE_DOCTOR, ERROR_DOCTOR, GET_DOCTOR, UPDATE_DOCTOR } from "../ActionTypes";

const initialState = {
  isLoading: false,
  doctor: [],
  error: null
};

export const doctorReducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case GET_DOCTOR:
      return {
        isLoading: false,
        doctor: action.payload,
        error: null
      };

    case ADD_DOCTOR:{
        return {    
        ...state,
        doctor:state.doctor.concat(action.payload)
        }
    }

    case DELETE_DOCTOR:{
        return{
            ...state,
            doctor:state.doctor.filter((v)=>v.id!==action.payload)
        }
    }

    case UPDATE_DOCTOR:
        return{
            ...state,
            doctor:state.doctor.map((v)=>{
                if(v.id === action.payload.id){
                    return action.payload
                }else{
                    return v
                }
            })
        }

    case ERROR_DOCTOR:
            return {
                isLoading:false,
                medicine:[],
                errors: action.payload
            }

      default:
        return state
  }
};
