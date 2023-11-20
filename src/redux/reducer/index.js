import { combineReducers } from "redux";
import {medicineDatareducer} from './medicine.reducer'
import { departmentreducer } from "./department.reducer";
import { favReducer } from "./wishlist.reducer";
import { doctorReducer } from "./doctor.reducer";
import counterReducer from "../slice/counter.slice";
import cartReducer from "../slice/cart.slice";
import sliceReducer from "../slice/medicine.slice";

export const rootReducer=combineReducers(
    {
        counter : counterReducer,
        medicines: sliceReducer,
        department : departmentreducer,
        cart : cartReducer,
        fav:favReducer,
        doctor:doctorReducer
    }
)