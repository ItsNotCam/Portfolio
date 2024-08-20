import { ReactNode } from "react";
import { ExploreIcon, GitHubIcon } from "../Icons";
import { SummarizeOutlined } from "@mui/icons-material";

/* Components */
export const GitHubLink = (props: { githubLink: string }): ReactNode => {
  return props.githubLink ? (
    <a
      target="_blank"
      href={props.githubLink}
      className="relative text-custom-text-300"
    >
      <GitHubIcon
        height="1.75em"
        width="1.75em"
        className="hover:text-custom-text-100 transition-colors"
      />
    </a>
  ) : null;
};

export const DemoLink = (props: { demoLink: string }): ReactNode => {
  return props.demoLink ? (
    <a
      target="_blank"
      href={props.demoLink}
      className="relative text-custom-text-300 hover:text-custom-text-100 transition-colors"
    >
      <ExploreIcon height="1.75em" width="1.75em" />
    </a>
  ) : null;
};

export const ReadmeLink = (props: { readmeLink: string }): ReactNode => {
  return props.readmeLink ? (
    <SummarizeOutlined style={{ height: "1.2em", width: "1.2em" }} />
  ) : null;
};
