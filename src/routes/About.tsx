import { ReactNode, useState } from "react";
import Footer from "../components/Footer";
import SideBar, { DirectoryItem, updateSelectedItem } from "../components/Sidebar";
import { FileIcon, FolderIcon } from "../components/Icons";
import { Orange } from "../components/ColoredText";

export default function About(): ReactNode {
	const updateSelection = (selectionName: string): void => {
		setSelectedName(selectionName);
		setDirectoryTree(old => updateSelectedItem(old, selectionName));
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

	// temporary solution - get all pages that are in the "me" section
	// this is used so that the footer text can be updated with the correct pathing
	// automatically with the use of the directory tree object
	const pagesInMeSection: string[] = (directoryTree[1].children || [])?.map(child => child.name);

  return (
    <>
      <div id="about" className="w-full h-full flex flex-grow">
        <SideBar tree={directoryTree} title="~/_about/" />
      </div>
      <Footer>
				<span className="text-custom-text-300">
					cam@portfolio:/home/cam/_about/{pagesInMeSection.includes(selectedName) ? "_me" : "_site"}{" "}
					<strong>
						{` > vim ./`}<Orange>{selectedName}</Orange>.md{" "}
					<span className="blinking-text">_</span></strong>
				</span>
			</Footer>
    </>
  );
}
