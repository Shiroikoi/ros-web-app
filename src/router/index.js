import Vue from "vue";
import VueRouter from "vue-router";
import ControlPanel from "../views/ControlPanel";
import About from "../views/About";
import TODO1 from "../views/TODO1";
import TODO2 from "../views/TODO2";
import Index from "../views/Index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",

    component: Index,
  },
  {
    path: "/ControlPanel",

    component: ControlPanel,
  },
  {
    path: "/About",

    component: About,
  },
  {
    path: "/TODO1",

    component: TODO1,
  },
  {
    path: "/TODO2",

    component: TODO2,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
