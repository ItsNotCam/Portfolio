import { ReactNode } from "react";

export const ListBefore = (props: { text: string }): ReactNode => (
	<>
		<div id="timeframe" className="text-custom-text-200 pl-4 mt-1">
			{props.text || ""}
		</div>
		<div
			id="divider"
			className="flex flex-col justify-center items-center gap-2 pt-2"
		>
			<div className="orange-flare w-4 h-4 rounded-full bg-custom-orange" />
			<div className="flex-grow w-[2px] h-auto bg-custom-text-100" />
		</div>
	</>
);