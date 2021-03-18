import Vue from "vue";
import VueRouter from "vue-router";
import ControlPanel from "../views/ControlPanel";
import About from "../views/About";

Vue.use(VueRouter);

const routes = [
  {
    path: "/ControlPanel",

    component: ControlPanel,
  },
  {
    path: "/About",

    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
