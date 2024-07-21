import LoginView from '@moduleAuth/views/LoginView/LoginView';
import RegistrationView from '@moduleAuth/views/RegistrationView/RegistrationView';

export default [
  {
    path: 'login',
    element: <LoginView/>,
  },
  {
    path: 'registration',
    element: <RegistrationView/>,
  },
];

