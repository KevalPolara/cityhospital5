import React, { useEffect, useState } from "react";
import { Heading } from "../../components/UI/Heading/Heading";
import Button from "../../components/UI/Button/Button";
import { useFormik } from "formik";
import { appointementSchema } from "../../schemas";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  addAppoinmentData,
  deleteAppoinmentData,
  editAppoinmentData,
  getAppoinmentData
} from "../../redux/slice/appoinment.slice";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";



function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index &&
        <Box sx={{ p: 3 }}>
          <Typography>
            {children}
          </Typography>
        </Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}
function DataGridDemo() {

  const appoinment = useSelector(state => state.appoinment);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAppoinmentData());
  }, []);

 const handleDelete = (id) =>{
  console.log(id);
  dispatch(deleteAppoinmentData(id))
  }  
  
const  handleEdit = (data) =>{
  dispatch(editAppoinmentData(data))
  }

  const columns = [
    { field: "name", headerName: "Name", width: 70 },
    { field: "email", headerName: "email", width: 130 },
    { field: "phone", headerName: "phone", width: 130 },
    { field: "date", headerName: "date", width: 130 },
    { field: "department", headerName: "department", width: 130 },
    { field: "message", headerName: "message", width: 130 },
    { field: "pres", headerName: "pres", width: 130 },
    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: params =>
        <strong>
          <DeleteIcon onClick={() => handleDelete(params.row.id)}>
            Delete
          </DeleteIcon>

          <EditIcon onClick={() => handleEdit(params.row)} />
        </strong>
    }
  ];

  return (
    <div>
      <DataGrid
        rows={appoinment.appoinment}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5
            }
          }
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
}

const initialValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  date: "",
  department: "",
  message: "",
  pres: ""
};

function Appointement(props) {
  const [value, setValue] = React.useState(0);
  

  const dispatch = useDispatch();


  const handleChanges = (event, newValue) => {
    setValue(newValue);
  };

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched
  } = useFormik({
    initialValues: initialValues,
    validationSchema: appointementSchema,
    onSubmit: (values, action) => {
      //
      dispatch(addAppoinmentData(values));

      action.resetForm();
      let arr = values.message.split(" ");
      console.log(arr);

      let ans = arr.map(v => v[0].toUpperCase() + v.substring(1));
      return console.log(ans.join(" "));
    }
  });

  return (
    <main>
      <section id="appointment" className="appointment">
        <div className="container">
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChanges}
                aria-label="basic tabs example"
              >
                <Tab label="Make an Appoinment" {...a11yProps(0)} />
                <Tab label="Appoinment List" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <div className="section-title">
                <Heading>Make an Appointment</Heading>
                <p>
                  Aenean enim orci, suscipit vitae sodales ac, semper in ex.
                  Nunc aliquam eget nibh eu euismod. Donec dapibus blandit quam
                  volutpat sollicitudin. Fusce tincidunt sit amet ex in
                  volutpat. Donec lacinia finibus tortor. Curabitur luctus
                  eleifend odio. Phasellus placerat mi et suscipit pulvinar.
                </p>
              </div>

              <form
                action="#"
                role="form"
                onSubmit={handleSubmit}
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-4 form-group">
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />

                    {touched.name && errors.name
                      ? <div className="error-handle">
                          {errors.name}
                        </div>
                      : null}
                    <div className="validate" />
                  </div>
                  <div className="col-md-4 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      id="email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                    />
                    {touched.email && errors.email
                      ? <div className="error-handle">
                          {errors.email}
                        </div>
                      : null}
                    <div className="validate" />
                  </div>
                  <div className="col-md-4 form-group mt-3 mt-md-0">
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                      id="phone"
                      placeholder="Your Phone"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    {touched.phone && errors.phone
                      ? <div className="error-handle">
                          {errors.phone}
                        </div>
                      : null}
                    <div className="validate" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 form-group mt-3">
                    <input
                      type="date"
                      name="date"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.date}
                      className="form-control datepicker"
                      id="date"
                      placeholder="Appointment Date"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    {touched.date && errors.date
                      ? <div className="error-handle">
                          {errors.date}
                        </div>
                      : null}
                    <div className="validate" />
                  </div>
                  <div className="col-md-4 form-group mt-3">
                    <select
                      name="department"
                      value={values.department}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="department"
                      className="form-select"
                    >
                      <option value="">Select Department</option>
                      <option value="Department 1">Department 1</option>
                      <option value="Department 2">Department 2</option>
                      <option value="Department 3">Department 3</option>
                    </select>

                    {touched.department && errors.department
                      ? <div className="error-handle">
                          {errors.department}
                        </div>
                      : null}
                  </div>

                  <div className="col-md-4 form-group mt-3 mt-md-0">
                    <input
                      type="file"
                      className="form-control one"
                      name="pres"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="file"
                    />
                    {touched.pres && errors.pres
                      ? <div className="error-handle one">
                          {errors.pres}
                        </div>
                      : null}
                  </div>
                </div>

                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    rows={5}
                    placeholder="Message (Optional)"
                    defaultValue={""}
                  />
                  {touched.message && errors.message
                    ? <div className="error-handle">
                        {errors.message}
                      </div>
                    : null}
                </div>

                <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your appointment request has been sent successfully. Thank
                    you!
                  </div>
                </div>
                <div className="text-center">
                  <Button type="submit">Make an Appointment</Button>
                </div>
              </form>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
              {DataGridDemo()}
            </CustomTabPanel>
          </Box>
        </div>
      </section>
    </main>
  );
}

export default Appointement;
