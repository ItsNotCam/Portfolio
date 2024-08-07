import { ReactNode, useState } from "react";
import "./_sidebar.css";
import { Chevron } from "./Icons";

export type DirectoryItem = {
  name: string;
  icon: JSX.Element;
  disabled?: boolean;
  selected?: boolean;
  onClick?: () => void;
  children?: DirectoryItem[];
};

export default function SideBar(props: {
  tree: DirectoryItem[];
  title: string;
}): ReactNode {
  const [sidebarFoldedOut, setSidebarFoldedOut] = useState<boolean>(false);
  return (
    <>
      <div
        className={
          `cursor-pointer text-custom-text-100 fixed top-[4rem] z-50 left-[0.5rem] p-1 hover:bg-custom-off-dark-300 rounded-full min-[750px]:hidden` +
          ` ${sidebarFoldedOut ? "left-2" : "bg-custom-off-dark-300/60 rounded-r-md rounded-l-none pl-4 py-2 -left-[0.5rem]"}`
        }
        onClick={() => setSidebarFoldedOut(!sidebarFoldedOut)}
        style={{
          transition: "transform 0.2s",
          transform: sidebarFoldedOut ? "translateX(10rem)" : "translateX(0)",
        }}
      >
        <Chevron style={{ rotate: sidebarFoldedOut ? "180deg" : "0deg", }}
          height="1.5em"
          width="1.5em"
        />
      </div>
      <div className="sidebar">
        <div className="relative">
          <div className="absolute right-20 top-0 text-custom-text-100">
            <Chevron />
          </div>
        </div>
        <div className="sidebar-content" data-folded-out={sidebarFoldedOut}>
          <h1 className="w-max mx-auto text-custom-off-dark-300 text-center">
            {props.title}
          </h1>
          <Tree tree={props.tree} />
        </div>
      </div>
    </>
  );
}

export const Tree = (props: {
  tree: DirectoryItem[];
  depth?: number;
}): ReactNode => {
  const depth: number = props.depth || 1;
  return props.tree.map((item) => (
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
  icon: JSX.Element;
  name: string;
  className?: string;
  color?: string;
  selected?: boolean;
  indent?: string;
  disabled?: boolean;
  functional?: boolean;
}) => {
  let color: string = props.color || "text-custom-text-300";
  color = props.selected ? "text-custom-orange" : color;

  return (
    <div
      className={`cursor-default ${
        !props.disabled &&
        props.functional &&
        "hover:bg-custom-off-dark-300 cursor-pointer"
      } ${props.selected && "bg-custom-off-dark-300"}`}
    >
      <span
        className={`flex flex-row items-center gap-1 relative ${
          props.className
        } p-1 ${
          !props.disabled && props.functional && "hover:text-custom-orange"
        } ${props.disabled ? "text-custom-off-dark-300" : color}`}
        style={{ marginLeft: props.indent || "0px" }}
      >
        {props.selected && (
          <div className="absolute -left-1 h-[80%] w-[0.18rem] bg-custom-red"></div>
        )}
        {props.icon}
        {props.name}
      </span>
    </div>
  );
};

export const updateSelectedItem = (
  dirTree: DirectoryItem[],
  selectionName: string,
  setSelectedPage?: (newPage: DirectoryItem) => void
): DirectoryItem[] => {
  for (let i = 0; i < dirTree.length; i++) {
    dirTree[i].selected = dirTree[i].name === selectionName;
    if (dirTree[i].selected && setSelectedPage !== undefined) {
      setSelectedPage(dirTree[i]);
    }

    if (dirTree[i].children !== undefined) {
      dirTree[i].children = updateSelectedItem(
        dirTree[i].children as DirectoryItem[],
        selectionName,
        setSelectedPage
      );
    }
  }
  return dirTree;
};
