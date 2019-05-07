import React from 'react'
import Select, { Option } from 'react-select'

export const MultiSelect: React.SFC = ({
  options,
  field,
  form,
}) => (
  <Select
    options={options}
    name={field.name}
    isMulti
    value={options ? options.find(option => option.value === field.value) : ''}
    onChange={(option: Option) => form.setFieldValue(field.name, option.value)}
    onBlur={field.onBlur}
  />
)
