import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import SearchPage from "@/components/SearchPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/search", component: SearchPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
