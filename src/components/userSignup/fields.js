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
    label: 'opt_in',
    displayName: 'Opt in to Notifications',
    initialValue: 'true',
    type: 'radio'
  },
  {
    label: 'follow_up',
    displayName: 'Opt in to Notifications',
    initialValue: 'true',
    type: 'radio'
  },
  {
    label: 'gig_category',
    displayName: 'Opt in to Notifications',
    initialValue: 'true',
    type: 'selection'
  },
  {
    label: 'gig_needs',
    displayName: 'Opt in to Notifications',
    initialValue: 'true',
    type: 'selection'
  },
];

export {
  inputFields,
  hiddenFields
};
