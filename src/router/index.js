import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home-view.vue";
import StartView from "../views/start-view.vue";
import LoginView from "../views/login-view.vue";
import SignupView from "../views/signup-view.vue";
import TimepView from "../views/timep-view.vue";
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
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/timep",
    name: "timep",
    component: TimepView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
