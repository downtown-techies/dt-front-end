import React, { Component } from 'react';
import styled from '../../theme';
import { Formik } from 'formik';
import Input from '../shared/input';
import Label from '../shared/label';
import ErrorHandler from '../shared/errorHandler';
import ToggleSwitch from '../shared/toggleSwitch';
import Button from '../shared/button';
import { inputFields, hiddenFields } from './fields.js';
import { apiRequest, apiBaseUrl } from '../../helpers/api';
import * as yup from 'yup';

const StyledSubmit = styled(Button)`
  margin-top: 2rem;
` ;

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
    if (response.data && response.data.userCreation) {
      alert('Submitted Successfully');
    } else if ( response.data && !response.data.userCreation && response.data.message === 'exists' ) {
      alert (response.data.message);
    } else {
      alert('We may have missed a semi-colon, please try again');
    };
  })
  .catch(function (error) {
    console.log(error);
  })
} 


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

// YUP VALIDATIONS

const zip = new RegExp(/^\d{5}([\-]?\d{4})?$/);

const userSchema = yup.object().shape({
  first_name: yup.string().required('Name is Required.'),
  last_name: yup.string().required('Name is Required.'),
  email: yup
    .string()
    .email('Please Enter a valid Email')
    .required('Email is Required.'),
  postal_code: yup
    .string()
    .matches(zip, 'Please provide a valid postal code')
    .required('Please provide a valid postal code')
    .max(8,'Too long')
    .min(5,'Too short'),
  phone_number: yup
    .string()
})

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
          validationSchema={userSchema}
        >
          {
            ({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => { 
              return (
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
                            <ErrorHandler 
                              key={`error-${field.label}`}
                              value={values[field.label]}
                              color='red' 
                              label={field.label} 
                              errors={errors} 
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
              )
            }
          }
        </Formik>
      </ StyledUserSignup>
    );
  }
}

export default UserSignup;
