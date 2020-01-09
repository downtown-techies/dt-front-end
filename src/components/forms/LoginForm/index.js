import React, { Component } from 'react';
import { Formik } from 'formik';
import Input from '../../shared/Input';
import Label from '../../shared/Label';
import ErrorHandler from '../../shared/ErrorHandler';
import * as yup from 'yup';
import { inputFields } from './fields.js';
import { apiRequest, apiBaseUrl } from '../../../helpers/api';
import { 
  StyledLogin,
  StyledSubmit,
  SubmitContainer
} from './styles.js';

let initializeValues = {};

const publicKey = process.env.REACT_APP_PUBLIC_KEY;

const getToken = (publicKey) => {
  return apiRequest.getJwtKey(
    `${apiBaseUrl}/authenticate`,
    publicKey
  )
  .then(function (response) {
    const jwtKey = ( response.data && response.data.jwtKey ) || 'iEmpty';
    console.log(jwtKey);
    localStorage.setItem('token', jwtKey);
  })
  .catch(function (error) {
    console.log(error);
  })
}

const submitLogin = (values) => {

  apiRequest.post(
    `${apiBaseUrl}/login`,
    values
  )
  .then(function (response) {
    const {data} = response;
    if (data && data.error){
      console.log(data.message);
    } else if (response.status === 200 && data && !data.error){
      console.log(data);
      getToken(publicKey);
    }
  })
  .catch(function (error) {
    console.log(error);
  })
}

inputFields.map((field) => { 
  const label = field.label;
  const initialValue = field.initialValue || '';
  return initializeValues[label] = initialValue;
});

// YUP VALIDATIONS
const userSchema = yup.object().shape({
  username: yup.string().required('Username is Required.'),
  password: yup.string().required('Password is Required.'),
})

class LoginUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formClean: true  
    }
  }

  render() {
    return (
      <StyledLogin>
        <Formik
          initialValues={ 
            {
              ...initializeValues
            }
          }
          validate={values => {
            this.setState({
              formClean: false
            });
          }}
          onSubmit={(values, { setSubmitting }) => {
            submitLogin(JSON.stringify(values, null, 2));

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
      </ StyledLogin>
    );
  }
}

export default LoginUser;
