// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
  },
  {
    path: "/Layout",
    name: "Layout",
    component: () =>
      import(/* webpackChunkName: "layout" */ "@/views/Layout.vue"),
  },
  {
    path: "/Variables",
    name: "Variables",
    component: () =>
      import(/* webpackChunkName: "Variables" */ "@/views/Variables.vue"),
  },
  {
    path: "/Grid",
    name: "Grid",
    component: () => import(/* webpackChunkName: "Grid" */ "@/views/Grid.vue"),
  },
  {
    path: "/Buttons",
    name: "Buttons",
    component: () =>
      import(/* webpackChunkName: "Buttons" */ "@/views/Buttons.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
