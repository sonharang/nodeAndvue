import { createRouter, createWebHistory } from "vue-router";
import empList from "../views/empList.vue";
import empInfo from "../views/empInfo.vue";
import empInsert from "../views/empInsert.vue";

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
  {
    path: "/empInsert",
    name: "empInsert",
    component: empInsert,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
