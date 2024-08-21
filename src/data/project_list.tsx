import { Orange, Red } from "../components/ColoredText";
import * as Skills from "./skills";

export type Skill = {
  name: string;
  icon: JSX.Element;
  visible?: boolean;
};

export type Project = {
  year: string;
  name: string;
  id: string;
  skills: Skill[];
  content: JSX.Element;
  githubLink: string | undefined;
  demoLink: string | undefined;
  readmeLink: string | undefined;
  additionalContent: string | undefined;
};

export const ProjectList: Project[] = [{
  name: "😎This Website",
  id: "this_website",
  githubLink: "https://github.com/ItsNotCam/PortfolioV2",
  demoLink: undefined,
  readmeLink: "https://raw.githubusercontent.com/ItsNotCam/PortfolioV2/master/README.md",
  additionalContent: "",
  year: "2024",
  skills: [
    { ...Skills.HtmlSkill, visible: false },
    { ...Skills.CssSkill, visible: false },
    Skills.TypeScriptSkill,
    Skills.ReactSkill,
    Skills.TailwindSkill
  ],
  content: <span>
    This fully responsive <Orange>website</Orange> was designed and written by me from scratch.
    It was designed
    in <a target="_blank" href="https://www.figma.com/design/nkOThbhroZHoa0L8h44F5v/Portfolio-v2?node-id=0-1&t=awrN6I3LWpUGJbK9-1"
      className="text-custom-blue/90 underline hover:text-blue-300 transition-colors duration-200">Figma</a> and
    developed using ReactJS with Typescript and TailwindCSS.
  </span>,
}, {
  name: "🚨CyberArk Insights",
  year: "2024",
  id: "cybearark_insights",
  additionalContent: undefined,//"This was developed for BAE Systems, Inc.\n" + "No additional information can be shared.",
  demoLink: undefined,
  readmeLink: "https://raw.githubusercontent.com/ItsNotCam/CyberArkInsights/master/README.md",
  githubLink: undefined,
  skills: [
    { ...Skills.HtmlSkill, visible: false },
    { ...Skills.CssSkill, visible: false },
    Skills.TypeScriptSkill,
    Skills.JavascriptSkill,
    Skills.NodeJSSkill,
    Skills.ExpressSkill,
    Skills.NextJSSkill,
    Skills.ReactSkill,
    Skills.TailwindSkill,
    Skills.SqlServerSkill,
    Skills.IisSkill
  ],
  content: <span>This <Orange>full-stack web application</Orange> was developed for <Red>BAE Systems, Inc. </Red> and is
    <strong> currently (2024) deployed in BAE Systems' internal network.</strong>
    <br /> <br /> It displays essential information and statistics for an internal account and password management application, and
    utilizes existing smart-card SSO infrastructure to provide fully secure admin and user dashboards.<br />
  </span>
}, {
  name: "🙉CodeMonkey",
  year: "2024",
  id: "code_monkey",
  additionalContent: undefined,//"This was developed for BAE Systems, Inc.\n" + "No additional information can be shared.",
  demoLink: undefined,
  readmeLink: "https://raw.githubusercontent.com/ItsNotCam/CodeMonkey/master/README.md",
  githubLink: undefined,
  skills: [
    { ...Skills.HtmlSkill, visible: false }, 
    { ...Skills.CssSkill,  visible: false }, 
    Skills.TypeScriptSkill,
    Skills.DockerSkill,
    Skills.ReactSkill,
    Skills.TailwindSkill
  ],
  content: <span>This <Orange>front-end web application</Orange> was developed for <Red>BAE Systems, Inc. </Red>
  It integrates with an internal AI chatbot LLM to assist software developers by offering feedback, generating code snippets, and more.<br/></span>
}, {
  name: "🚀Pokescrape",
  githubLink: "https://github.com/ItsNotCam/Pokescrape",
  readmeLink: "https://raw.githubusercontent.com/ItsNotCam/Pokescrape/master/README.md",
  demoLink: undefined,
  additionalContent: undefined,
  year: "2024",
  id: "pokescrape",
  skills: [Skills.PythonSkill, Skills.PostgreSQLSkill],
  content: <span>This is a <Orange>web scraper</Orange> designed to extract Pokémon data from 'pokemondb.net' and store it in a <Orange>PostgreSQL database</Orange>.</span>,
}, {
  name: "🌏Cloud File Share",
  githubLink: "https://github.com/ItsNotCam/Cloud-File-Share",
  demoLink: "https://streamable.com/e/c7hyo6",
  readmeLink: "https://raw.githubusercontent.com/ItsNotCam/Cloud-File-Share/master/README.md",
  additionalContent: undefined,
  year: "2024",
  id: "cloud_file_share",
  skills: [
    { ...Skills.HtmlSkill, visible: false }, 
    { ...Skills.CssSkill,  visible: false }, 
    Skills.TypeScriptSkill,
    Skills.NodeJSSkill,
    Skills.ReactSkill,
    Skills.NextJSSkill,
    Skills.DockerSkill,
    Skills.MySQLSkill
  ],
  content: <span>
    A containerized <Orange>full-stack web application</Orange> that replicates the core functionality found in cloud file-sharing platforms like Google Drive.</span>
}, {
  name: "💸Pico",
  githubLink: "https://github.com/ItsNotCam/Pico",
  demoLink: "https://mason.gmu.edu/~cyoung35/index.html",
  readmeLink: "https://raw.githubusercontent.com/ItsNotCam/Pico/master/README.md",
  additionalContent: `No additional information available - see demo here: [Pico](https://mason.gmu.edu/~cyoung35/index.html)`,
  year: "2024",
  id: "pico",
  skills: [
    { ...Skills.HtmlSkill, visible: false },
    { ...Skills.CssSkill, visible: false },
    Skills.TypeScriptSkill,
    Skills.JavascriptSkill,
    Skills.JquerySkill,
  ],
  content: <span>This project is my first attempt at creating an HTML, CSS, and jQuery-based <Orange>website</Orange>. Completed for a school project.</span>
},{
  name: "⌚Bitwatch VR",
  githubLink: "https://github.com/ItsNotCam/BitwatchVR",
  readmeLink: "https://raw.githubusercontent.com/ItsNotCam/BitwatchVR/master/README.md",
  demoLink: undefined,
  additionalContent: undefined,
  year: "2023",
  id: "bitwatch_vr",
  skills: [Skills.CSharpSkill, Skills.UnitySkill],
  content: <span>A <Orange>virtual reality smartwatch</Orange> app that bridges the real and virtual worlds, displaying real-time information such as the user's local time, weather, heart rate, and more directly on their virtual wrist.</span>
}, {
  name: "📦Coordinates Book",
  githubLink: "https://github.com/ItsNotCam/MC-Coordinates-Book",
  readmeLink: "https://raw.githubusercontent.com/ItsNotCam/MC-Coordinates-Book/master/README.md",
  demoLink: undefined,
  additionalContent: undefined,
  year: "2020 - 2024",
  id: "coordinates_book",
  skills: [Skills.JavaSkill, Skills.SqliteSkill],
  content: <span>A <Orange>video game mod</Orange> for the popular video game Minecraft that automates the process of saving your favorite locations within the game, replacing traditional (and literal) pen-and-paper methods.</span>
}, {
  name: "🔥HeaterPi",
  githubLink: "https://github.com/ItsNotCam/HeaterPi-Server",
  readmeLink: "https://raw.githubusercontent.com/ItsNotCam/HeaterPi-Server/master/README.md",
  demoLink: undefined,
  additionalContent: undefined,
  year: "2019-2024",
  id: "heater_pi",
  skills: [
    { ...Skills.HtmlSkill, visible: false },
    { ...Skills.CssSkill, visible: false },
    Skills.RaspberryPiSkill,
    Skills.PythonSkill,
    Skills.TypeScriptSkill,
    Skills.ReactSkill
  ],
  content: <span>A <Orange>full-stack web application</Orange> that manages room temperature using a Raspberry Pi and a standard space heater.</span>
},  {
  name: "📑Home File Server",
  githubLink: "https://github.com/ItsNotCam/File-Server",
  demoLink: undefined,
  additionalContent: undefined,
  readmeLink: "https://raw.githubusercontent.com/ItsNotCam/File-Server/master/README.md",
  year: "2019",
  id: "home_file_server",
  skills: [
    { ...Skills.HtmlSkill, visible: false }, 
    { ...Skills.CssSkill,  visible: false }, 
    Skills.PythonSkill,
    Skills.JavascriptSkill,
    Skills.BootstrapSkill, 
    Skills.FlaskSkill,
    Skills.ReactSkill,
    Skills.DockerSkill
  ],
  content: <span>Containerized <Orange>full-stack web application</Orange> that allows me to manipulate the file system of my home server.<br/></span>
}, {
  name: "🐼Racoon",
  year: "2019",
  id: "racoon",
  githubLink: undefined,
  readmeLink: "https://raw.githubusercontent.com/ItsNotCam/Racoon/master/README.md",
  demoLink: undefined,
  additionalContent: "This was developed for BAE Systems, Inc.\n" + "No additional information can be shared.",
  skills: [
    { ...Skills.HtmlSkill, visible: false }, 
    { ...Skills.CssSkill,  visible: false }, 
    Skills.PythonSkill,
    Skills.JavascriptSkill,
    Skills.BootstrapSkill, 
    Skills.FlaskSkill,
    Skills.ReactSkill,
    Skills.DockerSkill, 
    Skills.SqliteSkill,
    Skills.MaterialUISkill,
  ],
  content: <span>A <Orange>full-stack web application</Orange> developed for <Red>BAE Systems, Inc.</Red> that is <strong>currently (2024) deployed within their cyber threat detection pipeline.</strong><br/><br/>
  Raccoon extracts information from packet capture files, stores it in a SQLite database, provides a user interface to view the data, and exposes a REST API for integration with other internal tools.<br/></span>
},];