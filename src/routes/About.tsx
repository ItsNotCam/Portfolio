import { ReactNode, useState } from "react";
import Footer from "../components/Footer";
import SideBar, {
  DirectoryItem,
  updateSelectedItem,
} from "../components/Sidebar";
import {
  CSharpIcon,
  FolderIcon,
  InfoIcon,
  Python3Icon,
  TypeScriptIcon,
} from "../components/Icons";
import {
  Blue,
  Green,
  Light,
  LightGreen,
  Orange,
  Pink,
  Red,
  Yellow,
} from "../components/ColoredText";
import CodeSegment, { Breakpoint, CodeIndent } from "../components/CodeSegment";

import "./_about.css";

const AboutText = (props: { page: string }): ReactNode => {
  const page = props.page.replace(/\.[^/.]+$/, "");
  switch (page) {
    case "passion":
      return (
        <div className="about-code-segment">
          <CodeSegment keyPrefix="passion">
            <span className="font-normal">
              <br />
              <Red className="font-bold italic">{`<about_me>`}</Red>
              <br />
              <br />
              <Orange>def</Orange>
              <Yellow> passion</Yellow>
              <Orange>()</Orange>
              <Light>:</Light>
              <br />
              <div className="ml-4 text-custom-text-300">
                I am a <Pink>lifelong programmer</Pink> and <Pink>learner</Pink>{" "}
                with a deep-rooted <LightGreen>passion </LightGreen>
                for <Pink>problem solving</Pink>, <Pink>coding</Pink>, and{" "}
                <Pink>computers</Pink>. I began writing code when I was{" "}
                <Blue>12 years old</Blue> starting with <Red>C++</Red>, and I
                have <Blue>never</Blue> looked back.
                <br />
                <br />
                Over the years, I have honed my <Pink>skills</Pink> and expanded
                my
                <Blue> knowledge</Blue> by continuously{" "}
                <LightGreen>self-studying</LightGreen> the{" "}
                <Red>latest tech</Red> that I catch wind of.
                <br />
                <br />I have always been{" "}
                <Blue>eager to tackle new challenges </Blue>
                and projects, from <LightGreen>
                  web development
                </LightGreen> to <LightGreen>Minecraft modding</LightGreen> to{" "}
                <LightGreen>Unity scripting</LightGreen> to{" "}
                <LightGreen>3D modeling</LightGreen> and <Red>more</Red> ...
                Whenever and wherever I see a chance to{" "}
                <Yellow>automate</Yellow> or <Yellow>innovate</Yellow>, I take
                it and <Red>run</Red>.
                <br />
                <br />
                <Blue>while</Blue>
                <Orange>{`(self.`}</Orange>
                <Red>is_alive</Red>
                <Orange>{`)`}</Orange>
                <Light>:</Light>
                <br />
                <div className="ml-4">
                  <Yellow>print</Yellow>
                  <Orange>{`(`}</Orange>
                  <Green>"experience"</Green>
                  <Orange>{`)`}</Orange>
                  <br />
                  <Yellow>print</Yellow>
                  <Orange>{`(`}</Orange>
                  <Green>"learn"</Green>
                  <Orange>{`)`}</Orange>
                  <br />
                  <Yellow>sleep</Yellow>
                  <Orange>{`(`}</Orange>
                  <LightGreen>24</LightGreen>
                  <Light> * </Light>
                  <LightGreen>60</LightGreen>
                  <Light> * </Light>
                  <LightGreen>60</LightGreen>
                  <Orange>{`)`}</Orange>
                </div>
              </div>
              <br />
            </span>
          </CodeSegment>
        </div>
      );
    case "hobbies":
      return (
        <div className="about-code-segment">
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
        <div className="about-code-segment">
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
                  <Breakpoint spacing="-5.75em">
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
    setDirectoryTree((old) => {
      return updateSelectedItem(old, selectionName, setSelectedPage);
    });
  };

  const [selectedName, setSelectedName] = useState<string>("passion");
  const [directoryTree, setDirectoryTree] = useState<DirectoryItem[]>([
    {
      name: "..",
      icon: <FolderIcon />,
      disabled: true,
    },
    {
      name: "_me",
      icon: <FolderIcon />,
      children: [
        {
          name: "passion.py",
          icon: <Python3Icon />,
          selected: true,
          onClick: () => updateSelection("passion.py"),
        },
        {
          name: "hobbies.ts",
          icon: <TypeScriptIcon />,
          onClick: () => updateSelection("hobbies.ts"),
        },
        {
          name: "goals.cs",
          icon: <CSharpIcon />,
          onClick: () => updateSelection("goals.cs"),
        },
        {
          name: "..",
          icon: <FolderIcon />,
          disabled: true,
        },
      ],
    },
    {
      name: "_site",
      icon: <FolderIcon />,
      children: [
        {
          name: "credits.md",
          icon: <InfoIcon color="#68A9F6" />,
          onClick: () => updateSelection("credits.md"),
        },
        {
          name: "inspiration.md",
          onClick: () => updateSelection("inspiration.md"),
          icon: <InfoIcon color="#68A9F6" />,
        },
        {
          name: "design.md",
          icon: <InfoIcon color="#68A9F6" />,
          onClick: () => updateSelection("design.md"),
        },
        {
          name: "..",
          icon: <FolderIcon />,
          disabled: true,
        },
      ],
    },
  ]);

  const [selectedPage, setSelectedPage] = useState<DirectoryItem>(
    (directoryTree[1].children as DirectoryItem[])[1]
  );
  // temporary solution - get all pages that are in the "me" section
  // this is used so that the footer text can be updated with the correct pathing
  // automatically with the use of the directory tree object
  const pagesInMeSection: string[] = (directoryTree[1].children || [])?.map(
    (child) => child.name
  );

  return (
    <>
      <div id="about" className="w-full h-full flex flex-grow">
        <SideBar tree={directoryTree} title="~/_about/" />
        <div className="p-4 flex-grow flex flex-col relative">
          <h1 className="text-2xl text-bold italic text-custom-red uppercase max-[750px]:text-center">
            [ {selectedName} ]
          </h1>
          <AboutText page={selectedName} />
          {/* <img
            src="images/2001.jpg"
            className="absolute right-5 bottom-5 h-[300px] -z-10"
          ></img> */}
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
