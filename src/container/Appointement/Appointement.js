import React, { useEffect, useState } from "react";
import { Heading } from "../../components/UI/Heading/Heading";
import Button from "../../components/UI/Button/Button";
import { useFormik } from "formik";
import { appointementSchema } from "../../schemas";
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tab';
import {
  addAppoinmentData,
  getAppoinmentData
} from "../../redux/slice/appoinment.slice";
import { useDispatch, useSelector } from "react-redux";

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
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);


  const appoinment = useSelector(state => state.appoinment);
  console.log(appoinment.appoinment);

  const handletabs = (newValues) => {
    console.log(values);
    setValue(newValues);
  };

  useEffect(() => {
    dispatch(getAppoinmentData());
  }, []);

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
          <div className="section-title">
            <Heading>Make an Appointment</Heading>
            <p>
              Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc
              aliquam eget nibh eu euismod. Donec dapibus blandit quam volutpat
              sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec
              lacinia finibus tortor. Curabitur luctus eleifend odio. Phasellus
              placerat mi et suscipit pulvinar.
            </p>
          </div>

          <Tabs>
            <Tab label = 'Make an Appoinment'></Tab>
            <Tab label = 'AppoinmentList'></Tab>

          </Tabs>

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
                Your appointment request has been sent successfully. Thank you!
              </div>
            </div>
            <div className="text-center">
              <Button type="submit">Make an Appointment</Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Appointement;
