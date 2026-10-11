# Verified Technical & Professional Certifications Archive

This directory catalogs all official course credentials, industry certifications, and technical badges for **Sukrut Dusane**.

## Catalog of Certifications

### 1. Artificial Intelligence & Generative AI
- **Anthropic Claude 101**: `anthropic_claude_101.pdf`
- **Anthropic Claude Code in Action**: `anthropic_claude_code_in_action.pdf`
- **Anthropic AI Fluency (Framework)**: `anthropic_ai_fluency_framework.pdf`
- **Anthropic AI Fluency for Students**: `anthropic_ai_fluency_students.pdf`
- **Anthropic AI Fluency for Nonprofits**: `anthropic_ai_fluency_nonprofits.pdf`
- **Cisco Introduction to Modern AI**: `cisco_introduction_to_modern_ai.pdf`
- **Cisco Apply AI: Analyze Customer Reviews**: `cisco_apply_ai_analyze_customer_reviews.pdf`
- **Google Cloud Develop GenAI Apps with Gemini and Streamlit**: `google_cloud_genai_gemini_streamlit_badge.png`
- **TCS iON / IndiaAI YUVA AI For All**: `tcs_ion_indiaai_yuva_ai_for_all.pdf`
- **AWS AI Driven Development Lifecycle**: `aws_ai_driven_dev_lifecycle.pdf`
- **AWS Certified AI Practitioner (AIF-C01) Exam Prep**: `aws_exam_prep_ai_practitioner_aif_c01.pdf`
- **AWS Certified AI Practitioner (AIF-C01) Exam Prep Overview**: `aws_exam_prep_overview_ai_practitioner_aif_c01.pdf`
- **AWS Certified AI Practitioner Official Practice Questions**: `aws_official_practice_questions_ai_practitioner_aif_c01.pdf`

### 2. Machine Learning & Data Science
- **CII / IndiaAI Foundational Course on Applied Machine Learning & AI**: `cii_indiaai_applied_ml_and_ai.png`
- **Infosys Machine Learning Fundamentals**: `infosys_machine_learning_fundamentals.pdf`
- **Infosys Machine Learning with Python**: `infosys_machine_learning_with_python.pdf`
- **AWS Fundamentals of Machine Learning & AI**: `aws_fundamentals_of_machine_learning_and_ai.pdf`
- **HP LIFE Data Science & Analytics**: `hp_life_data_science_and_analytics.pdf`
- **Cisco Data Analytics Essentials**: `cisco_data_analytics_essentials.pdf`
- **IBM SkillsBuild The Importance of Data Visualization**: `ibm_skillsbuild_data_visualization.pdf`

### 3. Systems Programming, Software Engineering & Cloud
- **Cisco Python Essentials 1**: `cisco_python_essentials_1.jpeg`
- **Cisco Python Essentials 2**: `cisco_python_essentials_2.jpeg`
- **Cisco JavaScript Essentials 1**: `cisco_javascript_essentials_1.pdf`
- **Cisco JavaScript Essentials 2**: `cisco_javascript_essentials_2.pdf`
- **Codecademy / IBM Learn JavaScript**: `ibm_skillsbuild_learn_javascript_codecademy.pdf`
- **Simplilearn Fundamentals of Database: What is SQL?**: `simplilearn_fundamentals_of_database_sql.pdf`
- **AWS Academy Graduate - Data Center Technician**: `aws_academy_data_center_technician.pdf`
- **AWS Certified Cloud Practitioner (CLF-C02) Exam Prep**: `aws_exam_prep_cloud_practitioner_clf_c02.pdf`
- **Google Cloud Get Started with Cloud Storage**: `google_cloud_storage_badge.png`
- **upGrad Fundamentals of Cybersecurity**: `upgrad_fundamentals_of_cybersecurity.png`
- **Hedera Hashgraph Developer Certification**: `hedera_hashgraph_developer_cert.jpeg`
- **HP LIFE Critical Thinking in the AI Era**: `hp_life_critical_thinking_in_the_ai_era.pdf`
- **IBM SkillsBuild Career Management Essentials**: `ibm_skillsbuild_career_management_essentials.png`

## How to Add New Certifications

1. Add your new certificate file (`.pdf`, `.png`, or `.jpg`) to this directory with a clean issuer prefix (e.g., `google_cloud_machine_learning_engineer.pdf`).
2. Run the helper CLI tool:
   ```bash
   python3 add_certification.py --type cert --file "certifications/new_cert.pdf"
   ```
3. Commit and push your changes to GitHub:
   ```bash
   git add .
   git commit -m "feat(certifications): add new certification"
   git push
   ```
