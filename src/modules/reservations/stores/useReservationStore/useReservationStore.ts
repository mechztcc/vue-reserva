import { defineStore } from 'pinia';
import { IReservation } from '../../types/reservation.interface';
import { index } from '@/modules/reservations/services/ReservationService';

export const useReservationsStore = defineStore('reservations-store', {
  state: () => ({
    reservations: [] as IReservation[],
    reservationsFiltered: [] as IReservation[],
    asc: true as boolean,
    isLoading: false as boolean,
    isTableLayout: false as boolean,
  }),
  actions: {
    async onListAll(): Promise<void> {
      this.isLoading = true;
      const data = await index();
      this.isLoading = false;

      this.addReservation(data);
    },
    addReservation(data: any): void {
      this.reservations = data.value;
      this.reservationsFiltered = data.value;
    },

    onReverse(): void {
      this.asc = !this.asc;
      this.reservations = this.reservations.reverse();
    },

    onChangeLayout(): void {
      this.isTableLayout = !this.isTableLayout;
    },

    onFilterByName(name: string): void {
      this.reservationsFiltered = this.reservations.filter((res) => {
        return res.name.toLowerCase().includes(name.toLowerCase());
      });
    },

    onFilterBy(status: number): void {
      this.reservationsFiltered = this.reservations.filter((res) => {
        return res.status === status;
      });
    },
  },
});
