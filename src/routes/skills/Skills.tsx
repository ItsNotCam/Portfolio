import { useEffect, useRef, useState } from "react";
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
  Python3Icon,
  UbuntuIcon,
} from "../../components/Icons";

import "./skills.css";
import { Orange } from "../../components/ColoredText";
import { MappedSubSkills, Skill, SkillType, StartingSkills, SubSkillType } from "../../data/skills_list";

enum SortMode {
	ASCENDING = "ascending",
	DESCENDING = "descending",
}

export default function About() {
  const [selectedFilter, setSelectedFilter] = useState<SkillType>(SkillType.ALL);
  const [selectedSubFilter, setSelectedSubFilter] = useState<SubSkillType>(SubSkillType.All);
  const [compactView, setCompactView] = useState<boolean>(true);
  const [skills, setSkills] = useState<Skill[]>(StartingSkills);
  const [directoryTree, setDirectoryTree] = useState<DirectoryItem[]>([
    {
      icon: <FolderIcon />,
      name: "..",
      disabled: true,
      id: "root",
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
	const [sortMode, setSortMode] = useState<SortMode>(SortMode.ASCENDING);

  const mappedSubSkills = useRef(MappedSubSkills);

	const updateSubFilter = (subFilter: SubSkillType) => {
		setSelectedSubFilter(subFilter);
	
		if (selectedFilter !== SkillType.ALL) {
			setSkills(StartingSkills.filter((skill) =>
				(skill.skillType === selectedFilter) &&
				(skill.subSkillTypes!.includes(subFilter) || subFilter === SubSkillType.All)
			));
		} else if(subFilter === SubSkillType.All) {
			setSkills(StartingSkills);
		} else {
			setSkills(StartingSkills.filter(
				(skill) => skill.subSkillTypes?.includes(subFilter)
			));
		}
	};

	const sortSkills = (sortMode: SortMode) => {
		if (sortMode === SortMode.ASCENDING) {
			setSkills((oldSkills) => oldSkills.sort((a, b) => a.name.localeCompare(b.name)));
		} else {
			setSkills((oldSkills) => oldSkills.sort((a, b) => b.name.localeCompare(a.name)));
		}
		setSortMode(sortMode);
	}

  /**
   * Filters the skills based on the provided type.
   *
   * @param type - The type of skill to filter.
   */
  const filterSkills = (type: SkillType) => {
		setSelectedSubFilter(SubSkillType.All);
    setSelectedFilter(type);
    if (type === SkillType.ALL) {
      setDirectoryTree((oldTree) => updateSelectedItem(oldTree, "all_skills"));
      setSkills(StartingSkills);
    } else {
      setDirectoryTree((oldTree) => updateSelectedItem(oldTree, type));
      setSkills(StartingSkills.filter((skill) => skill.skillType === type));
    }
  };

  const MappedSubSkillsOptions = () => {
    return (
      <>
        {selectedFilter === SkillType.ALL ? (
          Object.values(SubSkillType).map((sst: SubSkillType) => (
            <option key={`option-${sst}`} value={sst} selected={sst === selectedSubFilter}>
              {sst}
            </option>
          ))
        ) : (
          <>
            <option value={SubSkillType.All}>{SubSkillType.All}</option>
            {mappedSubSkills.current[selectedFilter]?.map(
              (subSkillType: SubSkillType) => (
                <option
                  key={`option-${subSkillType}`}
                  value={subSkillType}
                  selected={subSkillType === selectedSubFilter}
                >
                  {subSkillType}
                </option>
              )
            )}
          </>
        )}
      </>
    );
  };

  return (
    <>
      <div id="skills" className="flex flex-grow overflow-auto">
        <SideBar tree={directoryTree} title="~/skills/" fontSize="0.9rem" />
        <div className="p-4 w-full h-full flex-grow">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-2xl italic text-custom-red uppercase flex-grow">
              [ {selectedFilter} ]
            </h1>
						{/* <select value={sortMode} onChange={(e) => sortSkills(e.target.value as SortMode)}>
							<option value={SortMode.ASCENDING}>Ascending</option>
							<option value={SortMode.DESCENDING}>Descending</option>
						</select> */}
						{(mappedSubSkills.current[selectedFilter]?.length > 1 || selectedFilter === SkillType.ALL) && (
							<select onChange={(e) => updateSubFilter(e.target.value as SubSkillType)} className="ml-auto">
								<MappedSubSkillsOptions />
							</select>
						)}
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
                <span className="skills-item-title__static text-base	">
                  {skill.name}
                </span>
              </div>
            ))}
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
