import { instance } from '@/modules/config/axios';
import { useDateFormat } from '@vueuse/core';
import { useAxios } from '@vueuse/integrations/useAxios';
import { useReservationsStore } from '../stores/useReservationStore/useReservationStore';
import { IReservation } from '../types/reservation.interface';

export async function index() {
  const store = useReservationsStore();
  const { data } = await useAxios('/reservation/get-all', instance).catch(
    (err) => {
      alert(err.message);
    },
  );

  const reservations = data.value as IReservation[];

  reservations.map((reservation, index) => {
    data.value[index].sendDate = useDateFormat(
      reservation.sendDate,
      'DD/MM/YYYY HH:mm',
    );

    data.value[index].checkin = useDateFormat(
      reservation.checkin,
      'DD/MM/YYYY',
    );

    data.value[index].checkout = useDateFormat(
      reservation.checkout,
      'DD/MM/YYYY',
    );
  });
  store.addReservations(data);
  return data;
}
