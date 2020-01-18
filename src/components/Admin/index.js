import React, { Component } from 'react';
import Link from '../shared/Link';

class Admin extends Component {
  render() {
    return (
      <>
        <Link color='white' address='/admin/user_list'>Click to see users</Link>
        <Link color='white' address='/admin/ticket_list'>Click to see tickets</Link>
      </>
    );
  }
}

export default Admin;
