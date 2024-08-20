import { NorthEast } from "@mui/icons-material";
import { ReactNode } from "react";

export default function CardTitle(props: { title?: String, children?: ReactNode }): ReactNode {
	return (
		<div className="card-item__header-link flex flex-row flex-grow cursor-pointer">
			<h2 className="text-lg text-custom-blue hover:underline transition-colors duration-200">
				{props.title || props.children}
			</h2>
			{/* <div className="card-item__header-icon ml-2 text-sm transition-colors">
				<NorthEast style={{ height: "1rem", width: "1rem" }} />
			</div> */}
		</div>
	)
};
