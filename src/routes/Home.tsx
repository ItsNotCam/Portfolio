import { ReactNode } from "react";
import Footer from "../components/Footer";
import "./_common.css";
import CodeSegment from "../components/CodeSegment";
import {
  Blue,
  Yellow,
  Orange,
  Pink,
  Red,
  LightGreen,
  OffBlue,
} from "../components/ColoredText";

const PageTitle = (): ReactNode => (
  <>
    <p className="home-title font-semibold tracking-wide text-custom-text-300 w-max flex flex-col max-ok:text-center max-ok:justify-center">
      <span className="text-start max-ok:text-center lg:pr-16 max-ok:pr-0">
        <span className="text-custom-off-dark-300 max-ok:hidden">{`<`}</span>
        <span className="text-custom-orange text-start">CAM</span>
        <span>ERON</span>
      </span>
      <span className="text-end max-ok:text-center">
        YOUNG
        <span className="text-custom-off-dark-300 max-ok:hidden">{`>`}</span>
      </span>
    </p>
    <p className="text-custom-text-300 home-subtitle font-medium text-end lg:pr-14 max-ok:pr-0">
      SOFTWARE, BIKES, AND <span className="text-custom-orange">COFFEE</span>
    </p>
  </>
);

const CodeMessage = (): ReactNode => (
  <div className="text-code text-custom-text-300 font-normal max-w-[31rem] mx-4">
    <br />
    <Red className="font-semibold italic">{`<introduction>`}</Red>

    <br />
    <br />

    <Blue>void </Blue>
    <Yellow>hello</Yellow>
    <Orange>{`() {`}</Orange>

    <div className="ml-4">
      My name is
      <Pink> Cameron Young</Pink>. 
			I wrote
      <Blue> my first program </Blue> 
			when I was
      <Blue> 12 years old</Blue>, 
			and since then I have been a
      <Pink> Software Engineer</Pink>.

      <br/><br/>

			I am a Senior at
      <Pink> George Mason University </Pink>
      and in
      <Pink> May </Pink>
			of 
			<Pink> 2025 </Pink>
			I will be 
			<Red> graduating </Red>
      with my
      <LightGreen> Bachelor's </LightGreen>
      of Science in 
			<LightGreen> Information Technology </LightGreen>
      and my
      <Blue> Minor </Blue> 
			in 
			<Blue> Computer Science</Blue>.

      <br/><br/>

      When I am not
      <OffBlue> designing </OffBlue>
			or
      <OffBlue> programming </OffBlue>
			something, I am usually riding my
      <Pink> motorcycle</Pink>.
    </div>
    <Orange>{`}`}</Orange>

    <br/><br/>
  </div>
);

export default function Home() {
  return (
    <>
      <div
        id="Home"
        className="flex-1 relative w-full flex flex-row justify-around flex-wrap items-center"
      >
        <div className="flex flex-row max-ok:flex-col gap-4 items-center">
          <div className="p-2 max-ok:flex max-ok:flex-col max-ok:justify-center max-ok:items-center">
            <PageTitle />
          </div>
          <CodeSegment keyPrefix="home" lineCount={17}>
            <CodeMessage />
          </CodeSegment>
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
