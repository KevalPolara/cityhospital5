import { combineReducers } from "redux";
import { CounterReducer } from "./counter.reducer";
import {medicineDatareducer} from './medicine.reducer'

export const rootReducer=combineReducers(
    {
        counter : CounterReducer,
        medicines: medicineDatareducer
    }
)