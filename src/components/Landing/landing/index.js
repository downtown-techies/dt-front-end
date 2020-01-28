import React, { Component } from 'react';
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
  Tagline, 
  EyeBrow,
} from './styles.js';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false 
    };
  }
  
  handleClick = () => {
    this.setState({
      visible: !this.state.visible 
    });
    return
  }

  render(){
  return (
    <>
      <LandingWrapper>
        <TaglineWrapper>
          <Tagline>
            <Text textStyle='tagLine' color={theme.colors.primary}>
              We are a group of developers, designers and entrepreneurs solving problems.
            </Text>
          { !this.state.visible ? (
            <ButtonSection>
              <Button handleClick={this.handleClick} buttonStyle='big'>Join Us</ Button>
            </ButtonSection>
          ) : (
            <SVGWrapper>
              <Button buttonStyle='unstyled' handleClick={this.handleClick}>
                <SvgIcon
                  name='carrotUp'
                  viewBox='0 0 320 512'
                  style={{cursor: 'pointer'}}
                  fill={theme.colors.primary}/>
                </Button>
            </SVGWrapper>
          )}
          </Tagline>
        </TaglineWrapper>
        <UserFormWrapper>
          { this.state.visible ? (<AddUserForm />) : null }
        </UserFormWrapper>
      </LandingWrapper>
    </>
  );
  }
}

export default Landing;
