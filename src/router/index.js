import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Tasks from "../views/Tasks.vue";
import Settings from "../views/Settings.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/tasks",
    name: "About",
    component: Tasks,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
];

const router = new VueRouter({
  routes,
});

export default router;