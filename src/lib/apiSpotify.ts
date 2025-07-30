// src/api/apiSpotify.ts
import {
  fetchAndStoreSpotifyToken,
  getStoredSpotifyToken,
} from "@/services/spotify";
import axios from "axios";

const apiSpotify = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
});

apiSpotify.interceptors.request.use((config) => {
  const token = getStoredSpotifyToken();
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

let isRefreshing = false;
let failedQueue: Array<() => void> = [];

apiSpotify.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (!isRefreshing) {
        isRefreshing = true;

        try {
          const newToken = await fetchAndStoreSpotifyToken();

          failedQueue.forEach((cb) => cb());
          failedQueue = [];

          originalRequest.headers.Authorization = `Bearer ${newToken.access_token}`;
          return apiSpotify(originalRequest);
        } catch (tokenError) {
          return Promise.reject(tokenError);
        } finally {
          isRefreshing = false;
        }
      }

      return new Promise((resolve) => {
        failedQueue.push(() => {
          const token = getStoredSpotifyToken();
          if (token) {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            resolve(apiSpotify(originalRequest));
          }
        });
      });
    }

    return Promise.reject(error);
  }
);

export default apiSpotify;
