import { LANGUAGE } from "../ActionType";

export const languageReducer = (state,action)=>{
    console.log(action);
    switch(action.type){
        case LANGUAGE :
            return {
                language : action.payload
            }

            default :
            return state;
    }   
}