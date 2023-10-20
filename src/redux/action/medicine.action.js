import { API_URL } from "../../utiles/baseUrl";
import {
  ADD_MEDICINE,
  DELETE_MEDICINE,
  ERROR_MEDICINE,
  GET_MEDICINE,
  LOADING_MEDICINE,
  UPDATE_MEDICINE
} from "../ActionTypes";

export const getmedicineData = () => dispatch => {
    
  try {
    dispatch(loadingMedicine());
    return setTimeout(function() {
      fetch(API_URL + "medicines")
        .then(response =>{
          console.log(response);
          if(!response.ok){
            throw ('Something Went Wrong')
          }else{
            return response.json()
          }
        })  
        .then(data => dispatch({type: GET_MEDICINE, payload: data}))
        .catch((errors)=> dispatch(errorMedicine(errors)))
    }, 4000);
  } catch (errors) {
    dispatch(errorMedicine(errors))
  }
};

export const addmedicineData = data => dispatch => {
  try {
    fetch(API_URL + "medicine", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response =>{
        if(!response.ok){
          throw new Error('Something Went Wrong');

        }else{
         return response.json()
        }
      } )
      .then(rdata => dispatch({ type: ADD_MEDICINE, payload: rdata}))
      .then((error) => dispatch(errorMedicine(error)));
  } catch (error) {
    dispatch(errorMedicine(error))
  }
};

export const updatemedicineData = data => dispatch => {
  try {
    fetch(API_URL + "medicines/" + data.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(rdata => dispatch({ type: UPDATE_MEDICINE, payload: rdata }))
      .then(error => console.log(error));
  } catch (error) {}
};

export const deletemedicineData = id => dispatch => {
  try {
    fetch(API_URL + "medicines/" + id, {
      method: "DELETE"
    })
      .then(dispatch({ type: DELETE_MEDICINE, payload: id }))
      .catch(error => console.log(error));
  } catch (error) {
    console.log(error);
  }
};

export const loadingMedicine = () => dispatch => {
  dispatch({ type: LOADING_MEDICINE });
};

export const errorMedicine = errors => dispatch => {
  dispatch({ type: ERROR_MEDICINE, payload: errors});
};
