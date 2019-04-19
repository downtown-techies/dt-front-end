import React, { Component } from 'react';
import styled from '../../theme';
import { Formik } from 'formik';
import Input from '../shared/input';
import Label from '../shared/label';
import ToggleSwitch from '../shared/toggleSwitch';
import ErrorMessage from '../shared/ErrorMessage';
import Button from '../shared/button';
import { inputFields, hiddenFields } from './fields.js';
import { apiRequest, apiBaseUrl } from '../../helpers/api';

const StyledUserSignup = styled.div`
  width: 80%;
  padding-top: 5vh;
  min-height: 70vh;
  margin: 0 auto;
` ;

const SubmitContainer = styled.div`
  text-align: right;
` ;

const jwtToken = localStorage.token;

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
  margin-top: 2rem;
` ;

let initializeValues = {};

inputFields.map((field) => { 
  const label = field.label;
  const initialValue = field.initialValue || '';

  initializeValues[label] = initialValue;
});

let hiddenValues = {};

hiddenFields.map((field) => { 
  const label = field.label;
  const value = field.value || '';

  hiddenValues[label] = value;
});

class UserSignup extends Component {

  render() {


    return (
      <StyledUserSignup>
        <Formik
          initialValues={ 
            {
              ...hiddenValues,
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
                inputFields.map((field) => {
                  if (field.type === 'input') {
                    return (
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
                })
              }
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
      </ StyledUserSignup>
    );
  }
}

export default UserSignup;
