import { API_URL } from "../utiles/baseUrl";
import axios from 'axios'

const instance = axios.create({
    baseURL:   API_URL,
    timeout: 1000,
  });

const SendRequest=(configue)=>{
   return instance.request(configue)
}

export const getRequst=(path)=>{
   return SendRequest({
       method:'GET',
       url : path 
    })
}

export const postRequst =(path,data)=>{
    return SendRequest({
        method:'POST',
        url : path,
        headers: {
            'Content-Type': 'application/json'
          },
        data:JSON.stringify(data) 
     })
}

export const deleteRequest=(path,id)=>{
    return SendRequest({
        method:'DELETE',
        url : path + id,
    })
}

export const putRequest=(path,data)=>{
    return SendRequest({
        method:'PUT',
        url : path + data.id,
        headers: {
            'Content-Type': 'application/json'
          },
        data:JSON.stringify(data) 
     })
}