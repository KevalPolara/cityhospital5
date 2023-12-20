import { async } from "@firebase/util";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc
} from "firebase/firestore";
import { db, storage } from "../../firebase/firebase";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes
} from "firebase/storage";

const initialState = {
  isLaoding: false,
  error: null,
  appoinment: []
};

export const addApt = createAsyncThunk("appoinment/add", async data => {
  console.log(data);
  const number = Math.floor(Math.random() * 10000);

  let aptdata = {...data};

  const storageRef = ref(storage, "apt/" + number + "_" + data.pres.name);

  console.log(storageRef);
  // 'file' comes from the Blob or File API
  await uploadBytes(storageRef, data.pres)
    .then(async snapshot => {
      await getDownloadURL(ref(storage, snapshot.ref))
      .then(async url => {
        console.log(url);

        const aptdoc = await addDoc(collection(db, "apt"), {
          ...data,
          dataname: number + "_" + data.pres.name,
          pres: url
        });

        console.log(aptdoc);


        // Id Mukava Mate Aa Create Karvu Padyu.

        aptdata = {
          id: aptdoc.id,
          ...data,
          dataname: number + "_" + data.pres.name,
          pres: url
        };

        console.log(aptdata);
      });
    })
    .catch(error => console.log(error));

  return aptdata;
});

export const getAppoinmentData = createAsyncThunk(
  "appoinment/get",
  async () => {
    const data = [];

    const querySnapshot = await getDocs(collection(db, "apt"));
    console.log(querySnapshot);
    querySnapshot.forEach(doc => {
      console.log(doc);
      data.push({id: doc.id, ...doc.data()});
    });

    console.log(data);

    return data;
  }
);

export const deleteAppoinmentData = createAsyncThunk(
  "appointment/delete",
  async data => {
    const desertRef = ref(storage, "apt/" + data.dataname);

    // Delete the file
    deleteObject(desertRef)
      .then(async () => {
        console.log("File Deleted Succesfully");
        await deleteDoc(doc(db, "apt/",data.id));
      })
      .catch(error => {
        // Uh-oh, an error occurred!
      });

    return data.id;
  }
);

export const editAppoinmentData = createAsyncThunk(
  "appoinment/update",
  async data => {
    console.log(data);

    let aptdata = {...data};

    if (typeof data.pres === "string") {
      const aptRef = doc(db, "apt", data.id);
      await updateDoc(aptRef, data);
      console.log("Data is Updated");
    } else {
      console.log("Image is Updated");

      const desertRef = ref(storage, "apt/" + data.dataname);

      // Delete the file
      await deleteObject(desertRef)
        .then(async () => {
          console.log("File Deleted Succesfully");

          const number = Math.floor(Math.random() * 10000);

          const storageRef = ref(storage, "apt/" + number + "_" + data.pres.name);
    
          console.log(storageRef);
          // 'file' comes from the Blob or File API
          await uploadBytes(storageRef, data.pres).then(async snapshot => {
            await getDownloadURL(ref(storage, snapshot.ref)).then(async url => {
              console.log(url);
    

              const aptRef = doc(db, "apt", data.id);

              await updateDoc(aptRef, {
                ...data,
                dataname: number + "_" + data.pres.name,
                pres: url
              });
  
    
              aptdata = {
                ...data,
                dataname: number + "_" + data.pres.name,
                pres: url
              };
    
              console.log(aptdata);
            });
          });
        })
        .catch(error => {
          // Uh-oh, an error occurred!
        });
     
    }

    return aptdata;
  }
);

export const appoinmentSlice = createSlice({
  name: "appoinment",
  initialState,
  reducers: {},


  extraReducers: builder => {
    
    builder.addCase(addApt.fulfilled, (state, action) => {
      state.isLaoding = false;
      state.error = null;
      if (Array.isArray(state.appoinment)) {
        state.appoinment = state.appoinment.concat(action.payload);
      } else {
        state.appoinment = [action.payload]; // If not an array, create a new array with the payload
      }
    });

    builder.addCase(getAppoinmentData.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isLaoding = false;
      state.error = null;
      state.appoinment = action.payload;
    });
    builder.addCase(deleteAppoinmentData.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isLaoding = false;
      state.error = null;
      state.appoinment = state.appoinment.filter(v => v.id !== action.payload);
    });
    builder.addCase(editAppoinmentData.fulfilled, (state, action) => {
      console.log(action.payload , state.appoinment);
      state.isLaoding = false;
      state.error = null;
      state.appoinment = state.appoinment.map(v => {
        console.log(v);
        if (v.id === action.payload.id) {
          return action.payload;
        } else {
          return v;
        }
      });
    });
  }
});

export default appoinmentSlice.reducer;
