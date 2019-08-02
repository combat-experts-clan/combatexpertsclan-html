import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      alias: "/home",
      name: "home",
      component: () => import("@/views/home/Home")
    },
    {
      path: "/recruiting",
      name: "recruiting-center",
      component: () => import("@/views/RecruitingCenter")
    },
    {
      path: "/members",
      name: "members",
      component: () => import("@/views/members/Members")
    }
  ]
});
