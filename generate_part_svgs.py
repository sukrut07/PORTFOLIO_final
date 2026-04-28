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

parts = [
    ("part-datathon.svg", "Datathon preview", "#B892FF", "HACKATHON", "Datathon", "", "Event: Data-centric Hackathon", "2024"),
    ("part-velora.svg", "Velora preview", "#DDF247", "HACKATHON", "Velora", "", "Event: Velora Hackathon", "2024"),
    ("part-ignition.svg", "Ignition Hackverse preview", "#FFB3D1", "HACKATHON", "Ignition", "Hackverse", "Achievement: Winner", "2024"),
    ("part-techsprint.svg", "Techsprint preview", "#58D9C9", "HACKATHON", "Techsprint", "", "Event: Techsprint Hackathon", "2024"),
    ("part-fund-arcade.svg", "Fund Arcade preview", "#B892FF", "COMPETITION", "Fund Arcade", "", "Event: Fund Arcade Competition", "2024")
]

for filename, alt_text, bg_color, badge_text, line1, line2, issuer, year in parts:
    with open(f"assets/{filename}", "w") as f:
        f.write(svg_template.format(
            alt_text=alt_text,
            bg_color=bg_color,
            badge_text=badge_text,
            line1=line1,
            line2=line2,
            issuer=issuer,
            year=year
        ))

print("Created 5 SVGs in assets/")
