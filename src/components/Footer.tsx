// import MailIcon from '../assets/icon-Mail.svg';
import { ReactNode } from "react";
import { GitHubIcon as GitHubIcon, LinkedInIcon, MailIcon } from "./utilities/Icons";

import links from "../data/links";
import "./_footer.css";

export default function Footer(props: { children: ReactNode }) {
  return (
    <div className="footer" id="footer">
      <h1 className="footer-title flex-shrink-0 w-52 text-custom-text-300 bg-custom-off-dark-800">
        _get in touch
      </h1>
      <a
        href={links.email}
        className="flex-shrink-0 w-header p-2 bg-custom-off-dark-800  text-custom-text-300 hover:text-custom-text-100 transition-colors"
      >
        <MailIcon height="2.25rem" width="2.25rem" />
      </a>
      <a
        href={links.linkedIn}
        className="flex-shrink-0 p-2 w-header bg-custom-off-dark-800  text-custom-text-300 hover:text-custom-text-100 transition-colors"
        target="_blank"
      >
        <LinkedInIcon height="1.5rem" width="1.5rem" />
      </a>
      <a
        href={links.gitHub}
        className="flex-shrink-0 w-header bg-custom-off-dark-800 text-custom-text-300 p-2 hover:text-custom-text-100 transition-colors"
        target="_blank"
      >
        <GitHubIcon height="2.25rem" width="2.25rem" />
      </a>
      <div className="footer-path flex-grow pl-4 max-w-[100%] justify-start overflow-hidden bg-custom-off-dark-800 ">
        <div className="flex w-full text-nowrap">{props.children}</div>
      </div>
    </div>
  );
}
