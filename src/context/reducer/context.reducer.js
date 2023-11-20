import { TOOGLE_THEME } from "../ActionType";

export const themeReducer = (state,action)=>{
switch(action.type){

    case TOOGLE_THEME :
        return {
            theme : action.payload
        }
        
    default :
    return state; 
}
}