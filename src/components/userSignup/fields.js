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
    label: 'gig_category',
    displayName: 'I am a(n)...',
    options: [
      {value: 'investor', label: 'Investor'},
      {value: 'founder', label: 'Founder'},
      {value: 'developer', label: 'Developer'},
      {value: 'networker', label: 'Networker'},
      {value: 'seeker', label: 'Seeker'}
    ],
    initialValue: [],
    type: 'multiSelect'
  },
  {
    label: 'gig_needs',
    displayName: 'I am looking to connect with',
    options: [
      {value: 'freelance_talent', label: 'Freelance Talent'}, 
      {value: 'investors', label: 'Investors'},
      {value: 'mentor', label: 'Mentor'},
      {value: 'recruiter', label: 'Recruiter'},
      {value: 'event_sponsor', label: 'Event Sponsor'}
    ],
    initialValue: [],
    type: 'multiSelect'
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
