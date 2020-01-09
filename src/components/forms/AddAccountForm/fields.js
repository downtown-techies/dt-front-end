const hiddenFields = [
  {
    label: 'type',
    value: 'user'
  }
]

const inputFields = [
  {
    label: 'username',
    displayName: 'Username',
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
    label: 'password',
    displayName: 'Password',
    initialValue: '',
    type: 'password'
  },
  {
    label: 'confirmPassword',
    displayName: 'Confirm Password',
    initialValue: '',
    type: 'password'
  },
];

export {
  hiddenFields,
  inputFields
};
