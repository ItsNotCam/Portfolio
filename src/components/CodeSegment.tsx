import useResizeObserver from "@react-hook/resize-observer";
import React, { CSSProperties, useState } from "react";
import { ReactNode, useEffect, useRef } from "react";

import "./_code-segment.css";

const useSize = (target: any) => {
  const [size, setSize] = React.useState();

  React.useLayoutEffect(() => {
    setSize(target.current.getBoundingClientRect());
  }, [target]);

  // Where the magic happens
  useResizeObserver(target, (entry) =>
    setSize((entry as unknown as any).contentRect)
  );
  return size;
};

export default function CodeSegment(props: {
  children?: ReactNode;
  align?: string;
  keyPrefix: string;
}): ReactNode {
  const [lineHeight, setLineHeight] = useState<number>(24);
  const [fontSize, setfontSize] = useState<string>("1rem");

  const codeRef = useRef(null);
  const size = useSize(codeRef) || ({} as any);

  useEffect(() => {
    const style: CSSStyleDeclaration = getComputedStyle(
      (codeRef.current as any).firstChild as Element
    );
    setLineHeight(parseFloat(style.lineHeight.replace("px", "")));
    setfontSize(style.fontSize);
  }, [size]);

  const GetLineCount = (): number[] =>
    Array.from(
      { length: Math.ceil(size.height / lineHeight) },
      (_, i) => i + 1
    );
  const LineNumbers = (): ReactNode =>
    GetLineCount().map((n) => (
      <span key={`${props.keyPrefix}-code-${n}`}>
        {n}
        <br />
      </span>
    ));

  let align: string = "left";
  if (props.align !== undefined) {
    align = props.align;
  }

  return (
    <div className="flex flex-row gap-4 font-semibold leading-snug mb-8">
      <div
        style={{ fontSize: fontSize, order: align === "right" ? 1 : 0 }}
        className={`text-custom-text-300/50 flex flex-col ${
          align === "right" ? "border-l-2 pl-3" : "border-r-2 pr-3 text-end"
        } border-h border-custom-text-300/50 text-code max-sm:hidden`}
      >
        <LineNumbers />
      </div>
      <div
        style={{ fontSize: fontSize, order: align === "right" ? 0 : 1 }}
        className="h-max"
        ref={codeRef}
      >
        {props.children}
      </div>
    </div>
  );
}

export const Breakpoint = (props: {
  children?: ReactNode;
  className?: string;
  spacing?: string;
}): ReactNode => (
  <div
    style={{
			"--after-left":  props.spacing || "-5.75em",
			"--before-left": props.spacing || "-5.75em",
		} as any}
    className={`breakpoint ${props.className ? props.className : ""}`}
  >
    <span>{props.children}</span>
  </div>
);

export const CodeIndent = (props: {
  children?: ReactNode;
  className?: string;
}): ReactNode => (
  <div className={`code-indent ${props.className ? props.className : ""}`}>
    {props.children}
  </div>
);
