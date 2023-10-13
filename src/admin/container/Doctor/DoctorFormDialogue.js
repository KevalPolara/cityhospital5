import React, { useEffect } from 'react';
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function DoctorFormDialogue({onhandleSubmit,onhandleUpdate}) {
  const [open, setOpen] = useState(false);


    const initialValues = {
        name: "",
        description: "",
        designation: "",
        fb_profile: ""
      };

      const doctorSchema = yup.object().shape({
        name: yup.string().required("Please Enter a Name") .matches(/^[A-Za-z]+$/, "Please Enter a Valid Name")
        ,
        description: yup
          .string()
          .required("Please Enter a description")
          .test("description", "Only 20 Character Allowed", function(value) {
            let arr = value.split(" ");
            // value ne array na format ma convert karavi
            if (arr.length <=20) {
              return true;
            } else {
              return false;
            }
          }),
          designation: yup
          .string()
          .required("Please Enter a Description")
          .matches(/^[A-Za-z]+$/, "Please Enter a Valid Name"),
    
          fb_profile:yup.string().required('Please enter a Url').matches(/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/,'Please Enter a Url www and http Format')
    
      });

      const {
        values,
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        resetForm,
        setValues,
        touched
      } = useFormik({
        initialValues: initialValues,
        validationSchema: doctorSchema,
        enableReinitialize: false,
        onSubmit: (values, action) => {
            onhandleSubmit(values)
            handleClose()
            action.resetForm();
        }
      });

      useEffect(()=>{
        if(onhandleUpdate){
            handleClickOpen()
            setValues(onhandleUpdate)
        }
      },[onhandleUpdate])

      const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };
    
    return (
        <div>
     <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onSubmit={handleSubmit} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            
            margin="dense"
            id="name"
            name='name'
            label="Enter Name"
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
            name='description'
            label="Enter description"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
          /> 

            {touched.description && errors.description
            ? <div className="error">
                {errors.description}
              </div>
            : null}

          <TextField
          margin="dense"
          id="name"
          name='designation'
          label="Enter designation"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.designation}
        /> 

        {touched.designation && errors.designation
            ? <div className="error">
                {errors.designation}
              </div>
            : null}
        <TextField
        margin="dense"
        id="name"
        name='fb_profile'
        label="Enter fb_profile"
        type="text"
        fullWidth
        variant="standard"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.fb_profile}
      />
       {touched.fb_profile && errors.fb_profile
            ? <div className="error">
                {errors.fb_profile}
              </div>
            : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add Data</Button>
        </DialogActions>
      </Dialog>
            
        </div>
    );
}

export default DoctorFormDialogue;