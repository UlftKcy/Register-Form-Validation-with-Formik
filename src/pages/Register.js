import React from "react";
import { useFormik } from "formik";
import { ErrorMessage, Form, Formik } from "formik";
import * as yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  TextField,
  Grid,
  Container,
  Avatar,
  Typography,
} from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const stylesFunc = makeStyles((theme) => ({
  wrapper: {
    marginTop: "3rem",
    height: "calc(100vh - 19.0625rem)",
    textAlign: "center",
    marginBottom: "12rem",
    width: "30rem",
  },
  avatar: {
    margin: "1rem auto",
    backgroundColor: theme.palette.secondary.main,
  },
  signUp: {
    margin: "1rem",
  },
  login: {
    textDecoration: "none",
    fontWeight: "600",
    paddingLeft: "0.5rem",
  },
  googleImg: {
    width: 75,
    marginLeft: 10,
  },
}));

const initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const onSubmit = (values) => {
  alert("Form is submitted");
  console.log("values:", values);
};

const validationSchema = yup.object({
  username: yup.string().required("Please Enter a username"),
  email: yup.string().email().required("Please Enter your Email"),
  password: yup
    .string("")
    .min(8, "Password must contain at least 8 characters")
    .required("Enter your password"),
  confirmPassword: yup
    .string("Enter your password")
    .required("Confirm your password")
    .oneOf([yup.ref("password")], "Password does not match"),
});

function Register() {
  const signupStyles = stylesFunc();
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <Container className={signupStyles.wrapper}>
      <Avatar className={signupStyles.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography className={signupStyles.signUp} variant="h4">
        Sign Up
      </Typography>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                name="username"
                label="User Name"
                variant="outlined"
                fullWidth
                value={formik.values.username}
                onChange={formik.handleChange}
                placeholder="Username"
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
              />
              <ErrorMessage name="username" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Email"
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <ErrorMessage name="email" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="Password"
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <ErrorMessage name="password" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="confirmPassword"
                label="Password Again"
                variant="outlined"
                type="password"
                fullWidth
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                placeholder="Confirm Password"
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
                helperText={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
              />
              <ErrorMessage name="confirmPassword" />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
}

export default Register;
