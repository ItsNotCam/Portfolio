import { useState } from "react";
import Footer from "../components/Footer";
import SideBar, {
  DirectoryItem,
  updateSelectedItem,
} from "../components/Sidebar";
import {
  Adobe_CCIcon,
  BashIcon,
  BlenderIcon,
  BootstrapIcon,
  CSharpIcon,
  CSS3Icon,
  DockerIcon,
  ExpressJSIcon,
  FlaskIcon,
  FolderIcon,
  GitHubIcon,
  GitIcon,
  GridView,
  HTML5Icon,
  JavaIcon,
  JavascriptIcon,
  JiraIcon,
  JQueryIcon,
  ListView,
  M365Icon,
  Material_UIIcon,
  MongoDBIcon,
  MySQLIconSmall,
  NextJSIcon,
  NodeJSIcon,
  PostCSSIcon,
  PostgreSQLIcon,
  PowerShellIcon,
  Python3Icon,
  ReactJSIcon,
  SQLiteIcon,
  Tailwind_CSSIcon,
  TypeScriptIcon,
  UbuntuIcon,
  UnityIcon,
  Visual_StudioIcon,
  VMWareIcon,
  WebpackIcon,
  WindowsIcon,
} from "../components/Icons";

import "./_skills.css";
import CodeSegment, { CodeIndent } from "../components/CodeSegment";
import { Blue, Light, LightGreen, Orange, Red, Yellow } from "../components/ColoredText";

enum SkillType {
  Languages = "languages",
  Frameworks = "frameworks",
  Software = "software",
  Database = "database",
  Tools = "tools",
  OS = "platforms",
  ALL = "all_skills",
}

type Skill = {
  icon: JSX.Element;
  name: string;
  skillType: SkillType;
};

const StartingSkills: Skill[] = [
  {
    icon: <Tailwind_CSSIcon />,
    name: "Tailwind",
    skillType: SkillType.Frameworks,
  },
  {
    icon: <HTML5Icon />,
    name: "HTML",
    skillType: SkillType.Languages,
  },
  {
    icon: <CSS3Icon />,
    name: "CSS",
    skillType: SkillType.Languages,
  },
  {
    icon: <JavascriptIcon />,
    name: "JavaScript",
    skillType: SkillType.Languages,
  },
  {
    icon: <TypeScriptIcon />,
    name: "TypeScript",
    skillType: SkillType.Languages,
  },
  {
    icon: <ReactJSIcon />,
    name: "React",
    skillType: SkillType.Frameworks,
  },
  {
    icon: <NextJSIcon />,
    name: "NextJS",
    skillType: SkillType.Frameworks,
  },
  {
    icon: <GitIcon />,
    name: "Git",
    skillType: SkillType.Software,
  },
  {
    icon: <DockerIcon />,
    name: "Docker",
    skillType: SkillType.Software,
  },
  {
    icon: <WindowsIcon />,
    name: "Windows",
    skillType: SkillType.OS,
  },
  {
    icon: <UbuntuIcon />,
    name: "Ubuntu",
    skillType: SkillType.OS,
  },
  {
    icon: <Visual_StudioIcon />,
    name: "Visual Studio",
    skillType: SkillType.Software,
  },
  {
    icon: <BashIcon />,
    name: "Shell",
    skillType: SkillType.Languages,
  },
  {
    icon: <CSharpIcon />,
    name: "C#",
    skillType: SkillType.Languages,
  },
  {
    icon: <VMWareIcon />,
    name: "VMWare",
    skillType: SkillType.Software,
  },
  {
    icon: <NodeJSIcon />,
    name: "NodeJS",
    skillType: SkillType.Frameworks,
  },
  {
    icon: <PowerShellIcon />,
    name: "PowerShell",
    skillType: SkillType.Languages,
  },
  {
    icon: <Python3Icon />,
    name: "Python 3",
    skillType: SkillType.Languages,
  },
  {
    icon: <FlaskIcon />,
    name: "Flask",
    skillType: SkillType.Frameworks,
  },
  {
    icon: <JiraIcon />,
    name: "Atlassian Products",
    skillType: SkillType.Software,
  },
  {
    icon: <MongoDBIcon />,
    name: "MongoDB",
    skillType: SkillType.Database,
  },
  {
    icon: (
      <span className="text-custom-text-100">
        <GitHubIcon color="currentColor" />
      </span>
    ),
    name: "GitHub",
    skillType: SkillType.Software,
  },
  {
    icon: (
      <span className="text-custom-blue">
        <JQueryIcon color="currentColor" />
      </span>
    ),
    name: "JQuery",
    skillType: SkillType.Frameworks,
  },
  {
    icon: <Material_UIIcon />,
    name: "Material UI",
    skillType: SkillType.Frameworks,
  },
  {
    icon: <BootstrapIcon />,
    name: "Bootstrap",
    skillType: SkillType.Frameworks,
  },
  {
    icon: <BlenderIcon />,
    name: "Blender",
    skillType: SkillType.Software,
  },
  {
    icon: <ExpressJSIcon />,
    name: "Express",
    skillType: SkillType.Frameworks,
  },
  {
    icon: <MySQLIconSmall />,
    name: "MySQL",
    skillType: SkillType.Database,
  },
  {
    icon: <PostgreSQLIcon />,
    name: "PostgreSQL",
    skillType: SkillType.Database,
  },
  {
    icon: <SQLiteIcon />,
    name: "SQLite",
    skillType: SkillType.Database,
  },
  {
    icon: <PostCSSIcon />,
    name: "PostCSS",
    skillType: SkillType.Tools,
  },
  {
    icon: <WebpackIcon />,
    name: "Webpack",
    skillType: SkillType.Tools,
  },
  {
    icon: <JavaIcon />,
    name: "Java",
    skillType: SkillType.Languages,
  },
  {
    icon: <Adobe_CCIcon />,
    name: "Adobe CC",
    skillType: SkillType.Software,
  },
  {
    icon: <M365Icon />,
    name: "M365",
    skillType: SkillType.Software,
  },
  {
    icon: <UnityIcon />,
    name: "Unity",
    skillType: SkillType.Software,
  },
].sort((a, b) => (a.skillType > b.skillType ? 1 : -1));

export default function About() {
	const [selectedFilter, setSelectedFilter] = useState<SkillType>(SkillType.ALL);
  const [compactView, setCompactView] = useState<boolean>(true);
  const [skills, setSkills] = useState<Skill[]>(StartingSkills);
  const [directoryTree, setDirectoryTree] = useState<DirectoryItem[]>([
    {
      icon: <FolderIcon />,
      name: "..",
      disabled: true,
    },
    {
      icon: <M365Icon />,
      name: "all_skills",
      selected: true,
      onClick: () => filterSkills(SkillType.ALL),
    },
    {
      icon: <Python3Icon />,
      name: "languages",
      onClick: () => filterSkills(SkillType.Languages),
    },
    {
      icon: <NextJSIcon />,
      name: "frameworks",
      onClick: () => filterSkills(SkillType.Frameworks),
    },
    {
      icon: <JiraIcon />,
      name: "software",
      onClick: () => filterSkills(SkillType.Software),
    },
    {
      icon: <MongoDBIcon />,
      name: "database",
      onClick: () => filterSkills(SkillType.Database),
    },
    {
      icon: <UbuntuIcon />,
      name: "platforms",
      onClick: () => filterSkills(SkillType.OS),
    },
  ]);

  const filterSkills = (type: SkillType) => {
		setSelectedFilter(type);
    if (type === SkillType.ALL) {
      setDirectoryTree((oldTree) => updateSelectedItem(oldTree, "All Skills"));
      setSkills(StartingSkills);
    } else {
      setDirectoryTree((oldTree) => updateSelectedItem(oldTree, type));
      setSkills(StartingSkills.filter((skill) => skill.skillType === type));
    }
  };

  return (
    <>
      <div id="skills" className="w-full h-full flex flex-grow">
        <SideBar tree={directoryTree} title="~/skills/" />
        <div className="p-4 w-full h-full flex-grow">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-2xl italic text-custom-red uppercase max-[750px]:text-center flex-grow">
              [ {selectedFilter} ]
            </h1>
            <div
              className="flex flex-row items-center gap-2 font-bold cursor-pointer text-custom-text-300 relative overflow-hidden w-32 h-10"
              onClick={() => setCompactView(!compactView)}
            >
              <div
                className="flex flex-row items-center gap-2 absolute transition-transform"
                style={{
                  transform: compactView ? "translateY(0)" : "translateY(-5em)",
                }}
              >
                List <ListView height="3em" width="3em" />
              </div>
              <div
                className="flex flex-row items-center gap-2 absolute transition-transform"
                style={{
                  transform: compactView ? "translateY(-5em)" : "translateY(0)",
                }}
              >
                Grid <GridView height="3em" width="3em" />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-1 mt-4">
            <div
              className={`flex flex-wrap flex-grow-0 w-[60%] p-4 ${
                compactView ? "gap-2" : "gap-3"
              } flex-grow-0 overflow-auto w-auto`}
              style={{ fontSize: compactView ? "1.25em" : "2em" }}
            >
              {skills.map((skill, index) => (
                <div
                  key={`skills-item-${index}`}
                  className={`skills-item ${
                    compactView ? "skills-item-compact" : ""
                  }`}
                >
                  {skill.icon}
                  <span className="skills-item-title">{skill.name}</span>
                </div>
              ))}
            </div>
						<div className="border-l-2 border-custom-text-300 px-4 mt-4 w-[40%]">
							<CodeSegment keyPrefix="skills">
								<br />
								<br />
								<Red className="font-bold italic">{"<skills>"}</Red>
								<br />
								<br />
								<Orange>def</Orange>
								<Yellow> skills</Yellow>
								<Orange>()</Orange>
								<Light>:</Light>
								<br />
								<CodeIndent>
									These are the <Blue>technologies</Blue>,{" "}
									<Blue>languages</Blue>, and <Blue>methodologies </Blue>
									that I am <Yellow>familiar with</Yellow>.
									<br />
									<br />
									Each of these <Blue>technologies</Blue> has played a{" "}
									<Red>key role</Red> in <LightGreen>one </LightGreen>
									or <LightGreen> multiple</LightGreen> of the{" "}
									<Red>projects</Red> that I have worked on.
								</CodeIndent>
								<br />
								<br />
							</CodeSegment>
						</div>
						{/* <img src="/public/images/2001.jpg" className="w-[300px]"></img> */}
          </div>
        </div>
      </div>
      <Footer>
        <span className="text-custom-text-300">
          cam@portfolio:/home/cam/_skills/{" "}
          <strong>
            {` > cat `}
            <Orange className="lowercase">
              {selectedFilter.replace(" ", "_")}
            </Orange>{" "}
            | {`as-${compactView ? "list" : "grid"} `}
          </strong>
          <strong className="blinking-text">_</strong>
        </span>
      </Footer>
    </>
  );
}
