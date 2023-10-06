// Composables
import authRouter from "@/modules/auth/authRoutes";
import { createRouter, createWebHistory } from "vue-router";

const routes = [...authRouter];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
