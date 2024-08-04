import { ReactNode, useState } from "react";
import Footer from "../components/Footer";
import SideBar, { DirectoryItem } from "../components/Sidebar";
import { FileIcon, FolderIcon } from "../components/Icons";

// import FolderIcon from '@mui/icons-material/Folder';

export default function About(): ReactNode {
	const updateSelection = (selectionName: string): void => {
		setSelectedName(selectionName);

		const updateSelectedItem = (dirTree: DirectoryItem[]): DirectoryItem[] => {
			for(let i = 0; i < dirTree.length; i++) {
				dirTree[i].selected = dirTree[i].name === selectionName

				if(dirTree[i].children !== undefined) {
					dirTree[i].children = updateSelectedItem(dirTree[i].children as DirectoryItem[])
				}
			}
			return dirTree;
		}

		setDirectoryTree(old => updateSelectedItem(old));
	}


  const [selectedName, setSelectedName] = useState<string>("passion");
  const [directoryTree, setDirectoryTree] = useState<DirectoryItem[]>([
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
          selected: true,
          onClick: () => updateSelection("passion")
        },
        {
          name: "hobbies",
          icon: <FileIcon />,
          onClick: () => updateSelection("hobbies")
        },
        {
          name: "goals",
          icon: <FileIcon />,
          onClick: () => updateSelection("goals"),
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
      children: [
        {
          name: "credits",
          icon: <FileIcon />,
          onClick: () => updateSelection("credits"),
        },
        {
          name: "inspiration",
          onClick: () => updateSelection("inspiration"),
          icon: <FileIcon />,
        },
        {
          name: "design",
          icon: <FileIcon />,
          onClick: () => updateSelection("design"),
        },
        {
          name: "..",
          icon: <FolderIcon />,
					disabled: true
        },
			],
    },
  ]);

  const [FooterText, setFooterText] = useState<JSX.Element>(
    <span className="text-custom-text-300">
      cam@portfolio:/home/cam/_about/_me{" "}
      <strong>{` > ./vim passion.py`}</strong>{" "}
      <strong className="blinking-text">_</strong>
    </span>
  );
  return (
    <>
      <div id="about" className="w-full h-full flex flex-grow">
        <SideBar tree={directoryTree} title="~/_about/" />
      </div>
      <Footer>{FooterText}</Footer>
    </>
  );
}
