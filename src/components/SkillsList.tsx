import { ReactNode } from "react";
import { Skill } from "../data/project_list";

export default function SkillsListComponent(props: { skills: Skill[] }): ReactNode {
  return (
  <ul className="card-skill-item-list">
    {props.skills
      .filter(skill => (skill.visible === undefined) ? true : skill.visible)
      .map((skill, index) => (  
      <li
        key={`skills-${skill.name}-${index}`}
        className="card-skill-item"
        title={skill.name}
        id={skill.name}
      >
        <span className="card-skill-icon">{skill.icon}</span>
        <span className="card-skill-title">{skill.name}</span>
      </li>
    ))}
  </ul>)
};