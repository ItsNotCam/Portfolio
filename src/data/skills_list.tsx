import { Tailwind_CSSIcon, HTML5Icon, CSS3Icon, JavascriptIcon, TypeScriptIcon, ReactJSIcon, NextJSIcon, GitIcon, DockerIcon, WindowsIcon, UbuntuIcon, BashIcon, CSharpIcon, VMWareIcon, NodeJSIcon, PowerShellIcon, Python3Icon, FlaskIcon, JiraIcon, MongoDBIcon, GitHubIcon, JQueryIcon, Material_UIIcon, BootstrapIcon, ExpressJSIcon, MySQLIconSmall, PostgreSQLIcon, SQLiteIcon, PostCSSIcon, JavaIcon, SQLServerIcon, UnityIcon, Visual_StudioIcon, BlenderIcon, WebpackIcon, Adobe_CCIcon, M365Icon, NPMIcon, BitBucketIcon, PSIcon, FigmaIcon, IllustratorIcon, XDIcon, RedisIcon } from "../components/Icons";

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
	Frontend = "Frontend",
	Scripting = "Scripting",
}


export type Skill = {
  icon: JSX.Element;
  name: string;
  skillType: SkillType;
	subSkillTypes?: SubSkillType[];
};

export const StartingSkills: Skill[] = [
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
    skillType: SkillType.Tools
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
    icon: <JQueryIcon color="#68A9F6" />,
    name: "JQuery",
    skillType: SkillType.Frameworks,
		subSkillTypes: [SubSkillType.Frontend]
  },
  {	
		icon: <M365Icon />,
    name: "Microsoft Products",
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
    icon: <MongoDBIcon />,
    name: "MongoDB",
    skillType: SkillType.Database,
		subSkillTypes: [SubSkillType.Backend]
  },
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
		subSkillTypes: [SubSkillType.Backend, SubSkillType.Frontend]
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
    icon: <Python3Icon />,
    name: "Python 3",
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
    skillType: SkillType.Software
  },
  {
    icon: <VMWareIcon />,
    name: "VMWare",
    skillType: SkillType.Software,
  },
  // {
  //   icon: <Visual_StudioIcon />,
  //   name: "Visual Studio",
  //   skillType: SkillType.Software,
  // },
  {
    icon: <WebpackIcon />,
    name: "Webpack",
    skillType: SkillType.Tools,
		subSkillTypes: [SubSkillType.Frontend, SubSkillType.Backend]
  },
  {
    icon: <WindowsIcon />,
    name: "Windows",
    skillType: SkillType.OS,
  },
]

export type SkillMapType = {
	[key: string]: SubSkillType[];
}

export const SkillMap: SkillMapType = StartingSkills.reduce((skillMap: SkillMapType, skill) => {
	if (skill.subSkillTypes) {
		skill.subSkillTypes.forEach(subSkillType => {
			const str = skill.skillType.toString();
			if (skillMap[str]) {
				skillMap[str].push(subSkillType);
			} else {
				skillMap[str] = [subSkillType];
			}
		});
	}
	return skillMap;
}, {});
