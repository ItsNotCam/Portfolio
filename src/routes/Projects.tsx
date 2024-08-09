import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import SideBar, {
  DirectoryItem,
	updateSelectedItem,
} from "../components/Sidebar";
import {
	ExploreIcon,
	GitHubIcon,
} from "../components/utilities/Icons";
import { ProjectList } from '../data/project_list.tsx';

import "./_projects.css";
import { NorthEast } from "@mui/icons-material";

export default function About() {
  const [selectedProject, setSelectedProject] = useState<string>("");
	const [sidebarItems, setSidebarItems] = useState<DirectoryItem[]>([]);

	useEffect(() => {
		let items: DirectoryItem[] = []
		ProjectList.forEach(project => {
			items.push({
				icon: undefined,
				name: project.name,
				onClick: () => updateSelection(project.name),
				selected: selectedProject === project.name,
			})
		});
		setSidebarItems(items);
	}, []);

  const updateSelection = (selectionName: string): void => {
    setSelectedProject(selectionName);
    setSidebarItems((old) => updateSelectedItem(old, selectionName));
		const element = document.getElementById(`project-item-${selectionName}`);
		if(element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
			
			const content = element.getElementsByClassName("project-item")[0];
			if(content) {
				content.classList.toggle("project-item-temp-selected");
				setTimeout(() => content.classList.toggle("project-item-temp-selected"), 750);
			}
		}

  };

  return (
    <>
      <div id="projects" className="flex flex-grow overflow-auto">
        <SideBar tree={sidebarItems} title="~/projects/" fontSize="0.9rem" />
        <div className="flex flex-col gap-4 text-custom-text-300 mx-4 my-8 cursor-default" id="project-list">
          {ProjectList.map((project, index) => (
						<div className="flex flex-row gap-4 max-w-[800px]  rounded-lg" id={`project-item-${project.name}`}>
							<div className="text-custom-text-200 pl-4 mt-1">{project.timeframe || "2024"}</div>
							<div id="divider" className="flex flex-col justify-center items-center gap-2 pt-2">
								<div className="project-item__circle w-4 h-4 bg-custom-orange rounded-full shadow-xl" />
								<div className="w-[2px] h-auto flex-grow bg-custom-text-100" />
							</div>
							<div id="card" className="p-4 project-item cursor-pointer flex flex-col gap-2 bg-custom-off-dark-300/5 backdrop-blur-lg" key={`project-${index}`} onClick={() => updateSelection(project.name)}>
								<div className="flex flex-row items-center gap-1">
									<a target="_blank" href={project.githubLink} className="text-custom-text-100" style={{ display: project.githubLink ? "block" : "none" }}>
										<GitHubIcon height="2rem" width="2rem" />
									</a>
									<a target="_blank" href={project.demoLink} className="text-custom-text-100" style={{ display: project.demoLink ? "block" : "none" }} >
										<ExploreIcon height="2rem" width="2rem" />
									</a>
									<h2 className="text-xl text-custom-blue">{project.name}</h2>
									<div className="project-item-expand-icon text-sm ml-2"><NorthEast /></div>
								</div>
								<p className="project-item-content transition-colors duration-1000">{project.content}</p>
								<ul className="project-skill-item-list">
									{project.skills.map((skill, index) => (
										<li key={index} className="project-skill-item" title={skill.name} id={skill.name}>
											<span className="project-skill-icon">{skill.icon}</span>
											<span className="project-skill-title">{skill.name}</span>
										</li>
									))}
								</ul>
							</div>
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
