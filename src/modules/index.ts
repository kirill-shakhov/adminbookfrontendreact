import AuthModule from "../modules/auth/index.ts";
import {RouteObject} from "react-router-dom";

const router:RouteObject[] = [
  ...AuthModule.router
]

export default {
  router
}