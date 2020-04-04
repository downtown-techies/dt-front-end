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
    label: 'opt_in',
    displayName: 'Opt in to Notifications',
    initialValue: 'true',
    type: 'radio'
  },
];

export {
  inputFields,
  hiddenFields
};
