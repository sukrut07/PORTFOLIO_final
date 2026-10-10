// Vercel Serverless Function: GET /api/spotify-callback
// Exchanges authorization code for refresh_token and presents it securely

module.exports = async (req, res) => {
  const code = req.query?.code;
  const error = req.query?.error;

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  res.setHeader("Content-Type", "text/html; charset=utf-8");

  if (error || !code) {
    return res.status(200).send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Spotify Connection Cancelled</title>
        <style>
          body { font-family: system-ui, sans-serif; background: #fffbf0; padding: 40px 16px; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
          .card { background: #fff; border: 4px solid #121212; box-shadow: 8px 8px 0 #121212; border-radius: 16px; max-width: 540px; padding: 32px; }
          h1 { color: #d00; margin-bottom: 12px; font-weight: 900; }
          p { margin-bottom: 20px; line-height: 1.5; }
          a { display: inline-block; background: #ffd028; color: #000; font-weight: 800; padding: 10px 18px; border: 3px solid #000; box-shadow: 4px 4px 0 #000; text-decoration: none; border-radius: 8px; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Connection Cancelled or Failed</h1>
          <p>Spotify returned an error: <strong>${error || "Missing authorization code"}</strong>. You can try connecting again whenever you are ready.</p>
          <a href="/">&larr; Return to Portfolio</a>
        </div>
      </body>
      </html>
    `);
  }

  const host = req.headers.host || "portfoliosukrut.vercel.app";
  const protocol = host.includes("localhost") ? "http" : "https";
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI || `${protocol}://${host}/api/spotify-callback`;

  try {
    const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
    const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${basicAuth}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code: code,
        redirect_uri: redirectUri
      }).toString()
    });

    if (!tokenRes.ok) {
      const errDetail = await tokenRes.text();
      return res.status(200).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>OAuth Exchange Failed</title>
          <style>body { font-family: system-ui, sans-serif; background: #fffbf0; padding: 40px; }</style>
        </head>
        <body>
          <h2>Token Exchange Failed (${tokenRes.status})</h2>
          <pre>${errDetail}</pre>
          <p><a href="/api/spotify-login">&larr; Try Again</a></p>
        </body>
        </html>
      `);
    }

    const tokenData = await tokenRes.json();
    const refreshToken = tokenData.refresh_token;

    // Optional: fetch user profile to confirm identity
    let userName = "Sukrut";
    try {
      const userRes = await fetch("https://api.spotify.com/v1/me", {
        headers: { Authorization: `Bearer ${tokenData.access_token}` }
      });
      if (userRes.ok) {
        const u = await userRes.json();
        userName = u.display_name || userName;
      }
    } catch (_) {}

    return res.status(200).send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Spotify Connected Successfully!</title>
        <style>
          :root {
            --bg: #fffbf0;
            --black: #121212;
            --green: #1db954;
            --yellow: #ffd028;
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
          .card {
            background: #fff;
            border: 4px solid var(--black);
            box-shadow: 8px 8px 0 var(--black);
            border-radius: 16px;
            max-width: 650px;
            width: 100%;
            padding: 32px;
          }
          .tag {
            display: inline-block;
            background: var(--green);
            color: #000;
            border: 2px solid var(--black);
            font-weight: 800;
            font-size: 0.8rem;
            text-transform: uppercase;
            padding: 4px 10px;
            border-radius: 999px;
            margin-bottom: 14px;
          }
          h1 { font-size: 1.8rem; font-weight: 900; margin-bottom: 10px; }
          p { font-size: 0.95rem; line-height: 1.5; margin-bottom: 16px; color: #222; }
          .token-box {
            background: #181818;
            color: #1db954;
            border: 3px solid var(--black);
            border-radius: 8px;
            padding: 14px;
            font-family: monospace;
            font-size: 0.88rem;
            word-break: break-all;
            margin-bottom: 16px;
            user-select: all;
          }
          .actions { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 20px; }
          .btn {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 10px 18px;
            border: 3px solid var(--black);
            box-shadow: 4px 4px 0 var(--black);
            border-radius: 8px;
            font-weight: 800;
            text-decoration: none;
            cursor: pointer;
            font-size: 0.9rem;
          }
          .btn-primary { background: var(--yellow); color: #000; }
          .btn-secondary { background: #fff; color: #000; }
          .btn:hover { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 var(--black); }
        </style>
      </head>
      <body>
        <div class="card">
          <span class="tag">&#10003; Spotify Authorized</span>
          <h1>Connected as ${userName}!</h1>
          <p>Your Spotify account authorization was successful. Copy the Refresh Token below and add it to your <strong>Vercel Project Settings &rarr; Environment Variables</strong> under <code>SPOTIFY_REFRESH_TOKEN</code>.</p>
          
          <div class="token-box" id="token-box">${refreshToken}</div>

          <div class="actions">
            <button class="btn btn-primary" onclick="copyToken()">Copy Refresh Token</button>
            <a class="btn btn-secondary" href="/">Go to Portfolio &rarr;</a>
          </div>
        </div>

        <script>
          function copyToken() {
            const token = document.getElementById('token-box').innerText;
            navigator.clipboard.writeText(token).then(() => {
              alert('Copied SPOTIFY_REFRESH_TOKEN to clipboard! Now paste it into your Vercel Environment Variables.');
            });
          }
        </script>
      </body>
      </html>
    `);
  } catch (err) {
    return res.status(500).send(`Callback error: ${err.message}`);
  }
};
