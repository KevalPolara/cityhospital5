import { deleteRequest, getRequst, postRequst, putRequest } from "../request"


export const getDoctor=()=>{
    return getRequst('doctor')
}

export const postDoctorData=(data)=>{
    return postRequst('doctor/',data)
}

export const deleteDoctorData=(id)=>{
    return deleteRequest('doctor/',id)
}

export const updateDoctorData=(data)=>{
    return putRequest('doctor/',data)
}