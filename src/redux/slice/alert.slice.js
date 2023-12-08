import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    text : '',
    color : ''
}

const alerSlice = createSlice({
    name :'alert',
    initialState :initialState,
    reducers :{
        setAlert : (state,action) =>{
            console.log(action);
            state.text = action.payload.text;
            state.color = action.payload.color;
        },
        
        setReset : (state) =>{
            state.text = '';
            state.color = '';
        }
    }
})

export  const {setAlert ,setReset} = alerSlice.actions;
export default  alerSlice.reducer;