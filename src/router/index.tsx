// src/routes.js
import {createBrowserRouter} from 'react-router-dom';
import modules from "@modules/index";
import App from "@/App";
import PrivateRoute from "@/router/guards/PrivateRoute.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateRoute
        permissions={['USER', 'ADMIN']}>
        <App/>
      </PrivateRoute>)
  },
  ...modules.router
]);

export default router;
