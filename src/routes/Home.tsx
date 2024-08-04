import { ReactNode } from "react";
import Footer from "../components/Footer";
import "./_common.css";
import "./_home.css";
import CodeSegment, { CodeIndent } from "../components/CodeSegment";
import {
  Blue,
  Yellow,
  Orange,
  Pink,
  Red,
  LightGreen,
  OffBlue,
  Light,
} from "../components/ColoredText";

const PageTitle = (): ReactNode => (
  <>
    <p className="home-title__full-name">
      <span className="home-title__first-name">
        <Orange>CAM</Orange>
        <Light>ERON</Light>
      </span>
      <Light className="home-title__last-name">YOUNG</Light>
    </p>
    <Light className="home-subtitle">
      SOFTWARE, BIKES, AND <Orange>COFFEE</Orange>
    </Light>
  </>
);

const CodeMessage = (): ReactNode => (
  <div className="home-code-message">
    <br />
    <Red className="font-semibold italic">{`<introduction>`}</Red>

    <br />
    <br />

    <Blue>void </Blue>
    <Yellow>hello</Yellow>
    <Orange>{`() {`}</Orange>

    <CodeIndent>
      My name is
      <Pink> Cameron Young</Pink>. I wrote
      <Blue> my first program </Blue>
      when I was
      <Blue> 12 years old</Blue>, and since then I have been a
      <Pink> Software Engineer</Pink>.
      <br />
      <br />I am a Senior at
      <Pink> George Mason University </Pink>
      and in
      <Pink> May </Pink>
      of
      <Pink> 2025 </Pink>I will be
      <Red> graduating </Red>
      with my
      <LightGreen> Bachelor's </LightGreen>
      of Science in
      <LightGreen> Information Technology </LightGreen>
      and my
      <Blue> Minor </Blue>
      in
      <Blue> Computer Science</Blue>.
      <br />
      <br />
      When I am not
      <OffBlue> designing </OffBlue>
      or
      <OffBlue> programming </OffBlue>
      something, I am usually riding my
      <Pink> motorcycle</Pink>.
    </CodeIndent>
    <Orange>{`}`}</Orange>

    <br />
    <br />
  </div>
);

//flex flex-row max-ok:flex-col gap-4 items-center">
//p-2 max-ok:flex max-ok:flex-col max-ok:justify-center max-ok:items-center">

export default function Home() {
  return (
    <>
      <div
        id="Home"
        className="flex-1 relative w-full flex flex-row justify-around flex-wrap items-center"
      >
        <div className="home-hero">
          <div className="home-title">
            <PageTitle />
          </div>
          <div className="code-segment-wrapper">
            <CodeSegment keyPrefix="home">
              <CodeMessage />
            </CodeSegment>
          </div>
        </div>
      </div>
      <Footer>
        <span className="text-custom-text-300">
          cam@portfolio:/home/cam/_home <strong>{` > `}</strong>{" "}
          <strong className="blinking-text">_</strong>
        </span>
      </Footer>
    </>
  );
}
