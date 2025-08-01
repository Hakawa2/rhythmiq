import axios from "axios";

const apiSpotifyAuth = axios.create({
  baseURL: import.meta.env.VITE_TOKEN_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export default apiSpotifyAuth;
