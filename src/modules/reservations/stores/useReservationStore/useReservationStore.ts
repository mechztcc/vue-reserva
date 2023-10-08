import { defineStore } from 'pinia';

import { IReservation } from '../../types/reservation.interface';

export const useReservationsStore = defineStore('reservations-store', {
  state: () => ({
    reservations: [] as IReservation[],
  }),
  actions: {
    addReservations(data: IReservation[]): void {
      this.reservations = data;
    },
  },
});
