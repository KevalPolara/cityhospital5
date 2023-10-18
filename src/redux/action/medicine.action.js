import { API_URL } from "../../utiles/baseUrl";
import { ADD_MEDICINE, DELETE_MEDICINE, GET_MEDICINE, UPDATE_MEDICINE } from "../ActionTypes";


export const getmedicineData=()=>(dispatch)=>{
    try{
    fetch(API_URL + 'medicines')
    .then((response)=>response.json())
    .then((data)=>dispatch({type:GET_MEDICINE,payload :data}))

    }catch(errror){
        console.log(errror);
    }

}



export const addmedicineData=(data)=>(dispatch)=>{
    try{
        fetch(API_URL + 'medicines',{
          method : 'POST',
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(data)  
        })
        .then((response)=>response.json())
        .then((rdata)=>dispatch({type:ADD_MEDICINE,payload:rdata}))
        .then((error)=>console.log(error))

    }catch(error){

    }

}

export const updatemedicineData=(data)=>(dispatch)=>{
    console.log(data);
    try{
        fetch(API_URL + 'medicines/'+ data.id,{
          method : 'PUT',
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(data)  
        })
        .then((response)=>response.json())
        .then((rdata)=>dispatch({type:UPDATE_MEDICINE,payload:rdata}))
        .then((error)=>console.log(error))

    }catch(error){

    }

}

export const deletemedicineData=(id)=>(dispatch)=>{
    try{
        fetch(API_URL + 'medicines/' + id,{
            method :'DELETE'
        })
        .then(dispatch({type:DELETE_MEDICINE, payload:id}))
        .catch((error)=>console.log(error))
       

    }catch(error){
        console.log(error);
    }

}