# 🎵 Spotify Now Playing Setup Guide

This guide explains how to connect your real Spotify account to your portfolio's **Dynamic Island Spotify Now Playing** widget.

The integration uses the official **Spotify Web API** with OAuth 2.0 (`refresh_token` flow) through a secure, read-only Vercel Serverless Function (`/api/spotify`).

---

## 🔒 Security & Privacy Highlights

- **Read-Only Access**: Uses only `user-read-currently-playing` and `user-read-playback-state` scopes.
- **Zero Controls**: No play/pause, no skipping, no volume alteration, and no background audio playback.
- **No Client Secrets Exposed**: Spotify Client Secrets and tokens are kept securely on the server via Vercel Environment Variables.
- **No Aggressive Polling**: Polling occurs only when the dynamic island panel is expanded (10s interval) and immediately stops when closed.

---

## 🛠️ Step 1: Create a Spotify Developer Application

1. Visit the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard) and log in with your Spotify account.
2. Click **Create app**.
3. Fill in the app details:
   - **App name**: `Sukrut Portfolio Now Playing`
   - **App description**: `Read-only listening status for personal portfolio`
   - **Redirect URIs**: Add both:
     - `https://portfoliosukrut.vercel.app/api/spotify-callback`
     - `http://localhost:3000/api/spotify-callback` *(optional for local development)*
   - **Which API/SDKs are you planning to use?**: Select **Web API**.
4. Check the terms and click **Save**.
5. In your new app's **Settings**, copy your:
   - **Client ID**
   - **Client Secret** *(Click "View client secret")*

---

## 🚀 Step 2: Add Environment Variables to Vercel

1. Open your portfolio project in your [Vercel Dashboard](https://vercel.com).
2. Go to **Settings** &rarr; **Environment Variables**.
3. Add the following two variables:
   - `SPOTIFY_CLIENT_ID` = *(Your Spotify Client ID)*
   - `SPOTIFY_CLIENT_SECRET` = *(Your Spotify Client Secret)*
4. Trigger a redeploy (or push any commit to `main`).

---

## 🔗 Step 3: Link Your Account (1-Click OAuth)

Once your Vercel deployment with `SPOTIFY_CLIENT_ID` and `SPOTIFY_CLIENT_SECRET` is live:

1. Visit:
   ```
   https://portfoliosukrut.vercel.app/api/spotify-login
   ```
   *(Or click "Connect Spotify" directly from the expanded Dynamic Island widget on your portfolio)*
2. Log into Spotify and click **Agree** to grant read-only listening status permission.
3. You will be redirected to the secure callback page displaying your new **Refresh Token**.
4. Click **Copy Refresh Token**.

---

## 🔑 Step 4: Add `SPOTIFY_REFRESH_TOKEN` to Vercel

1. In your [Vercel Dashboard](https://vercel.com), return to **Settings** &rarr; **Environment Variables**.
2. Add:
   - `SPOTIFY_REFRESH_TOKEN` = *(The refresh token you copied in Step 3)*
3. Redeploy your project.

---

## ✅ Step 5: Verification & Testing

1. Open [portfoliosukrut.vercel.app](https://portfoliosukrut.vercel.app/).
2. You will see the compact Spotify button in the top navigation bar with the Spotify icon.
3. Start playing any song on Spotify (desktop app, mobile, or web player).
   - The navbar button will show subtle animated equalizer bars.
4. Click the Spotify button to expand the **Dynamic Island** panel:
   - View album artwork, song title, artist, album name, and a "● Playing" status badge.
   - Click "Open in Spotify ↗" to jump directly to the track on Spotify.
5. Pause playback or stop music:
   - When paused: status shows "⏸ Paused" with frozen equalizer bars.
   - When idle/nothing playing: status gracefully displays `"Nothing playing right now"`.
6. Press `Escape` or click anywhere outside to close the panel.
