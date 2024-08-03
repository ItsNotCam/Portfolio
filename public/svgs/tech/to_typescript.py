import os
import re

# with open('icons.tsx','w') as file:
# 	file.write("import React from 'react';\n")

template = None
with open('template.ts','r') as file:
	template = file.read()

svgs = [svg for svg in os.listdir() if svg.endswith(".svg")]

# with open('icons.ts','a') as file:
with open('icons.tsx','a') as out_file:
	for svg in svgs:
		with open(svg, 'r', encoding='utf-8') as file:
			svg_data = file.read()
			regex = re.match("icons?8?-(\S*) ?\d?.svg", svg)
			if regex:
				class_name = f"{regex.groups(1)[0]}Icon"
				new_icon_tsx = template.replace("ICONHEADER", class_name).replace("BODY", svg_data)
				out_file.write(f"{new_icon_tsx}\n")
			else:
				print("failed to match",svg)