import { ReactNode, useEffect, useState } from "react";
import Footer from "../components/Footer";
import SideBar, {
  DirectoryItem,
	updateSelectedItem,
} from "../components/Sidebar";
import {
	ExploreIcon,
	FolderIcon,
	GitHubIcon,
} from "../components/utilities/Icons";
import { Project, ProjectList } from '../data/project_list.tsx';

import "./_projects.css";
import { DocumentScanner, NorthEast, Note, NoteAddTwoTone, NoteAlt, NoteOutlined, SummarizeOutlined } from "@mui/icons-material";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";


export default function About() {
  const [selectedProject, setSelectedProject] = useState<string>("");
	const [sidebarItems, setSidebarItems] = useState<DirectoryItem[]>([]);
	const [editedProjects, setEditedProjects] = useState<(Project & {commit_count?: string})[]>([]);

	useEffect(() => {
		let items: DirectoryItem[] = [{
			icon: <FolderIcon />,
			name: "..",
			disabled: true,
		}]
		ProjectList.forEach(project => {
			items.push({
				icon: undefined,
				name: project.name,
				onClick: () => updateSelection(project.name, project.readmeLink),
				selected: selectedProject === project.name,
			})
		});
		setSidebarItems(items);

		async function fetchCommits() {
			const extractUsernameAndRepoName = (githubLink: string): {username: string, repoName: string} => {
				const regex = /github\.com\/(?<username>[^/]+)\/(?<repoName>[^/]+)/;
				const match = githubLink.match(regex);
				const { username, repoName } = match?.groups || {};
				return { username, repoName };
			}
	
			const extractPageCountFromLinkHeader = (linkHeader: string | null): string => {
				const regex = /&page=(?<page_count>\d+)>; rel="last"/;
				const match = linkHeader?.match(regex);
				const pageCount = match?.groups?.page_count || "0";
				return pageCount;
			}
			
			const updatedProjects = await Promise.all(
				ProjectList.map(async (project) => {
					if(project.githubLink === undefined) return project;
					const { username, repoName } = extractUsernameAndRepoName(project.githubLink);
					const url = `https://api.github.com/repos/${username}/${repoName}/commits?sha=master&per_page=1&page=1`;
					const response = await fetch(url);
					const linkHeader = response.headers.get("link");
					const pageCount = extractPageCountFromLinkHeader(linkHeader);
					return { ...project, commit_count: pageCount };
				})
			);
			setEditedProjects(updatedProjects);
		}

		fetchCommits();
	}, []);

	const [data, setData] = useState<string>("");
	const [displayData, setDisplayData] = useState<boolean>(false);

	const fetchData = async (url: string): Promise<void> => {
		try {
			const response = await fetch(url);
			const result = await response.text();
			setData(result);
			setDisplayData(true);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

  const updateSelection = (selectionName: string, readmeLink: string | undefined): void => {
    setSelectedProject(selectionName);
    setSidebarItems((old) => updateSelectedItem(old, selectionName));
		const element = document.getElementById(`project-item-${selectionName}`);
		if(element) {
			element.scrollIntoView({ behavior: "smooth", block: "center" });
			
			const content = element.getElementsByClassName("project-item")[0];
			if(content) {
				content.classList.toggle("project-item-temp-selected");
				setTimeout(() => content.classList.toggle("project-item-temp-selected"), 750);
			}
		}

		if(readmeLink) {
			fetchData(readmeLink);
		}

  };

	const RenderReadme = (): ReactNode => {
		return (
		<div className={`transition-all duration-500 sticky top-8 markdown flex flex-col text-custom-text-300 z-50 w-1/2 flex-grow-0 mr-8 bg-custom-off-dark-300/5 backdrop-blur-lg mt-8 ${displayData ? "w-[790px]" : "w-0"}`}>
			<div className="overflow-auto p-4">
				<Markdown remarkPlugins={[remarkGfm]}>{data}</Markdown>
			</div>
		</div>
		)
	}

  return (
    <>
      <div id="projects" className="flex flex-grow overflow-auto">
        <SideBar tree={sidebarItems} title="~/projects/" fontSize="0.9rem" />
        <div className={`flex flex-col gap-4 text-custom-text-300 mx-4 my-8 cursor-default `} id="project-list">
          {editedProjects.map((project, index) => (
						<div className="transition-opacity duration-300 flex flex-row gap-4 rounded-lg" id={`project-item-${project.name}`}>
							<div className="text-custom-text-200 pl-4 mt-1">{project.timeframe || "2024"}</div>
							<div id="divider" className="flex flex-col justify-center items-center gap-2 pt-2">
								<div className="project-item__circle w-4 h-4 bg-custom-orange rounded-full shadow-xl" />
								<div className="w-[2px] h-auto flex-grow bg-custom-text-100" />
							</div>
							<div id="card" className="p-4 project-item flex flex-col gap-2 bg-custom-off-dark-300/5 backdrop-blur-lg" key={`project-${index}`}>
								<div className="flex flex-row items-center gap-1" onClick={() => updateSelection(project.name, project.readmeLink)}>
									
								<div className="project-item__header-link flex flex-row flex-grow cursor-pointer">
										<h2 className="text-xl text-custom-blue transition-colors duration-200 hover:underline ">{project.name}</h2>
										<div className="project-item-expand-icon text-sm ml-2 transition-colors">
											<NorthEast />
										</div>
									</div>
									{project.demoLink && 
										<a target="_blank" href={project.demoLink} className="text-custom-text-300 hover:text-custom-text-100 transition-colors" >
											<ExploreIcon height="2rem" width="2rem" />
										</a>
									}
									{project.readmeLink &&
										<button className="text-custom-text-300 hover:text-custom-text-100 transition-colors" onClick={() => fetchData(project.readmeLink!)}>
											<SummarizeOutlined style={{height: "2rem", width: "2rem"}}/>
										</button>
									}
									{project.githubLink &&
										<a target="_blank" href={project.githubLink} className="relative text-custom-text-300 ">
											{project.commit_count && <span className="absolute -top-4 text-xs text-center w-full">{project.commit_count}</span>}
											<GitHubIcon height="2rem" width="2rem" className="hover:text-custom-text-100 transition-colors"/>
										</a>
									}
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
				<RenderReadme />
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