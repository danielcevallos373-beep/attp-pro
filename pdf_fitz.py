import fitz
import os

pdf_path = r'src/assets/pdf/Planes de Suscripción Benchmarking Acuícola Ecuador.pdf'

def extract_with_fitz(path):
    if not os.path.exists(path):
        print(f"File not found: {path}")
        return
    
    doc = fitz.open(path)
    text = ""
    for page in doc:
        text += f"--- Page {page.number} ---\n"
        text += page.get_text() + "\n"
    
    with open('pdf_content_fitz.txt', 'w', encoding='utf-8') as f:
        f.write(text)
    print(f"Text extracted to pdf_content_fitz.txt")

extract_with_fitz(pdf_path)
