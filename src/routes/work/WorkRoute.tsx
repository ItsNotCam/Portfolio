import Footer from "../../components/footer/Footer";
import { FileIcon, FolderIcon } from "../../components/Icons";
import { ListBefore } from "../../components/ListBefore";
import SideBar, { DirectoryItem } from "../../components/sidebar/Sidebar";
import SkillsListComponent from "../../components/SkillsList";
import { WorkList } from "../../data/work_list";

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
        <SideBar
          tree={tree}
          title="~/_projects/"
          fontSize="0.9rem"
          alwaysVisible={false}
        />
        <div className="project-grid grid gap-1 w-full overflow-x-hidden">
          <div id="project-list" className="mutex-hover-list card-list">
            {WorkList.map((work, index) => (
              <div
                id={`work-item-${index}`}
                key={`work-item-${index}`}
                className="mutex-hover-list-child card"
              >
                <ListBefore text={work.timeframe} />
                <div
                  id={`card-${index}`}
                  key={`work-${index}`}
                  className="card-content cursor-pointer"
                  // onClick={() => updateSelection(work)}
                >
                  <div
                    id={`project-header-${index}`}
                    className="flex flex-row justify-between items-center"
                  >
										<div>
											<h1 className="text-lg text-custom-blue hover:underline transition-colors duration-200">
												{work.company}
											</h1>
											<p className="text-sm text-custom-text-100">
												{work.title.map((t, i) => ( i !== 0 
													? <span><br/>{t}</span> 
													: <span>{t}</span>)
												)}
											</p>
										</div>
										<span className="text-sm">
											{work.timeframe}
										</span>
                  </div>
                  <div className="text-sm transition-colors duration-1000">
                    {work.description}
                  </div>
                  <SkillsListComponent skills={work.skills} />
                </div>
              </div>
            ))}
          </div>
          <div>
            Hello
          </div>
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