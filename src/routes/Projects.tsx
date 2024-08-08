import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import SideBar, {
  DirectoryItem,
	updateSelectedItem,
} from "../components/Sidebar";
import {
	ExploreIcon,
  FileIcon,
  FolderIcon,
	GitHubIcon,
} from "../components/utilities/Icons";
import { Projects } from '../data/projects.tsx';

import "./_projects.css";

export default function About() {
  const [selectedProject, setSelectedProject] = useState<string>("");
	const [sidebarItems, setSidebarItems] = useState<DirectoryItem[]>([]);

	useEffect(() => {
		let items: DirectoryItem[] = []
		Projects.forEach(project => {
			items.push({
				icon: undefined,
				name: project.name,
				onClick: () => updateSelection(project.name),
				selected: selectedProject === project.name,
				// children: project.skills.map(skill => ({ icon: skill.icon, name: undefined }))
			})
		});
		setSidebarItems(items);
	}, []);

  const updateSelection = (selectionName: string): void => {
    setSelectedProject(selectionName);
    setSidebarItems((old) => updateSelectedItem(old, selectionName));
  };

  return (
    <>
      <div id="projects" className="flex flex-grow overflow-auto">
        <SideBar tree={sidebarItems} title="~/projects/" fontSize="0.9rem" />
        <div className="relative grid grid-flow-col flex-wrap text-custom-text-300 mx-4 my-4 cursor-default gap-2" id="project-list">
          {Projects.map((project, index) => (
						<div className="project-item cursor-pointer max-w-[600px] flex flex-col gap-2 p-4" key={`project-${index}`} onClick={() => updateSelection(project.name)}>
							<div className="flex flex-row items-center gap-1">
								<a target="_blank" href={project.githubLink} className="text-custom-text-100" style={{ display: project.githubLink ? "block" : "none" }}>
									<GitHubIcon height="2rem" width="2rem" />
								</a>
								<a target="_blank" href={project.demoLink} className="text-custom-text-100" style={{ display: project.demoLink ? "block" : "none" }} >
									<ExploreIcon height="2rem" width="2rem" />
								</a>
								<h2 className="text-xl text-custom-blue">{project.name}</h2>
							</div>
							<p>{project.content}</p>
							<ul className="project-skill-item-list">
								{project.skills.map((skill, index) => (
									<li key={index} className="project-skill-item" title={skill.name} id={skill.name}>
										<span className="project-skill-icon">{skill.icon}</span>
										<span className="project-skill-title">{skill.name}</span>
									</li>
								))}
							</ul>
						</div>
          ))}
        </div>
      </div>
      <Footer>
        <span className="text-custom-text-300">
          cam@portfolio:/home/cam/_projects/<strong>{` > `}</strong>
          <strong className="blinking-text">_</strong>
        </span>
      </Footer>
    </>
  );
}
