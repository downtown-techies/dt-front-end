import React, { Component } from 'react';
import SvgIcon from '../../assets/svgs';
import Link from '../shared/link';
import Text from '../shared/text';
import { StyledPartners, Links } from './styles';

class Partners extends Component {
  render() {
    return (
      <StyledPartners>
        <Text tag='h4' textStyle='bigTitle' color='white'>Partners/Sponsors</Text> 
        <Links>
          <Link name='WeWork'
            linkStyle='partners'
            target='_blank'
            address='https://www.wework.com/buildings/one-glenwood--raleigh-durham?utm_campaign=1671323444&utm_term=64824353716&utm_content=341253445376&utm_source=ads-google&utm_medium=cpc&gclsrc=aw.ds&&gclid=EAIaIQobChMIn9D-86aK4gIVilMNCh3yMAWJEAAYASAAEgLMIfD_BwE&gclsrc=aw.ds'>
            <SvgIcon name='weWorkLogo'viewBox='0 0 94 20' width={186} height={25} fill='#fff' />
          </ Link>
          <Link name='Vaco'
            linkStyle='partners'
            target='_blank'
            address='https://www.wework.com/buildings/one-glenwood--raleigh-durham?utm_campaign=1671323444&utm_term=64824353716&utm_content=341253445376&utm_source=ads-google&utm_medium=cpc&gclsrc=aw.ds&&gclid=EAIaIQobChMIn9D-86aK4gIVilMNCh3yMAWJEAAYASAAEgLMIfD_BwE&gclsrc=aw.ds'>
            <SvgIcon name='vacoLogo'viewBox='0 0 100 30' width={100} height={30} fill='#fff' />
          </ Link>
          <Link name='groveCollaborative' 
            linkStyle='partners'
            target='_blank'
            address='https://www.grove.co/'>
            <SvgIcon name='groveCoLogo'viewBox='0 0 94 40' width={99} height={38} fill='#fff' />
          </ Link>
        </Links>
      </ StyledPartners>
    );
  }
}

export default Partners;
