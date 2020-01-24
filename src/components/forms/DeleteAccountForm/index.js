import React, { Component } from 'react';
import { Formik } from 'formik';
import Input from '../../shared/Input';
import Label from '../../shared/Label';
import ErrorHandler from '../../shared/ErrorHandler';
import * as yup from 'yup';
import { inputFields } from './fields.js';
import { apiRequest, apiBaseUrl } from '../../../helpers/api';
import { 
  StyledDeleteAccount,
  StyledSubmit,
  SubmitContainer,
} from './styles.js';

const jwtToken = localStorage.token;

const deleteAccount = (values) => {
  const { id } = JSON.parse(values);

  apiRequest.destroy(
    `${apiBaseUrl}/delete_account/${id}`,
    jwtToken
  )
  .then(function (response) {
    console.log(response);
    if (response.data) {
      alert('Deleted Successfully');
    } else {
      alert('Try again');
    };
  })
  .catch(function (error) {
    console.log('error: ')
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

const accountSchema = yup.object().shape({
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
      <StyledDeleteAccount>
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
            deleteAccount(JSON.stringify(values, null, 2));

            setSubmitting(false);
          }}
          validationSchema={accountSchema}
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
                            <Label>
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
      </ StyledDeleteAccount>
    );
  }
}

export default DeleteUser;
