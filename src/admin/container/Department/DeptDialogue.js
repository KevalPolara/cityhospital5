import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as yup from "yup";
import { Formik, useFormik } from "formik";

export default function DeptDialogue({onhandleSubmit}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    resetForm()
  };

  const initialValues = {
    name: "",
    sdescription: "",
    ldescription: ""
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("Please Enter a Name"),
    sdescription: yup.string().required("Please Enter a Short Description"),
    ldescription: yup.string().required("Please Enter Long Description")
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
    validationSchema: validationSchema,
    enableReinitialize: false,
    onSubmit: (values, action) => {
      onhandleSubmit(values);
      handleClose();
    }
  });

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>This is a Form of Department So that 
            This is a Show a Crud Operation

          </DialogContentText>
          <TextField
            
            margin="dense"
            id="name"
            name="name"
            label="Department Name"
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
            name="sdescription"
            label="Department Short Description"
            type="name"
            fullWidth
            variant="standard"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.sdescription}
          />

          {touched.sdescription && errors.sdescription
            ? <div className="error">
                {errors.sdescription}
              </div>
            : null}

          <TextField
            margin="dense"
            name="ldescription"
            id="name"
            label="Department Long Description"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.ldescription}
          />

          {touched.ldescription && errors.ldescription
            ? <div className="error">
                {errors.ldescription}
              </div>
            : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Add Data</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
