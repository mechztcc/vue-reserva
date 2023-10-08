import { instance } from '@/modules/config/axios';
import { useAxios } from '@vueuse/integrations/useAxios';

export async function index() {
  const { data } = await useAxios('/reservation/get-all', instance).catch(
    (err) => {
      alert(err.message);
    },
  );

  return data;
}
