import { createRouter, createWebHistory } from "vue-router";
import main from "../views/MainComponent.vue";
import empList from "../views/empList.vue";
import empInfo from "../views/empInfo.vue";
import empInsert from "../views/empInsert.vue";
import empUpdate from "../views/empUpdate.vue";
import EmpFormView from "../views/EmpFormView.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: main,
  },
  {
    path: "/empList",
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
  {
    path: "/empUpdate",
    name: "empUpdate",
    component: empUpdate,
  },
  {
    path: "/EmpFormView",
    name: "EmpFormView",
    component: EmpFormView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
