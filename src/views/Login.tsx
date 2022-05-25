import React from 'react'
import { Formik } from 'formik';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup";

const Login = () => {

  const baseURL="https://pulse.dev.sirenanalytics.com/pulseservices/pulse_controller/auth"

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required(),
    password: Yup.string().required(),
  });


  const handleSubmit = (values:any) =>{
    axios
    .post(baseURL, {
      username: values.email,
      password: values.password
    })
    .then((response) => {
      toast("Successful!");

      //save jwt
    });
   }


  return (
    <div>
    <ToastContainer />
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        await handleSubmit(values);
        resetForm();
      }}
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
          {errors.email ?  <div className="invalid-feedback d-block m-2"> {errors.email} </div> :''} 
          
                    
          <input
           className='form-control m-2'
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            placeholder="Password"
          />
         {errors.password ?  <div className="invalid-feedback d-block m-2"> {errors.password} </div> :''} 

          <button type="submit" disabled={isSubmitting} className="btn btn-warning m-2">
            Submit
          </button>
        </form>
      )}
    </Formik>

  </div>
  )
}

export default Login