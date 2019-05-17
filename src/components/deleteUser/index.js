import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import Input from '../shared/input';
import Label from '../shared/label';
import Select from 'react-select';
import ErrorHandler from '../shared/errorHandler';
import * as yup from 'yup';
import { inputFields } from './fields.js';
import { apiRequest, apiBaseUrl } from '../../helpers/api';
import { 
  StyledDeleteUser,
  StyledSubmit,
  SubmitContainer,
  StyledRadioContainer
} from './styles.js';

const jwtToken = localStorage.token;

const submitNewUser = (values) => {
  console.log(values);
  const { id } = JSON.parse(values);

  apiRequest.destroy(
    `${apiBaseUrl}/users/${id}`,
    jwtToken
  )
  .then(function (response) {
    if (response.data && response.data.userCreation) {
      alert('Deleted Successfully');
    } else {
      alert('Try again');
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

// YUP VALIDATIONS

const zip = new RegExp(/^\d{5}([-]?\d{4})?$/);

const userSchema = yup.object().shape({
  id: yup.string().required('Id is Required.'),
})

class DeleteUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formClean: true  
    }
  }

  render() {
    return (
      <StyledDeleteUser>
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
      </ StyledDeleteUser>
    );
  }
}

export default DeleteUser;
