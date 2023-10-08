import axios from 'axios';

const url = 'https://olinda-tech.top/reserva-direta-api';

export const instance = axios.create({
  baseURL: url,
  headers: {
    Authorization: localStorage.getItem('token'),
  },
});
