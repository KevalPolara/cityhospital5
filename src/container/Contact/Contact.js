import React, { useState } from "react";
import {
  Heading,
  Headings,
  SubHeadingone
} from "../../components/UI/Heading/Heading";
import { Text } from "../../components/UI/Text/Text";
import { useFormik } from "formik";
import { contactschema } from "../../schemas";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

// Formik nu Work Hoy Form Handling Hoy,Data get karvanu
// yup nu Work Hoy Form validation 

const  initialValues= {
  name: "",
  email: "",
  subject: "",
  message: ""
};

function Contact(props) {
  // const navigate=useNavigate();

  // const gotohome=()=>{
  //   navigate("/about")
  // }

  const {formik,values,errors,handleBlur,handleChange,handleSubmit,touched} = useFormik({

    initialValues : initialValues, 
    validationSchema :contactschema,
    onSubmit: (values,action) => {
      console.log(values);
      action.resetForm();
    }
    
  });
   return (

    <main>
      <br></br>
      <br></br>
      <br></br>
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            
            <Heading>Contact</Heading>
            <p>
              Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc
              aliquam eget nibh eu euismod. Donec dapibus blandit quam volutpat
              sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet
              aliquet rhoncus quis, luctus at neque. Mauris sit amet massa sed
              orci vehicula facilisis.
            </p>
          {/* <button onClick={gotohome} type="submit">Go To Home</button> */}
          {/* <Link to='comapany'>comapany</Link>
          <Link to='chanel'>Channel</Link>
          <Link to='other'>Other</Link> */}
          <Outlet/>

          </div>
        </div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt" />
                  <Headings>Location:</Headings>
                  <SubHeadingone>
                    {" "}F-505, Inovative Plazza New Delhi, India
                  </SubHeadingone>
                </div>
                <div className="email">
                  <i className="bi bi-envelope" />
                  <Headings>Email:</Headings>
                  <SubHeadingone>cityhospital@example.com</SubHeadingone>
                </div>
                <div className="phone">
                  <i className="bi bi-phone" />
                  <Headings>Call:</Headings>
                  <SubHeadingone>+91 9988776655</SubHeadingone>
                </div>
              </div>
            </div>
            <div className="col-lg-8 mt-5 mt-lg-0">
              <form
                action
                method="post"
                role="form"
                onSubmit={handleSubmit}
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      
                    />

                    {touched.name && errors.name
                      ? <div className="error-handle">
                          {errors.name}
                        </div>
                      : null}
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      id="email"
                      placeholder="Your Email"
                      
                    />

                    {touched.email && errors.email
                      ? <div className="error-handle">
                          {errors.email}
                        </div>
                      : null}
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.subject}
                    id="subject"
                    placeholder="Subject"
                    
                  />

                  {touched.subject && errors.subject
                    ? <div className="error-handle">
                        {errors.subject}
                      </div>
                    : null}
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    rows={5}
                    placeholder="Message"
                    defaultValue={""}
                  />

                  {touched.message && errors.message
                    ? <div className="error-handle">
                        {errors.message}
                      </div>
                    : null}
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
