import React, { useEffect } from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import { useState } from 'react';

function AppoinmentDialogueBox({onhandleSubmit,onhandleUpdate}) {
  const [open, setOpen] = useState(false);

  useEffect(()=>{
    if(onhandleUpdate){
        handleClickOpen()
        setValues(onhandleUpdate)
    }
  },[onhandleUpdate])

  let date = new Date();

  let nd = new Date(date.setDate(date.getDate() - 1));

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    desc: ""
  };
  
   const appoinementschema = yup.object().shape({
    name: yup.string().required("Please Enter a Name"),
    email : yup.string().required("Please Enter a valid email"),
    phone : yup.string().required("Please Enter a valid phoneNumber"),
    desc : yup.string().required("Please Enter a Description")
  });

  
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    setValues,
    resetForm,
    touched
  } = useFormik({
    initialValues: initialValues,
    validationSchema: appoinementschema,
    enableReinitialize: false,
    onSubmit: (values, action) => {
        onhandleSubmit(values)
        handleClose();
    }
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
    resetForm();

  };
    return (
        <>       
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Medicine</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Enter a Medicine Data When You are Enter a Data Please Mark
            Some Thing Please Enter Appropriate Name,Description, Price and
            Expiry.
          </DialogContentText>
          <TextField
            margin="dense"
            id="name"
            name="name"
            label="Enter a Appoinment Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />

          {touched.name && errors.name
            ? <div className="error">
                {errors.name}
              </div>
            : null}

          <TextField
            margin="dense"
            id="email"
            name="email"
            label="Enter a Appoinment email"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />

          {touched.email && errors.email
            ? <div className="error">
                {errors.email}
              </div>
            : null}

          <TextField
            margin="dense"
            id="phone"
            name="phone"
            label="Enter a Appoinment Phonenumber"
            type="number"
            fullWidth
            variant="standard"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
          />
          {touched.phone && errors.phone
            ? <div className="error">
                {errors.phone}
              </div>
            : null}

          <TextField
            margin="dense"
            id="name"
            name="desc"
            label="Enter a Appoinment Description"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.expiry}
          />

          {touched.desc && errors.desc
            ? <div className="error">
                {errors.desc}
              </div>
            : null}

            
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>
            {onhandleUpdate ? 'Update' : 'Add Data'}
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
        </>
    );
}


export default AppoinmentDialogueBox;