// Vercel Serverless Function: GET /api/spotify
// Retrieves currently playing playback status from Spotify Web API securely
// Read-only endpoint: never controls playback.

module.exports = async (req, res) => {
  // CORS & caching headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  // If environment variables are missing, return an honest disconnected status
  if (!clientId || !clientSecret || !refreshToken) {
    return res.status(200).json({
      connected: false,
      isPlaying: false,
      title: null,
      artist: null,
      album: null,
      albumArt: null,
      spotifyUrl: null,
      statusText: "Disconnected",
      message: "Connect Spotify to see what you're listening to.",
      authUrl: "/api/spotify-login",
      setupGuide: "SPOTIFY_SETUP.md"
    });
  }

  try {
    // 1. Refresh access token using Spotify OAuth refresh_token flow
    const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
    const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${basicAuth}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken
      }).toString()
    });

    if (!tokenResponse.ok) {
      const errText = await tokenResponse.text();
      console.error("Spotify token refresh failed:", tokenResponse.status, errText);
      return res.status(200).json({
        connected: false,
        isPlaying: false,
        title: null,
        artist: null,
        album: null,
        albumArt: null,
        spotifyUrl: null,
        statusText: "Auth Expired",
        message: "Spotify authorization expired or revoked. Please re-authenticate.",
        authUrl: "/api/spotify-login"
      });
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // 2. Fetch currently playing track from Spotify Web API
    const nowPlayingResponse = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    );

    // Spotify returns 204 No Content when nothing is currently playing
    if (nowPlayingResponse.status === 204 || nowPlayingResponse.status > 400) {
      if (nowPlayingResponse.status > 400) {
        console.warn("Spotify playback fetch error:", nowPlayingResponse.status);
      }
      return res.status(200).json({
        connected: true,
        isPlaying: false,
        title: null,
        artist: null,
        album: null,
        albumArt: null,
        spotifyUrl: null,
        statusText: "Idle",
        message: "Nothing playing right now"
      });
    }

    const playbackData = await nowPlayingResponse.json();

    // Check if item is available and playback is active
    if (!playbackData || !playbackData.item) {
      return res.status(200).json({
        connected: true,
        isPlaying: false,
        title: null,
        artist: null,
        album: null,
        albumArt: null,
        spotifyUrl: null,
        statusText: "Idle",
        message: "Nothing playing right now"
      });
    }

    const isPlaying = Boolean(playbackData.is_playing);
    const track = playbackData.item;
    const title = track.name || "Unknown Track";
    const artists = Array.isArray(track.artists)
      ? track.artists.map((a) => a.name).join(", ")
      : "Unknown Artist";
    const album = track.album?.name || "";
    // Best available album art image (prefer 300x300 or largest)
    const albumArt =
      track.album?.images?.[1]?.url ||
      track.album?.images?.[0]?.url ||
      track.album?.images?.[2]?.url ||
      null;
    const spotifyUrl =
      track.external_urls?.spotify ||
      (track.id ? `https://open.spotify.com/track/${track.id}` : null);

    // Cache responses briefly to respect Spotify rate limits (5s stale-while-revalidate)
    res.setHeader("Cache-Control", "public, s-maxage=5, stale-while-revalidate=10");

    return res.status(200).json({
      connected: true,
      isPlaying,
      title,
      artist: artists,
      album,
      albumArt,
      spotifyUrl,
      statusText: isPlaying ? "Currently Playing" : "Paused",
      message: isPlaying ? "Currently playing on Spotify" : "Playback paused on Spotify"
    });
  } catch (error) {
    console.error("Spotify API handler exception:", error);
    return res.status(200).json({
      connected: false,
      isPlaying: false,
      title: null,
      artist: null,
      album: null,
      albumArt: null,
      spotifyUrl: null,
      statusText: "Error",
      message: "Unable to sync with Spotify at this moment.",
      error: error.message
    });
  }
};
