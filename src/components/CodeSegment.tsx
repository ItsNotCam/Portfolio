import useResizeObserver from "@react-hook/resize-observer";
import React, { useState } from "react";
import { ReactNode, useEffect, useRef } from "react";

const useSize = (target: any) => {
  const [size, setSize] = React.useState()

  React.useLayoutEffect(() => {
    setSize(target.current.getBoundingClientRect())
  }, [target])

  // Where the magic happens
  useResizeObserver(target, (entry) => setSize((entry as unknown as any).contentRect))
  return size
}

export default function CodeSegment(props: { 
	children?: ReactNode, 
	keyPrefix: string
}): ReactNode {
	const [lineHeight, setLineHeight] = useState<number>(24);
	const [fontSize, setfontSize] = useState<string>("1rem");

	const codeRef = useRef(null);
  const size = useSize(codeRef) || {} as any;

	useEffect(() => {
		const style: CSSStyleDeclaration = getComputedStyle((codeRef.current as any).firstChild as Element);
		setLineHeight(parseFloat(style.lineHeight.replace("px","")))
		setfontSize(style.fontSize)
	},[size])

	const GetLineCount = (): number[] => Array.from({ length: Math.ceil(size.height / lineHeight) }, (_, i) => i + 1);
	const LineNumbers  = (): ReactNode => GetLineCount().map(n => <span key={`${props.keyPrefix}-code-${n}`}>{n}<br /></span>)

  return (
    <div className="flex flex-row gap-2 font-semibold leading-snug mb-8">
      <div style={{fontSize: fontSize}} className="text-custom-text-300/50 text-end flex flex-col border-r-2 border-h border-custom-text-300/50 pr-3 text-code max-sm:hidden">
        <LineNumbers />
      </div>
			<div className="h-max" ref={codeRef}>
      	{props.children}
			</div>
    </div>
  );
}
