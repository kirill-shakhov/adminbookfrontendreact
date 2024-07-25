import {RouteObject} from "react-router-dom";
import SettingsView from "@modules/settings/views/SettingsView.tsx";
import PrivateRoute from "@/router/guards/PrivateRoute.tsx";


export default [
  {
    path: 'settings',
    element: (<PrivateRoute
      permissions={['USER', 'ADMIN']}>
      <SettingsView/>
    </PrivateRoute>),
  },

] as RouteObject[];

