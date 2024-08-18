import { FileOpen } from "@mui/icons-material";
import Footer from "../../components/footer/Footer";
import { FileIcon, FolderIcon } from "../../components/Icons";
import { ListBefore } from "../../components/ListBefore";
import SideBar, { DirectoryItem } from "../../components/sidebar/Sidebar";
import { WorkList } from "../../data/work_list";
import { Skill } from "../../data/project_list";
import { ReactNode } from "react";
import SkillsListComponent from "../../components/SkillsList";

const ProjectTitle = (props: { title: string }): ReactNode => (
	<div className="project-item__header-link flex flex-row flex-grow cursor-pointer">
		<h2 className="text-lg text-custom-blue hover:underline transition-colors duration-200">
			{props.title}
		</h2>
	</div>
);

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
				<div className="project-grid grid gap-1 w-full overflow-x-hidden">
          <div
            id="project-list"
            className="flex flex-col flex-grow-0 gap-4 p-2 mr-2 overflow-y-auto text-custom-text-300 cursor-default"
          >
            {WorkList.map((work, index) => (
              <div
                id={`project-item-${work.company}-${work.title.join("_")}`}
                key={`project-item-${work.company}-${work.title.join("_")}`}
                className="project-item flex flex-row gap-4 rounded-md transition-opacity duration-300"
              >
                <ListBefore text={work.timeframe} />
                <div
                  id={`card-${work.company}-${work.title.join("_")}`}
                  key={`project-${index}`}
                  className="project-content cursor-pointer"
                >
									<ProjectTitle title={`${work.title.join("\n")} ${work.company} ${work.location}`}/>
                  <div className="text-sm transition-colors duration-1000">
                    {work.description}
                  </div>
                  <SkillsListComponent skills={work.skills} />
                </div>
              </div>
            ))}
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