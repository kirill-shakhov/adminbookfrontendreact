import AuthModule from "../modules/auth/index.ts";
import SettingsModule from "@modules/settings/index.ts";
import {RouteObject} from "react-router-dom";

const router:RouteObject[] = [
  ...AuthModule.router,
  ...SettingsModule.router
]

export default {
  router
}