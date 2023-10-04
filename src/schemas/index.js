import { values } from "lodash-es";
import * as yup from "yup";

let date = new Date();
console.log(date);

let nd = new Date(date.setDate(date.getDate() - 1));
console.log(nd);

export const contactschema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .max(15)
    .matches(/^[A-Za-z ]+$/, "Should not contain a digit")
    .required("Please Enter Name"),
  email: yup
    .string()
    .email("Please Enter a Valid Email")
    .required("Please Enter a Email"),
  subject: yup.string().required("Please Enter a Subject"),
  message: yup.string().min(30).required("Please Enter a Meassage")
});

export const appointementSchema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .max(15)
    .matches(/^[A-Za-z]+$/, "Please Enter a Valid Name")
    .required("Please Enter Name"),
  email: yup
    .string()
    .email("Please Enter a Valid Email")
    .required("Please Enter a Email"),
  phone: yup
    .string()
    .matches(
      /^(\(\d{3}\)|\d{3})([.\-\s]?)\d{3}([.\-\s]?)\d{4}$/,
      "Please Enter a Valid Number"
    )
    .required("Please Enter a Number"),
  date: yup
    .date()
    .min(nd, "Please Enter a valid Date")
    .required("Please Enter a Date"),
  department: yup.string().required("Please Enter a Department"),
  message: yup
    .string()
    .required("Please Enter a Meassage")
    .matches(
      /^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$/,
      "Only One Space Allowed Between One Letter"
    )
    .test("message", "Only 5 Character Allowed", function(value) {
      let arr = value.split(" ");
      // value ne array na format ma convert karavi
      if (arr.length <= 5) {
        return true;
      } else {
        return false;
      }
    }),

  pres: yup
    .mixed()
    .required("Plese Upload a File")
    .test('fileSize',
    'The File is too large',
    function(value) {
      console.log(value)
       if(value && value[0].size <= 1000000){
        return true;
      }else{
        return false;
      }
      
    }),
  })