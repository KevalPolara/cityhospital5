import { postRequst } from "../request"


export const postAppoinmentData = (data) =>{
    return postRequst('appoinment/',data)
}