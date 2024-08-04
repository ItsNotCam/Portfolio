import { ReactNode, useState } from "react";
import Footer from "../components/Footer";
import SideBar, { DirItemType, DirectoryItem } from "../components/Sidebar";

const DirectoryTree: DirectoryItem[] = [
  {
    name: "..",
    type: DirItemType.FOLDER,
    disabled: true,
  },
  {
    name: "_me",
    type: DirItemType.FOLDER,
    children: [
      {
        name: "passion",
        type: DirItemType.FILE,
        onClick: () => console.log("clicked passion"),
      },
      {
        name: "hobbies",
        type: DirItemType.FILE,
        onClick: () => console.log("clicked hobbies"),
      },
      {
        name: "goals",
        type: DirItemType.FILE,
        onClick: () => console.log("clicked passion"),
      },
      {
        name: "..",
        type: DirItemType.FOLDER,
        disabled: true,
      },
    ],
  },
  {
    name: "_site",
    type: DirItemType.FOLDER,
    disabled: false,
    children: [
      {
        name: "credits",
        type: DirItemType.FILE,
      },
      {
        name: "inspiration",
        type: DirItemType.FILE,
      },
      {
        name: "design",
        type: DirItemType.FILE,
      },
      {
        name: "..",
        type: DirItemType.FOLDER,
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
