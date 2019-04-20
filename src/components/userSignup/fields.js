const hiddenFields = [
  {
    label: 'type',
    value: 'user'
  },
  {
    label: 'active',
    value: true
  },
  {
    label: 'opt_in',
    value: true
  },
];

const inputFields = [
  {
    label: 'first_name',
    displayName: 'First Name',
    initialValue: '',
    type: 'input'
  },
  {
    label: 'last_name',
    displayName: 'Last Name',
    initialValue: '',
    type: 'input'
  },
  {
    label: 'email',
    displayName: 'Email',
    initialValue: '',
    type: 'input'
  },
  {
    label: 'postal_code',
    displayName: 'Postal Code',
    initialValue: '',
    type: 'input'
  },
  {
    label: 'ph_number',
    displayName: 'Phone Number',
    initialValue: '',
    type: 'input'
  },
];

//TODO build paths for selection inside of formik

//  {
//    label: 'opt_in',
//    displayName: 'Opt in to Notifications',
//    initialValue: 'true',
//    type: 'selection'
//  },


export {
  inputFields,
  hiddenFields
};
