import { createRouter, createWebHistory } from "vue-router";
import empList from "../views/empList.vue";
import empInfo from "../views/empInfo.vue";

const routes = [
  {
    path: "/",
    name: "empList",
    component: empList,
  },
  {
    path: "/empInfo",
    name: "empInfo",
    component: empInfo,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
