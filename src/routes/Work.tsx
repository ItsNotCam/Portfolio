import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <div id="work"></div>
      <Footer>
        <span className="text-custom-text-300">
          cam@portfolio:/home/cam/_Work <strong>{` > `}</strong>{" "}
          <strong className="blinking-text">_</strong>
        </span>
      </Footer>
    </>
  );
}
