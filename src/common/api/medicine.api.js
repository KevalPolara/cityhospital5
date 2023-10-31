import { deleteRequest, getRequst, postRequst, putRequest } from "../request"

export const getMedicineData=()=>{
   return getRequst('medicines')
}

export const postmedicineData=(data)=>{
    return postRequst('medicines/',data)
}

export const removeMedicineData=(id)=>{
    return deleteRequest('medicines/',id)
}

export const editMedicineData=(data)=>{
    return putRequest('medicines/',data)
}