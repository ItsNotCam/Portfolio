import { ReactNode } from "react";
import Footer from "../components/Footer";
import "./_common.css";

const Title: ReactNode = (
  <>
    <p className="home-title font-semibold tracking-wide text-custom-text-300 w-max flex flex-col max-ok:text-center max-ok:justify-center">
      <span className="text-start max-ok:text-center lg:pr-16 max-ok:pr-0">
        <span className="text-custom-off-dark-300 max-ok:hidden">{`<`}</span>
        <span className="text-custom-orange text-start">CAM</span>
        <span>ERON</span>
      </span>
      <span className="text-end max-ok:text-center">
        YOUNG<span className="text-custom-off-dark-300 max-ok:hidden">{`>`}</span>
      </span>
    </p>
    <p className="text-custom-text-300 home-subtitle font-medium text-end lg:pr-14 max-ok:pr-0">
			SOFTWARE, BIKES, AND <span className="text-custom-orange">COFFEE</span>
    </p>
  </>
);

const Message: ReactNode = (
  <div className="text-code text-custom-text-300 font-normal max-w-[31rem] mx-4">
    <br />
    <span className="text-custom-red font-semibold">{`<introduction>`}</span>

    <br />
    <br />

    <span className="text-custom-blue ">void </span>
    <span className="text-custom-yellow">hello</span>
    <span className="text-custom-orange">{`() {`}</span>

    <div className="ml-4">
      My name is
      <span className="text-custom-pink"> Cameron Young</span>. I wrote my
      <span className="text-custom-off-blue"> my first program</span> when I was
      <span className="text-custom-off-blue"> 12 years old</span>, and since
      then I have been a
      <span className="text-custom-pink"> Software Engineer</span>.
      <br />
      <br />I am a Senior at
      <span className="text-custom-pink"> George Mason University </span>
      and in
      <span className="text-custom-pink"> May </span>of{" "}
      <span className="text-custom-pink"> 2025 </span>I will be{" "}
      <span className="text-custom-red"> graduating </span>with my
      <span className="text-custom-light-green"> Bachelor's </span>
      of Science in <span className="text-custom-light-green">Information</span>
      <span className="text-custom-light-green"> Technology </span>
      and my
      <span className="text-custom-off-blue"> Minor </span> in{" "}
      <span className="text-custom-off-blue"> Computer Science</span>.
      <br />
      <br />
      When I am not
      <span className="text-custom-off-blue"> designing </span>or
      <span className="text-custom-off-blue"> programming </span>something, I am usually
      riding my
      <span className="text-custom-pink"> motorcycle</span>.
    </div>
    <span className="text-custom-orange">{`}`}</span>
  </div>
);

export default function Home() {
  const arr: number[] = Array.from({ length: 17 }, (_, i) => i + 1);
  return (
    <>
      <div id="Home" className="flex-1 relative w-full flex flex-row justify-around flex-wrap items-center">
        <div className="flex flex-row max-ok:flex-col gap-4 items-center">
          <div className="p-2 max-ok:flex max-ok:flex-col max-ok:justify-center max-ok:items-center">{Title}</div>
          <div className="flex flex-row gap-2 font-semibold text-lg leading-snug mb-8">
            <div className="text-custom-text-300/50 text-end flex flex-col border-r-2 border-h border-custom-text-300/50 pr-3 text-code max-sm:hidden">
              {arr.map((idx) => (<span key={`home-code-${idx}`}>{idx}<br /></span>))}
            </div>
            {Message}
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
