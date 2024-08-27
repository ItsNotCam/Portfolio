import { CSSProperties, useState } from "react";

export default function CustomCursor(): JSX.Element {
	const [mousePos, setMousePos] = useState<CSSProperties>({ left: 0, top: 0 })
	const [isHoveredOverHoverable, setIsHoveredOverHoverable] = useState<boolean>(false);

	document.addEventListener('mousemove', (e: MouseEvent) => {
		const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
		setIsHoveredOverHoverable(hoveredElement != null && window.getComputedStyle(hoveredElement).cursor === 'pointer');
		setMousePos({ left: e.pageX, top: e.pageY });
	})

	return (
		<div 
			className={`fixed -translate-x-1/2 -translate-y-1/2 h-6 w-6 border-2 border-custom-text-100 rounded-full pointer-events-none overflow-hidden transition-transform ${isHoveredOverHoverable ? 'scale-150' : ''}`} 
			style={{...mousePos, zIndex: 999999}}
		/>
	)
}