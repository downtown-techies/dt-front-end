import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import Input from '../../shared/Input';
import Label from '../../shared/Label';
import Select from 'react-select';
import ErrorHandler from '../../shared/ErrorHandler';
import * as yup from 'yup';
import { inputFields } from './fields.js';
import { apiRequest, apiBaseUrl } from '../../../helpers/api';
import { 
  cityFormat, 
  phoneNumberFormat,
  postalCodeFormat, 
  websiteFormat
} from '../../../helpers/yupValidationFormats';
import { stateList } from '../../../helpers/stateList.js';
import { 
  StyledUpdateUser,
  StyledSubmit,
  SubmitContainer,
} from './styles.js';

const jwtToken = localStorage.token;

const submitUser = (values) => {
  const { id } = JSON.parse(values);
  console.log(values);

  apiRequest.post(
    `${apiBaseUrl}/users/update/${id}`,
    jwtToken
  )
  .then(function (response) {
    if (response.data && response.data) {
      console.log('Updated Successfully');
    } else {
      console.log('Try again');
    };
  })
  .catch(function (error) {
    console.log(error);
  })
} 

// initialize ***************************************************************************


const UpdateUser = (props) => {
  const [formClean, setFormClean] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = () => {
    apiRequest.get(
      `${apiBaseUrl}/user/account_info/2`,
      jwtToken
    )
    .then(function (response) {
      if (response.status === 200){
        setData(response.data);
        const {account_id: accountId} = response.data;
        const {id} = response.data;
      } else {
        console.log(response.status);
      };
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  let initializeValues = {};
  
  inputFields.map((field) => { 
    const label = field.label;
    const initialValue = field.initialValue;
    const key = field.key;
  
    return initializeValues[label] = data[key] || initialValue;
  });
  

  // YUP VALIDATIONS
  
  const userSchema = yup.object().shape({
    accountId: yup.string(),
    addressLine1: yup.string(),
    postalCode: yup
         .string()
         .matches(postalCodeFormat, 'Please provide a valid postal code.')
         .max(5,'Too long')
         .min(5,'Too short'),
    city: yup
          .string()
          .matches(cityFormat, 'Please provide a valid city.'),
    state: yup.string(),
    website: yup
          .string()
          .matches(websiteFormat, 'Please provide a valid website.'),
    intro: yup.string(),
  })

  return (
    <StyledUpdateUser>
      <Formik
        initialValues={ 
          {
            ...initializeValues
          }
        }
        validate={values => {
          setFormClean(false)
        }}
        onSubmit={(values, { setSubmitting }) => {
          submitUser(JSON.stringify(values, null, 2));

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
                            value={values[field.label] === null ? data[field.key] : values[field.label]}
                          />
                          <ErrorHandler 
                            key={`error-${field.label}`}
                            value={values[field.label]}
                            color='red' 
                            label={field.label} 
                            errors={errors} 
                          />
                        </div>
                      )} else if (field.type === 'multiSelect' && field.label === 'state') {
                            const options = stateList;

                            return (
                              <div key={field.label}>
                                <Label color='white'>
                                  {field.displayName}
                                </Label>
                                <Select
                                  options={options}
                                  name={field.label}
                                  openOuterUp={true}
                                  value={options ? options.find(option => option.value === field.value) : ''}
                                  onChange={(option, field) => {
                                      setFieldValue(field.name, [option.value])
                                    }
                                  }
                                  onBlur={field.onBlur}
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
                    disabled={isSubmitting || Object.keys(errors).length > 0 || formClean}
                  >
                    Submit
                  </StyledSubmit>
                </SubmitContainer>
              </form>
            )
          }
        }
      </Formik>
    </ StyledUpdateUser>
  );
}

export default UpdateUser;
