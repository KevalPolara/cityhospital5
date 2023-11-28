import { async } from "@firebase/util"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addDoc, collection, getDoc, getDocs } from "firebase/firestore"
import { db } from "../../firebase/firebase"
import { postAppoinmentData } from "../../common/api/appoinment.api"


const initialState = {
    isLaoding : false,
    error : null,
    appoinment : []
}


export const  addAppoinmentData = createAsyncThunk(

    'appoinment/post',   
 
    async (data) =>{ 
    const docRef = await addDoc(collection(db, "appoinemnts"), data);


      console.log("Document written with ID: ", docRef.id);
    }
    
)

export const getAppoinmentData = createAsyncThunk(
    'appoinment/get',

    async () =>{

        await new Promise((resolve,reject) => setTimeout(resolve,1000))

        let data = []

        const querySnapshot = await getDocs(collection(db, "appoinemnts"),data);
        querySnapshot.forEach((doc) => {
            data.push({...doc.data(),id:doc.id})
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });

        console.log(data);

        return data;
        
    }
  
)

export const appoinmentSlice = createSlice({
    name : 'appoinment',
    initialState,
    reducers : {

    },
    
    extraReducers : (builder) =>  {
        builder.addCase(addAppoinmentData.fulfilled,(state,action)=>{
            console.log(action);
            state.isLaoding = false
            state.error = null 
            state.appoinment = action.payload
        })
        builder.addCase(getAppoinmentData.fulfilled,(state,action)=>{
            console.log(action);
            state.isLaoding = false
            state.error = null 
            state.appoinment = action.payload
        })
    }
})

export default appoinmentSlice.reducer;
