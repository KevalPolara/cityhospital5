import { combineReducers } from "redux";
import { CounterReducer } from "./counter.reducer";
import {medicineDatareducer} from './medicine.reducer'
import { departmentreducer } from "./department.reducer";

export const rootReducer=combineReducers(
    {
        counter : CounterReducer,
        medicines: medicineDatareducer,
        department : departmentreducer
    }
)