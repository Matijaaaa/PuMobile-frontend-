import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home-view.vue";
import StartView from "../views/start-view.vue";
import LoginView from "../views/login-view.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home-view",
    component: HomeView,
  },
  {
    path: "/start",
    name: "start",
    component: StartView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
