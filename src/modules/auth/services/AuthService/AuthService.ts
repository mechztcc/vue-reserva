import { instance } from '@/modules/config/axios';
import { useAxios } from '@vueuse/integrations/useAxios';

export function login(payload: { email: string; password: string }) {
  return useAxios(
    '/auth/signin',
    { method: 'POST', data: payload },
    instance,
  ).catch((err) => {
    alert(err.message);
  });
}
