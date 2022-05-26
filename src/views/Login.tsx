import { Formik } from 'formik';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from 'src/api/Auth';
import * as Yup from 'yup';

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const nav = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().required(),
    password: Yup.string().required(),
  });

  const handleSubmit = (values: any) => {
    login(values).then((response) => {
      toast('Successful!');
      setTimeout(() => {
        nav('/recipe');
      }, 1000);
      //save jwt
    });
  };

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
          <Card className="p-5 m-5">
            <form onSubmit={handleSubmit} className="mt-5">
              <input
                className="form-control m-2"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Username"
              />
              {errors.email ? (
                <div className="invalid-feedback d-block m-2">
                  {errors.email}
                </div>
              ) : (
                ''
              )}

              <input
                className="form-control m-2"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Password"
              />
              {errors.password ? (
                <div className="invalid-feedback d-block m-2">
                  {errors.password}
                </div>
              ) : (
                ''
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-warning m-2"
              >
                Submit
              </button>
            </form>
          </Card>
        )}
      </Formik>
    </div>
  );
};

export default Login;
