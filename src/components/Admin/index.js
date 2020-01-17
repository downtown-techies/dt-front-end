import React, { Component } from 'react';
import styled from '../../theme';
import Text from '../shared/Text';
import Link from '../shared/Link';

class Admin extends Component {
  render() {
    return (
      <>
        <Link color='white' address='/admin/user_list'>Click to see users</Link>
      </>
    );
  }
}

export default Admin;
