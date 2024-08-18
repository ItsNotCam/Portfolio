import Footer from "../../components/footer/Footer";
import { FileIcon, FolderIcon } from "../../components/Icons";
import { ListBefore } from "../../components/ListBefore";
import SideBar, { DirectoryItem } from "../../components/sidebar/Sidebar";
import { WorkList } from "../../data/work_list";
import SkillsListComponent from "../../components/SkillsList";

export default function About() {
  const tree: DirectoryItem[] = [
    {
      icon: <FolderIcon />,
      name: "..",
      disabled: true,
      id: "..1"
    },{
      icon: <FolderIcon />,
      name: "May - Dec. 2024",
      id: "2024",
      children: [{
        icon: <FileIcon />,
        name: "BAE SWE Intern",
        id: "BAE_SWE_Intern",
        color: "text-custom-light-green"
      },{
        icon: <FileIcon />,
        name: "Full-Time Student",
        id: "Full_Time_Student_2024",
        color: "text-custom-blue/85"
      },{
        icon: <FileIcon />,
        name: "Summer Classes",
        id: "Summer_Classes_2024",
      },{
        icon: <FolderIcon />,
        name: "..",
        id: "..2",
        disabled: true,
      }]
    },{
      icon: <FolderIcon />,
      name: "2020 - 2024",
      id: "Sep_2020_Jan_2024",
      children: [{
        icon: <FileIcon />,
        name: "Self-Employed",
        id: "Self_Employed",
        color: "text-custom-light-green"
      },{
        icon: <FileIcon />,
        name: "Full-Time Student",
        id: "Full_Time_Student",
        color: "text-custom-blue/85"
      },{
        icon: <FileIcon />,
        name: "Summer Classes",
        id: "Summer_Classes_2024",
      },{
        icon: <FolderIcon />,
        name: "..",
        id: "..2",
        disabled: true,
      }],
    },{
      icon: <FolderIcon />,
      name: "2019 - 2020",
      id: "2019_2020",
      children: [{
        icon: <FileIcon />,
        name: "BAE DevOps Intern",
        id: "BAE_SWE_Intern_IT",
        color: "text-custom-light-green"
      },{
        icon: <FileIcon />,
        name: "BAE Sys. Intern",
        id: "Sys_Admin_Intern_II",
        color: "text-custom-light-green"
      },{
        icon: <FileIcon />,
        name: "College Prep",
        id: "College_Prep",
        // color: "text-custom-blue/85"
      },{
        icon: <FolderIcon />,
        name: "..",
        id: "..2",
        disabled: true,
      }],
    }
  ]

  return (
    <>
      <div id="work" className="flex flex-grow overflow-auto">
        <SideBar tree={tree} title="~/Responsibilities/" fontSize="0.85rem"/>
          <div className="mutex-hover-list flex flex-col flex-grow-0 gap-4 p-2 mr-2 overflow-y-auto text-custom-text-300 cursor-default">
            {WorkList.map((work, index) => (
              <div
                id={`project-item-${work.company}-${work.title.join("_")}`}
                key={`project-item-${work.company}-${work.title.join("_")}`}
                className="flex flex-row gap-4 rounded-md transition-opacity duration-300"
              >
                <ListBefore text={work.timeframe} />
                <div
                  id={`card-${work.company}-${work.title.join("_")}`}
                  key={`project-${index}`}
                  className="mutex-hover-list-child flex flex-col p-4 transition-all rounded-sm flex-grow gap-2 bg-custom-off-dark-300/5 backdrop-blur-lg"
                >
                  <p className="transition-colors duration-200">
                    <ul className="text-xl text-custom-blue hover:underline">{work.title.map(t => <li>{t}</li>)}</ul>
                    <span className="text-lg text-custom-text-300">{work.company} {work.location}</span>
                  </p>
                  <div className="text-sm transition-colors duration-1000">
                    {work.description}
                  </div>
                  <SkillsListComponent skills={work.skills} />
                </div>
              </div>
            ))}
          </div>
      </div>
      <Footer>
        <span className="text-custom-text-300">
          cam@portfolio:/home/cam/_work <strong>{` > `}</strong>{" "}
          <strong className="blinking-text">_</strong>
        </span>
      </Footer>
    </>
  );
}