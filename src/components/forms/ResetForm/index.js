import React, { Component } from 'react';
import { Formik } from 'formik';
import jwt from 'jwt-decode';
import Input from '../../shared/Input';
import Label from '../../shared/Label';
import ErrorHandler from '../../shared/ErrorHandler';
import ErrorResponseHandler from '../../shared/ErrorResponseHandler';
import * as yup from 'yup';
import { inputFields } from './fields.js';
import { apiRequest, apiBaseUrl } from '../../../helpers/api';
import { stringFormat} from '../../../helpers/yupValidationFormats';
import { StyledReset, StyledSubmit, SubmitContainer } from './styles.js';

import { Redirect } from 'react-router-dom';

let initializeValues = {};

const publicKey = process.env.REACT_APP_PUBLIC_KEY;

inputFields.map((field) => { 
  const label = field.label;
  const initialValue = field.initialValue || '';
  return initializeValues[label] = initialValue;
});

const hiddenValues = {'key': publicKey };

// YUP VALIDATIONS
const usernameFormat = stringFormat;

const userSchema = yup.object().shape({
  username:           yup
                      .string()
                      .matches(usernameFormat, 'Can only contain alphanumeric and underscore')
                      .required('Username is Required.'),
  oldPassword:           yup
                      .string()
                      .required(''),
  newPassword:        yup
                      .string()
                      .required('')
                      .notOneOf([yup.ref('oldPassword'), null], 'Passwords cannot match')
                      .min(10, 'Must be at least 10 characters'),
  confirmNewPassword: yup
                      .string()
                      .oneOf([yup.ref('newPassword'), null], 'Passwords must match'),
})

class ResetUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formClean: true,
      accountType: 'user',
      submitting: false,
      resetSuccessful: false,
      errorMessage: '',
      errors: {},
    }
  }

  submitReset = (values) => {
    this.setState({
      submitting: true
    });
    apiRequest.post(
      `${apiBaseUrl}/reset`,
      values
    )
    .then((response) => {
      const {data} = response;
      console.log(data);
  
      if (data && data.error && data.message){
        this.setState({errorMessage: data.message});
        this.setState({errors: data.error});
        this.setState({submitting: false});
      } else if (response.status === 200 && data && !data.error){
        const jwtKey = ( response.data ) || '';
        localStorage.setItem('token', jwtKey);

        const token = jwt(jwtKey);
        const {data} = token;

        this.setState({accountType: data.accountType});
        this.setState({resetSuccessful: true});
        this.setState({submitting: false});
        if (data.accountType === 'admin') {
          return <Redirect to='/admin' />
        } else{
          return <Redirect to='/' />
        }
      }
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  render() {
    return (
      <StyledReset>
        <Formik
          initialValues={ 
            {
              ...initializeValues,
              ...hiddenValues
            }
          }
          validate={values => {
            this.setState({
              formClean: false
            });
          }}
          onSubmit={(values, { setSubmitting }) => {
            this.submitReset(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }}
          validationSchema={userSchema}
        >
          {
            ({
              values,
              errors,
              touched,
              setFieldValue,
              setFieldTouched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => { 
              return (
                <form onSubmit={handleSubmit}>
                  {
                    inputFields.map((field) => {
                      if (field.type === 'input' || 'password') {
                        return (
                          <div key={field.label}>
                            <Label>
                              {field.displayName}
                            </Label>
                            <Input
                              type={field.type}
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
                        )} else {
                        return null
                      }
                    })
                  }
                  <ErrorResponseHandler
                    value={this.state.errorMessage}
                    color='red' 
                    errors={this.state.errors} 
                  />
                  <SubmitContainer>
                    <StyledSubmit 
                      buttonStyle='submit'
                      type='submit' 
                      disabled={this.state.submitting || Object.keys(errors).length > 0 || this.state.formClean}
                    >
                      {this.state.submitting ? '...submitting' : 'Submit'}
                    </StyledSubmit>
                  </SubmitContainer>
                </form>
              )
            }
          }
        </Formik>
      </ StyledReset>
    );
  }
}

export default ResetUser;
