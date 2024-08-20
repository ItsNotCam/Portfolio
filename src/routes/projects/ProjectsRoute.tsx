import { ReactNode, useEffect, useRef, useState } from "react";
import Footer from "../../components/footer/Footer.tsx";
import SideBar, {
  DirectoryItem,
  updateSelectedItem,
} from "../../components/sidebar/Sidebar.tsx";
import {
  ExploreIcon,
  FolderIcon,
  GitHubIcon,
} from "../../components/Icons.tsx";
import { Project, ProjectList } from "../../data/project_list.tsx";

import { NorthEast, SummarizeOutlined } from "@mui/icons-material";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ScaleLoader } from "react-spinners";

import "./projects.css";
import "./markdown.css";
import { Orange } from "../../components/ColoredText.tsx";
import { ListBefore } from "../../components/ListBefore.tsx";
import SkillsListComponent from "../../components/SkillsList.tsx";
import { DemoLink, GitHubLink, ReadmeLink } from "../../components/card_list/CardLinks.tsx";
import CardTitle from "../../components/card_list/CardTitle.tsx";

export default function Projects(): ReactNode {
  const [selectedProject, setSelectedProject] = useState<Project | undefined>(undefined);
  const [sidebarItems, setSidebarItems] = useState<DirectoryItem[]>([]);
  const [selectedReadmeContent, setSelectedReadme] = useState<string>("# Click on a Project!");
  const [downloadingReadme, setDownloadingReadme] = useState<boolean>(false);

  const readmeScrollRef = useRef(null);
  const cachedReadmes = useRef({} as any);

  useEffect(() => {
    setSidebarItems([
      {
        icon: <FolderIcon />,
        name: "..",
        disabled: true,
        id: "root"
      },
      ...ProjectList.map((project) => ({
        icon: undefined,
        name: project.name,
        onClick: () => updateSelection(project),
        selected: selectedProject?.id === project.id,
        id: project.id
      })),
    ]);
  }, []);

  /**
   * Updates and sets the readme for a project.
   * 
   * @param readmeLink - The link to the readme file.
   * @param projectID - The ID of the project.
   * @returns A promise that resolves to `true` if the readme is successfully updated and set, or `false` if there is an error.
   */
  const updateAndSetReadme = (readmeLink: string, projectID: string) => {
    return new Promise((resolve, reject) => {
      fetch(readmeLink)
      .then((res) => res.text())
      .then((readmeData) => {
        cachedReadmes.current[projectID] = readmeData;
        setSelectedReadme(readmeData);
        resolve(true);
      })
      .catch(() => reject(false));
    });
  };

  /**
   * Updates the selection of a project.
   * 
   * @param project - The project to be selected.
   * @returns void
   */
  const updateSelection = (project: Project): void => {
    if(selectedProject?.id === project.id) {
      console.log("Project already selected:", project.id);
      return;
    }

    const projectID: string = project.id;
    const additionalContent: string | undefined = project.additionalContent;

    setSelectedProject(project);
    setSidebarItems((old) => updateSelectedItem(old, projectID));
    const element = document.getElementById(`project-item-${projectID}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      const content = element.getElementsByClassName("card-content")[0];
      if (content) {
        content.classList.toggle("card-item-temp-selected");
        setTimeout(() => content.classList.toggle("card-item-temp-selected"), 750);
      }
    }

    // Now choose what to do with the readme
    // 1. Cached readme ? Use it
    // 2. Readme link ? Fetch it
    // 3. Additional content ? Use it
    // 4. Default content
    if (cachedReadmes.current[projectID]) {
      console.log("Using cached readme:", projectID);
      setSelectedReadme(cachedReadmes.current[projectID]);
    } else if (project.readmeLink) {
      console.log(`Fetching readme for ${project.id}:${project.readmeLink}`);
      setDownloadingReadme(true);
      updateAndSetReadme(project.readmeLink, projectID)
        .finally(() => setDownloadingReadme(false));
    } else if (additionalContent) {
      console.log("No readme available - using additional content:", projectID);
      const readmeData = `# ${project.name}\n` + (additionalContent || "");
      cachedReadmes.current[projectID] = readmeData;
      setSelectedReadme(readmeData);
    } else {
      console.log("No readme or additional content available, using default content", projectID);
      const readmeData = `# ${project.name}\n` + "No additional information available.";
      cachedReadmes.current[projectID] = readmeData;
      setSelectedReadme(readmeData);
    }

    // Scroll to the top of the readme div
    if(readmeScrollRef !== null && readmeScrollRef.current) {
      (readmeScrollRef.current as unknown as any).scrollIntoView();
    }
  };

  const MarkdownSection = (props: { project: Project | undefined }): ReactNode => (
    <div className="markdown-container z-50 top-0 mr-8 my-4 p-4 overflow-auto text-custom-text-300 bg-custom-off-dark-300/5 backdrop-blur-lg">
      {downloadingReadme ? (
        <div className="flex flex-col gap-2 justify-center items-center h-full">
          Downloading Readme
          <ScaleLoader color="#F16D70" />
        </div>
      ) : (<>
        <div className="absolute top-0 invisible" id="readme-scroll-ref" ref={readmeScrollRef}/>
        {props.project?.githubLink && 
            <a
              target="_blank"
              href={props.project.githubLink}
              className="relative"
            >
              <span className="flex flex-row items-center gap-2 text-custom-text-300 hover:text-custom-text-100 text-xl transition-colors">
                <GitHubIcon
                  height="1.75em"
                  width="1.75em"
                />
                GitHub Repo
              </span>
          </a>
        }
        <div className="flex flex-row gap-2 justify-center w-full mt-4 text-3xl">
          {props.project && props.project.skills
            .filter(skill => (skill.visible === undefined) ? true : skill.visible)
            .map((skill) => (
              <span className="text-3xl flex items-center" title={skill.name}>{skill.icon}</span>
            ))
          }
        </div>
        <div className="markdown max-w-100%">
          <Markdown remarkPlugins={[remarkGfm]}>{selectedReadmeContent}</Markdown>
        </div>
      </>)
      }
    </div>
  )

  /* Output */
  return (
    <>
      <div id="projects" className="flex flex-grow overflow-auto">
        <SideBar
          tree={sidebarItems}
          title="~/_projects/"
          fontSize="0.9rem"
          alwaysVisible={false}
        />
        <div className="project-grid grid gap-1 w-full overflow-x-hidden">
          <div id="project-list" className="mutex-hover-list card-list">
            {ProjectList.map((project, index) => (
              <div
                id={`project-item-${project.id}`}
                key={`project-item-${project.id}`}
                className="mutex-hover-list-child card"
              >
                <ListBefore text={project.year} />
                <div
                  id={`card-${project.id}`}
                  key={`project-${index}`}
                  className="card-content cursor-pointer"
                  onClick={() => updateSelection(project)}
                >
                  <div
                    id={`project-header-${project.id}`}
                    className="flex flex-row gap-1 items-center"
                  >
                    {project.githubLink && <GitHubLink githubLink={project.githubLink} /> }
                    {project.demoLink   && <DemoLink demoLink={project.demoLink} />       }
                    {/* {project.readmeLink && <ReadmeLink readmeLink={project.readmeLink} /> } */}
                    <CardTitle>
											<div className="flex flex-row items-center gap-2">
												<span className="text-lg text-custom-blue">{project.name}</span> 
												<span className="text-custom-text-300 text-sm">| {project.year}</span>
											</div>
										</CardTitle>
                  </div>
                  <div className="text-sm transition-colors duration-1000">
                    {project.content}
                  </div>
                  <SkillsListComponent skills={project.skills} />
                </div>
              </div>
            ))}
          </div>
          <MarkdownSection project={selectedProject}/>
        </div>
      </div>
      <Footer>
        <span className="text-custom-text-300">
          cam@portfolio:/home/cam/_projects/<Orange>{selectedProject ? selectedProject.id : ""}</Orange><strong>{` > `}</strong>
          <strong className="blinking-text">_</strong>
        </span>
      </Footer>
    </>
  );
}
