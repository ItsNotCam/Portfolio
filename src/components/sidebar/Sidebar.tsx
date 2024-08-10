import { ReactNode, useEffect, useState } from "react";
import { Chevron } from "../Icons";
import Tree from "./Tree";

import "./sidebar.css";

export type DirectoryItem = {
  name: string | undefined;
  icon: JSX.Element | undefined;
  disabled?: boolean;
  selected?: boolean;
  id: string;
  onClick?: () => void;
  children?: DirectoryItem[];
};

export default function SideBar(props: {
  tree: DirectoryItem[];
  title: string;
  fontSize?: string;
  alwaysVisible?: boolean;
}): ReactNode {
  const alwaysVisible: boolean = true;
  // const alwaysVisible: boolean = (props.alwaysVisible === undefined) ? true : props.alwaysVisible;
  const [sidebarFoldedOut, setSidebarFoldedOut] = useState<boolean>(alwaysVisible);

  useEffect(() => {
    const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    document.addEventListener("click", (e) => {
      if (e.clientX > (13 * fontSize) && sidebarFoldedOut) {
        setSidebarFoldedOut(false);
      }
    });
  },[])


  return (
    <>
      <div
        className={
          `cursor-pointer text-custom-text-100 fixed top-[4rem] z-50 lp-1 hover:bg-custom-off-dark-300 rounded-full min-[750px]:hidden` +
          ` ${sidebarFoldedOut ? "left-2" : "bg-custom-off-dark-300 rounded-r-md rounded-l-none pl-4 py-2 -left-[0.7rem]"}`
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
          className="z-30"
        />
      </div>
      <div className="sidebar" id="sidebar" data-always-visible={alwaysVisible} >
        <div className="sidebar-content" data-folded-out={sidebarFoldedOut} style={{fontSize: props.fontSize || "1rem"}}>
          <h1 className="w-max mx-auto text-custom-off-dark-300 text-center mb-2">
            {props.title}
          </h1>
          <Tree tree={props.tree} />
        </div>
      </div>
    </>
  );
}

export const updateSelectedItem = (
  dirTree: DirectoryItem[],
  selectionId: string,
  setSelectedPage?: (newPage: DirectoryItem) => void
): DirectoryItem[] => {
  for (let i = 0; i < dirTree.length; i++) {
    dirTree[i].selected = dirTree[i].id === selectionId;
    if (dirTree[i].selected && setSelectedPage !== undefined) {
      setSelectedPage(dirTree[i]);
    }

    if (dirTree[i].children !== undefined) {
      dirTree[i].children = updateSelectedItem(
        dirTree[i].children as DirectoryItem[],
        selectionId,
        setSelectedPage
      );
    }
  }
  return dirTree;
};
