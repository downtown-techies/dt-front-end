import React, { useState } from 'react';
import Button from '../shared/Button';
import { ButtonSection } from '../shared/Button/styles';
import Text from '../shared/Text';
import SvgIcon from '../../assets/svgs';
import AddUserForm from '../forms/AddUserForm';
import theme from '../../theme/primaryTheme';
import {  
  LandingWrapper,
  SVGWrapper,
  TaglineWrapper, 
  UserFormWrapper,
  Tagline
} from './styles.js';

const Landing = (props) => {
  const [visible, toggleVisible] = useState(false);
  
  const handleClick = () => {
    toggleVisible(!visible);

    return
  }

  return (
    <>
      <LandingWrapper>
        <TaglineWrapper>
          <Tagline>
            <Text sizeFactor={2} bold textStyle="tagLine" color={theme.colors.backgroundDark}>
              Limitless Possibility
            </Text>
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
                  fill={theme.colors.backgroundDark}/>
                </Button>
            </SVGWrapper>
          )}
          </Tagline>
        </TaglineWrapper>
        <UserFormWrapper>
          { visible && <AddUserForm />}
        </UserFormWrapper>
      </LandingWrapper>
    </>
  );
}

export default Landing;
