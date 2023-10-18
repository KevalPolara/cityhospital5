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

function MedicineForm({onhandleSubmit,onhandleUpdate}) {
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
    price: "",
    expiry: "",
    desc: ""
  };
  
   const contactschema = yup.object().shape({
    name: yup.string().required("Please Enter a Name"),
    price: yup
      .string()
      .required("Please Enter a Price")
      .matches(
        /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/,
        "Please Enter a Positive"
      ),
      expiry: yup
      .date()
      .min(nd, "Please Enter a valid Date")
      .required("Please Enter a Date"),
      desc: yup
      .string()
      .min(10)
      .max(100)
      .required("Please Enter a Description")
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
    validationSchema: contactschema,
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
            label="Enter a Medicine Name"
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
            id="name"
            name="price"
            label="Enter a Medicine Price"
            type="number"
            fullWidth
            variant="standard"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.price}
          />

          {touched.price && errors.price
            ? <div className="error">
                {errors.price}
              </div>
            : null}

          <TextField
            margin="dense"
            id="name"
            name="desc"
            label="Enter a Medicine Description"
            type="email"
            fullWidth
            variant="standard"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.desc}
          />
          {touched.desc && errors.desc
            ? <div className="error">
                {errors.desc}
              </div>
            : null}

          <TextField
            margin="dense"
            id="name"
            name="expiry"
            label=""
            type="date"
            fullWidth
            variant="standard"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.expiry}
          />

          {touched.expiry && errors.expiry
            ? <div className="error">
                {errors.expiry}
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

export default MedicineForm;