import AuthModule from "../modules/auth/index.ts";

const router = [
  ...AuthModule.router
]

export default {
  router
}