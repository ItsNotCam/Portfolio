import { Tailwind_CSSIcon, HTML5Icon, CSS3Icon, JavascriptIcon, TypeScriptIcon, ReactJSIcon, NextJSIcon, GitIcon, DockerIcon, WindowsIcon, UbuntuIcon, BashIcon, CSharpIcon, VMWareIcon, NodeJSIcon, PowerShellIcon, Python3Icon, FlaskIcon, JiraIcon, MongoDBIcon, GitHubIcon, JQueryIcon, Material_UIIcon, BootstrapIcon, ExpressJSIcon, MySQLIconSmall, PostgreSQLIcon, SQLiteIcon, PostCSSIcon, JavaIcon, SQLServerIcon, UnityIcon, Visual_StudioIcon, BlenderIcon, WebpackIcon, Adobe_CCIcon, M365Icon } from "../components/utilities/Icons";

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
    icon: <SQLServerIcon />,
    name: "SQL Server",
    skillType: SkillType.Database,
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
].sort((a, b) => (a.name > b.name ? 1 : -1));
