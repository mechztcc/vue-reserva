// Composables
import authRouter from '@/modules/auth/routes';
import reservationsRouter from '@/modules/reservations/routes/index';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [...authRouter, ...reservationsRouter];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
