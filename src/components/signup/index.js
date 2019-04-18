import React, { Component } from 'react';
import styled from '../../theme';
import { Formik } from 'formik';
import Input from '../shared/input';
import Label from '../shared/label';
import ErrorMessage from '../shared/ErrorMessage';
import Button from '../shared/button';
import { apiRequest, apiBaseUrl } from '../../helpers/api';

const StyledSignUp = styled.div`
  width: 80%;
  padding-top: 5vh;
  min-height: 70vh;
  margin: 0 auto;
` ;

const jwtToken = localStorage.token

const submitNewUser = (values) => {
  apiRequest.post(
    `${apiBaseUrl}/users`,
    values,
    jwtToken
  )
  .then(function (response) {
    // make this more robust to check if user already exists
    
    if (response.status === 200){
      alert('Submitted Successfully');
      window.location.href = '/';
    } else {
      alert('Something Went Wrong');
      window.location.href = '/';
    };
  })
  .catch(function (error) {
    console.log(error);
  })
} 

const SubmitContainer = styled.div`
  text-align: right;
` ;

const StyledSubmit = styled(Button)`
  margin-top: 1.5rem;
` ;

class SignUp extends Component {
  render() {
    return (
      <StyledSignUp>
        <Formik
          initialValues={{ 
            first_name: '', 
            last_name: '', 
            email: '',
            name: '',
            type: 'admin',
            active: true
          }}
          validate={values => {

            let errors = {};

            if (!values.email) {
              errors.email = '* Email required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            submitNewUser(JSON.stringify(values, null, 2));
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
              <Label color='white'>
                First Name
              </Label>
              <Input
                type='first_name'
                name='first_name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.first_name}
              />
              <Label color='white'>
                Last Name
              </Label>
              <Input
                type='last_name'
                name='last_name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.last_name}
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
              <SubmitContainer>
                <StyledSubmit 
                  buttonStyle='submit'
                  type='submit' 
                  disabled={isSubmitting}
                >
                  Submit
                </StyledSubmit>
              </SubmitContainer>
            </form>
          )}
        </Formik>
      </ StyledSignUp>
    );
  }
}

export default SignUp;
