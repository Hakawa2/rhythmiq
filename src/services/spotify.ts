import apiSpotifyAuth from "@/lib/apiAuth";

interface SpotifyTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
}

export async function fetchAndStoreSpotifyToken() {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");

  const headers = {
    Authorization: "Basic " + btoa(`${clientId}:${clientSecret}`),
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const response = await apiSpotifyAuth.post<SpotifyTokenResponse>(
    "/token",
    params,
    { headers }
  );

  const tokenData = response.data;

  const expiresAt = Date.now() + tokenData.expires_in * 1000;
  localStorage.setItem("spotify_token", tokenData.access_token);
  localStorage.setItem("spotify_token_expires_at", expiresAt.toString());

  return tokenData;
}

export function getStoredSpotifyToken(): string | null {
  const token = localStorage.getItem("spotify_token");
  const expiresAt = parseInt(
    localStorage.getItem("spotify_token_expires_at") || "0",
    10
  );
  if (!token || Date.now() > expiresAt) {
    return null;
  }
  return token;
}
