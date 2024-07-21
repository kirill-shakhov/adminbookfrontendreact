// src/routes.js
import {createBrowserRouter} from 'react-router-dom';
import modules from "@modules/index";
import App from "@/App";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  ...modules.router
]);

export default router;