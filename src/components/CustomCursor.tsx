import { CSSProperties, useState } from "react";

export default function CustomCursor(): JSX.Element {
	const [mousePos, setMousePos] = useState<CSSProperties>({ left: 0, top: 0 })

	document.addEventListener('mousemove', (e: MouseEvent) => {
		setMousePos({ left: e.pageX, top: e.pageY });
	})

	return (
		<div className={
			`fixed -translate-x-1/2 -translate-y-1/2 h-6 w-6 border-2 border-custom-text-100 rounded-full pointer-events-none overflow-hidden` 
		} style={{...mousePos, zIndex: 999999}}
		/>
	)
}