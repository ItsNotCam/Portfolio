import { Tailwind_CSSIcon, HTML5Icon, CSS3Icon, JavascriptIcon, TypeScriptIcon, ReactJSIcon, NextJSIcon, GitIcon, DockerIcon, UbuntuIcon, BashIcon, CSharpIcon, VMWareIcon, NodeJSIcon, PowerShellIcon, Python3Icon, FlaskIcon, JiraIcon, JQueryIcon, Material_UIIcon, BootstrapIcon, ExpressJSIcon, MySQLIconSmall, PostgreSQLIcon, SQLiteIcon, PostCSSIcon, JavaIcon, SQLServerIcon, UnityIcon, Visual_StudioIcon, BlenderIcon, Adobe_CCIcon, M365Icon, NPMIcon, BitBucketIcon, PSIcon, FigmaIcon, IllustratorIcon, XDIcon, RedisIcon, WordIcon, ExcelIcon, IISIcon, PyCharmLogo, IntelliJLogo, WindowsIcon, RegexIcon, VSCodeIcon, PHPIcon, PostmanIcon, RaspberryPiIcon, ElectronIcon, HyperVLogo, ViteLogo } from "../components/Icons";

export enum SkillType {
  Programming = "programming",
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

export type SkillListItem = {
  icon: JSX.Element;
  name: string;
  skillType: SkillType;
  subSkillTypes?: SubSkillType[];
};


export type SkillMapType = {
  [key: string]: SubSkillType[];
}

export const AdobeCCSkill: SkillListItem = {
  icon: <Adobe_CCIcon />,
  name: "Adobe CC",
  skillType: SkillType.Software,
  subSkillTypes: [SubSkillType.Creative]
};

export const IllustratorSkill: SkillListItem = {
  icon: <IllustratorIcon />,
  name: "Illustrator",
  skillType: SkillType.Software,
  subSkillTypes: [SubSkillType.Creative]
};

export const ExperienceDesignerSkill: SkillListItem = {
  icon: <XDIcon />,
  name: "Experience Designer",
  skillType: SkillType.Software,
  subSkillTypes: [SubSkillType.Creative]
};

export const PhotoshopSkill: SkillListItem = {
  icon: <PSIcon />,
  name: "Photoshop",
  skillType: SkillType.Software,
  subSkillTypes: [SubSkillType.Creative]
};

export const BashSkill: SkillListItem = {
  icon: <BashIcon />,
  name: "Bash",
  skillType: SkillType.Programming,
  subSkillTypes: [SubSkillType.Scripting]
};

export const BitBucketSkill: SkillListItem = {
  icon: <BitBucketIcon />,
  name: "BitBucket",
  skillType: SkillType.Software,
  subSkillTypes: [SubSkillType.Collaborative]
};

export const BlenderSkill: SkillListItem = {
  icon: <BlenderIcon />,
  name: "Blender",
  skillType: SkillType.Software,
  subSkillTypes: [SubSkillType.Creative]
};

export const BootstrapSkill: SkillListItem = {
  icon: <BootstrapIcon />,
  name: "Bootstrap",
  skillType: SkillType.Frameworks,
  subSkillTypes: [SubSkillType.Frontend]
};

export const CSharpSkill: SkillListItem = {
  icon: <CSharpIcon />,
  name: "C#",
  skillType: SkillType.Programming,
  subSkillTypes: [SubSkillType.Backend]
};

export const CssSkill: SkillListItem = {
  icon: <CSS3Icon />,
  name: "CSS",
  skillType: SkillType.Programming,
  subSkillTypes: [SubSkillType.Frontend]
};

export const DockerSkill: SkillListItem = {
  icon: <DockerIcon />,
  name: "Docker",
  skillType: SkillType.Tools,
  subSkillTypes: [SubSkillType.DevTool, SubSkillType.Backend]
};

export const ExpressSkill: SkillListItem = {
  icon: <ExpressJSIcon />,
  name: "Express",
  skillType: SkillType.Frameworks,
  subSkillTypes: [SubSkillType.Backend]
};

export const FigmaSkill: SkillListItem = {
  icon: <FigmaIcon />,
  name: "Figma",
  skillType: SkillType.Software,
  subSkillTypes: [SubSkillType.Creative]
};

export const FlaskSkill: SkillListItem = {
  icon: <FlaskIcon />,
  name: "Flask",
  skillType: SkillType.Frameworks,
  subSkillTypes: [SubSkillType.Backend]
};

export const GitSkill: SkillListItem = {
  icon: <GitIcon />,
  name: "Git",
  skillType: SkillType.Tools,
  subSkillTypes: [SubSkillType.Collaborative, SubSkillType.DevTool]
};

export const HtmlSkill: SkillListItem = {
  icon: <HTML5Icon />,
  name: "HTML",
  skillType: SkillType.Programming,
  subSkillTypes: [SubSkillType.Frontend]
};

export const IisSkill: SkillListItem = {
  icon: <IISIcon />,
  name: "Windows IIS",
  skillType: SkillType.Software,
  subSkillTypes: [SubSkillType.Backend]
};

export const JavaSkill: SkillListItem = {
  icon: <JavaIcon />,
  name: "Java",
  skillType: SkillType.Programming,
  subSkillTypes: [SubSkillType.Backend]
};

export const JavascriptSkill: SkillListItem = {
  icon: <JavascriptIcon />,
  name: "JavaScript",
  skillType: SkillType.Programming,
  subSkillTypes: [SubSkillType.Frontend, SubSkillType.Backend]
};

export const JiraSkill: SkillListItem = {
  icon: <JiraIcon />,
  name: "Jira",
  skillType: SkillType.Software,
  subSkillTypes: [SubSkillType.Collaborative]
};

export const JquerySkill: SkillListItem = {
  icon: <JQueryIcon />,
  name: "JQuery",
  skillType: SkillType.Frameworks,
  subSkillTypes: [SubSkillType.Frontend]
};

export const IntelliJSkill: SkillListItem = {
  icon: <IntelliJLogo />,
  name: "IntelliJ",
  skillType: SkillType.Software,
  subSkillTypes: [SubSkillType.DevTool]
};

export const HyperVSkill: SkillListItem = {
	icon: <HyperVLogo />,
	name: "Hyper-V",
	skillType: SkillType.OS
}

export const ElectronSkill: SkillListItem = {
  icon: <ElectronIcon />,
  name: "Electron",
  skillType: SkillType.Frameworks,
  subSkillTypes: [SubSkillType.Backend]
};

export const M365Skill: SkillListItem = {
  icon: <M365Icon />,
  name: "Microsoft 365",
  skillType: SkillType.Software,
  subSkillTypes: [SubSkillType.Admin]
};

export const MaterialUISkill: SkillListItem = {
  icon: <Material_UIIcon />,
  name: "Material UI",
  skillType: SkillType.Frameworks,
  subSkillTypes: [SubSkillType.Frontend]
};

export const PostmanSkill: SkillListItem = {
  icon: <PostmanIcon />,
  name: "Postman",
  skillType: SkillType.Software,
  subSkillTypes: [SubSkillType.DevTool]
};

export const ExcelSkill: SkillListItem = {
  icon: <ExcelIcon />,
  name: "Excel",
  skillType: SkillType.Software,
  subSkillTypes: [SubSkillType.Admin]
};

export const WordSkill: SkillListItem = {
  icon: <WordIcon />,
  name: "Word",
  skillType: SkillType.Software,
  subSkillTypes: [SubSkillType.Admin]
};

// const mongoDB: SkillListItem = {
//   icon: <MongoDBIcon />,
//   name: "MongoDB",
//   skillType: SkillType.Database,
//   subSkillTypes: [SubSkillType.Backend]
// };

export const MySQLSkill: SkillListItem = {
  icon: <MySQLIconSmall />,
  name: "MySQL",
  skillType: SkillType.Database,
  subSkillTypes: [SubSkillType.Backend]
};

export const NextJSSkill: SkillListItem = {
  icon: <NextJSIcon />,
  name: "NextJS",
  skillType: SkillType.Frameworks,
  subSkillTypes: [SubSkillType.Backend]
};

export const NodeJSSkill: SkillListItem = {
  icon: <NodeJSIcon />,
  name: "NodeJS",
  skillType: SkillType.Frameworks,
  subSkillTypes: [SubSkillType.Backend]
};

export const NpmSkill: SkillListItem = {
  icon: <NPMIcon />,
  name: "NPM",
  skillType: SkillType.Tools,
  subSkillTypes: [SubSkillType.Frontend, SubSkillType.Backend]
};

export const PostCSSSkill: SkillListItem = {
  icon: <PostCSSIcon />,
  name: "PostCSS",
  skillType: SkillType.Frameworks,
  subSkillTypes: [SubSkillType.Frontend]
};

export const PostgreSQLSkill: SkillListItem = {
  icon: <PostgreSQLIcon />,
  name: "PostgreSQL",
  skillType: SkillType.Database,
  subSkillTypes: [SubSkillType.Backend]
};

export const PowerShellSkill: SkillListItem = {
  icon: <PowerShellIcon />,
  name: "PowerShell",
  skillType: SkillType.Programming,
  subSkillTypes: [SubSkillType.Scripting]
};

export const PyCharmSkill: SkillListItem = {
  icon: <PyCharmLogo />,
  name: "PyCharm",
  skillType: SkillType.Software,
  subSkillTypes: [SubSkillType.DevTool]
};

export const PythonSkill: SkillListItem = {
  icon: <Python3Icon />,
  name: "Python",
  skillType: SkillType.Programming,
  subSkillTypes: [SubSkillType.Backend, SubSkillType.Scripting]
};

export const RaspberryPiSkill: SkillListItem = {
  icon: <RaspberryPiIcon />,
  name: "Raspberry Pi",
  skillType: SkillType.OS
};

export const ReactSkill: SkillListItem = {
  icon: <ReactJSIcon />,
  name: "React",
  skillType: SkillType.Frameworks,
  subSkillTypes: [SubSkillType.Frontend]
};

export const RedisSkill: SkillListItem = {
  icon: <RedisIcon />,
  name: "Redis",
  skillType: SkillType.Database,
  subSkillTypes: [SubSkillType.Backend]
};

export const RegexSkill: SkillListItem = {
  icon: <RegexIcon color="#FFFFFF"/>,
  name: "Regex❤️",
  skillType: SkillType.Programming,
  subSkillTypes: [SubSkillType.Scripting]
};

export const SqliteSkill: SkillListItem = {
  icon: <SQLiteIcon />,
  name: "SQLite",
  skillType: SkillType.Database,
  subSkillTypes: [SubSkillType.Backend]
};

export const SqlServerSkill: SkillListItem = {
  icon: <SQLServerIcon />,
  name: "SQL Server",
  skillType: SkillType.Database,
  subSkillTypes: [SubSkillType.Backend]
};

export const TailwindSkill: SkillListItem = {
  icon: <Tailwind_CSSIcon />,
  name: "Tailwind",
  skillType: SkillType.Frameworks,
  subSkillTypes: [SubSkillType.Frontend]
};

export const TypeScriptSkill: SkillListItem = {
  icon: <TypeScriptIcon />,
  name: "TypeScript",
  skillType: SkillType.Programming,
  subSkillTypes: [SubSkillType.Frontend, SubSkillType.Backend]
};

export const UbuntuSkill: SkillListItem = {
  icon: <UbuntuIcon />,
  name: "Ubuntu",
  skillType: SkillType.OS,
};

export const WindowsSkill: SkillListItem = {
  icon: <WindowsIcon />,
  name: "Windows",
  skillType: SkillType.OS,
};

export const UnitySkill: SkillListItem = {
  icon: <UnityIcon />,
  name: "Unity",
  skillType: SkillType.Software,
  subSkillTypes: [SubSkillType.Creative]
};

export const VmWareSkill: SkillListItem = {
  icon: <VMWareIcon />,
  name: "VMWare",
  skillType: SkillType.Software,
  subSkillTypes: [SubSkillType.DevTool]
};

export const VisualStudioSkill: SkillListItem = {
  icon: <Visual_StudioIcon />,
  name: "Visual Studio",
  skillType: SkillType.Software,
  subSkillTypes: [SubSkillType.DevTool]
}

export const VisualStudioCodeSkill: SkillListItem = {
  icon: <VSCodeIcon />,
  name: "Visual Studio Code",
  skillType: SkillType.Software,
  subSkillTypes: [SubSkillType.DevTool]
}

export const ViteSkill: SkillListItem = {
  icon: <ViteLogo />,
  name: "Vite",
  skillType: SkillType.Tools,
  subSkillTypes: [SubSkillType.DevTool]
}

export const PhpSkill: SkillListItem = {
  icon: <PHPIcon />,
  name: "PHP",
  skillType: SkillType.Programming,
  subSkillTypes: [SubSkillType.Backend, SubSkillType.Frontend]
};