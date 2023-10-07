import { instance } from '@/modules/config/axios';
import { useAxios } from '@vueuse/integrations/useAxios';

export async function login(payload: { email: string; password: string }) {
  const { data } = await useAxios(
    '/auth/signin',
    { method: 'POST', data: payload },
    instance,
  ).catch((err) => {
    alert(err.message);
  });

  localStorage.setItem('token', data.value.token);
  return data;
}
