export const menuItems = [
  {
    'key': 'join-the-hustle',
    'hrefRoot': '/signup',
    'linkText': 'Join the Hustle',
  },
  {
    'key': 'new-ticket',
    'hrefRoot': '/new_ticket',
    'linkText': 'Create a Ticket',
  },
  {
    'key': 'add-account',
    'hrefRoot': '/add_account',
    'linkText': 'Create Account',
  },
  {
    'flagLogin': true,
    'key': 'login',
    'hrefRoot': '/login',
    'linkText': 'Login',
  },
  {
    'flagLogout': true,
    'key': 'userInfo',
    'hrefRoot': '/user/account_info',
    'linkText': 'User Info',
  },
  {
    'flagLogout': true,
    'key': 'logout',
    'hrefRoot': '/logout',
    'linkText': 'Logout',
  },
  {
    'openAccess': false,
    'key': 'admin',
    'hrefRoot': '/admin',
    'linkText': 'Admin',
    'access': 'admin',
  },
];
