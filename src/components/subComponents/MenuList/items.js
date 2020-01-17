import React from 'react';

export const menuItems = [
  {
    'key': 'join-the-hustle',
    'href': '/signup',
    'linkText': 'Join the Hustle',
  },
  {
    'key': 'new-ticket',
    'href': '/new_ticket',
    'linkText': 'Create a Ticket',
  },
  {
    'key': 'add-account',
    'href': '/add_account',
    'linkText': 'Create Account',
  },
  {
    'checkLogin': true,
    'key': 'login',
    'href': '/login',
    'linkText': 'Login',
  },
  {
    'openAccess': false,
    'key': 'admin',
    'href': '/admin',
    'linkText': 'Admin',
    'access': 'admin',
  },
];
