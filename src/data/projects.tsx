import { ReactJSIcon, TypeScriptIcon, Tailwind_CSSIcon, NextJSIcon, FolderIcon, HTML5Icon, CSS3Icon, JQueryIcon, JavascriptIcon, NodeJSIcon, DockerIcon, MySQLIconSmall, CSharpIcon, Python3Icon, JavaIcon, SQLiteIcon, FlaskIcon, PostgreSQLIcon, SQLServerIcon, Material_UIIcon } from "../components/utilities/Icons";

export type Project = {
	name: string;
	githubLink?: string;
	demoLink?: string;
	readmeLink?: string; // Added field for optional readme link
	skills: { name: string; icon: JSX.Element; }[];
	content: JSX.Element;
};

export const Projects: Project[] = [{
	name: "😊This Website",
	githubLink: "https://github.com/ItsNotCam/PortfolioV2",
	skills: [{
		name: "HTML",
		icon: <HTML5Icon />,
	}, {
		name: "CSS",
		icon: <CSS3Icon />,
	},{
		name: "React",
		icon: <ReactJSIcon />,
	}, {
		name: "TypeScript",
		icon: <TypeScriptIcon />,
	}, {
		name: "Tailwind",
		icon: <Tailwind_CSSIcon />,
	}],
	content: <span>This website was designed and written by me.It was developed using ReactJS with Typescript and TailwindCSS.</span>
}, {
	name: "🚨CyberArk Insights",
	skills: [{
		name: "HTML",
		icon: <HTML5Icon />,
	}, {
		name: "CSS",
		icon: <CSS3Icon />,
	},{
		name: "NodeJS",
		icon: <NodeJSIcon />,
	}, {
		name: "React",
		icon: <ReactJSIcon />,
	}, {
		name: "NextJS",
		icon: <NextJSIcon />,
	}, {
		name: "TypeScript",
		icon: <TypeScriptIcon />,
	}, {
		name: "Tailwind",
		icon: <Tailwind_CSSIcon />,
	}, {
		name: "SQL Server",
		icon: <SQLServerIcon />,
	}],
	content: <span>A full stack web application built for BAE Systems, Inc. It displays critical information and statistics for an internal account management application.</span>
}, {
	name: "🙉CodeMonkey",
	skills: [{
		name: "HTML",
		icon: <HTML5Icon />,
	}, {
		name: "CSS",
		icon: <CSS3Icon />,
	},{
		name: "React",
		icon: <ReactJSIcon />,
	}, {
		name: "Tailwind",
		icon: <Tailwind_CSSIcon />,
	}],
	content: <span>A front end web application built for BAE Systems, Inc. It interacts with an internal AI chat bot LLM to assist software developers by explaining and writing programs</span>
}, {
	name: "🚀Pokescrape",
	githubLink: "https://github.com/ItsNotCam/Pokescrape",
	skills: [{
		name: "Python",
		icon: <Python3Icon />,
	}, {
		name: "PostgreSQL",
		icon: <PostgreSQLIcon />,
	}],
	content: <span>A web scraper that scrapes 'pokemondb.net'<br />It stores the scraped Pokemon data in a PostgreSQL database that holds several entities. These entities facilitate the adequate storage and categorization of the vast amount of information that the Pokemon game mechanics hold.</span>
}, {
	name: "💸Pico",
	githubLink: "https://github.com/ItsNotCam/Pico",
	demoLink: "https://mason.gmu.edu/~cyoung35/index.html",
	skills: [{
		name: "HTML",
		icon: <HTML5Icon />,
	}, {
		name: "CSS",
		icon: <CSS3Icon />,
	}, {
		name: "JQuery",
		icon: <JQueryIcon />,
	}, {
		name: "JavaScript",
		icon: <JavascriptIcon />,
	}, {
		name: "TypeScript",
		icon: <TypeScriptIcon />,
	}],
	content: <span>An HTML, CSS, and JQuery website displaying a fake smartphone ad.<br />
		It is my first attempt at a pure static site with a heavy focus on CSS (semi-responsive), and it was created as a school project.<br />
		Due to its quality, the professor openly admitted that they believed me to be cheating</span>
}, {
	name: "🌏Cloud File Share",
	githubLink: "https://github.com/ItsNotCam/GoogleDriveClone",
	readmeLink: "https://github.com/ItsNotCam/GoogleDriveClone",
	demoLink: "https://streamable.com/e/c7hyo6",
	skills: [{
		name: "HTML",
		icon: <HTML5Icon />,
	}, {
		name: "CSS",
		icon: <CSS3Icon />,
	},{
		name: "TypeScript",
		icon: <TypeScriptIcon />,
	}, {
		name: "NodeJS",
		icon: <NodeJSIcon />,
	}, {
		name: "ReactJS",
		icon: <ReactJSIcon />,
	}, {
		name: "NextJS",
		icon: <NextJSIcon />,
	}, {
		name: "Docker",
		icon: <DockerIcon />,
	}, {
		name: "MySQL",
		icon: <MySQLIconSmall height="2rem" width="2rem"/>,
	},],
	content: <span>A containerized full stack web application that performs a large portion of the base functionality of a cloud file sharing application.<br />
		Users can create an account to which they can upload and download files, as well as can grant and revoke access permissions to those files for other users.</span>
}, {
	name: "⌚Bitwatch VR",
	githubLink: "https://github.com/ItsNotCam/BitwatchVR",
	skills: [{
		name: "C#",
		icon: <CSharpIcon />,
	}],
	content: <span>A virtual reality smart watch that connects the real world to the virtual world. It displays in real time a user's local time and weather, their heart rate, and more.</span>
}, {
	name: "🔥HeaterPi",
	githubLink: "https://github.com/ItsNotCam/HeaterPi-Server",
	skills: [{
		name: "HTML",
		icon: <HTML5Icon />,
	}, {
		name: "CSS",
		icon: <CSS3Icon />,
	},{
		name: "Python",
		icon: <Python3Icon />,
	}, {
		name: "TypeScript",
		icon: <TypeScriptIcon />,
	}, {
		name: "ReactJS",
		icon: <ReactJSIcon />,
	}],
	content: <span>Full stack web application that controls the temperature in a room using a Raspberry Pi and a standard space heater.<br />
		Uses websockets for real-time communication between the client and the device.</span>
}, {
	name: "📦Coordinates Book",
	githubLink: "https://github.com/ItsNotCam/MC-Coordinates-Book",
	skills: [{
		name: "Java",
		icon: <JavaIcon />,
	}, {
		name: "SQLite",
		icon: <SQLiteIcon />,
	}],
	content: <span>Modification for the popular video game Minecraft.<br />
		This automates the process of saving your favorite locations within the game, replacing traditional pen-and-paper methods.</span>
}, {
	name: "📑Home File Server",
	githubLink: "https://github.com/ItsNotCam/File-Server",
	skills: [{
		name: "HTML",
		icon: <HTML5Icon />,
	}, {
		name: "CSS",
		icon: <CSS3Icon />,
	},{
		name: "Python",
		icon: <Python3Icon />,
	}, {
		name: "JavaScript",
		icon: <JavascriptIcon />,
	}, {
		name: "Flask",
		icon: <FlaskIcon />,
	}, {
		name: "React",
		icon: <ReactJSIcon />,
	}, {
		name: "Docker",
		icon: <DockerIcon />,
	}],
	content: <span>Containerized full stack web application that allows me to manipulate the file system of my home server.</span>
}, {
	name: "🐼Racoon",
	githubLink: "https://github.com/ItsNotCam/File-Server",
	skills: [{
		name: "HTML",
		icon: <HTML5Icon />,
	}, {
		name: "CSS",
		icon: <CSS3Icon />,
	},{
		name: "Python",
		icon: <Python3Icon />,
	}, {
		name: "Material UI",
		icon: <Material_UIIcon />,
	},{
		name: "JavaScript",
		icon: <JavascriptIcon />,
	}, {
		name: "Flask",
		icon: <FlaskIcon />,
	}, {
		name: "React",
		icon: <ReactJSIcon />,
	}, {
		name: "Docker",
		icon: <DockerIcon />,
	}, {
		name: "SQLite",
		icon: <SQLiteIcon />,
	}],
	content: <span>Full stack web application developed for BAE Systems, Inc.<br />It extracts information from packet capture files and stores them in a SQLite database. It also exposes an API for integration into other internal tools.</span>
},];
