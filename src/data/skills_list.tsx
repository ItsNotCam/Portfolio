import { SkillListItem, AdobeCCSkill, BashSkill, BitBucketSkill, BlenderSkill, BootstrapSkill, CSharpSkill, CssSkill, DockerSkill, ExpressSkill, FigmaSkill, FlaskSkill, GitSkill, HtmlSkill, IisSkill, IllustratorSkill, IntelliJSkill, JavaSkill, JavascriptSkill, JiraSkill, JquerySkill, MaterialUISkill, M365Skill, ExcelSkill, WordSkill, MySQLSkill, NextJSSkill, NodeJSSkill, NpmSkill, PostCSSSkill, PostgreSQLSkill, PowerShellSkill, PyCharmSkill, PythonSkill, ReactSkill, RedisSkill, PhotoshopSkill, SqliteSkill, SqlServerSkill, TailwindSkill, TypeScriptSkill, UbuntuSkill, UnitySkill, VmWareSkill, VisualStudioSkill, SkillType, SkillMapType, WindowsSkill, RegexSkill, VisualStudioCodeSkill, PhpSkill, PostmanSkill, RaspberryPiSkill, ExperienceDesignerSkill } from "./skills";


export const StartingSkills: SkillListItem[] = [
  AdobeCCSkill,
  ExperienceDesignerSkill,
  IllustratorSkill,
  PhotoshopSkill,
  BashSkill,
  BitBucketSkill,
  BlenderSkill,
  BootstrapSkill,
  CSharpSkill,
  CssSkill,
  DockerSkill,
  ExpressSkill,
  FigmaSkill,
  FlaskSkill,
  GitSkill,
  HtmlSkill,
  IisSkill,
  IntelliJSkill,
  JavaSkill,
  JavascriptSkill,
  JiraSkill,
  JquerySkill,
  MaterialUISkill,
  M365Skill,
  ExcelSkill,
  WordSkill,
  MySQLSkill,
  NextJSSkill,
  NodeJSSkill,
  NpmSkill,
  PhpSkill,
  PostCSSSkill,
  PostgreSQLSkill,
  PostmanSkill,
  PowerShellSkill,
  PyCharmSkill,
  PythonSkill,
  RaspberryPiSkill,
  ReactSkill,
  RedisSkill,
  RegexSkill,
  SqliteSkill,
  SqlServerSkill,
  TailwindSkill,
  TypeScriptSkill,
  UbuntuSkill,
  UnitySkill,
  VmWareSkill,
  VisualStudioSkill,
  VisualStudioCodeSkill,
  WindowsSkill,
];

// something to map subskills to their respective skill types automatically
let mappedSubSkills: SkillMapType = {} as SkillMapType;
Object.values(SkillType).forEach((skillType: SkillType) => {
  StartingSkills.filter((skill) => (skill.skillType === skillType) &&
    (skill.subSkillTypes || []).length > 0
  ).forEach((skill) => {
    const subSkillTypes = skill.subSkillTypes || [];
    if (subSkillTypes.length < 1) return;

    if (mappedSubSkills[skillType] === undefined) {
      mappedSubSkills[skillType] = [...subSkillTypes];
    } else {
      subSkillTypes.forEach((subSkillType) => {
        if (mappedSubSkills[skillType].indexOf(subSkillType) === -1) {
          mappedSubSkills[skillType].push(subSkillType);
        }
      });
    }
  });
});
export const MappedSubSkills: SkillMapType = mappedSubSkills;
