import Footer from "../components/Footer";

export default function Resume() {
  return (
    <>
      <div id="resume"></div>
      <Footer>
        <span className="text-custom-text-300">
          cam@portfolio:/home/cam/_resume <strong>{` > `}</strong>{" "}
          <strong className="blinking-text">_</strong>
        </span>
      </Footer>
    </>
  );
}
