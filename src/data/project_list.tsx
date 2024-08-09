import { ReactJSIcon, TypeScriptIcon, Tailwind_CSSIcon, NextJSIcon, FolderIcon, HTML5Icon, CSS3Icon, JQueryIcon, JavascriptIcon, NodeJSIcon, DockerIcon, MySQLIconSmall, CSharpIcon, Python3Icon, JavaIcon, SQLiteIcon, FlaskIcon, PostgreSQLIcon, SQLServerIcon, Material_UIIcon } from "../components/utilities/Icons";

export type Project = {
	timeframe?: string;
	name: string;
	githubLink?: string;
	demoLink?: string;
	readmeLink?: string; // Added field for optional readme link
	skills: { name: string; icon: JSX.Element; }[];
	content: JSX.Element;
};

export const ProjectList: Project[] = [{
	name: "😊This Website",
	githubLink: "https://github.com/ItsNotCam/PortfolioV2",
	timeframe: "2024",
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
	content: <span>
		This fully responsive website was designed and written by me from scratch.<br/><br/>
		It was designed 
		in <a target="_blank" href="https://www.figma.com/design/nkOThbhroZHoa0L8h44F5v/Portfolio-v2?node-id=0-1&t=awrN6I3LWpUGJbK9-1" 
			className="text-custom-blue/90 underline hover:text-blue-300 transition-colors duration-200">Figma</a> and 
		developed using ReactJS with Typescript and TailwindCSS.<br/><br/>
	</span>
}, {
	name: "🚨CyberArk Insights",
	timeframe: "2024",
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
	content: <span>A full stack web application built for BAE Systems, Inc.<br/><br/> It displays essential information and statistics for an internal account and password management application.<br/><br/></span>
}, {
	name: "🙉CodeMonkey",
	timeframe: "2024",
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
	content: <span>This front-end web application was developed for BAE Systems, Inc.<br/><br/> 
	It integrates with an internal AI chatbot LLM to assist software developers by offering feedback, generating code snippets, and more.<br/><br/></span>
}, {
	name: "🚀Pokescrape",
	githubLink: "https://github.com/ItsNotCam/Pokescrape",
	timeframe: "2024",
	skills: [{
		name: "Python",
		icon: <Python3Icon />,
	}, {
		name: "PostgreSQL",
		icon: <PostgreSQLIcon />,
	}],
	content: <span>This is a web scraper designed to extract Pokémon data from 'pokemondb.net' and store it in a PostgreSQL database.<br/><br/> 
	The data is structured with complex relationships, allowing for highly detailed filtering and searching. <br/><br/>
	For more information, including the Entity Relationship Diagram (ERD) and additional documentation, refer to the README by clicking on the title of this card.<br/><br/></span>
}, {
	name: "💸Pico",
	githubLink: "https://github.com/ItsNotCam/Pico",
	demoLink: "https://mason.gmu.edu/~cyoung35/index.html",
	timeframe: "2024",
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
	content: <span>This project is an HTML, CSS, and jQuery-based website showcasing a mock smartphone advertisement.<br/><br/>
	It represents my first attempt at creating a purely static site with a strong emphasis on CSS, including some responsive features.<br/><br/>
	The website was developed as part of a school project, and during my class presentation the professor stopped my presentation twice
	to confirm that I had actually created the site myself, as they believed that it was too professional to have been made by a student.<br/><br/></span>
}, {
	name: "🌏Cloud File Share",
	githubLink: "https://github.com/ItsNotCam/GoogleDriveClone",
	readmeLink: "https://github.com/ItsNotCam/GoogleDriveClone",
	demoLink: "https://streamable.com/e/c7hyo6",
	timeframe: "2024",
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
	content: <span>
		A containerized full-stack web application that replicates the core functionality found in cloud file-sharing platforms like Google Drive.<br/><br/> 
		It features a very sleek UI, allowing users to create accounts, upload and download files, and manage file access by granting or revoking permissions to other users.<br/><br/>
	 	To see the demo, click the globe icon at the top of the card.<br/><br/></span>
},{
	name: "🔥HeaterPi",
	githubLink: "https://github.com/ItsNotCam/HeaterPi-Server",
	timeframe: "2024",
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
	content: <span>A full-stack web application that manages room temperature using a Raspberry Pi and a standard space heater.<br/><br/> 
	It features a sleek front end for easy viewing of live information and uses WebSockets for real-time communication between the client and the device.<br/><br/></span>
},  {
	name: "⌚Bitwatch VR",
	githubLink: "https://github.com/ItsNotCam/BitwatchVR",
	timeframe: "2023",
	skills: [{
		name: "C#",
		icon: <CSharpIcon />,
	}],
	content: <span>A virtual reality smartwatch that bridges the real and virtual worlds, displaying real-time information such as the user's local time, weather, heart rate, and more directly on their virtual wrist.<br/><br/>
	Fully interactive within a virtual reality environment, the project involved numerous challenges whose solutions showcase both my creativity and problem-solving skills.<br/><br/> 
	For a detailed overview including explanations for some of these challenges and my solutions, click the title of this card.<br/><br/></span>
}, {
	name: "📦Coordinates Book",
	githubLink: "https://github.com/ItsNotCam/MC-Coordinates-Book",
	timeframe: "2020",
	skills: [{
		name: "Java",
		icon: <JavaIcon />,
	}, {
		name: "SQLite",
		icon: <SQLiteIcon />,
	}],
	content: <span>A modification for the popular video game Minecraft that automates the process of saving your favorite locations within the game, replacing traditional (and literal) pen-and-paper methods.<br/><br/> 
	It utilizes the game's limited resources to create a user interface that seamlessly integrates with the game's existing interfaces, providing a faster and more intuitive way for players to store this important information.<br/><br/></span>
}, {
	name: "📑Home File Server",
	githubLink: "https://github.com/ItsNotCam/File-Server",
	timeframe: "2019",
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
	content: <span>Containerized full stack web application that allows me to manipulate the file system of my home server.<br/><br/></span>
}, {
	name: "🐼Racoon",
	githubLink: "https://github.com/ItsNotCam/File-Server",
	timeframe: "2019",
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
	content: <span>A full-stack web application developed for BAE Systems, Inc. that is currently (2024) deployed within their cyber threat detection pipeline.<br/><br/>
	Raccoon extracts information from packet capture files, stores it in a SQLite database, provides a user interface to view the data, and exposes a REST API for integration with other internal tools.<br/><br/></span>
},];
