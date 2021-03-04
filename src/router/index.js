import Vue from "vue";
import VueRouter from "vue-router";

import { AuthRoutes } from "@/modules/auth/router";
import { AdminDashboardRoutes } from "@/modules/admin-dashboard/router";

Vue.use(VueRouter);

const routes = [
  ...AuthRoutes,
  ...AdminDashboardRoutes,
  {
    path: "*",
    component: () => import("../views/404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
