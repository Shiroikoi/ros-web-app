import Vue from "vue";
import VueRouter from "vue-router";
//import axios from "axios";
import ControlPanel from "../views/ControlPanel";
import About from "../views/About";
import TODO1 from "../views/TODO1";
import TODO2 from "../views/TODO2";
import Index from "../views/Index";
import Login from "../views/Login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/controlpanel",
    name: "ControlPanel",
    component: ControlPanel,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/todo1",
    name: "TODO1",
    component: TODO1,
  },
  {
    path: "/todo2",
    name: "TODO2",
    component: TODO2,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== "Login" && to.name !== "Index") next({ name: "Login" });
  else next();
});

export default router;
