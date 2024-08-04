import { ReactNode, useState } from "react";
import Footer from "../components/Footer";
import SideBar, { DirItemType, DirectoryItem } from "../components/Sidebar";
import { FileIcon, FolderIcon } from "../components/Icons";

const DirectoryTree: DirectoryItem[] = [
  {
    name: "..",
    icon: <FolderIcon />,
    disabled: true,
  },
  {
    name: "_me",
    icon: <FolderIcon />,
    children: [
      {
        name: "passion",
        icon: <FileIcon />,
        onClick: () => console.log("clicked passion"),
      },
      {
        name: "hobbies",
        icon: <FileIcon />,
        onClick: () => console.log("clicked hobbies"),
      },
      {
        name: "goals",
        icon: <FileIcon />,
        onClick: () => console.log("clicked passion"),
      },
      {
        name: "..",
        icon: <FolderIcon />,
        disabled: true,
      },
    ],
  },
  {
    name: "_site",
    icon: <FolderIcon />,
    disabled: false,
    children: [
      {
        name: "credits",
        icon: <FileIcon />,
        onClick: () => console.log("clicked credits"),
      },
      {
        name: "inspiration",
        onClick: () => console.log("clicked inspiration"),
        icon: <FileIcon />,
      },
      {
        name: "design",
        icon: <FileIcon />,
        onClick: () => console.log("clicked design"),
      },
      {
        name: "..",
        icon: <FolderIcon />,
        disabled: true,
      },
    ],
  },
];

export default function About(): ReactNode {
  const [FooterText, setFooterText] = useState<JSX.Element>(
    <span className="text-custom-text-300">
      cam@portfolio:/home/cam/_about/_me{" "}
      <strong>{` > ./vim passion.py`}</strong>{" "}
      <strong className="blinking-text">_</strong>
    </span>
  );
  return (
    <>
      <div id="about" className="w-full h-full flex-grow">
        <SideBar tree={DirectoryTree} />
      </div>
      <Footer>{FooterText}</Footer>
    </>
  );
}
