import React from "react";
import "../App.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
const initialValues = {
  name: "",
  email: "",
  userName: "",
};
const onSubmit = (values) => {
  console.log("Values:", values);
};
const validationSchema = Yup.object({
  name: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required.Enter name"),
  userName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required.Enter user name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Required.Enter email address"),
});
function SimpleRegisterWithComponent() {
  return (
    <div>
      <h1>Simple Form</h1>
      <Formik
        className="container"
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formStyle">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" />
          <label htmlFor="email">Email</label>
          <Field type="text" id="email" name="email" />
          <ErrorMessage name="email" />
          <label htmlFor="userName">User name</label>
          <Field type="text" id="userName" name="userName" />
          <ErrorMessage name="userName" />
          <button>Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
