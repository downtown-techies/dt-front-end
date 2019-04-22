import React, { Component } from 'react';
import styled from '../../theme';
import { apiRequest, apiBaseUrl } from '../../helpers/api';
import SvgIcon from '../../assets/svgs';
import Link from '../shared/link';

const getMeetups = (values) => {
  apiRequest.get(
    `${apiBaseUrl}/meetups`
  )
  .then(function (response) {
    // make this more robust to check if user already exists
    if (response.status === 200){
      console.log(response);
    } else {
      alert('We may have missed a semi-colon, please try again');
    };
  })
  .catch(function (error) {
    console.log(error);
  })
};

getMeetups();


class MeetupsDropdown extends Component {
  render() {
    return (
    <>
      <Link name='meetup'
        linkStyle='inlineFooter'
        address='https://www.instagram.com/downtowntechies/'>
        <SvgIcon name='meetup' viewBox='0 0 448 512' fill='#fff' />
      </ Link>
    </>

    );
  }
}

export default MeetupsDropdown;

