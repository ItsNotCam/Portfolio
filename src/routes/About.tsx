import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <div id="about"></div>
      <Footer>
        <span className="text-custom-text-300">
          cam@portfolio:/home/cam/_About <strong>{` > `}</strong>{" "}
          <strong className="blinking-text">_</strong>
        </span>
      </Footer>
    </>
  );
}
