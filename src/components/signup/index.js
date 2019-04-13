import React, { Component } from 'react';
import styled from '../../theme';
import { Formik } from 'formik';
import Input from '../shared/input';
import Label from '../shared/label';
import ErrorMessage from '../shared/ErrorMessage';
import Button from '../shared/button';

const StyledSignUp = styled.form`
  width: 80%;
  margin: 0 auto;
` ;

const StyledSubmit = styled(Button)`
  margin-top: 1.5rem;
  float: right;
` ;

class SignUp extends Component {
  render() {
    return (
      <StyledSignUp>
        <Formik
          initialValues={{ frstName: '', lastName: '', email: '' }}
          validate={values => {
            let errors = {};
            if (!values.email) {
              errors.email = '* Email required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.name)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
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
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <Label color='white'>
                First Name
              </Label>
              <Input
                type='firstName'
                name='firstName'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <Label color='white'>
                Last Name
              </Label>
              <Input
                type='lastName'
                name='lastName'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && errors.name}
              <Label color='white'>
                Email
              </Label>
              <Input
                type='email'
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <ErrorMessage color='red'>
                {errors.email && touched.email && errors.email}
              </ ErrorMessage>
              <StyledSubmit 
                buttonStyle='submit'
                type='submit' 
                disabled={isSubmitting}
              >
                Submit
              </StyledSubmit>
            </form>
          )}
        </Formik>
      </ StyledSignUp>
    );
  }
}

export default SignUp;
