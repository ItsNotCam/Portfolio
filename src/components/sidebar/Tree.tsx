import { ReactNode } from "react";
import { DirectoryItem } from "./Sidebar";
import Branch from "./Branch";

export type TreeProps = {
  tree: DirectoryItem[];
  depth?: number;
}

export default function Tree(props: TreeProps): ReactNode {
  const depth: number = props.depth || 1;
  return props.tree.map((item) => (
    <div
      className="flex flex-col gap-1"
      onClick={item.onClick}
      key={`tree-${item.name}`}
    >
      <Branch
        icon={item.icon}
        name={item.name}
        indent={`${depth}rem`}
        disabled={item.disabled}
        selected={item.selected}
        functional={item.onClick !== undefined} />
      {item.children &&
        item.children.map((child) => (
          <Tree
            tree={[child]}
            depth={depth + 1}
            key={`tree-child-${child.name}`} />
        ))}
    </div>
  ));
};
