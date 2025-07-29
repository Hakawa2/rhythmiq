import axios from "axios";

const apiSpotifyAuth = axios.create({
  baseURL: import.meta.env.VITE_TOKEN_URL,
  timeout: 10000, // 10 segundos timeout
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export default apiSpotifyAuth;
