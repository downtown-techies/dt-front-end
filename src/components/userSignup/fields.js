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
    initialValue: 'foo',
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
    label: 'address_line_1',
    displayName: 'Street Address Line 1',
    initialValue: '',
    type: 'input'
  },
  {
    label: 'address_line_2',
    displayName: 'Street Address Line 2',
    initialValue: '',
    type: 'input'
  },
  {
    label: 'city',
    displayName: 'City',
    initialValue: '',
    type: 'input'
  },
  {
    label: 'state',
    displayName: 'State',
    initialValue: '',
    type: 'dropdown'
  },
  {
    label: 'postal_code',
    displayName: 'Postal Code',
    initialValue: '',
    type: 'input'
  },
  {
    label: 'country',
    displayName: 'Country',
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
