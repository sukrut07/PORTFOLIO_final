// Vercel Serverless Function: GET /api/spotify-login
// Initiates official Spotify OAuth 2.0 Authorization Code flow

module.exports = async (req, res) => {
  const clientId = process.env.SPOTIFY_CLIENT_ID;

  if (!clientId) {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res.status(200).send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Connect Spotify · Portfolio Setup</title>
        <style>
          :root {
            --bg: #fffbf0;
            --black: #121212;
            --green: #1db954;
            --yellow: #ffd028;
            --pink: #ff6b8b;
          }
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background: var(--bg);
            color: var(--black);
            padding: 32px 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
          }
          .setup-card {
            background: #fff;
            border: 4px solid var(--black);
            box-shadow: 8px 8px 0 var(--black);
            border-radius: 16px;
            max-width: 620px;
            width: 100%;
            padding: 32px;
          }
          .tag {
            display: inline-block;
            background: var(--yellow);
            border: 2px solid var(--black);
            font-weight: 800;
            font-size: 0.8rem;
            text-transform: uppercase;
            padding: 4px 10px;
            border-radius: 999px;
            margin-bottom: 16px;
          }
          h1 { font-size: 1.8rem; font-weight: 900; margin-bottom: 12px; }
          p { font-size: 1rem; line-height: 1.6; margin-bottom: 16px; color: #333; }
          ol { margin-left: 20px; margin-bottom: 24px; line-height: 1.8; font-size: 0.95rem; }
          code { background: #f0f0f0; padding: 2px 6px; border: 1.5px solid #000; border-radius: 4px; font-weight: 700; }
          .btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: var(--green);
            color: #000;
            text-decoration: none;
            font-weight: 800;
            padding: 12px 20px;
            border: 3px solid var(--black);
            box-shadow: 4px 4px 0 var(--black);
            border-radius: 8px;
            cursor: pointer;
          }
          .btn:hover { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 var(--black); }
        </style>
      </head>
      <body>
        <div class="setup-card">
          <span class="tag">Spotify Integration Setup</span>
          <h1>Connect Your Spotify Account</h1>
          <p>To display your live "Now Playing" track on your portfolio, set your Spotify Developer credentials in Vercel.</p>
          <ol>
            <li>Go to <a href="https://developer.spotify.com/dashboard" target="_blank" rel="noreferrer"><strong>Spotify Developer Dashboard</strong></a> and create an app.</li>
            <li>In your app settings, add Redirect URI: <br><code>https://${req.headers.host || "portfoliosukrut.vercel.app"}/api/spotify-callback</code></li>
            <li>In your Vercel Project Settings &rarr; <strong>Environment Variables</strong>, add:
              <ul>
                <li><code>SPOTIFY_CLIENT_ID</code></li>
                <li><code>SPOTIFY_CLIENT_SECRET</code></li>
              </ul>
            </li>
            <li>Once redeployed, revisit this page or click Connect to authorize your account.</li>
          </ol>
          <a class="btn" href="https://developer.spotify.com/dashboard" target="_blank" rel="noreferrer">Open Spotify Dashboard &rarr;</a>
        </div>
      </body>
      </html>
    `);
  }

  const host = req.headers.host || "portfoliosukrut.vercel.app";
  const protocol = host.includes("localhost") ? "http" : "https";
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI || `${protocol}://${host}/api/spotify-callback`;

  const scopes = [
    "user-read-currently-playing",
    "user-read-playback-state"
  ].join(" ");

  const authUrl = `https://accounts.spotify.com/authorize?${new URLSearchParams({
    client_id: clientId,
    response_type: "code",
    redirect_uri: redirectUri,
    scope: scopes,
    show_dialog: "true"
  }).toString()}`;

  res.writeHead(302, { Location: authUrl });
  res.end();
};
