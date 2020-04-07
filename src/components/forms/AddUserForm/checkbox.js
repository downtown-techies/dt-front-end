import React from 'react';
import Label from '../../shared/Label';

const Checkbox = ({
  field: { name, value, onChange, onBlur },
  form: { errors, touched, setFieldValue },
  id,
  label,
  color,
  ...props
}) => {
  return (
    <div>
      <input
        name={name}
        type='checkbox'
        value={!!value}
        color={color}
        checked={!!value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <Label 
        color={color}
        labelStyle='radioLabel'>
        {label}
      </Label>
    </div>
  );
};

export default Checkbox;
