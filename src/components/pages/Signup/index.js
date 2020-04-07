import React, { useState } from 'react';
import Button from '../../shared/Button';
import { ButtonSection } from '../../shared/Button/styles';
import SvgIcon from '../../../assets/svgs';
import AddUserForm from '../../forms/AddUserForm';
import theme from '../../../theme/primaryTheme';
import {  
  SignupWrapper,
  UserFormWrapper,
  SVGWrapper,
} from './styles.js';

const Signup = (props) => {
  const [visible, toggleVisible] = useState(false);
  
  const handleClick = () => {
    toggleVisible(!visible);

    return
  }

  return (
    <SignupWrapper>
        { !visible ? (
          <ButtonSection>
            <Button handleClick={()=>handleClick()} buttonStyle="big">Build Your Dream</ Button>
          </ButtonSection>
        ) : (
          <SVGWrapper>
            <Button buttonStyle="unstyled" handleClick={()=>handleClick()}>
              <SvgIcon
                name="carrotUp"
                viewBox="0 0 320 512"
                style={{cursor: 'pointer'}}
                fill={theme.colors.reverse}/>
              </Button>
          </SVGWrapper>
        )}
      <UserFormWrapper visible={visible}>
        { visible && <AddUserForm />}
      </UserFormWrapper>
    </SignupWrapper>
  );
}

export default Signup;
