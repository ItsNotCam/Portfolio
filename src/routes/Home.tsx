import { ReactNode } from "react";
import Footer from "../components/Footer";
import "./_common.css";
import "./_home.css";
import CodeSegment from "../components/CodeSegment";
import {
  Blue as B,
  Yellow as Y,
  Orange as O,
  Pink as P,
  Red as R,
  LightGreen as LG,
  OffBlue as OB,
	Light,
} from "../components/ColoredText";

const PageTitle = (): ReactNode => (
  <>
    <p className="home-title__full-name">
      <span className="home-title__first-name">
        <O>CAM</O><Light>ERON</Light>
      </span>
			<Light className="home-title__last-name">YOUNG</Light>
    </p>
    <Light className="home-subtitle">
      SOFTWARE, BIKES, AND <O>COFFEE</O>
    </Light>
  </>
);

const CodeMessage = (): ReactNode => (
  <div className="home-code-message">
    <br />
    <R className="font-semibold italic">{`<introduction>`}</R>

    <br />
    <br />

    <B>void </B>
    <Y>hello</Y>
    <O>{`() {`}</O>

    <div className="ml-4">
      My name is
      <P> Cameron Young</P>. 
			I wrote
      <B> my first program </B> 
			when I was
      <B> 12 years old</B>, 
			and since then I have been a
      <P> Software Engineer</P>.

      <br/><br/>

			I am a Senior at
      <P> George Mason University </P>
      and in
      <P> May </P>
			of 
			<P> 2025 </P>
			I will be 
			<R> graduating </R>
      with my
      <LG> Bachelor's </LG>
      of Science in 
			<LG> Information Technology </LG>
      and my
      <B> Minor </B> 
			in 
			<B> Computer Science</B>.

      <br/><br/>

      When I am not
      <OB> designing </OB>
			or
      <OB> programming </OB>
			something, I am usually riding my
      <P> motorcycle</P>.
    </div>
    <O>{`}`}</O>

    <br/><br/>
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
