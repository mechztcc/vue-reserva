// Composables
import authRouter from '@/modules/auth/routes';
import reservationsRouter from '@/modules/reservations/routes/index';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  ...authRouter,
  ...reservationsRouter,
  {
    path: '',
    component: () =>
      import(
        '@/modules/reservations/pages/ListAllReservations/ListAllReservations.vue'
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
