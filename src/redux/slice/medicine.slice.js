import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getMedicineData } from "../../common/api/medicine.api";

const initialState = {
    isLoading : false,
    error : null,
    medicines : []
}

export const getmedicine = createAsyncThunk(
    'medicines/get',
    async ()=>{
      await new Promise((resolve,reject)=>{
            setTimeout(resolve,2000)
        })
        let response =await getMedicineData();
        console.log(response);
        return response.data;
    }
)
const onLoading = (state,action)=>{
    state.isLoading = true;
    state.error = null;
}
export const medicineSlice = createSlice({
    name : 'medicine',
    initialState,
    reducers : {

    },
    extraReducers : (builder)=>{
        builder.addCase(getmedicine.pending,onLoading)
        builder.addCase(getmedicine.fulfilled,(state,action)=>{
            console.log(action);
            state.medicines = action.payload
            state.error = null
            state.isLoading = false
        })
      
    }
})

export default medicineSlice.reducer;
