import { AUTH_ERROR, LOGIN_ERROR, LOGIN_REQUEST, LOGIN_RESPONSE, SIGNUP_REQUEST, SIGNUP_RESPONSE } from "../ActionTypes"


export const signUpRequest = (data) => (dispatch) =>{
    console.log(data);
    dispatch({type: SIGNUP_REQUEST , payload : data})

}

export const signUpResponse = (data) => (dispatch) =>{
    dispatch({type: SIGNUP_RESPONSE , payload : data}) 
}

export const authError = (data) => (dispatch) =>{
    dispatch({type : AUTH_ERROR ,payload :data})
}

export const loginRequest = (data) => (dispatch) =>{
    dispatch({type: LOGIN_REQUEST ,payload : data})
}

export const loginResponse = (data) =>(dispatch) =>{
    console.log(data);
    dispatch({type : LOGIN_RESPONSE , payload :data})
}

export const loginError = (data) => (dispatch) =>{
    dispatch({type : LOGIN_ERROR ,payload :data})
}