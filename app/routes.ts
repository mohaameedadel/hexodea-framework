import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("./framework-routes/index/index.tsx"),

  ...prefix("app/auth", [
    route("sign-in", "./framework-routes/app/auth/sign-in/sign-in.tsx"),
    route("sign-up", "./framework-routes/app/auth/sign-up/sign-up.tsx"),
    route(
      "forgot-password",
      "./framework-routes/app/auth/forget-password/forget-password.tsx",
    ),
    route(
      "check-email",
      "./framework-routes/app/auth/forget-password/check-email/check-email.tsx",
    ),
  ]),
  layout("./framework-routes/app/layout.tsx", [
    route(
      "app/applications",
      "./framework-routes/app/applications/applications.tsx",
    ),
    route("app/test", "./framework-routes/app/test/test.tsx"),
  ]),
] satisfies RouteConfig;
