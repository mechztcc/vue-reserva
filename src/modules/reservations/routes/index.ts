const reservationsRoutes = [
  {
    path: '/reservations',
    component: () =>
      import(
        '@/modules/reservations/pages/ListAllReservations/ListAllReservations.vue'
      ),
  },
];

export default reservationsRoutes;
