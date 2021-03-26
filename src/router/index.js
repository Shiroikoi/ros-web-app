import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import ControlPanel from "../components/ControlPanel";
import About from "../components/About";
import TODO1 from "../components/TODO1";
import TODO2 from "../components/TODO2";
import Index from "../components/Index";
import Login from "../components/Login";
import layout from "../views/layout";
import layout2 from "../views/layout2";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: layout2,
    children: [
      {
        name: "Home",
        path: "/",
        component: Index,
      },
      {
        path: "login",
        name: "Login",
        component: Login,
      },
    ],
  },

  {
    path: "/user/:id",
    name: "User",
    component: layout,
    children: [
      {
        path: "controlpanel",
        name: "ControlPanel",
        component: ControlPanel,
      },
      {
        path: "about",
        name: "About",
        component: About,
      },
      {
        path: "todo1",
        name: "TODO1",
        component: TODO1,
      },
      {
        path: "todo2",
        name: "TODO2",
        component: TODO2,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.name == "Index" || to.name == "Login") {
    next();
  } else if (!localStorage.getItem("ROS-token")) {
    next({ name: "Login" });
  } else {
    await store.dispatch("auth", localStorage.getItem("ROS-token"));
    store.state.auth ? next() : next({ name: "Login" });
  }
});

export default router;
