import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,

  /**
   * Configure application routing.
   */
  routes: [
    {
      path: "/",
      alias: ["/home", "/index"],
      name: "home",
      component: () => import("@/views/home/Home")
    },
    {
      path: "/recruiting",
      alias: ["/apply", "/join", "/recruiting-center"],
      name: "recruiting-center",
      component: () => import("@/views/recruiting/Recruiting")
    },
    {
      path: "/members",
      alias: ["/roster"],
      name: "members",
      component: () => import("@/views/members/Members")
    }
  ]
});
