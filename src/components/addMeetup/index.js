import React, { Component } from 'react';
import styled from '../../theme';
import { Formik } from 'formik';
import Input from '../shared/input';
import Label from '../shared/label';
import ErrorMessage from '../shared/ErrorMessage';
import Button from '../shared/button';
import { inputFields } from './fields.js';
import { apiRequest, apiBaseUrl } from '../../helpers/api';

const StyledAddMeetup = styled.div`
  width: 80%;
  margin: 0 auto;
` ;

const jwtToken = localStorage.token

const submitNewMeetup = (values) => {
  apiRequest.post(
    `${apiBaseUrl}/meetups`,
    values,
    jwtToken
  )
  .then(function (response) {
    // make this more robust to check if meetup already exists
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

class AddMeetup extends Component {
  render() {
    return (
      <StyledAddMeetup>
        <Formik
          initialValues={ 
            inputFields.map((field) => field.initialValue)
          }
          validate={values => {
            console.log(values);
          }}
          onSubmit={(values, { setSubmitting }) => {
            submitNewMeetup(JSON.stringify(values, null, 2));
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
                      value={values.first_name}
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
      </ StyledAddMeetup>
    );
  }
}

export default AddMeetup;