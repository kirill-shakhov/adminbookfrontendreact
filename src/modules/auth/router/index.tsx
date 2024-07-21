import LoginView from '@moduleAuth/views/LoginView/LoginView';
import RegistrationView from '@moduleAuth/views/RegistrationView/RegistrationView';

import {RouteObject} from "react-router-dom";


export default [
  {
    path: 'login',
    element: <LoginView/>,
  },
  {
    path: 'registration',
    element: <RegistrationView/>,
  },
] as RouteObject[];

