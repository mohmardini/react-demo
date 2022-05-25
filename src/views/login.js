import React from 'react'
import { Formik, Form, Field } from 'formik';
import { Row, Col, Card, CardTitle, Label, FormGroup, Button } from 'react-bootstrap';
import BasicLayout from 'src/layout/BasicLayout';
import axios from "axios";


const Login = () => {

    const baseURL="https://pulse.dev.sirenanalytics.com/pulseservices/pulse_controller/auth"

  const validate= (values) => {

    const errors = {};
        
    //validate email
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^.{3,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    //validate password
    if (!values.password) {
      errors.password = 'Required';
    } else if (
      !/^.{3,}$/i.test(values.password)
    ) {
      errors.password = 'Minimum 3 characters';
    }

    return errors;
  }

   const handleSubmit = (values) =>{
    axios
    .post(baseURL, {
      username: values.email,
      password: values.password
    })
    .then((response) => {
      alert(response.status)
    });
   }


  return (
    <div>
    <BasicLayout>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            className='form-control m-2'
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder="Username"
          />

          {errors.email && touched.email  ?  <div className="invalid-feedback d-block m-2"> {errors.email}</div> : ''}

                    
          <input
           className='form-control m-2'
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            placeholder="Password"
          />
         {errors.password && touched.password  ?  <div className="invalid-feedback d-block m-2"> {errors.password}</div> : ''}

          <button type="submit" disabled={isSubmitting} className="btn btn-warning m-2">
            Submit
          </button>
        </form>
      )}
    </Formik>
    </BasicLayout>
  </div>
  )
}

export default Login