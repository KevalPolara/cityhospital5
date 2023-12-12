import { values } from "lodash-es";
import * as yup from "yup";

let date = new Date();

let nd = new Date(date.setDate(date.getDate() - 1));


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
    ),
    // .test("message", "Minimum 5 Words Allowed", function(value) {
    //   let arr = value.split(" ");
    //   // value ne array na format ma convert karavi
    //   if (arr.length >= 5) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }),

  pres: yup
    .mixed()
    .required("Plese Upload a File")
    // .test("pres", "Please Upload a Less Than 500KB File" , function(value){
    //     console.log(value);

    //     if(value.size <= 500000){
    //       console.log("kkkk");
    //       return true
    //     }else {
    //       return false
    //     }
    // })
  })