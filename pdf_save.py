import PyPDF2
import os

pdf_path = r'src/assets/pdf/Planes de Suscripción Benchmarking Acuícola Ecuador.pdf'

def save_text(path):
    if not os.path.exists(path):
        print(f"File not found: {path}")
        return
    
    with open(path, 'rb') as f:
        reader = PyPDF2.PdfReader(f)
        total_pages = len(reader.pages)
        with open('pdf_content.txt', 'w', encoding='utf-8') as out:
            for i in range(total_pages):
                out.write(f"--- Page {i} ---\n")
                out.write(reader.pages[i].extract_text() + "\n")
                out.write("-" * 20 + "\n")

save_text(pdf_path)
