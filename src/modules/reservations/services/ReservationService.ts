import { instance } from '@/modules/config/axios';
import { useDateFormat } from '@vueuse/core';
import { useAxios } from '@vueuse/integrations/useAxios';
import { useRouter } from 'vue-router';
import { IReservation } from '../types/reservation.interface';

export async function index() {
  const router = useRouter();
  const { data } = await useAxios('/reservation/get-all', instance).catch(
    (err) => {
      if (err.response.status == 401) {
        router.push({ path: '/auth/login' });
      }
    },
  );

  const reservations = data.value as IReservation[];

  reservations.map((reservation, index) => {
    data.value[
      index
    ].image = `https://olinda-tech.top/reserva-direta-api/file/${reservation.image}`;

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

  return data;
}
