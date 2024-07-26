import {RouteObject} from "react-router-dom";
import SettingsLayoutView from "@modules/settings/views/SettingsLayoutView/SettingsLayoutView";
import PrivateRoute from "@/router/guards/PrivateRoute.tsx";


export default [
  {
    path: 'settings',
    element: (<PrivateRoute
      permissions={['USER', 'ADMIN']}>
      <SettingsLayoutView/>
    </PrivateRoute>),
  },

] as RouteObject[];

