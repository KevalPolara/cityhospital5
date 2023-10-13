import React from "react";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../../components/UI/Button/Button";

const categoryOptions = ["Electronics", "Clothing", "Books"];

const validationSchema = Yup.object().shape({
  productName: Yup.string().required("Product Name is required"),
  category: Yup.string().required("Category is required"),
  price: Yup.number()
    .required("Price is required")
    .positive("Price must be positive"),
  discount: Yup.number().positive("Discount must be positive"),
  password: Yup.string().required('This is a Invalid')
  //   productImage: Yup.mixed().required('Product Image is required'),
});

function Appointment1() {
  const [step, setStep] = useState(1);

  const initialValues = {
    productName: "",
    category: "",
    description: "",
    price: "",
    discount: "",
    password: ""
  };

  const handleNextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };
  console.log(step);

  return (
    <div className="text-center mt-5">
      <h1>
        Product Submission Form - Step {step}
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          setTimeout(() => {
            alert("Form submitted successfully");
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {({ isSubmitting, values, errors, touched }) =>
          <Form>
            <div className="row justify-content-center">
              {step === 1 &&
                <div className="col-md-8 form-group">
                  <div className="d-block">
                    <label htmlFor="productName">Product Name</label>
                    <Field type="text" name="productName" />
                    <ErrorMessage name="productName" component="div" />
                  </div>

                  <div className="d-block mt-3 me-5">

                  <label htmlFor="category">Category</label>
                  <Field as="select" className='p-1' name="category">
                    <option value="" label="Select a category" />
                    {categoryOptions.map(option =>
                      <option key={option} value={option}>
                        {option}
                      </option>
                    )}
                  </Field>
                  <ErrorMessage name="category" component="div" />
                  </div>
                </div>}

              {step === 2 &&
                <div>
                  <div className="d-block me-5">
                  <label htmlFor="price">Price</label>
                  <Field type="number" name="price" />
                  <ErrorMessage name="price" component="div" />
                  </div>
                  <div className="d-block mt-4 ms-5">
                  <label htmlFor="discount">Discount (optional)</label>
                  <Field type="number" name="discount" />
                  <ErrorMessage name="discount" component="div" />
                  </div>
                </div>}

              {step === 3 &&
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    accept="image/*"
                  />
                  <ErrorMessage name="password" component="div" />
                </div>}

                {step === 4 &&
                <div>
                  <div className="d-block me-5">
                  <label htmlFor="price">Price</label>
                  <Field type="number" name="price" />
                  <ErrorMessage name="price" component="div" />
                  </div>
                  <div className="d-block mt-4 ms-5">
                  <label htmlFor="discount">Discount (optional)</label>
                  <Field type="number" name="discount" />
                  <ErrorMessage name="discount" component="div" />
                  </div>
                </div>}

              <div className="mt-5">
                {step > 1 &&
                  <Button type="button" onClick={handlePreviousStep}>
                    Previous
                  </Button>}
                {step < 4 &&
                  <Button
                    type="button"
                    onClick={handleNextStep}
                    disabled={
                      (step === 1 &&
                        (!values.productName || !values.category)) ||
                      (step === 2 && (!values.price || !values.discount)) ||
                      (step === 3 && (!values.password))


                    }
                  >
                    Next
                  </Button>}
                {step === 4 &&
                  <Button type="submit" disabled={isSubmitting}>
                    Submit
                  </Button>}
              </div>
            </div>
          </Form>}
      </Formik>
    </div>
  );
}

export default Appointment1;
