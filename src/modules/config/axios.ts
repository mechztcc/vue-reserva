import axios from 'axios';

const url = 'https://reservadireta-hmg-api.info';

export const instance = axios.create({
  baseURL: url,
});
