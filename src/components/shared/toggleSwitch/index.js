import React from 'react';
import styled from '../../../theme';

const Switch = styled.span`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 30px;
  padding: 5px;
  align-items: center;
  pointer-events: none;
  border-radius: 20px;
  background-color: ${(props) =>
    props.on ? props.theme.colors.accent : props.theme.colors.secondary};
`;

const StyledSlider = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  ${props => (props.hasFocus ? 'box-shadow: 0 0 8px #16202D;' : '')};
  background: #fff;
  transition: transform 0.3s;
  left: 5px;
  transform: ${
    props => {
      console.log('props', props);
      return (props.on ? 'translateX(20px)' : 'translateX(0)')
    }
  }
`;

const ToggleSwitch = ({
  field,
  value,
  onClick,
  on, 
  hasFocus
}) =>  {
  console.log('field', field)
  console.log('values', value)
  console.log(onClick)

  return (
    <Switch on={on} onClick={onClick}>
      <StyledSlider on={on} hasFocus={hasFocus} />
    </Switch>
  );
}

export default ToggleSwitch;
