file_path = 'anatomyFront.tsx'

# Reading the content of the file
with open(file_path, 'r') as file:
    svg_content = file.read()

import re

# Regular expression to extract the id attributes, excluding any that contain 'vector_'
body_parts = re.findall(r'id="(?!vector_)([^"]+)"', svg_content)

body_parts