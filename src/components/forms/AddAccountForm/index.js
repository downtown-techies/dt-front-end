import React, { Component } from 'react';
import { Formik } from 'formik';
import Input from '../../shared/Input';
import Label from '../../shared/Label';
import ErrorHandler from '../../shared/ErrorHandler';
import ErrorModal from '../../modals/ErrorModal';
import * as yup from 'yup';
import { inputFields, hiddenFields } from './fields.js';
import { apiRequest, apiBaseUrl } from '../../../helpers/api';
import { 
  StyledAddAccount,
  StyledSubmit,
  SubmitContainer
} from './styles.js';

const jwtToken = localStorage.token;

// if length > 1 looks like you are already a member

let hiddenValues = {}
  , initializeValues= {};

inputFields.map((field) => { 
  const label = field.label;
  const initialValue = field.initialValue || '';

  return initializeValues[label] = initialValue;
});

hiddenFields.map((field) => {
  const label = field.label;
  const value = field.value || '';

  return hiddenValues[label] = value;
});

// YUP VALIDATIONS
const emailFormat = new RegExp(/[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
const usernameFormat = new RegExp(/^[a-zA-Z0-9_]*$/);

const userSchema = yup.object().shape({
  username:        yup
                   .string()
                   .matches(usernameFormat, 'Can only contain alphanumeric and underscore')
                   .required('Username is Required.'),
  email:           yup
                   .string()
                   .matches(emailFormat, 'Please provide a valid email.')
                   .required('Email is required'),
  password:        yup
                   .string()
                   .required('')
                   .min(10, 'Must be at least 10 characters'),
  confirmPassword: yup
                   .string()
                   .oneOf([yup.ref('password'), null], 'Passwords must match')
})

class AddAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formClean: true,
      errors: false,
      message: '',
      responseStatus: '',
      hidden: true
    }
  }

  responseHandler = (response) => {
    const { errors, responseStatus, message, hidden } = response; 
  
    this.setState({
      errors: errors,
      message: message,
      responseStatus: responseStatus,
      hidden: hidden
    })
  }

  submitNewAccount = ( params ) => {
    const { values, handler } = params;
  
    apiRequest.post(
      `${apiBaseUrl}/create_account`,
      values,
      jwtToken
    )
    .then(function (response) {
      console.log(response);
      if (response.data && response.data.newLoginCreated) {
        handler({message: 'Thanks for signing up! Look for a follow up email from us soon.', errors: false, hidden: false});
      } else if ( response.data && !response.data.newLoginCreated && response.data.message === 'exists' ) {
          handler({message: 'Looks like this user already exists!', errors: true, hidden: false});
      } else if ( response.data && !response.data.newLoginCreated && response.data.message === 'error' ) {
        handler({message: 'Uh oh! Something went wrong, please resubmit!', errors: true, hidden: false});
      } 
    })
    .catch(function (error) {
      console.log(error);
    })
  } 

  render() {
    const { errors, message, responseStatus, hidden } = this.state;

    return (
      <>
        <StyledAddAccount>
          <Formik
            initialValues={ 
              {
                ...hiddenValues,
                ...initializeValues,
              }
            }
            validate={values => {
              this.setState({
                formClean: false
              });
            }}
            onSubmit={(values, { setSubmitting }) => {
              this.submitNewAccount({ values: JSON.stringify(values, null, 2), handler: this.responseHandler});

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

                    <SubmitContainer>
                      <StyledSubmit 
                        buttonStyle='submit'
                        type='submit' 
                        disabled={isSubmitting || Object.keys(errors).length > 0 || this.state.formClean}
                      >
                        Submit
                      </StyledSubmit>
                    </SubmitContainer>
                  </form>
                )
              }
            }
          </Formik>
        </ StyledAddAccount>
        {
          hidden ? ( null ) : (
            <ErrorModal
              hidden={hidden}
              errors={errors}
              response={message}
              responseStatus={responseStatus}
            />
          )
        }
      </>
    );
  }
}

export default AddAccount;
