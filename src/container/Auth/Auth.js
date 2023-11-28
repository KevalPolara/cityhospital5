import React, { useState } from "react";
import Button from "../../components/UI/Button/Button";
import InputBox from "../../components/UI/InputBox/InputBox";
import { Heading } from "../../components/UI/Heading/Heading";
import * as yup from "yup";
import { useFormik } from "formik";
import { signUpRequest } from "../../redux/action/auth.action";
import { useDispatch } from "react-redux";

function Auth(props) {
  const [type, isType] = useState("login");
  const { children, value, index, ...other } = props;

  const dispatch = useDispatch();

  const handleSingup = (data) =>{
    console.log(data);
    dispatch(signUpRequest(data));
  }

  let authobj, initialValues;

  if (type === "login") {
    authobj = {
      email: yup.string().email('Please Enter a Valid Email').required('Please Enter a Email'),
      phone: yup.string().required()
    };

    initialValues = {
      email: "",
      phone: ""
    };
  } else if (type === "signUp") {
    authobj = {
      email: yup.string().email('Please Enter a Valid Email').required('Please Enter a Email'),
      phone: yup.string().required(),
      name: yup.string().required(),
      con_phone:yup.string().test("con_phone","Password Not Same",function(value){
        if(value===this.parent.phone){
          return true
        }else{
          return false
        }
      }).required()
    };

    initialValues = {
      email: "",
      phone: "",
      name: "",
      con_phone:""
    };
  } else if (type === "fpassword") {
    authobj = {
      email: yup.string().email('Please Enter a valid Email').required('Please Enter a Email')
    };

    initialValues = {
      email: ""
    };
  }


  const authSchema = yup.object().shape(authobj);

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched
  } = useFormik({
    initialValues: initialValues,
    validationSchema: authSchema,
    enableReinitialize: true,
    onSubmit: (values, action) => {

      if(type=== "signUp"){
        handleSingup(values);
      }
      console.log(values);
      action.resetForm();
    }
  });

  

  return (

    
    <section id="appointment" className="appointment">
      <div classname="container">
        <div className="section-title">
          {type === "fpassword"
            ? <Heading className="text-center">Forgot Password</Heading>
            : type === "login"
              ? <Heading className="text-center">Login</Heading>
              : <Heading className="text-center">SignUp</Heading>}
        </div>
        <form action method="post" onSubmit={handleSubmit} role="form" className="php-email-form">
          <div className="row justify-content-center">
            {type === "fpassword"
              ? ""
              : type === "login"
                ? ""
                : <div className="col-md-8 form-group">
                    <InputBox
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                      errortext= {touched.name && errors.name
                        ?
                            errors.name
                         
                        : ''}
                    />
                    

                    {/* {touched.name && errors.name
                      ? <div className="error-handle">
                          {errors.name}
                        </div>
                      : null} */}
                  </div>}

            <div className="col-md-8 form-group mt-3 mt-md-0">
              <InputBox
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                data-rule="email"
                data-msg="Please enter a valid email"
                errortext=
              {touched.email && errors.email
                ?
                    errors.email
                 
                : null}
              />
              <div className="validate" />

            </div>

            {type === "fpassword"
              ? ""
              : <div className="col-md-8 form-group mt-3 mt-md-0">
                  <InputBox
                    type="password"
                    className="form-control"
                    name="phone"
                    id="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    placeholder="Your Password"
                    errortext= {touched.phone && errors.phone
                      ? 
                          errors.phone
                       
                      : null}
                  />

                 
                </div>}

                {type === "fpassword" 
              ? "" : type==="login" ? ""
              : <div className="col-md-8 form-group mt-3 mt-md-0">
                  <InputBox
                    type="password"
                    className="form-control"
                    name="con_phone"
                    id="con_phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.con_phone}
                    placeholder="Your Password"
                    errortext=  {touched.con_phone && errors.con_phone
                      ? 
                          errors.con_phone
                        
                      : null}
                  />

                
                </div>}
          </div>

          
          
          {type === "fpassword"
            ? <div className="text-center mt-3">
                <Button type="submit" disabled={false}>
                  Submit
                </Button>
              </div>
            : type === "login"
              ? <div className="text-center mt-3">
                  <Button type="submit" btndisabled={false} btntype="secondary">
                    Login
                  </Button>
                </div>
              : <div className="text-center mt-3">
                  <Button onClick={handleSingup} type="submit" btntype="outline" disabled={false}>
                    SignUp
                  </Button>
                </div>}
        </form>

        {type === "fpassword"
          ? ""
          : type === "login"
            ? <p className="text-center mt-3">
                Don't Have An Account ?{" "}
                <a
                  onClick={() => {
                    isType("signUp");
                  }}
                  className="login"
                >
                  SignUp
                </a>
              </p>
            : <p className="text-center mt-3">
                Already Have An Account ?{" "}
                <a
                  onClick={() => {
                    isType("login");
                  }}
                  className="login"
                >
                  Login
                </a>
              </p>}

        {type === "signUp"
          ? ""
          : type === "login"
            ? <p className="text-center">
                Forgot Password ?{" "}
                <a
                  onClick={() => {
                    isType("fpassword");
                  }}
                  className="login"
                >
                  Click
                </a>
              </p>
            : <p className="text-center mt-3">
                Already Have An Account ?{" "}
                <a
                  onClick={() => {
                    isType("login");
                  }}
                  className="login"
                >
                  Login
                </a>
              </p>}
      </div>
    </section>
  );
}

export default Auth;
