from PIL import Image, ImageDraw, ImageFont
import sys
from pathlib import Path

def generate(image_path):
    p = Path(image_path)
    if not p.exists():
        print('Image not found:', image_path)
        sys.exit(1)

    sizes = [260, 520]
    try:
        img = Image.open(p)
        mode = img.mode
        img = img.convert('RGBA')
        valid_image = True
    except Exception:
        print('Input image not valid; creating a placeholder image with initials (PS)')
        valid_image = False
    for s in sizes:
        out_png = p.with_name(f"{p.stem}-{s}.png")
        out_webp = p.with_name(f"{p.stem}-{s}.webp")
        if valid_image:
            resized = img.copy()
            resized = resized.resize((s, s), Image.LANCZOS)
        else:
            # create placeholder: circle with initials
            resized = Image.new('RGBA', (s, s), (250, 250, 250, 255))
            draw = ImageDraw.Draw(resized)
            # circle
            circle_color = (30, 58, 138, 255)
            draw.ellipse([(0, 0), (s, s)], fill=circle_color)
            # initials
            try:
                font = ImageFont.truetype('arial.ttf', int(s * 0.4))
            except Exception:
                font = ImageFont.load_default()
            text = 'PS'
            try:
                w, h = font.getsize(text)
            except Exception:
                # newer Pillow versions provide textbbox
                bbox = draw.textbbox((0, 0), text, font=font)
                w = bbox[2] - bbox[0]
                h = bbox[3] - bbox[1]
            draw.text(((s - w) / 2, (s - h) / 2 - int(s*0.05)), text, fill=(255, 255, 255, 255), font=font)
        resized.save(out_png, format='PNG')
        try:
            resized.save(out_webp, format='WEBP', quality=80)
        except Exception as e:
            print('Skipping webp for', out_webp, 'error:', e)

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print('Usage: python generate_srcset_py.py <image-path>')
        sys.exit(1)
    generate(sys.argv[1])
