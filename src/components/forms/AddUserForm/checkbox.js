import React from 'react';
import Label from '../../shared/Label';

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
