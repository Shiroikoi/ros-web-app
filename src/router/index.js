import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import ControlPanel from "../components/ControlPanel";
import About from "../components/About";
import TODO1 from "../components/TODO1";
import TODO2 from "../components/TODO2";
//import Index from "../components/Index";
import Login from "../components/Login";
import layout from "../views/layout";
//import layout2 from "../views/layout2";
import layout3 from "../views/layout3";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: layout3,
    children: [
      {
        name: "Login",
        path: "login",
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
  if (to.name == "Index") {
    next();
  } else if (to.name == "Login") {
    if (localStorage.getItem("ROS-token")) {
      await store.dispatch("auth", localStorage.getItem("ROS-token")).catch(() => {});
      store.state.auth ? next({ path: "/user/" + store.state.userID }) : next();
    } else {
      next();
    }
  } else if (!localStorage.getItem("ROS-token")) {
    next({ path: "/login?deny=1" });
  } else {
    await store.dispatch("auth", localStorage.getItem("ROS-token")).catch(() => {});
    store.state.auth ? next() : next({ path: "/login?deny=1" });
  }
});

export default router;
