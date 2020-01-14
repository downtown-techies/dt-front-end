import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import TextArea from '../../shared/TextArea';
import Input from '../../shared/Input';
import Label from '../../shared/Label';
import Select from 'react-select';
import ErrorHandler from '../../shared/ErrorHandler';
import ErrorModal from '../../modals/ErrorModal';
import Checkbox from './checkbox.js';
import * as yup from 'yup';
import { 
  inputFields, 
  toggleFields, 
  hiddenFields 
} from './fields.js';
import { apiRequest, apiBaseUrl } from '../../../helpers/api';
import { 
  StyledTicket,
  StyledSubmit,
  StyledInputContainer,
  SubmitContainer,
  StyledRadioContainer
} from './styles.js';

let hiddenValues = {};
let initializeValues = {};
const jwtToken = localStorage.token;

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

const zipFormat = new RegExp(/^\d{5}([-]?\d{4})?$/);

const ticketSchema = yup.object().shape({
  point_of_contact: yup.string().required('Name is Required.'),
  contact_email: yup
    .string()
    .email('Please Enter a valid Email')
    .required('Contact email is Required.'),
  gig_category: yup
    .string()
    .required('is Required.'),
  project_length: yup
    .string()
    .required('is Required.'),
  project_description: yup
    .string()
    .required('Name is Required.')
    .min(20, 'Description must be at least 20 characters'),
  submitter_name: yup
    .string()
    .when("send_email_toggle", {
      is: true,
      then: yup.string().required('Name is required')
    }),
  submitter_email: yup
    .string()
    .email()
    .when("send_email_toggle", {
      is: true,
      then: yup.string().required('Please Enter a valid Email')
    })
})

class Ticket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formClean: true,
      errors: false,
      message: '',
      responseStatus: '',
      hidden: true,
      showContactEmail: false 
    }
  }

  responseHandler = (response) => {
    const { errors, responseStatus, message, hidden } = response; 

    this.setState({
      errors: errors,
      message: message,
      responseStatus: responseStatus,
      hidden: hidden,
      contactTicketSubmitter: true,
    })
  }
  
  submitNewTicket = ( params ) => {
    const { values, handler } = params;
    apiRequest.post(
      `${apiBaseUrl}/tickets`,
      values
    )
    .then(function (response) {
      if (response.data && response.data.userCreation) {
        handler({message: 'Thanks for signing up! Look for a follow up email from us soon.', errors: false, hidden: false});
      } else if ( response.data && !response.data.userCreation && response.data.message === 'exists' ) {
          handler({message: 'Looks like this user already exists!', errors: true, hidden: false});
      } else if ( response.data && !response.data.userCreation && response.data.message === 'error' ) {
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
        <StyledTicket>
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
              this.submitNewTicket({ values: JSON.stringify(values, null, 2), handler: this.responseHandler});

              setSubmitting(false);
            }}
            validationSchema={ticketSchema}
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
                const inputTypes = [
                  'input',
                  'password'
                ];
                return (
                  <form onSubmit={handleSubmit}>
                    {
                      inputFields.map((field) => {
                        if (inputTypes.includes(field.type)) {
                          return (
                            <StyledInputContainer key={field.label}>
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
                            </StyledInputContainer>
                          )} else if (field.type === 'multiSelect') {
                            const options = field.options;

                            return (
                              <StyledInputContainer key={field.label}>
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
                                <ErrorHandler 
                                  key={`error-${field.label}`}
                                  value={values[field.label]}
                                  color='red' 
                                  label={field.label} 
                                  errors={errors} 
                                />
                              </StyledInputContainer>
                          )} else if (field.type === 'textarea') {
                            return (
                            <StyledInputContainer key={field.label}>
                              <Label color='white'>
                                {field.displayName}
                              </Label>
                              <TextArea
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
                            </StyledInputContainer>
                          )} else {
                          return null
                        }
                      })
                    }
                    <StyledRadioContainer>
                      <Field
                        component={Checkbox}
                        onClick={(e) => this.setState({showContactEmail: !this.state.showContactEmail})}
                        name='send_email_toggle'
                        label='Please send me a copy of this ticket.'
                      />
                    </StyledRadioContainer>
                    {
                      this.state.showContactEmail ? (
                        toggleFields.map((field) => {
                          if (inputTypes.includes(field.type)) {
                            return (
                              <StyledInputContainer key={field.label}>
                                <Label color='white'>
                                  {field.displayName}
                                </Label>
                                <Input
                                  type='input'
                                  name={field.label}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values[field.label] || ''}
                                />
                                <ErrorHandler 
                                  key={`error-${field.label}`}
                                  value={values[field.label]}
                                  color='red' 
                                  label={field.label} 
                                  errors={errors} 
                                />
                              </StyledInputContainer>
                            )} else {
                              return null
                            }
                        }) 
                      ) : null
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
        </ StyledTicket>
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

export default Ticket;
