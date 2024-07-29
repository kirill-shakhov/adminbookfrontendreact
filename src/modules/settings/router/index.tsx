import {Navigate, RouteObject} from "react-router-dom";
import SettingsLayoutView from "@modules/settings/views/SettingsLayoutView/SettingsLayoutView";

import PrivateRoute from "@/router/guards/PrivateRoute.tsx";
import SettingsProfile from "@modules/settings/views/SettingsProfile/SettingsProfile";


export default [
  {
    path: 'settings',
    element: (<PrivateRoute
      permissions={['USER', 'ADMIN']}>
      <SettingsLayoutView/>
    </PrivateRoute>),
    children: [
      {
        path: '',
        element: <Navigate to="profile" replace/>,
      },
      {
        path: 'profile',
        element: (<PrivateRoute
          permissions={['USER', 'ADMIN']}>
          <SettingsProfile/>
        </PrivateRoute>),
      }
    ]
  },

] as RouteObject[];

