import React, { Component } from 'react';
import Image from '../../shared/Image';
import Link from '../../shared/Link';
import {
  peel, 
  trinet, 
  hackathonJr, 
  insight, 
  vaco, 
  weWork, 
  whereScape, 
  wral, 
  grove, 
} from '../../../assets/images/partners';
import Text from '../../shared/Text';
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
            <Image src={weWork} alt={'we-work-logo'} />
          </ Link>
          <Link name='Vaco'
            linkStyle='partners'
            target='_blank'
            address='https://www.wework.com/buildings/one-glenwood--raleigh-durham?utm_campaign=1671323444&utm_term=64824353716&utm_content=341253445376&utm_source=ads-google&utm_medium=cpc&gclsrc=aw.ds&&gclid=EAIaIQobChMIn9D-86aK4gIVilMNCh3yMAWJEAAYASAAEgLMIfD_BwE&gclsrc=aw.ds'>
            <Image src={vaco} alt={'vaco-logo'} />
          </ Link>
          <Link name='groveCollaborative' 
            linkStyle='partners'
            target='_blank'
            address='https://www.grove.co/'>
            <Image src={grove} alt={'grove-collavoritive-logo'} />
          </ Link>
          <Link name='hackathonJr'
            linkStyle='partners'
            target='_blank'
            address='https://www.wework.com/buildings/one-glenwood--raleigh-durham?utm_campaign=1671323444&utm_term=64824353716&utm_content=341253445376&utm_source=ads-google&utm_medium=cpc&gclsrc=aw.ds&&gclid=EAIaIQobChMIn9D-86aK4gIVilMNCh3yMAWJEAAYASAAEgLMIfD_BwE&gclsrc=aw.ds'>
            <Image src={hackathonJr} alt={'hackathon-jr-logo'} />
          </ Link>
          <Link name='insightSoftware'
            linkStyle='partners'
            target='_blank'
            address='https://insightsoftware.com/'>
            <Image src={insight} alt={'insight-software-logo'} />
          </ Link>
          <Link name='whereScape'
            linkStyle='partners'
            target='_blank'
            address='https://www.wherescape.com'>
            <Image src={whereScape} alt={'wherescape-logo'} />
          </ Link>
          <Link name='wralTechWire'
            linkStyle='partners'
            target='_blank'
            address='https://www.wraltechwire.com/'>
            <Image src={wral} alt={'wral-techwire-logo'} />
          </ Link>
          <Link name='peel'
            linkStyle='partners'
            target='_blank'
            address='https://www.peel.today/'>
            <Image src={peel} alt={'peel-logo'} />
          </ Link>
          <Link name='trinet'
            linkStyle='partners'
            target='_blank'
            address='https://www.trinet.com/'>
            <Image src={trinet} alt={'trinet-logo'} />
          </ Link>
        </Links>
      </ StyledPartners>
    );
  }
}

export default Partners;
