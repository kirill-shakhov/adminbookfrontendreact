import AuthModule from "../modules/auth";
import SettingsModule from "@modules/settings";
import BookModule from "@modules/book";
import {RouteObject} from "react-router-dom";

const router:RouteObject[] = [
  ...AuthModule.router,
  ...SettingsModule.router,
  ...BookModule.router
]

export default {
  router
}