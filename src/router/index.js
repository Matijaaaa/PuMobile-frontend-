import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home-view.vue";
import StartView from "../views/start-view.vue";
import LoginView from "../views/login-view.vue";
import SignupView from "../views/signup-view.vue";
import TimepView from "../views/timep-view.vue";
import store from "@/store";
import CheckpointView from "../views/checkpoint-view.vue";
import Checkpoint2View from "../views/checkpoint2-view.vue";
import AvailableView from "../views/available-view.vue";
import CalcView from "../views/calc-view.vue";
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
  {
    path: "/checkpoint",
    name: "checkpoint",
    component: CheckpointView,
  },
  {
    path: "/checkpoint2",
    name: "checkpoint2",
    component: Checkpoint2View,
  },
  {
    path: "/available",
    name: "available",
    component: AvailableView,
  },
  {
    path: "/calc",
    name: "calc",
    component: CalcView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  console.log(
    "Stara ruta ",
    from.name,
    " -> ",
    to.name,
    "Korisnik",
    store.currentUser
  );
  const noUser = store.currentUser === null;
  console.log(noUser);
  if (noUser && to.meta.needsUser) {
    next("login");
  } else {
    next();
  }
});

export default router;
