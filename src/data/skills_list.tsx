import { Tailwind_CSSIcon, HTML5Icon, CSS3Icon, JavascriptIcon, TypeScriptIcon, ReactJSIcon, NextJSIcon, GitIcon, DockerIcon, WindowsIcon, UbuntuIcon, BashIcon, CSharpIcon, VMWareIcon, NodeJSIcon, PowerShellIcon, Python3Icon, FlaskIcon, JiraIcon, MongoDBIcon, GitHubIcon, JQueryIcon, Material_UIIcon, BootstrapIcon, ExpressJSIcon, MySQLIconSmall, PostgreSQLIcon, SQLiteIcon, PostCSSIcon, JavaIcon, SQLServerIcon, UnityIcon, Visual_StudioIcon, BlenderIcon, WebpackIcon, Adobe_CCIcon, M365Icon } from "../components/Icons";

export enum SkillType {
  Languages = "languages",
  Frameworks = "frameworks",
  Software = "software",
  Database = "database",
  Tools = "tools",
  OS = "platforms",
  ALL = "all_skills",
}

export type Skill = {
  icon: JSX.Element;
  name: string;
  skillType: SkillType;
};

export const StartingSkills: Skill[] = [
  {
    icon: <Adobe_CCIcon />,
    name: "Adobe CC",
    skillType: SkillType.Software,
  },
  {
    icon: <BashIcon />,
    name: "Bash",
    skillType: SkillType.Languages,
  },
  {
    icon: <BlenderIcon />,
    name: "Blender",
    skillType: SkillType.Software,
  },
  {
    icon: <BootstrapIcon />,
    name: "Bootstrap",
    skillType: SkillType.Frameworks,
  },
  {
    icon: <CSharpIcon />,
    name: "C#",
    skillType: SkillType.Languages,
  },
  {
    icon: <CSS3Icon />,
    name: "CSS",
    skillType: SkillType.Languages,
  },
  {
    icon: <DockerIcon />,
    name: "Docker",
    skillType: SkillType.Software,
  },
  {
    icon: <ExpressJSIcon />,
    name: "Express",
    skillType: SkillType.Frameworks,
  },
  {
    icon: <FlaskIcon />,
    name: "Flask",
    skillType: SkillType.Frameworks,
  },
  {
    icon: <GitIcon />,
    name: "Git",
    skillType: SkillType.Software,
  },
  {
    icon: <GitHubIcon color="currentColor" />,
    name: "GitHub",
    skillType: SkillType.Software,
  },
  {
    icon: <HTML5Icon />,
    name: "HTML",
    skillType: SkillType.Languages,
  },
  {
    icon: <JavaIcon />,
    name: "Java",
    skillType: SkillType.Languages,
  },
  {
    icon: <JavascriptIcon />,
    name: "JavaScript",
    skillType: SkillType.Languages,
  },
  {
    icon: <JiraIcon />,
    name: "Atlassian Suite",
    skillType: SkillType.Software,
  },
  {
    icon: <JQueryIcon color="#68A9F6" />,
    name: "JQuery",
    skillType: SkillType.Frameworks,
  },
  {
    icon: <Material_UIIcon />,
    name: "Material UI",
    skillType: SkillType.Frameworks,
  },
  {
    icon: <MongoDBIcon />,
    name: "MongoDB",
    skillType: SkillType.Database,
  },
  {
    icon: <MySQLIconSmall />,
    name: "MySQL",
    skillType: SkillType.Database,
  },
  {
    icon: <NextJSIcon />,
    name: "NextJS",
    skillType: SkillType.Frameworks,
  },
  {
    icon: <NodeJSIcon />,
    name: "NodeJS",
    skillType: SkillType.Frameworks,
  },
  {
    icon: <PostCSSIcon />,
    name: "PostCSS",
    skillType: SkillType.Tools,
  },
  {
    icon: <PostgreSQLIcon />,
    name: "PostgreSQL",
    skillType: SkillType.Database,
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
    icon: <ReactJSIcon />,
    name: "React",
    skillType: SkillType.Frameworks,
  },
  {
    icon: <SQLiteIcon />,
    name: "SQLite",
    skillType: SkillType.Database,
  },
  {
    icon: <Tailwind_CSSIcon />,
    name: "Tailwind",
    skillType: SkillType.Frameworks,
  },
  {
    icon: <TypeScriptIcon />,
    name: "TypeScript",
    skillType: SkillType.Languages,
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
  },
  {
    icon: <VMWareIcon />,
    name: "VMWare",
    skillType: SkillType.Software,
  },
  {
    icon: <Visual_StudioIcon />,
    name: "Visual Studio",
    skillType: SkillType.Software,
  },
  {
    icon: <WebpackIcon />,
    name: "Webpack",
    skillType: SkillType.Tools,
  },
  {
    icon: <WindowsIcon />,
    name: "Windows",
    skillType: SkillType.OS,
  },
]
