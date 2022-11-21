import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    name: "main",
    component: () => import("./components/main")
   },
  {
    path: "/memberlist",
    alias: "/memberlist",
    name: "memberlist",
    component: () => import("./components/Memberlist")
  },
  {
    path: "/tutorials/:id",
    name: "tutorial-details",
    component: () => import("./components/Tutorial")
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("./components/Signup")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./components/login")
  },
  {
    path: "/userlogin",
    name: "userlogin",
    component: () => import("./components/userlogin")
  },
  {
    path: "/hotel",
    name: "hotel",
    component: () => import("./components/hotel")
  },
  {
    path: "/loginhotel",
    name: "loginhotel",
    component: () => import("./components/loginhotel")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;