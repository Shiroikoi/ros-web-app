import Vue from "vue";
import VueRouter from "vue-router";
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
    path: "/ControlPanel",
    name: "ControlPanel",
    component: ControlPanel,
  },
  {
    path: "/About",
    name: "About",
    component: About,
  },
  {
    path: "/TODO1",
    name: "TODO1",
    component: TODO1,
  },
  {
    path: "/TODO2",
    name: "TODO2",
    component: TODO2,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== "Login" && true) next({ name: "Login" });
  else next();
});

export default router;
