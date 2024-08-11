import { useState } from "react";
import Footer from "../../components/footer/Footer";
import SideBar, {
  DirectoryItem,
  updateSelectedItem,
} from "../../components/sidebar/Sidebar";
import {
	DockerIcon,
  FolderIcon,
  GridView,
  JiraIcon,
  ListView,
  M365Icon,
  MongoDBIcon,
  NextJSIcon,
  PostCSSIcon,
  Python3Icon,
  UbuntuIcon,
	WebpackIcon,
} from "../../components/Icons";

import "./skills.css";
import { Orange } from "../../components/ColoredText";
import { Skill, SkillType, StartingSkills } from "../../data/skills_list";

export default function About() {
  const [selectedFilter, setSelectedFilter] = useState<SkillType>(SkillType.ALL);
  const [compactView, setCompactView] = useState<boolean>(true);
  const [skills, setSkills] = useState<Skill[]>(StartingSkills);
  const [directoryTree, setDirectoryTree] = useState<DirectoryItem[]>([
    {
      icon: <FolderIcon />,
      name: "..",
      disabled: true,
      id: "root"
    },
    {
      icon: <M365Icon />,
      name: "all_skills",
      id: "all_skills",
      selected: true,
      onClick: () => filterSkills(SkillType.ALL),
    },
    {
      icon: <Python3Icon />,
      name: "languages",
      id: "languages",
      onClick: () => filterSkills(SkillType.Languages),
    },
    {
      icon: <NextJSIcon />,
      name: "frameworks",
      id: "frameworks",
      onClick: () => filterSkills(SkillType.Frameworks),
    },
    {
      icon: <JiraIcon />,
      name: "software",
      id: "software",
      onClick: () => filterSkills(SkillType.Software),
    },
    {
      icon: <MongoDBIcon />,
      name: "database",
      id: "database",
      onClick: () => filterSkills(SkillType.Database),
    },
    {
      icon: <DockerIcon />,
      name: "tools",
      id: "tools",
      onClick: () => filterSkills(SkillType.Tools),
    },
    {
      icon: <UbuntuIcon />,
      name: "platforms",
      id: "platforms",
      onClick: () => filterSkills(SkillType.OS),
    },
  ]);

	/**
	 * Filters the skills based on the provided type.
	 * 
	 * @param type - The type of skill to filter.
	 */
  const filterSkills = (type: SkillType) => {
    setSelectedFilter(type);
    if (type === SkillType.ALL) {
      setDirectoryTree((oldTree) => updateSelectedItem(oldTree, "all_skills"));
      setSkills(StartingSkills);
    } else {
      setDirectoryTree((oldTree) => updateSelectedItem(oldTree, type));
      setSkills(StartingSkills.filter((skill) => skill.skillType === type));
    }
  };

  return (
    <>
      <div id="skills" className="flex flex-grow overflow-auto">
        <SideBar tree={directoryTree} title="~/skills/" fontSize="0.9rem"/>
        <div className="p-4 w-full h-full flex-grow">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-2xl italic text-custom-red uppercase max-[750px]:text-center flex-grow">
              [ {selectedFilter} ]
            </h1>
            <div
              className="flex flex-row justify-end items-center gap-2 font-bold cursor-pointer text-custom-text-300 relative overflow-hidden w-32 h-10"
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
          {/* <div className="flex flex-row gap-1 mt-4 max-w-[100%]"> */}
            <div
              className="flex flex-row flex-wrap flex-grow-0 gap-2 mt-4"
              style={{ fontSize: compactView ? "1.25em" : "2em" }}
            >
              {skills.map((skill, index) => (
                <div
                  key={`skills-item-${index}`}
                  className={`skills-item ${compactView ? "skills-item-compact" : ""}`}
                >
                  {skill.icon}
                  <span className="skills-item-title">{skill.name}</span>
                  <span className="skills-item-title__static text-base	">{skill.name}</span>
                </div>
              ))}
            {/* </div> */}
            {/* <div className="border-l-2 border-custom-text-300 px-4 mt-4 w-[40%]">
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
            </div> */}
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
