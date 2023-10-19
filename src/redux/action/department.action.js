import { API_URL } from "../../utiles/baseUrl"
import { GET_DEPARTMENT } from "../ActionTypes"


export const getdepartmentdata=()=>(dispatch)=>{
    try{
        fetch(API_URL + 'department')
        .then((response)=>response.json())
        .then((data)=>dispatch({type:GET_DEPARTMENT,payload:data}))

    }catch(error){
        console.log(error);
    }

}