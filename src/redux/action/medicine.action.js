import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc
} from "firebase/firestore";
import {
  editMedicineData,
  getMedicineData,
  postmedicineData,
  removeMedicineData
} from "../../common/api/medicine.api";
import { db } from "../../firebase/firebase";
import {
  ADD_MEDICINE,
  DELETE_MEDICINE,
  ERROR_MEDICINE,
  GET_MEDICINE,
  LOADING_MEDICINE,
  UPDATE_MEDICINE
} from "../ActionTypes";

export const getmedicineData = () => async dispatch => {
  let arrMedicine = [];
  try {
    const querySnapshot = await getDocs(collection(db, "medicines"));
    querySnapshot.forEach(doc => {
      arrMedicine.push({ ...doc.data(), id: doc.id });

      console.log(`${doc.id} => ${doc.data()}`);
    });

    console.log(arrMedicine);

    dispatch({ type: GET_MEDICINE, payload: arrMedicine });
  } catch (errors) {
    dispatch(errorMedicine(errors));
  }
};

export const addmedicineData = data => async dispatch => {
  try {
    const docRef = await addDoc(collection(db, "medicines"), data);
    console.log("Document written with ID: ", docRef.id);
    dispatch({ type: ADD_MEDICINE, payload: { ...data, id: docRef.id}});

    // postmedicineData(data)
    //   .then(response =>
    //     dispatch({ type: ADD_MEDICINE, payload: response.data })
    //   )
    //   .catch(error => dispatch(errorMedicine(error)));
  } catch (error) {
    dispatch(errorMedicine(error));
  }
};

export const updatemedicineData = data => async dispatch => {
  try {
    const washingtonRef = doc(db, "medicines",data.id);

    // Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef, data);
    dispatch({ type: UPDATE_MEDICINE, payload: data })
    // editMedicineData(data)
    //   .then(response =>
    //     dispatch({ type: UPDATE_MEDICINE, payload: response.data })
    //   )
    //   .catch(error => console.log(error));
  } catch (error) {}
};

export const deletemedicineData = id => async dispatch => {
  try {
    await deleteDoc(doc(db, "medicines", id));
    dispatch({ type: DELETE_MEDICINE, payload: id });
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
