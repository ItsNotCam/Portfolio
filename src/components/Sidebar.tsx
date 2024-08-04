import { ReactNode } from "react";
import { FileIcon, FolderIcon } from "./Icons";

import "./_sidebar.css";

export enum DirItemType {
  FOLDER,
  FILE,
}

export type DirectoryItem = {
  name: string;
  icon: JSX.Element;
  disabled?: boolean;
  onClick?: () => void;
  children?: DirectoryItem[];
};

export default function SideBar(props: { tree: DirectoryItem[] }): ReactNode {
  return (
    <div className="sidebar">
      <Tree tree={props.tree} />
    </div>
  );
}

export const Tree = (props: {
  tree: DirectoryItem[];
  depth?: number;
}): ReactNode => {
  const depth: number = props.depth || 0;
  return props.tree.map((item) => (
    <div className="flex flex-col gap-1" onClick={item.onClick}>
      <Span
        icon={item.icon}
        name={item.name}
        indent={`${depth}rem`}
        disabled={item.disabled}
        functional={item.onClick !== undefined}
      />
      {item.children &&
        item.children.map((child) => <Tree tree={[child]} depth={depth + 1} />)}
    </div>
  ));
};

const Span = (props: {
  icon: JSX.Element;
  name: string;
  className?: string;
  color?: string;
  selected?: boolean;
  indent?: string;
  disabled?: boolean;
  functional?: boolean;
}) => {
  let color: string = props.color || "custom-text-300";
  color = props.selected ? "custom-orange" : color;
  return (
    <div
      className={`cursor-default ${
        !props.disabled && props.functional &&
        "hover:bg-custom-off-dark-300 cursor-pointer"
      }`}
    >
      <span
        className={`
					text-${color} flex flex-row items-center gap-1 ${props.className} 
					p-1 ${!props.disabled && props.functional && "hover:text-custom-orange"}
				`}
        style={{ marginLeft: props.indent || "0px" }}
      >
        {props.icon}
        {props.name}
      </span>
    </div>
  );
};
