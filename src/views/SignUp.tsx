import { Formik } from 'formik';
import React from 'react';
import { ToggleButton } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signup } from 'src/api/Auth';
import { FormikInput } from 'src/components/FormikInput';
import * as Yup from 'yup';

const SignUp = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
    dob: new Date(),
    skill: 0,
    agreed: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string().required(),
    password: Yup.string().required(),
  });

  const handleSubmit = (values: any) => {
    signup(values).then((response) => {
      toast('Successful!');

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
          <form onSubmit={handleSubmit}>
            <FormikInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              value={values.username}
              error={errors.username}
              placeholder="Username"
            />
            <FormikInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              value={values.email}
              error={errors.email}
              placeholder="Email"
            />
            <FormikInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              value={values.password}
              error={errors.password}
              placeholder="Password"
            />
            <label htmlFor="dob">Date of Birth</label>
            <input
              className="form-control m-2"
              type="date"
              name="dob"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.dob.toDateString()}
            />
            {errors.dob ? (
              <div className="invalid-feedback d-block m-2">
                {errors.dob as string}
              </div>
            ) : (
              ''
            )}
            <label htmlFor="skill">Skill</label>
            <input
              className="form-control m-2"
              type="range"
              name="skill"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.skill}
              placeholder="skill"
            />
            {errors.skill ? (
              <div className="invalid-feedback d-block m-2">{errors.skill}</div>
            ) : (
              ''
            )}
            <label htmlFor="agreed">Agree</label>
            <ToggleButton
              type="radio"
              variant="outline"
              name="radio"
              value="Agreed"
              checked={values.agreed}
              onChange={handleChange}
            >
              {values.agreed ? 'Agree' : 'Disagree'}
            </ToggleButton>
            {errors.agreed ? (
              <div className="invalid-feedback d-block m-2">
                {errors.agreed}
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
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
