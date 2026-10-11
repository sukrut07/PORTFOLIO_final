#!/usr/bin/env python3
"""
Interactive & Automated Certification & Hackathon Ingestion Utility
Author: Sukrut Dusane Portfolio Engine

Usage:
    python3 add_certification.py <path_to_file>
    python3 add_certification.py <path_to_file> --type competition --title "My Hackathon" --org "MIT AOE" --year 2026
    python3 add_certification.py <path_to_file> --type cert --title "Deep Learning Spec" --issuer "DeepLearning.AI"
"""

import os
import sys
import shutil
import argparse
import subprocess
import re

try:
    import pypdf
except ImportError:
    pypdf = None


def extract_text(file_path):
    """Extract textual content using pypdf or Tesseract OCR."""
    ext = os.path.splitext(file_path)[1].lower()
    text = ""

    if ext == ".pdf" and pypdf:
        try:
            reader = pypdf.PdfReader(file_path)
            for page in reader.pages:
                t = page.extract_text()
                if t:
                    text += t + " "
        except Exception:
            pass

    clean_text = " ".join(text.split())
    if len(clean_text) < 30:
        # Fallback to Tesseract OCR via sips/qlmanage
        tmp_img = "/private/tmp/temp_ocr.png"
        tmp_tiff = "/private/tmp/temp_ocr.tiff"
        if ext == ".pdf":
            subprocess.run(["qlmanage", "-t", "-s", "1400", "-o", "/private/tmp", file_path], capture_output=True)
            candidate = f"/private/tmp/{os.path.basename(file_path)}.png"
            if os.path.exists(candidate):
                shutil.move(candidate, tmp_img)
        elif ext in [".png", ".jpg", ".jpeg"]:
            shutil.copy2(file_path, tmp_img)

        if os.path.exists(tmp_img):
            subprocess.run(["sips", "-s", "format", "tiff", tmp_img, "--out", tmp_tiff], capture_output=True)
            res = subprocess.run(["/opt/homebrew/bin/tesseract", tmp_tiff, "stdout", "-l", "eng"], capture_output=True, text=True)
            ocr_text = " ".join(res.stdout.split())
            if len(ocr_text) > len(clean_text):
                clean_text = ocr_text

    return clean_text


def detect_type(text, filename):
    """Auto-detect whether document is a Competition/Hackathon or Certification."""
    keywords_comp = ["hackathon", "winner", "runner-up", "runner up", "position", "datathon", "gamejam", "jam", "challenge", "competed", "caseverse", "algoverse", "antariksh"]
    combined = (text + " " + filename).lower()
    for kw in keywords_comp:
        if kw in combined:
            return "competition"
    return "cert"


def generate_web_preview(source_file, target_png):
    """Render high-res PNG thumbnail for web lightbox."""
    ext = os.path.splitext(source_file)[1].lower()
    if ext == ".pdf":
        tmp_dir = "/private/tmp/preview_gen"
        os.makedirs(tmp_dir, exist_ok=True)
        subprocess.run(["qlmanage", "-t", "-s", "1400", "-o", tmp_dir, source_file], capture_output=True)
        rendered = os.path.join(tmp_dir, f"{os.path.basename(source_file)}.png")
        if os.path.exists(rendered):
            shutil.copy2(rendered, target_png)
            return True
    elif ext in [".png", ".jpg", ".jpeg"]:
        shutil.copy2(source_file, target_png)
        return True
    return False


def main():
    parser = argparse.ArgumentParser(description="Add and categorize a new Hackathon or Certification.")
    parser.add_argument("file", help="Path to the certificate file (PDF, PNG, JPG)")
    parser.add_argument("--type", choices=["competition", "cert"], help="Force category type")
    parser.add_argument("--name", help="Clean destination filename (without path)")
    parser.add_argument("--title", help="Human-readable title for website card")
    parser.add_argument("--org", help="Issuer or Organizer name")
    parser.add_argument("--year", default="2026", help="Year (default: 2026)")
    parser.add_argument("--no-commit", action="store_true", help="Do not git commit and push")
    args = parser.parse_args()

    if not os.path.exists(args.file):
        print(f"Error: File not found: {args.file}")
        sys.exit(1)

    print(f"--> Analyzing file: {args.file}")
    text = extract_text(args.file)
    print(f"--> Extracted text sample: {text[:160]}...")

    detected_type = args.type or detect_type(text, os.path.basename(args.file))
    print(f"--> Categorized as: {detected_type.upper()}")

    ext = os.path.splitext(args.file)[1].lower()
    base_name = args.name or os.path.basename(args.file).lower().replace(" ", "_")
    if not base_name.endswith(ext):
        base_name += ext

    target_dir = "competitions" if detected_type == "competition" else "certifications"
    os.makedirs(target_dir, exist_ok=True)
    os.makedirs("assets", exist_ok=True)

    dest_file = os.path.join(target_dir, base_name)
    shutil.copy2(args.file, dest_file)
    print(f"[+] Saved archive copy: {dest_file}")

    # Generate preview thumbnail in assets/
    preview_name = os.path.splitext(base_name)[0] + ("_preview.png" if ext == ".pdf" else ext)
    assets_preview = os.path.join("assets", preview_name)
    assets_doc = os.path.join("assets", base_name)
    shutil.copy2(dest_file, assets_doc)

    if ext == ".pdf":
        success = generate_web_preview(dest_file, assets_preview)
        if success:
            print(f"[+] Generated high-res web preview: {assets_preview}")
    else:
        print(f"[+] Asset image ready: {assets_preview}")

    # Git commit and push
    if not args.no_commit:
        print("--> Making git commit and pushing to GitHub...")
        subprocess.run(["git", "add", dest_file, assets_doc], check=False)
        if os.path.exists(assets_preview):
            subprocess.run(["git", "add", assets_preview], check=False)
        msg = f"feat({target_dir}): add {args.title or base_name} to {target_dir} archive"
        res = subprocess.run(["git", "commit", "-m", msg], capture_output=True, text=True)
        if res.returncode == 0:
            print(f"[+] Committed: {msg}")
            push_res = subprocess.run(["git", "push", "origin", "main"], capture_output=True, text=True)
            if push_res.returncode == 0:
                print("[+] Successfully pushed to GitHub origin/main!")
            else:
                print(f"[!] Push error: {push_res.stderr}")
        else:
            print(f"[!] Git commit note: {res.stdout.strip() or res.stderr.strip()}")

    print("\n[SUCCESS] Document ingestion and categorization complete!")


if __name__ == "__main__":
    main()
