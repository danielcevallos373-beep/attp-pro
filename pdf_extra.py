import PyPDF2
import os

pdf_path = r'src/assets/pdf/Planes de Suscripción Benchmarking Acuícola Ecuador.pdf'

def find_plans(path):
    if not os.path.exists(path):
        print(f"File not found: {path}")
        return
    
    with open(path, 'rb') as f:
        reader = PyPDF2.PdfReader(f)
        total_pages = len(reader.pages)
        print(f"Total pages: {total_pages}")
        
        for i in range(total_pages):
            text = reader.pages[i].extract_text()
            if any(kw in text.lower() for kw in ["plan", "suscripción", "básico", "estándar", "premium", "pro", "enterprise"]):
                print(f"--- Page {i} ---")
                print(text)
                print("-" * 20)

find_plans(pdf_path)
