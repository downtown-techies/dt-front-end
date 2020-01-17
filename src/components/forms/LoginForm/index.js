import React, { Component } from 'react';
import { Formik } from 'formik';
import jwt from 'jwt-decode';
import Input from '../../shared/Input';
import Text from '../../shared/Text';
import Label from '../../shared/Label';
import ErrorHandler from '../../shared/ErrorHandler';
import ErrorResponseHandler from '../../shared/ErrorResponseHandler';
import * as yup from 'yup';
import { inputFields } from './fields.js';
import { apiRequest, apiBaseUrl } from '../../../helpers/api';
import { 
  StyledLogin,
  StyledSubmit,
  SubmitContainer
} from './styles.js';

import {
  Redirect
} from 'react-router-dom';

let initializeValues = {};

const publicKey = process.env.REACT_APP_PUBLIC_KEY;


inputFields.map((field) => { 
  const label = field.label;
  const initialValue = field.initialValue || '';
  return initializeValues[label] = initialValue;
});

const hiddenValues = {'key': publicKey };

// YUP VALIDATIONS
const userSchema = yup.object().shape({
  username: yup.string().required('Username is Required.'),
  password: yup.string().required('Password is Required.'),
})

class LoginUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formClean: true,
      accountType: 'user',
      submitting: false,
      loginSuccessful: false,
      errorMessage: '',
      errors: {},
    }
  }

  submitLogin = (values) => {
    this.setState({
      submitting: true
    });
    apiRequest.post(
      `${apiBaseUrl}/login`,
      values
    )
    .then((response) => {
      const {data} = response;
  
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
        this.setState({loginSuccessful: true});
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
    console.log(this.state.accountType === 'admin'); 
    if(localStorage.token && localStorage.token.length > 1){
      if (this.state.accountType === 'admin') {
        return <Redirect to='/admin' />
      } else{
        return <Redirect to='/' />
      }
    } else {
    return (
      <StyledLogin>
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
            this.submitLogin(JSON.stringify(values, null, 2));
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
                            <Label color='white'>
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
                      disabled={isSubmitting || Object.keys(errors).length > 0 || this.state.formClean}
                    >
                      {this.state.submitting ? '...submitting' : 'Submit'}
                    </StyledSubmit>
                  </SubmitContainer>
                </form>
              )
            }
          }
        </Formik>
      </ StyledLogin>
    );
  }
    }
}

export default LoginUser;
