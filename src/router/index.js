import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home-view.vue";
import StartView from "../views/start-view.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home-view",
    component: HomeView,
  },
  {
    path: "/about-view",
    name: "about-view",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/about-view.vue"),
  },
  {
    path: "/start",
    name: "start",
    component: StartView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
