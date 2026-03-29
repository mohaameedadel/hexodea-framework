import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("./framework-routes/index/index.tsx"),

  ...prefix("auth", [
    route("sign-in", "./framework-routes/auth/sign-in/sign-in.tsx"),
    route("sign-up", "./framework-routes/auth/sign-up/sign-up.tsx"),
    route(
      "forgot-password",
      "./framework-routes/auth/forget-password/forget-password.tsx",
    ),
    route(
      "check-email",
      "./framework-routes/auth/forget-password/check-email/check-email.tsx",
    ),
  ]),
] satisfies RouteConfig;
