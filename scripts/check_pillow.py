import importlib
module = importlib.util.find_spec('PIL')
print('PIL FOUND' if module else 'Pillow not installed')
