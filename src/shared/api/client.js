import axios from 'axios';
import { clearAccessToken, getAccessToken } from '@/shared/utils/tokenStorage';

const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

client.interceptors.request.use((config) => {
  const token = getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;

    switch (status) {
      case 401:
        clearAccessToken();
        window.location.href = '/login';
        break;
      case 403:
        window.location.href = '/403';
        break;
      case 500:
        window.location.href = '/500';
        break;
    }

    return Promise.reject(error);
  },
);

export default client;
