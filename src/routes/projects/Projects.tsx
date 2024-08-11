import { ReactNode, useEffect, useRef, useState } from "react";
import Footer from "../../components/footer/Footer";
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

import "./projects.css";
import { NorthEast, SummarizeOutlined } from "@mui/icons-material";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ScaleLoader } from "react-spinners";

export default function About(): ReactNode {
  const [selectedProject, setSelectedProject] = useState<Project | undefined>(undefined);
  const [sidebarItems, setSidebarItems] = useState<DirectoryItem[]>([]);
  const [selectedReadmeContent, setSelectedReadme] = useState<string>("");
  const [downloadingReadme, setDownloadingReadme] = useState<boolean>(false);

  const readmeDomRef = useRef(null);
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
      const content = element.getElementsByClassName("project-content")[0];
      if (content) {
        content.classList.toggle("project-item-temp-selected");
        setTimeout(() => content.classList.toggle("project-item-temp-selected"), 750);
      }
    }

    if (cachedReadmes.current[projectID]) {
      console.log("Using cached readme:", projectID);
      setSelectedReadme(cachedReadmes.current[projectID]);
    } else if (project.readmeLink) {
      setDownloadingReadme(true);
      console.log(`Fetching readme for ${project.id}:${project.readmeLink}`);
      fetch(project.readmeLink)
        .then((res) => res.text())
        .then((readmeData) => {
          cachedReadmes.current[projectID] = readmeData;
          setSelectedReadme(readmeData);
        }).finally(() => setDownloadingReadme(false));
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
  };

  /* Components */
  const GitHubLink = (props: { project: Project }): ReactNode =>
    props.project.githubLink ? (
      <a
        target="_blank"
        href={props.project.githubLink}
        className="relative text-custom-text-300"
      >
        <GitHubIcon
          height="1.75em"
          width="1.75em"
          className="hover:text-custom-text-100 transition-colors"
        />
      </a>
    ) : null;

  const DemoLink = (props: { project: Project }): ReactNode =>
    props.project.demoLink ? (
      <a
        target="_blank"
        href={props.project.demoLink}
        className="relative text-custom-text-300 hover:text-custom-text-100 transition-colors"
      >
        <ExploreIcon height="1.75em" width="1.75em" />
      </a>
    ) : null;

  const ReadmeLink = (props: { project: Project }): ReactNode =>
    props.project.readmeLink ? (
      <SummarizeOutlined style={{ height: "1.2em", width: "1.2em" }} />
    ) : null;

  const ProjectTitle = (props: { project: Project }): ReactNode => (
    <div className="project-item__header-link flex flex-row flex-grow cursor-pointer">
      <h2 className="text-lg text-custom-blue hover:underline transition-colors duration-200">
        {props.project.name}
      </h2>
      <div className="project-item-expand-icon ml-2 text-sm transition-colors">
        <NorthEast style={{ height: "1rem", width: "1rem" }} />
      </div>
    </div>
  );

  const ProjectBefore = (props: { project: Project }): ReactNode => (
    <>
      <div id="timeframe" className="text-custom-text-200 pl-4 mt-1">
        {props.project.year || ""}
      </div>
      <div
        id="divider"
        className="flex flex-col justify-center items-center gap-2 pt-2"
      >
        <div className="orange-flare w-4 h-4 rounded-full bg-custom-orange" />
        <div className="flex-grow w-[2px] h-auto bg-custom-text-100" />
      </div>
    </>
  );

  const ProjectSkills = (props: { project: Project }): ReactNode => (
    <ul className="project-skill-item-list">
      {props.project.skills.map((skill, index) => (
        <li
          key={index}
          className="project-skill-item"
          title={skill.name}
          id={skill.name}
        >
          <span className="project-skill-icon">{skill.icon}</span>
          <span className="project-skill-title">{skill.name}</span>
        </li>
      ))}
    </ul>
  );

  /* Output */
  return (
    <>
      <div id="projects" className="flex flex-grow overflow-auto">
        <SideBar
          tree={sidebarItems}
          title="~/projects/"
          fontSize="0.9rem"
          alwaysVisible={false}
        />
        <div className="project-grid grid gap-1 w-full overflow-x-hidden">
          <div
            id="project-list"
            className="flex flex-col flex-grow-0 gap-4 p-2 mr-2 overflow-y-auto text-custom-text-300 cursor-default"
          >
            {ProjectList.map((project, index) => (
              <div
                id={`project-item-${project.id}`}
                key={`project-item-${project.id}`}
                className="project-item flex flex-row gap-4 rounded-md transition-opacity duration-300"
              >
                <ProjectBefore project={project} />
                <div
                  id={`card=${project.id}`}
                  key={`project-${index}`}
                  className="project-content"
                >
                  <div
                    id={`project-header-${project.id}`}
                    className="flex flex-row gap-1 items-center"
                    onClick={() => updateSelection(project)}
                  >
                    <GitHubLink project={project} />
                    <DemoLink project={project} />
                    <ReadmeLink project={project} />
                    <ProjectTitle project={project} />
                  </div>
                  <div className="text-sm transition-colors duration-1000">
                    {project.content}
                  </div>
                  <ProjectSkills project={project} />
                </div>
              </div>
            ))}
          </div>
          <div
            ref={readmeDomRef}
            className="z-50 markdown top-0 mr-8 my-4 p-4 overflow-auto text-custom-text-300 bg-custom-off-dark-300/5 backdrop-blur-lg"
          >
            {downloadingReadme ? (
              <div className="flex flex-row justify-center items-center h-full">
                <ScaleLoader color="#F16D70" />
              </div>
            ) : (<>
              <div className="flex flex-row gap-2 justify-center w-full mt-4 text-3xl">
                {selectedProject && selectedProject.skills.map((skill) => (<>
                  <span className="text-3xl">{skill.icon}</span>
                </>))}
              </div>
              <Markdown remarkPlugins={[remarkGfm]}>{selectedReadmeContent || "No data"}</Markdown>
            </>)
            }
          </div>
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
