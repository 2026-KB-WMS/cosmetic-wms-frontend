import { STORAGE_KEYS } from '@/shared/constants/storageKeys';

export function getAccessToken() {
  return localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
}

export function setAccessToken(token) {
  localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, token);
}

export function clearAccessToken() {
  localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
}
