import { instance } from '@/modules/config/axios';
import { useAxios } from '@vueuse/integrations/useAxios';
import { useReservationsStore } from '../stores/useReservationStore/useReservationStore';

export async function index() {
  const store = useReservationsStore();
  const { data } = await useAxios('/reservation/get-all', instance).catch(
    (err) => {
      alert(err.message);
    },
  );

  store.addReservations(data);

  return data;
}
