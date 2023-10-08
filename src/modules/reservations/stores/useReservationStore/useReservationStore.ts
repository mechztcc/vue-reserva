import { defineStore } from 'pinia';

import { IReservation } from '../../types/reservation.interface';
import { ref } from 'vue';

export const useReservationsStore = defineStore('reservations-store', () => {
  const reservations = ref([] as IReservation[]);

  function addReservations(data: IReservation[]): void {
    reservations.value = data;
  }

  return {
    reservations,
    addReservations,
  };
});
