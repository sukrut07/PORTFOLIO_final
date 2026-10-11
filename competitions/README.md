# Verified Competitions & Hackathons Archive

This directory catalogs all official hackathon credentials, competition certificates, and competitive engineering achievements for **Sukrut Dusane**.

## Catalog of Achievements

| # | Event | Issuer / Organizer | Position / Distinction | Year | File |
|---|---|---|---|---|---|
| 01 | **Fund Arcade** | COEP Technological University (Start-Up Fest '26) | **1st Place Winner** | 2026 | `01_fund_arcade_1st_place_winner_coep_2026.pdf` |
| 02 | **Ignition Hackverse** | PVG's COET & GKM Pune | **1st Runner-Up (2nd Place)** | 2026 | `02_ignition_hackverse_1st_runner_up_pvg_2026.png` |
| 03 | **Bharatiya Antariksh Hackathon 2026** | ISRO (Indian Space Research Organisation) & Hack2skill | **National Hackathon Participant** | 2026 | `03_isro_bharatiya_antariksh_hackathon_2026.pdf` |
| 04 | **Algoverse '26 Web3 Hackathon** | Bharati Vidyapeeth & Algorand | **Top 35 Finalist** | 2026 | `04_algoverse26_web3_blockchain_hackathon_top35_algorand_2026.pdf` |
| 05 | **Innovate 4 Impact: AI4SDG Global Hackathon** | IEEE WIE & Bharati Vidyapeeth & MITAOE | **Global AI Hackathon** | 2026 | `05_innovate4impact_ai4sdg_global_hackathon_ieee_2026.pdf` |
| 06 | **Adobe University Hackathon** | Adobe Inc. | **National Hackathon** | 2026 | `06_adobe_university_hackathon_2026.pdf` |
| 07 | **CaseVerse 2.0 Case Study Competition** | National Institute of Technology (NIT) Rourkela | **Team Codify** | 2026 | `07_caseverse_case_study_competition_nit_rourkela_2026.pdf` |
| 08 | **VELORA-1.0 Hackathon** | MIT Academy of Engineering (MITAOE) | **24h Hackathon** | 2026 | `08_velora_1.0_hackathon_mitaoe_2026.pdf` |
| 09 | **TechSprint Open Innovation Hackathon** | Google Developer Groups (GDG) on Campus MITAOE | **Open Innovation Sprint** | 2026 | `09_techsprint_open_innovation_hackathon_gdg_2026.pdf` |
| 10 | **Datathon 2026** | MITAOE (Team NeuralEd) | **Competitive Data Science** | 2026 | `10_datathon_data_science_mitaoe_2026.pdf` |
| 11 | **GTA MegaJam** | NIT Rourkela (National Institute of Technology) | **Game Jam Sprint** | 2026 | `11_gta_megajam_gamejam_nit_rourkela_2026.pdf` / `.png` |
| 12 | **Samsung Solve for Tomorrow** | Samsung India | **National Youth Innovation Challenge** | 2025–26 | `12_samsung_solve_for_tomorrow_2026.jpg` |
| 13 | **Vittarth 2.0** | Inter-IIT Challenge (IIT Roorkee, Bombay, Kharagpur, Delhi, Guwahati) | **FinTech & Analytics Challenge** | 2026 | `13_vittarth_2.0_inter_iit_fintech_2026.pdf` |
| 14 | **Google Cloud Study Jams** | Google Cloud & GDG on Campus | **Cloud Architecture Pathways** | 2026 | `14_google_cloud_study_jams_2026.pdf` |

## How to Add New Competition Certificates

1. Place the new certificate file (`.pdf`, `.png`, or `.jpg`) in this `competitions/` directory with a descriptive name, e.g.:
   ```bash
   competitions/15_new_hackathon_name_2026.pdf
   ```
2. Run the helper CLI tool to generate high-resolution web previews and register it in `participations.html`:
   ```bash
   python3 add_certification.py --type competition --file "competitions/15_new_hackathon_name_2026.pdf"
   ```
3. Commit and push your changes to GitHub:
   ```bash
   git add .
   git commit -m "feat(competitions): add New Hackathon 2026 certificate"
   git push
   ```
