import React from 'react'
import { Formik, Form, Field } from 'formik';
import { Row, Card, CardTitle, Label, FormGroup, Button } from 'react-bootstrap';
import BasicLayout from 'src/layout/BasicLayout';
const Login = () => {

  const initialValues = { email: '', password: '' };
  const schema =() => {
   
  }
  const onUserLogin = () => {
    alert(1); 
  }

  return (
    <div>
        <BasicLayout>
        <Formik
        initialValues={initialValues}
        onSubmit={onUserLogin}
        validationSchema={schema}
        >
            <Form>
                <FormGroup className="form-group  mb-5">
                    <Field
                        className="form-control"
                        name="email"
                        type="email"
                        placeholder="email"
                    />
                    {/* {errors.email && touched.email && (
                        <div className="invalid-feedback d-block">
                        {errors.email}
                        </div>
                    )} */}
                </FormGroup>
            </Form>
        </Formik>
        </BasicLayout>
    </div>
  )
}

export default Login