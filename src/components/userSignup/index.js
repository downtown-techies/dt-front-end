import React, { Component } from 'react';
import styled from '../../theme';
import { Formik } from 'formik';
import Input from '../shared/input';
import Label from '../shared/label';
import ErrorMessage from '../shared/ErrorMessage';
import Button from '../shared/button';
import { inputFields } from './fields.js';
import { apiRequest, apiBaseUrl } from '../../helpers/api';

const StyledUserSignup = styled.div`
  width: 80%;
  margin: 0 auto;
` ;

const jwtToken = localStorage.token

const submitNewUser= (values) => {
  apiRequest.post(
    `${apiBaseUrl}/users`,
    values,
    jwtToken
  )
  .then(function (response) {
    // make this more robust to check if user already exists
    if (response.status === 200){
      alert('yayyyy');
    } else {
      alert('oops');
    };
  })
  .catch(function (error) {
    console.log(error);
  })
} 

const StyledSubmit = styled(Button)`
  margin-top: 1.5rem;
  float: right;
` ;

let initializeValues = {};

inputFields.map((field) => { 
  const label = field.label;
  const initialValue = field.initialValue || '';

  initializeValues[label] = `${initialValue}`;
});

class UserSignup extends Component {
  render() {
    console.log(initializeValues);
    return (
      <StyledUserSignup>
        <Formik
          initialValues={ 
            {
              type: 'user', 
              active: true, 
              ...initializeValues
            }
          }
          validate={values => {
            console.log(values);
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
              {
                inputFields.map((field) => 
                  <div key={field.label}>
                    <Label color='white'>
                      {field.displayName}
                    </Label>
                    <Input
                      type='input'
                      name={field.label}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values[field.label]}
                    />
                  </div>
                )
              }

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
      </ StyledUserSignup>
    );
  }
}

export default UserSignup;
