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

  let aptdata = { ...data };

  const storageRef = ref(storage, "apt/" + number + "_" + data.pres.name);

  console.log(storageRef);
  // 'file' comes from the Blob or File API
  await uploadBytes(storageRef, data.pres)
    .then(async snapshot => {
      await getDownloadURL(ref(storage, snapshot.ref)).then(async url => {
        console.log(url);

        let aptdoc = await addDoc(collection(db, "apt"), {
          ...data,
          dataname: number + "_" + data.pres.name,
          pres: url
        });

        console.log(aptdoc);

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

export const addAppoinmentData = createAsyncThunk(
  "appoinment/post",
  async data => {
    console.log(data);

    const docRef = await addDoc(collection(db, "appoinemnts"), data);

    console.log("Document written with ID: ", docRef.id);
  }
);

export const getAppoinmentData = createAsyncThunk(
  "appoinment/get",
  async () => {
    await new Promise((resolve, reject) => setTimeout(resolve, 1000));

    let data = [];

    const querySnapshot = await getDocs(collection(db, "appoinemnts"), data);
    querySnapshot.forEach(doc => {
      data.push({ ...doc.data(), id: doc.id });
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });

    console.log(data);

    return data;
  }
);

export const deleteAppoinmentData = createAsyncThunk(
  "appoinment/delete",
  async id => {
    try {
      const filePath = 
      // Create a reference to the file to delete
      const desertRef = ref(storage, );

      // Delete the file
    await deleteObject(desertRef)
        .then(() => {

          return id;
          // File deleted successfully
        })
        .catch(error => {
          // Uh-oh, an error occurred!
        });
    } catch (e) {}
  }
);

export const editAppoinmentData = createAsyncThunk(
  "appoinment/put",
  async data => {
    const washingtonRef = doc(db, "appoinemnts", data.id);
    await updateDoc(washingtonRef, data);
  }
);

export const appoinmentSlice = createSlice({
  name: "appoinment",
  initialState,
  reducers: {},

  extraReducers: builder => {
    // builder.addCase(addAppoinmentData.fulfilled, (state, action) => {
    //   state.isLaoding = false;
    //   state.error = null;
    //   state.appoinment = action.payload;
    // });
    // builder.addCase(getAppoinmentData.fulfilled, (state, action) => {
    //   state.isLaoding = false;
    //   state.error = null;
    //   state.appoinment = action.payload;
    // });
    // builder.addCase(deleteAppoinmentData.fulfilled, (state, action) => {
    //   console.log(action);
    //   state.isLaoding = false;
    //   state.error = null;
    //   state.appoinment = action.payload;
    // });
    // builder.addCase(editAppoinmentData.fulfilled, (state, action) => {
    //   state.isLaoding = false;
    //   state.error = null;
    //   state.appoinment = action.payload;
    // });

    // builder.addCase(addApt.fulfilled, (state, action) => {
    //   console.log(state, action.payload);
    //   state.isLaoding = false;
    //   state.error = null;
    //   state.appoinment = state.appoinment.concat(action.payload);
    // });

    builder.addCase(addApt.fulfilled, (state, action) => {
      state.isLaoding = false;
      state.error = null;
      if (Array.isArray(state.appoinment)) {
        state.appoinment = state.appoinment.concat(action.payload);
      } else {
        state.appoinment = [action.payload]; // If not an array, create a new array with the payload
      }
    });
  }
});

export default appoinmentSlice.reducer;
