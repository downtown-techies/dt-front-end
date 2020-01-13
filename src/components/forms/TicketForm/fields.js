const hiddenFields = [
  {
    label: 'type',
    value: 'user'
  },
];

const inputFields = [
  {
    label: 'point_of_contact',
    displayName: 'Contact Name',
    initialValue: '',
    type: 'input'
  },
  {
    label: 'contact_email',
    displayName: 'Contact Email',
    initialValue: '',
    type: 'input'
  },
  {
    label: 'gig_category',
    displayName: 'I am a(n)...',
    options: [
      {value: 'founder', label: 'Founder'},
      {value: 'executive', label: 'Executive'},
      {value: 'projectManager', label: 'Project Manager'},
      {value: 'developer', label: 'Developer'},
      {value: 'partner', label: 'Partner'},
    ],
    initialValue: [],
    type: 'multiSelect'
  },
  {
    label: 'technical_requirements',
    displayName: 'Skillset needed',
    options: [
      {value: 'frontEnd', label: 'Front-end Developer'},
      {value: 'backEnd', label: 'Back-end Develop'},
      {value: 'fullStack', label: 'Full Stack Developer'},
      {value: 'mobile', label: 'Mobile Developer'},
      {value: 'lowLevel', label: 'Low-level Developer'},
      {value: 'crm', label: 'CRM Developr'},
      {value: 'tester', label: 'QA/Tester'},
      {value: 'devops', label: 'DevOps'},
      {value: 'secops', label: 'Security'},
      {value: 'dataScience', label: 'Data Scientist'},
      {value: 'blockChain', label: 'BlockChain'},
      {value: 'other', label: 'Other'},
    ],
    initialValue: [],
    type: 'multiSelect'
  },
  {
    label: 'project_length',
    displayName: 'Estimated Project Length',
    options: [
      {value: 'micro', label: '20hrs or less'}, 
      {value: 'short', label: '40-80 hours'},
      {value: 'medium', label: '80-160 hours'},
      {value: 'large', label: '1 - 3 months'},
      {value: 'ongoing10', label: 'Ongoing 10 hours/week'},
      {value: 'ongoing20  ', label: 'Ongoing 20 hours/week'},
      {value: 'ongoing40  ', label: 'Ongoing 40 hours/week'},
    ],
    initialValue: [],
    type: 'multiSelect'
  },
  {
    label: 'project_description',
    displayName: 'Project Scope/Description',
    initialValue: '',
    type: 'textarea'
  },
  {
    label: 'submitter_name',
    displayName: 'Ticket Submitter Name',
    initialValue: '',
    type: 'input'
  },
  {
    label: 'submitter_email',
    displayName: 'Ticket Submitter Email',
    initialValue: '',
    type: 'input'
  },
  {
    label: 'send_email',
    displayName: 'Please send me a copy of this ticket',
    initialValue: 'false',
    type: 'radio'
  },
  // {
  //   label: 'urgent',
  //   displayName: 'Is this project urgent?',
  //   initialValue: 'false',
  //   type: 'radio'
  // },
  // {
  //   label: 'on_site_required',
  //   displayName: 'On Site Required',
  //   initialValue: 'false',
  //   type: 'radio'
  // },
];

export {
  inputFields,
  hiddenFields
};
