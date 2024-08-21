import { ReactNode, useState } from "react";
import Footer from "../../components/footer/Footer";
import SideBar, {
  DirectoryItem,
  updateSelectedItem,
} from "../../components/sidebar/Sidebar";
import {
  CSharpIcon,
  FolderIcon,
  InfoIcon,
  Python3Icon,
  TypeScriptIcon,
} from "../../components/Icons";
import {
  Blue,
  Green,
  Light,
  LightGreen,
  Orange,
  Pink,
  Red,
  Yellow,
} from "../../components/ColoredText";
import CodeSegment, { Breakpoint, CodeIndent } from "../../components/code_segment/CodeSegment";

import "./about.css";

const AboutText = (props: { page: string }): ReactNode => {
  const page = props.page.replace(/\.[^/.]+$/, "");
  switch (page) {
    case "about_me":
      return (
        <div className="about-code-segment bg-custom-dark/50 rounded-md backdrop-blur-sm text-custom-text-300">
          <CodeSegment keyPrefix="ABOUT ME">
						<article>
              <br />
              <Red className="font-bold italic">{`<info>`}</Red>
              <br /><br />
              <Orange>def</Orange>
              <Yellow> passion</Yellow>
              <Orange>()</Orange>
              <Light>:</Light>
							<CodeIndent>
                I am a <Pink>lifelong programmer</Pink> and <Pink>learner </Pink>
                with a deep-rooted passion for problem solving, coding, and
                computers. I began writing code when I was 12 years old starting 
								with C++, and I have never looked back.
                <br />
                <br />
                Over the years, I have honed my skills and expanded
                my knowledge by continuously self-studying the
                latest tech that I catch wind of.
                <br />
                <br />
								I have always been eager to tackle new challenges and projects, 
								from <Pink> web development </Pink> to <Pink> Minecraft modding </Pink> 
								to <Pink> Unity scripting </Pink> to <Pink> 3D modeling </Pink> and more.
							</CodeIndent>
						</article>
						<br />
						<br />
						<article>
						<Orange>def</Orange>
						<Yellow> hobbies</Yellow><Orange>()</Orange>:
							<br />
							<CodeIndent>
								I love <Red>riding my motorcycle</Red> as much as possible,
								enjoying the escape and freedom that it gives me.
								<br />
								<br />
								<Red>Building computers</Red> is another hobby of
								mine, where I get to play one of the several forms of{" "}
								“adult Legos” out there. I built my first computer at 14 and fell
								in love with the research, planning,
								and process that comes with the territory.
								<br />
								<br />
								<Red>Coding</Red> is also a never-ending learning journey 
								for me. I’m always on the lookout for new ways to{" "}
								create, innovate, and{" "}
								solve problems using code.
								<br />
								<br />I also take pride in <Red> maintaining and upgrading my
								home server</Red> and network, making sure my media storage,{" "}
								personal projects, and
								Dockerized video game servers are all running smoothly.
								<br />
								<br />
								Finally, I have a passion for the 3D modelling, texturing, and
								 programming sides of <Red>game development</Red>.
								<br />
							</CodeIndent>
							<br />
						</article>
          </CodeSegment>
        </div>
      );
    case "hobbies":
      return (
        <div className="about-code-segment bg-custom-dark/50 rounded-md backdrop-blur-sm">
          <CodeSegment keyPrefix="hobbies">
            <span className="font-normal text-custom-text-300">
              <br />
              <Red className="font-bold italic">{`<about_me>`}</Red>
              <br />
              <br />
              <Orange>function</Orange>
              <Yellow> hobbies</Yellow>
              <Orange>()</Orange>
              <Light>:</Light> <Blue> void </Blue>
              <Orange>{`{`}</Orange>
              <br />
              <CodeIndent>
                I love <Red>riding my motorcycle</Red> as much as possible,
                enjoying the
                <LightGreen> escape</LightGreen> and{" "}
                <LightGreen>freedom</LightGreen> that it gives me.
                <br />
                <br />
                <Red>Building computers</Red> is another <Blue>hobby</Blue> of
                mine, where I get to play one of the several forms of{" "}
                <Pink>“adult Legos”</Pink> out there. I{" "}
                <LightGreen>built my first computer at 14 </LightGreen> and fell
                in love with the <Pink>research</Pink>, <Pink>planning</Pink>,
                and <Pink>process</Pink> that comes with the territory.
                <br />
                <br />
                <Red>Coding</Red> is also a never-ending <Blue>journey</Blue>{" "}
                for me. I’m always on the lookout for new ways to{" "}
                <Yellow>create</Yellow>, <Yellow>innovate</Yellow>, and{" "}
                <Yellow>solve</Yellow> problems using code.
                <br />
                <br />I also take <LightGreen>pride</LightGreen> in{" "}
                <Red>maintaining</Red> and <Red>upgrading</Red> my{" "}
                <Red>home server</Red> and
                <Red> network</Red>, making sure my <Pink>media storage</Pink>,{" "}
                <Pink>personal projects</Pink>, and
                <Blue> Dockerized</Blue> <Pink>video game servers</Pink> are all
                running <Yellow>smoothly</Yellow>.
                <br />
                <br />
                Finally, I have a <LightGreen>passion</LightGreen> for the{" "}
                <Red>3D modelling</Red>, <Red>texturing</Red>, and
                <Red> programming</Red> sides of <Red>game development</Red>.
                <br />
              </CodeIndent>
              <Orange>{`}`}</Orange>
            </span>
            <br />
            <br />
          </CodeSegment>
        </div>
      );
    case "goals":
      return (
        <div className="about-code-segment bg-custom-dark/50 rounded-md backdrop-blur-sm">
          <CodeSegment keyPrefix="goals">
            <span className="font-normal text-custom-text-300">
              <br />
              <Red className="font-bold italic">{`<about_me>`}</Red>
              <br />
              <br />
              <Orange>static void </Orange>
              <Yellow> achieve</Yellow>
              <Orange>(</Orange>
              <LightGreen>YEAR </LightGreen>
              <Blue> year</Blue>
              <Orange>) </Orange>
              <Orange>{`{`}</Orange>
              <CodeIndent>
                <Pink>switch</Pink>
                <Orange>{`(`}</Orange>
                <Blue>year</Blue>
                <Orange>{`) {`}</Orange>
                <br />
                <CodeIndent>
                  <Breakpoint spacing="-6.25em">
                    <Red>1_YEAR</Red>
                    <Light>:</Light>
                  </Breakpoint>
                  <CodeIndent>
                    By <Blue>May of 2025</Blue> I will have <Red>graduated</Red>
                    , <Red>moved out-of-state</Red>, and started my first{" "}
                    <Red>Software Engineer</Red> position. I will use my
                    <LightGreen> skills</LightGreen> to{" "}
                    <LightGreen>provide business value</LightGreen> and I will
                    <Blue> learn</Blue> the <Yellow>fundamentals </Yellow>of
                    working in a<Yellow> fast paced</Yellow>,{" "}
                    <Yellow>Agile environment</Yellow>.
                  </CodeIndent>
                  <br />

                  <Red>5_YEAR</Red>
                  <Light>:</Light>
                  <CodeIndent>
                    By <Blue>May of 2030</Blue> I will have become a{" "}
                    <Red>Senior-level Software Engineer</Red> and I will{" "}
                    <LightGreen>help incoming Interns and new hires</LightGreen>{" "}
                    to become the <Yellow>best engineers</Yellow> that they can
                    be.
                    <br />
                    <br />
                  </CodeIndent>

                  <Red>10_YEAR</Red>
                  <Light>:</Light>
                  <br />
                  <CodeIndent>
                    By <Blue>May of 2035</Blue> I will use all of the{" "}
                    <LightGreen>collective knowledge</LightGreen> that I have
                    acquired while programming as well as the{" "}
                    <Pink>leadership </Pink>
                    and <Pink>supporting skills</Pink> that I have acquired
                    while training others to{" "}
                    <Red>oversee large software engineering efforts</Red>.
                  </CodeIndent>

                  <Orange>{"}"}</Orange>
                </CodeIndent>
              </CodeIndent>
              <Orange>{"}"}</Orange>
            </span>
            <br />
            <br />
          </CodeSegment>
        </div>
      );
  }

  return "";
};

export default function About(): ReactNode {
  const updateSelection = (selectionName: string): void => {
    setSelectedName(selectionName);
    // setDirectoryTree((old) => updateSelectedItem(old, selectionName, setSelectedPage));
    setDirectoryTree((old) => updateSelectedItem(old, selectionName, undefined));
  };

  const [selectedName, setSelectedName] = useState<string>("about_me");
  const [directoryTree, setDirectoryTree] = useState<DirectoryItem[]>([
    {
      name: "..",
      icon: <FolderIcon />,
      disabled: true,
      id: "root"
    },
		{
			name: "about_me.py",
			id: "about_me",
			icon: <Python3Icon />,
			selected: true,
			onClick: () => updateSelection("about_me"),
		},
		// {
		// 	name: "goals.cs",
		// 	id: "goals",
		// 	icon: <CSharpIcon />,
		// 	onClick: () => updateSelection("goals"),
		// },
    // {
    //   name: "_me",
    //   id: "me_root",
    //   icon: <FolderIcon />,
    //   children: [
    //     // {
    //     //   name: "hobbies.ts",
    //     //   id: "hobbies",
    //     //   icon: <TypeScriptIcon />,
    //     //   onClick: () => updateSelection("hobbies"),
    //     // },
    //     {
    //       name: "goals.cs",
    //       id: "goals",
    //       icon: <CSharpIcon />,
    //       onClick: () => updateSelection("goals"),
    //     },
    //     {
    //       name: "..",
    //       id: "me_back",
    //       icon: <FolderIcon />,
    //       disabled: true,
    //     },
    //   ],
    // },
    // {
    //   name: "_site",
    //   icon: <FolderIcon />,
    //   id: "site_root",
    //   children: [
        {
          name: "credits.md",
          id: "credits",
          icon: <InfoIcon color="#68A9F6" />,
          onClick: () => updateSelection("credits"),
        },
        // {
        //   name: "inspiration.md",
        //   id: "inspiration",
        //   onClick: () => updateSelection("inspiration"),
        //   icon: <InfoIcon color="#68A9F6" />,
        // },
        {
          name: "design.md",
          id: "design",
          icon: <InfoIcon color="#68A9F6" />,
          onClick: () => updateSelection("design"),
        },
        // {
        //   name: "..",
        //   id: "site_back",
        //   icon: <FolderIcon />,
        //   disabled: true,
        // },
      // ],
    // },
  ]);
  // const [selectedPage, setSelectedPage] = useState<DirectoryItem>(
  //   (directoryTree[2].children as DirectoryItem[])[1]
  // );

  // temporary solution - get all pages that are in the "me" section
  // this is used so that the footer text can be updated with the correct pathing
  // automatically with the use of the directory tree object
  const pagesInMeSection: string[] = (directoryTree[1].children || [])?.map(
    (child) => child.name || ""
  );

  return (
    <>
      <div id="about" className="flex flex-grow overflow-auto">
        <SideBar tree={directoryTree} title="~/_about/" fontSize="0.9rem"/>
        <div className="p-4 flex-grow flex flex-col relative">
          <h1 className="text-2xl text-bold italic text-custom-red uppercase max-[750px]:text-center">
            [ {selectedName} ]
          </h1>
          <AboutText page={selectedName} />
        </div>
      </div>
      <Footer>
        <span className="text-custom-text-300">
          cam@portfolio:/home/cam/_about/
          {pagesInMeSection.includes(selectedName) ? "_me" : "_site"}{" "}
          <strong>
            {` > vim ./`}
            <Orange>{selectedName}</Orange>{" "}
            <span className="blinking-text">_</span>
          </strong>
        </span>
      </Footer>
    </>
  );
}
