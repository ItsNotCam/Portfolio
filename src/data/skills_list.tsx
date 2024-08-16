import { Tailwind_CSSIcon, HTML5Icon, CSS3Icon, JavascriptIcon, TypeScriptIcon, ReactJSIcon, NextJSIcon, GitIcon, DockerIcon, WindowsIcon, UbuntuIcon, BashIcon, CSharpIcon, VMWareIcon, NodeJSIcon, PowerShellIcon, Python3Icon, FlaskIcon, JiraIcon, MongoDBIcon, GitHubIcon, JQueryIcon, Material_UIIcon, BootstrapIcon, ExpressJSIcon, MySQLIconSmall, PostgreSQLIcon, SQLiteIcon, PostCSSIcon, JavaIcon, SQLServerIcon, UnityIcon, Visual_StudioIcon, BlenderIcon, WebpackIcon, Adobe_CCIcon, M365Icon, NPMIcon, BitBucketIcon, PSIcon, FigmaIcon, IllustratorIcon, XDIcon, RedisIcon, WordIcon, ExcelIcon, IISIcon, VSCodeIcon, PyCharmLogo, IntelliJLogo } from "../components/Icons";

export enum SkillType {
  Languages = "languages",
  Frameworks = "frameworks",
  Software = "software",
  Database = "database",
  Tools = "tools",
  OS = "platforms",
  ALL = "all_skills",
}

export enum SubSkillType {
	All = "All",
	Admin = "Administrative",
	Backend = "Backend",
	Collaborative = "Collaborative",
	Creative = "Creative",
	DevTool = "Dev Tool",
	Frontend = "Frontend",
	Scripting = "Scripting",
}

export enum Skill {
	Adobe_CC = "Adobe CC",
	Illustrator = "Illustrator",
	XD = "Experience Designer",
	PS = "Photoshop",
	Bash = "Bash",
	BitBucket = "BitBucket",
	Blender = "Blender",
	Bootstrap = "Bootstrap",
	CSharp = "C#",
	CSS = "CSS",
	Docker = "Docker",
	Express = "Express",
	Figma = "Figma",
	Flask = "Flask",
	Git = "Git",
	HTML = "HTML",
	IIS = "Windows IIS",
	Java = "Java",
	JavaScript = "JavaScript",
	Jira = "Jira",
	JQuery = "JQuery",
	IntelliJ = "IntelliJ",
	M365 = "Microsoft 365",
	MUI = "Material UI",
	Excel = "Excel",
	Word = "Word",
	MySQL = "MySQL",
	NextJS = "NextJS",
	NodeJS = "NodeJS",
	NPM = "NPM",
	PostCSS = "PostCSS",
	PostgreSQL = "PostgreSQL",
	PowerShell = "PowerShell",
	PyCharm = "PyCharm",
	Python = "Python",
	React = "React",
	Redis = "Redis",
	SQLite = "SQLite",
	SQL_Server = "SQL Server",
	Tailwind = "Tailwind",
	TypeScript = "TypeScript",
	Ubuntu = "Ubuntu",
	Unity = "Unity",
	VMWare = "VMWare",
	Visual_Studio = "Visual Studio",
	Visual_Studio_Code = "Visual Studio Code",
	Webpack = "Webpack",
	Windows = "Windows",
}


export type SkillListItem = {
  icon: JSX.Element;
  name: string;
  skillType: SkillType;
	subSkillTypes?: SubSkillType[];
};

export const StartingSkills: SkillListItem[] = [
  {
		icon: <Adobe_CCIcon />,
		name: "Adobe CC",
		skillType: SkillType.Software,
		subSkillTypes: [SubSkillType.Creative]
	},
	{
    icon: <IllustratorIcon />,
    name: "Illustrator",
    skillType: SkillType.Software,
		subSkillTypes: [SubSkillType.Creative]
  },
  {
    icon: <XDIcon />,
    name: "Experience Designer",
    skillType: SkillType.Software,
		subSkillTypes: [SubSkillType.Creative]
  },
  {
    icon: <PSIcon />,
    name: "Photoshop",
    skillType: SkillType.Software,
		subSkillTypes: [SubSkillType.Creative]
  },
  {
    icon: <BashIcon />,
    name: "Bash",
    skillType: SkillType.Languages,
		subSkillTypes: [SubSkillType.Scripting]
  },
  {
    icon: <BitBucketIcon />,
    name: "BitBucket",
    skillType: SkillType.Software,
		subSkillTypes: [SubSkillType.Collaborative]
  },
  {
    icon: <BlenderIcon />,
    name: "Blender",
    skillType: SkillType.Software,
		subSkillTypes: [SubSkillType.Creative]
  },
  {
    icon: <BootstrapIcon />,
    name: "Bootstrap",
    skillType: SkillType.Frameworks,
		subSkillTypes: [SubSkillType.Frontend]
  },
  {
    icon: <CSharpIcon />,
    name: "C#",
    skillType: SkillType.Languages,
		subSkillTypes: [SubSkillType.Backend]
  },
  {
    icon: <CSS3Icon />,
    name: "CSS",
    skillType: SkillType.Languages,
		subSkillTypes: [SubSkillType.Frontend]
  },
  {
    icon: <DockerIcon />,
    name: "Docker",
    skillType: SkillType.Tools,
		subSkillTypes: [SubSkillType.DevTool,SubSkillType.Backend]
  },
  {
    icon: <ExpressJSIcon />,
    name: "Express",
    skillType: SkillType.Frameworks,
		subSkillTypes: [SubSkillType.Backend]
  },
  {
    icon: <FigmaIcon />,
    name: "Figma",
    skillType: SkillType.Software,
		subSkillTypes: [SubSkillType.Creative]
  },
  {
    icon: <FlaskIcon />,
    name: "Flask",
    skillType: SkillType.Frameworks,
		subSkillTypes: [SubSkillType.Backend]
  },
	
  {
    icon: <GitIcon />,
    name: "Git",
    skillType: SkillType.Tools,
		subSkillTypes: [SubSkillType.Collaborative]
  },
  // {
  //   icon: <GitHubIcon color="currentColor" />,
  //   name: "GitHub",
  //   skillType: SkillType.Tools,
  // },
  {
    icon: <HTML5Icon />,
    name: "HTML",
    skillType: SkillType.Languages,
		subSkillTypes: [SubSkillType.Frontend]
  },
  {
    icon: <IISIcon />,
    name: "Windows IIS",
    skillType: SkillType.Software,
		subSkillTypes: [SubSkillType.Backend]
  },
  {
    icon: <JavaIcon />,
    name: "Java",
    skillType: SkillType.Languages,
		subSkillTypes: [SubSkillType.Backend]
  },
  {
    icon: <JavascriptIcon />,
    name: "JavaScript",
    skillType: SkillType.Languages,
		subSkillTypes: [SubSkillType.Frontend, SubSkillType.Backend]
  },
  {
    icon: <JiraIcon />,
    name: "Jira",
    skillType: SkillType.Software,
		subSkillTypes: [SubSkillType.Collaborative]
  },
  {
    icon: <JQueryIcon />,
    name: "JQuery",
    skillType: SkillType.Frameworks,
		subSkillTypes: [SubSkillType.Frontend]
  },
  {
    icon: <IntelliJLogo height="1.25em" width="1.25em"/>,
    name: "IntelliJ",
    skillType: SkillType.Software,
		subSkillTypes: [SubSkillType.DevTool]
  },
  {	
		icon: <M365Icon />,
    name: "Microsoft 365",
    skillType: SkillType.Software,
		subSkillTypes: [SubSkillType.Admin]
  },
  { 
    icon: <Material_UIIcon />,
    name: "Material UI",
    skillType: SkillType.Frameworks,
		subSkillTypes: [SubSkillType.Frontend]
  },
  {
    icon: <ExcelIcon />,
    name: "Excel",
    skillType: SkillType.Software,
		subSkillTypes: [SubSkillType.Admin]
  },
  {
    icon: <WordIcon />,
    name: "Word",
    skillType: SkillType.Software,
		subSkillTypes: [SubSkillType.Admin]
  },
  // {
  //   icon: <MongoDBIcon />,
  //   name: "MongoDB",
  //   skillType: SkillType.Database,
	// 	subSkillTypes: [SubSkillType.Backend]
  // },
  {
    icon: <MySQLIconSmall />,
    name: "MySQL",
    skillType: SkillType.Database,
		subSkillTypes: [SubSkillType.Backend]
  },
  {
    icon: <NextJSIcon />,
    name: "NextJS",
    skillType: SkillType.Frameworks,
		subSkillTypes: [SubSkillType.Backend]
  },
  {
    icon: <NodeJSIcon />,
    name: "NodeJS",
    skillType: SkillType.Frameworks,
		subSkillTypes: [SubSkillType.Backend]
  },
  {
    icon: <NPMIcon />,
    name: "NPM",
    skillType: SkillType.Tools,
		subSkillTypes: [SubSkillType.Frontend, SubSkillType.Backend]
  },
  {
    icon: <PostCSSIcon />,
    name: "PostCSS",
    skillType: SkillType.Frameworks,
		subSkillTypes: [SubSkillType.Frontend]
  },
  {
    icon: <PostgreSQLIcon />,
    name: "PostgreSQL",
    skillType: SkillType.Database,
		subSkillTypes: [SubSkillType.Backend]
  },
  {
    icon: <PowerShellIcon />,
    name: "PowerShell",
    skillType: SkillType.Languages,
		subSkillTypes: [SubSkillType.Scripting]
  },
  {
    icon: <PyCharmLogo height="1.25em" width="1.25em"/>,
    name: "PyCharm",
    skillType: SkillType.Software,
		subSkillTypes: [SubSkillType.DevTool]
  },
  {
    icon: <Python3Icon />,
    name: "Python",
    skillType: SkillType.Languages,
		subSkillTypes: [SubSkillType.Backend, SubSkillType.Scripting]
  },
  {
    icon: <ReactJSIcon />,
    name: "React",
    skillType: SkillType.Frameworks,
		subSkillTypes: [SubSkillType.Frontend]
  },
  {
    icon: <RedisIcon />,
    name: "Redis",
    skillType: SkillType.Database,
		subSkillTypes: [SubSkillType.Backend]
  },
  {
    icon: <SQLiteIcon />,
    name: "SQLite",
    skillType: SkillType.Database,
		subSkillTypes: [SubSkillType.Backend]
  },
  {
    icon: <SQLServerIcon />,
    name: "SQL Server",
    skillType: SkillType.Database,
		subSkillTypes: [SubSkillType.Backend]
  },
  {
    icon: <Tailwind_CSSIcon />,
    name: "Tailwind",
    skillType: SkillType.Frameworks,
		subSkillTypes: [SubSkillType.Frontend]
  },
  {
    icon: <TypeScriptIcon />,
    name: "TypeScript",
    skillType: SkillType.Languages,
		subSkillTypes: [SubSkillType.Frontend, SubSkillType.Backend]
  },
  {
    icon: <UbuntuIcon />,
    name: "Ubuntu",
    skillType: SkillType.OS,
  },
  {
    icon: <UnityIcon />,
    name: "Unity",
    skillType: SkillType.Software,
		subSkillTypes: [SubSkillType.Creative]
  },
  {
    icon: <VMWareIcon />,
    name: "VMWare",
    skillType: SkillType.Software,
		subSkillTypes: [SubSkillType.DevTool]
  },
  {
    icon: <Visual_StudioIcon />,
    name: "Visual Studio",
    skillType: SkillType.Software,
		subSkillTypes: [SubSkillType.DevTool]
  },
  {
    icon: <VSCodeIcon height="1.25em" width="1.25em"/>,
    name: "Visual Studio Code",
    skillType: SkillType.Software,
		subSkillTypes: [SubSkillType.DevTool]
  },
  {
    icon: <WebpackIcon />,
    name: "Webpack",
    skillType: SkillType.Tools,
		subSkillTypes: [SubSkillType.Frontend, SubSkillType.Backend]
  },
  {
    icon: <WindowsIcon />,
    name: "Windows",
    skillType: SkillType.OS
  },
]

export type SkillMapType = {
	[key: string]: SubSkillType[];
}

// something to map subskills to their respective skill types automatically
let mappedSubSkills: SkillMapType = {} as SkillMapType;
Object.values(SkillType).forEach((skillType: SkillType) => {
	StartingSkills.filter((skill) =>
		(skill.skillType === skillType) &&
		(skill.subSkillTypes || []).length > 0
	).forEach((skill) => {
		const subSkillTypes = skill.subSkillTypes || [];
		if (subSkillTypes.length < 1) return;

		if (mappedSubSkills[skillType] === undefined) {
			mappedSubSkills[skillType] = [...subSkillTypes];
		} else {
			subSkillTypes.forEach((subSkillType) => {
				if (
					mappedSubSkills[skillType].indexOf(subSkillType) === -1
				) {
					mappedSubSkills[skillType].push(subSkillType);
				}
			});
		}
	});
});
export const MappedSubSkills: SkillMapType = mappedSubSkills;