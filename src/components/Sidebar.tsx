import { ReactNode } from "react";
import "./_sidebar.css";

export type DirectoryItem = {
  name: string;
  icon: JSX.Element;
  disabled?: boolean;
  selected?: boolean;
  onClick?: () => void;
  children?: DirectoryItem[];
};

export default function SideBar(props: { tree: DirectoryItem[], title: string }): ReactNode {
  return (
    <div className="sidebar">
			<h1 className="w-max mx-auto text-custom-off-dark-300 text-center">{props.title}</h1>
      <Tree tree={props.tree} />
    </div>
  );
}

export const Tree = (props: {
  tree: DirectoryItem[];
  depth?: number;
}): ReactNode => {
  const depth: number = props.depth || 1;
  return props.tree.map((item, idx) => (
    <div
      className="flex flex-col gap-1"
      onClick={item.onClick}
      key={`tree-${item.name}`}
    >
      <Span
        icon={item.icon}
        name={item.name}
        indent={`${depth}rem`}
        disabled={item.disabled}
				selected={item.selected}
        functional={item.onClick !== undefined}
      />
      {item.children &&
        item.children.map((child) => (
          <Tree
            tree={[child]}
            depth={depth + 1}
            key={`tree-child-${child.name}`}
          />
        ))}
    </div>
  ));
};

const Span = (props: {
  icon: JSX.Element,
  name: string,
  className?: string,
  color?: string,
  selected?: boolean,
  indent?: string,
  disabled?: boolean,
  functional?: boolean
}) => {
  let color: string = props.color || "custom-text-300";
  color = props.selected ? "custom-orange" : color;

  return (
    <div
      className={`cursor-default ${!props.disabled && props.functional && "hover:bg-custom-off-dark-300 cursor-pointer"} ${props.selected && "bg-custom-off-dark-300"}`}
    >
      <span
        className={`flex flex-row items-center gap-1 relative ${props.className} p-1 ${!props.disabled && props.functional && "hover:text-custom-orange"} text-${props.disabled ? "custom-off-dark-300" : color}`}
        style={{ marginLeft: props.indent || "0px" }}
      >
				{props.selected && <div className="absolute -left-1 h-[80%] w-[0.18rem] bg-custom-red"></div>}
        {props.icon}
        {props.name}
      </span>
    </div>
  );
};
