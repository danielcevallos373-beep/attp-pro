import sys
try:
    from PIL import Image
    from collections import Counter
except ImportError:
    print("PIL not installed")
    sys.exit(1)

img = Image.open('src/assets/images/Logo1.jpg')
img = img.convert('RGB')
img.thumbnail((100, 100))
colors = img.getcolors(maxcolors=10000)
colors = sorted(colors, key=lambda x: x[0], reverse=True)
for count, color in colors[:5]:
    hex_color = '#%02x%02x%02x' % color
    print(hex_color)
