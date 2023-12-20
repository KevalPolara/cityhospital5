import { addDoc, collection } from "firebase/firestore"
import {  deleteDoctorData, getDoctor, postDoctorData, updateDoctorData } from "../../common/api/doctor.api"
import { ADD_DOCTOR, ADD_MEDICINE, DELETE_DOCTOR, DELETE_MEDICINE, ERROR_DOCTOR, GET_DOCTOR, UPDATE_DOCTOR } from "../ActionTypes"
import { db } from "../../firebase/firebase"


export const getDoctorData=()=>(dispatch)=>{
    try{
        getDoctor()
        .then((response)=>dispatch({type:GET_DOCTOR,payload:response.data}))
    }catch(errors){

    }
}

export const addDoctorData=(data)=>async(dispatch)=>{
    try{

        const docRef = await addDoc(collection(db, "doctor"), data);
        console.log("Document written with ID: ", docRef.id);
        dispatch({ type: ADD_MEDICINE, payload: { ...data, id: docRef.id}});
    
        // postDoctorData(data)
        // .then((response)=>dispatch({type:ADD_DOCTOR,payload:response.data}))
    }catch(errors){
        console.log(errors);
    }
}

export const deleteDoctor=(id)=>(dispatch)=>{
    try{
    deleteDoctorData(id)
    .then(dispatch({ type: DELETE_DOCTOR, payload: id }))
    .catch(error => console.log(error));
    }catch(error){
        console.log(error);
    }
    
}

export const putDoctorData=(data)=>(dispatch)=>{
    try{      
    updateDoctorData(data)
    .then((response)=>dispatch({type:UPDATE_DOCTOR,payload:response.data}))
    }catch(error){
        console.log(error);
    }

}

export const errorDoctor=(errors)=>(dispatch)=>{
    dispatch({type:ERROR_DOCTOR,payload:errors})
}