import { createSlice } from "@reduxjs/toolkit"

const initialState={
    count:0
}

export const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers: {
        Increment : (state,action)=>{
            state.count+=1;
        },
        Decrement : (state,action)=>{
            state.count-=1;
        },
        IncrementbyFive: (state,action)=>
        {
            state.count += action.payload
        }
    }  
})

export const {Increment,Decrement,IncrementbyFive}= counterSlice.actions;
export default counterSlice.reducer;
