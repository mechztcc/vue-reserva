import { defineStore } from 'pinia';
import { IReservation } from '../../types/reservation.interface';

export const useReservationsStore = defineStore('reservations-store', {
  state: () => ({
    reservations: [] as IReservation[],
    reservationsFiltered: [] as IReservation[],
    asc: true,
  }),
  actions: {
    addReservation(data: any): void {
      this.reservations = data.value;
      this.reservationsFiltered = data.value;
    },

    onReverse(): void {
      this.asc = !this.asc;
      this.reservations = this.reservations.reverse();
    },

    onFilterBy(name: string): void {
      this.reservationsFiltered = this.reservations.filter((res) => {
        return res.name.toLowerCase().includes(name.toLowerCase());
      });
    },
  },
});
