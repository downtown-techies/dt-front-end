import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import Input from '../shared/input';
import Label from '../shared/label';
import Select from 'react-select';
import ErrorHandler from '../shared/errorHandler';
import Checkbox from './checkbox.js';
import * as yup from 'yup';
import { inputFields, hiddenFields } from './fields.js';
import { apiRequest, apiBaseUrl } from '../../helpers/api';
import { 
  StyledUserSignup,
  StyledSubmit,
  SubmitContainer,
  StyledRadioContainer
} from './styles.js';

// TODO zip code autocomplete data 
// TODO make two-part form 

const jwtToken = localStorage.token;

const submitNewUser = (values) => {
  apiRequest.post(
    `${apiBaseUrl}/users`,
    values,
    jwtToken
  )
  .then(function (response) {
    console.log('data: ', response.data);
    console.log('userCreation: ', response.data.userCreation);

    if (response.data && response.data.userCreation) {
      alert('Submitted Successfully');
    } else if ( response.data && !response.data.userCreation && response.data.message === 'exists' ) {
      alert ('Looks like this user already exists');
    } else if ( response.data && !response.data.userCreation && response.data.message === 'error' ) {
      alert ('Uh oh! Something went wrong, please resubmit!');
    } else {
      alert('Something went wrong, please resubmit.');
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

  return initializeValues[label] = initialValue;
});

let hiddenValues = {};

hiddenFields.map((field) => { 
  const label = field.label;
  const value = field.value || '';

  return hiddenValues[label] = value;
});

// YUP VALIDATIONS

const zip = new RegExp(/^\d{5}([-]?\d{4})?$/);

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
})

class UserSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formClean: true  
    }
  }

  // --- Overview ---
  // initialize with hidden and inital values,
  // filter between input types
  // submit button
  // validate

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
            this.setState({
              formClean: false
            });
          }}
          onSubmit={(values, { setSubmitting }) => {
            submitNewUser(JSON.stringify(values, null, 2));

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
              // replace with enum
              // and extract to own file 
              // refactor with more time
              console.log(values);

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
                        )} else if (field.type === 'multiSelect') {
                          const options = field.options;

                          return (
                            <div key={field.label}>
                              <Label color='white'>
                                {field.displayName}
                              </Label>
                              <Select
                                options={options}
                                name={field.label}
                                value={options ? options.find(option => option.value === field.value) : ''}
                                onChange={(option, field) => {
                                    setFieldValue(field.name, [option.value])
                                  }
                                }
                                onBlur={field.onBlur}
                              />
                            </div>
                        )} else if (field.type === 'radio') {
                          return (
                            <StyledRadioContainer key={field.label}>
                              <Field
                                component={Checkbox}
                                name={field.label}
                                label={field.displayName}
                              />
                            </StyledRadioContainer>
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
      </ StyledUserSignup>
    );
  }
}

export default UserSignup;
