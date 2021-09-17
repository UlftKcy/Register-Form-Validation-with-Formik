import React from "react";
import "../App.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues={
  name:"",
  email:"",
  userName:"",
}
const onSubmit=(values)=>{
  console.log("Values:",values)
}
const validationSchema=Yup.object({
  name:Yup.string()
  .max(15,"Must be 15 characters or less")
  .required("Required.Enter name"),
  userName:Yup.string()
  .max(15,"Must be 15 characters or less")
  .required("Required.Enter user name"),
  email:Yup.string()
  .email("Invalid email address")
  .required("Required.Enter email address")
})
function SimpleRegister() {
  const formik=useFormik({ 
      initialValues,
      onSubmit,
      validationSchema
      // validate:values=>{
      //     let errors={}
      //     if (!values.name){
      //         errors.name="Required.Please fill  area"
      //     }
      //     if (!values.email){
      //         errors.email="Required.Please fill area"
      //     }
      //     else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      //        errors.email = 'Invalid email address';}
      //     if (!values.userName){
      //         errors.userName="Required.Please fill  area"
      //     }
      //     return errors
      // }
  })
  // console.log("Formik values :",formik.values)
  // console.log("Formik  :",formik)
  // console.log("formik touch:", formik.touched);

  // formik.touched : kullanıcı input'a tıkladıktan sonra error gösterilecek.Tıklamdıysa gösterilmeyecek.onBlur ile kullanılabilir. onBlur zorunlu değil.
  // yup: input içindeki değerlere göre error mesajlarını göstermek için kullanılır.Input içindeki fonksiyonlarla ilgili değil.Validate işleminin alternatifi.

  return (
    <div className="container">
      <h1>Simple Form</h1>
      <form className="formStyle" onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
        ></input>
        {formik.touched.name && formik.errors.name ? (
          <div className="errorStyle">{formik.errors.name} </div>
        ) : null}
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        ></input>
        {formik.touched.email && formik.errors.email ? (
          <div className="errorStyle">{formik.errors.email} </div>
        ) : null}
        <label htmlFor="userName">User name</label>
        <input
          type="text"
          id="userName"
          name="userName"
          onChange={formik.handleChange}
          value={formik.values.userName}
          onBlur={formik.handleBlur}
        ></input>
        {formik.touched.userName && formik.errors.userName ? (
          <div className="errorStyle">{formik.errors.userName} </div>
        ) : null}
        <button>Submit</button>
      </form>
    </div>
  );
}
export default SimpleRegister;
