import {
  editMedicineData,
  getMedicineData,
  postmedicineData,
  removeMedicineData
} from "../../common/api/medicine.api";
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
      getMedicineData()
        .then(response =>
          dispatch({ type: GET_MEDICINE, payload: response.data })
        )
        .catch(errors => dispatch(errorMedicine(errors)));
    }, 4000);
  } catch (errors) {
    dispatch(errorMedicine(errors));
  }
};

export const addmedicineData = data => dispatch => {
  try {
    postmedicineData(data)
      .then(response =>
        dispatch({ type: ADD_MEDICINE, payload: response.data })
      )
      .catch(error => dispatch(errorMedicine(error)));
  } catch (error) {
    dispatch(errorMedicine(error));
  }
};

export const updatemedicineData = data => dispatch => {
  try {
    editMedicineData(data)
      .then(response =>
        dispatch({ type: UPDATE_MEDICINE, payload: response.data })
      )
      .catch(error => console.log(error));
  } catch (error) {}
};

export const deletemedicineData = id => dispatch => {
  try {
    removeMedicineData(id)
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
  dispatch({ type: ERROR_MEDICINE, payload: errors });
};
