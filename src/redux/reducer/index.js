import { combineReducers } from "redux";
import {medicineDatareducer} from './medicine.reducer'
import { departmentreducer } from "./department.reducer";
import { favReducer } from "./wishlist.reducer";
import { doctorReducer } from "./doctor.reducer";
import counterReducer from "../slice/counter.slice";
import cartReducer from "../slice/cart.slice";
import sliceReducer from "../slice/medicine.slice";
import { themeReducer } from "../../context/reducer/context.reducer";
import appoinmentSlice from "../slice/appoinment.slice";
import { authReducer } from "./auth.reducer";
import alertReducer from "../slice/alert.slice";

export const rootReducer=combineReducers(
    {
        counter : counterReducer,
        medicines: medicineDatareducer,
        department : departmentreducer,
        cart : cartReducer,
        fav:favReducer,
        doctor:doctorReducer,
        appoinment : appoinmentSlice,
        auth : authReducer,
        alert :alertReducer,
    }
)