import os

svg_template = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 460" role="img" aria-label="{alt_text}">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&amp;display=swap');
    </style>
  </defs>
  <rect width="720" height="460" rx="18" fill="{bg_color}"/>
  <rect x="34" y="34" width="652" height="392" rx="12" fill="#fff" stroke="#111" stroke-width="12"/>
  <rect x="70" y="76" width="220" height="44" rx="22" fill="{bg_color}" stroke="#111" stroke-width="8"/>
  <text x="180" y="106" text-anchor="middle" font-family="Space Grotesk, Arial, sans-serif" font-size="20" font-weight="700" fill="#111">{badge_text}</text>
  <text x="70" y="190" font-family="Space Grotesk, Arial, sans-serif" font-size="48" font-weight="700" fill="#111">{line1}</text>
  <text x="70" y="252" font-family="Space Grotesk, Arial, sans-serif" font-size="48" font-weight="700" fill="#111">{line2}</text>
  <text x="70" y="318" font-family="Space Grotesk, Arial, sans-serif" font-size="24" font-weight="700" fill="#111">{issuer}</text>
  <text x="70" y="354" font-family="Space Grotesk, Arial, sans-serif" font-size="22" font-weight="700" fill="#111">Year: {year}</text>
</svg>"""

with open("assets/part-gtamegajam.svg", "w") as f:
    f.write(svg_template.format(
        alt_text="GTA Megajam preview",
        bg_color="#FFB3D1",
        badge_text="GAME JAM",
        line1="GTA Megajam",
        line2="",
        issuer="Organizer: NIT Rourkela",
        year="2024"
    ))
print("Created assets/part-gtamegajam.svg")
