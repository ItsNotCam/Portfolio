import { ReactNode } from "react";

export default function CodeSegment(props: { children?: ReactNode, lineCount: number, keyPrefix: string }): ReactNode {
  const arr: number[] = Array.from({ length: props.lineCount }, (_, i) => i + 1);
  return (
    <div className="flex flex-row gap-2 font-semibold text-lg leading-snug mb-8">
      <div className="text-custom-text-300/50 text-end flex flex-col border-r-2 border-h border-custom-text-300/50 pr-3 text-code max-sm:hidden">
        {arr.map((idx) => (<span key={`${props.keyPrefix}-code-${idx}`}>{idx}<br /></span>))}
      </div>
      {props.children}
    </div>
  );
}
