import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RoomView from "@/views/RoomView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/room",
    name: "room",
    component: RoomView
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
