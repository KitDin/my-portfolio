import About from "@/views/AboutMe.vue";
import HomePage from "@/views/Home.vue";
import Introduction from "@/views/Introduction.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: Introduction },
  { path: "/home", component: HomePage },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
