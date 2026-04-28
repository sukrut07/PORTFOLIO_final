import os

svg_template = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 460" role="img" aria-label="{alt_text}">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&amp;display=swap');
    </style>
  </defs>
  <rect width="720" height="460" rx="18" fill="{bg_color}"/>
  <rect x="34" y="34" width="652" height="392" rx="12" fill="#fff" stroke="#111" stroke-width="12"/>
  <rect x="70" y="76" width="180" height="44" rx="22" fill="#DDF247" stroke="#111" stroke-width="8"/>
  <text x="160" y="106" text-anchor="middle" font-family="Space Grotesk, Arial, sans-serif" font-size="22" font-weight="700" fill="#111">CERTIFICATE</text>
  <text x="70" y="190" font-family="Space Grotesk, Arial, sans-serif" font-size="56" font-weight="700" fill="#111">{line1}</text>
  <text x="70" y="252" font-family="Space Grotesk, Arial, sans-serif" font-size="56" font-weight="700" fill="#111">{line2}</text>
  <text x="70" y="318" font-family="Space Grotesk, Arial, sans-serif" font-size="26" font-weight="700" fill="#111">Issuer: {issuer}</text>
  <text x="70" y="354" font-family="Space Grotesk, Arial, sans-serif" font-size="24" font-weight="700" fill="#111">Year: {year}</text>
</svg>"""

certs = [
    ("cert-claude-101.svg", "Claude 101 preview", "#B892FF", "Claude 101", "", "Anthropic", "2026"),
    ("cert-ai-fluency.svg", "AI Fluency preview", "#DDF247", "AI Fluency Framework", "& Foundations", "Anthropic", "2026"),
    ("cert-data-science.svg", "Data Science preview", "#FFB3D1", "Data Science", "and Analytics", "HP LIFE", "2026"),
    ("cert-critical-thinking.svg", "Critical Thinking preview", "#58D9C9", "Critical Thinking", "in AI Era", "HP LIFE", "2026"),
    ("cert-cybersecurity.svg", "Cybersecurity preview", "#B892FF", "Fundamentals of", "Cybersecurity", "upGrad", "2026"),
    ("cert-database-mysql.svg", "Database MySQL preview", "#DDF247", "Fundamentals of", "Database: MYSQL", "Simplilearn", "2026"),
    ("cert-modern-ai.svg", "Modern AI preview", "#FFB3D1", "Introduction to", "Modern AI", "Cisco", "2025"),
    ("cert-hashgraph.svg", "Hashgraph preview", "#58D9C9", "Attendance Hashgraph", "Developer", "Hashgraph Assoc", "2025"),
    ("cert-cloud-storage.svg", "Cloud Storage preview", "#B892FF", "Getting Started", "with Cloud Storage", "Google Cloud", "2025"),
    ("cert-genai-app.svg", "GenAI App preview", "#DDF247", "Intro to GenAI", "App Development", "Google Cloud", "2025")
]

for filename, alt_text, bg_color, line1, line2, issuer, year in certs:
    with open(f"assets/{filename}", "w") as f:
        f.write(svg_template.format(
            alt_text=alt_text,
            bg_color=bg_color,
            line1=line1,
            line2=line2,
            issuer=issuer,
            year=year
        ))

print("Created 10 SVGs in assets/")
