// import MailIcon from '../assets/icon-Mail.svg';
import { ReactNode } from "react";
import { GitHubIcon as GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

import links from "../data/links";
import "./_footer.css";

export default function Footer(props: { children: ReactNode }) {
  return (
    <div className="footer" id="footer">
      <h1 className="footer-title w-52 text-custom-text-300 bg-custom-off-dark-800 flex-shrink-0">
        _get in touch
      </h1>
      <a
        href={links.email}
        className="w-header bg-custom-off-dark-800 p-2 flex-shrink-0"
      >
        <MailIcon height="2.25rem" width="2.25rem" color="#AEADB8" />
      </a>
      <a
        href={links.linkedIn}
        className="w-header bg-custom-off-dark-800 p-2  flex-shrink-0"
        target="_blank"
      >
        <LinkedInIcon height="1.5rem" width="1.5rem" color="#AEADB8" />
      </a>
      <a
        href={links.gitHub}
        className="w-header bg-custom-off-dark-800 p-2 flex-shrink-0"
        target="_blank"
      >
        <GitHubIcon height="2.25rem" width="2.25rem" color="#AEADB8" />
      </a>
      <div className="footer-path flex-grow bg-custom-off-dark-800 justify-start pl-4 max-w-[100%] overflow-hidden">
        <div className="w-full flex text-nowrap">{props.children}</div>
      </div>
    </div>
  );
}
