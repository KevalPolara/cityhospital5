import { SIGNUP_REQUEST } from "../ActionTypes"


export const signUpRequest = (data) => (dispatch) =>{
    console.log(data);
    dispatch({type: SIGNUP_REQUEST , payload : data})

}