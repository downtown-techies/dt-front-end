import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import Label from '../shared/label';

const Checkbox = ({
  field: { name, value, onChange, onBlur },
  form: { errors, touched, setFieldValue },
  id,
  label,
  ...props
}) => {
  return (
    <div>
      <input
        name={name}
        type='checkbox'
        value={!!value}
        checked={!!value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <Label 
        color='white' 
        labelStyle='radioLabel'>
        {label}
      </Label>
    </div>
  );
};

export default Checkbox;
