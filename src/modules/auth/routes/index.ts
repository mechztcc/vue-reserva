const authRouter = [
  {
    path: "/auth/create-account",
    component: () =>
      import("@/modules/auth/pages/CreateAccount/CreateAccount.vue"),
  },
  {
    path: "/auth/login",
    component: () => import("@/modules/auth/pages/Login/Login.vue"),
  },
];

export default authRouter;
