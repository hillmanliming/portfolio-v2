import ImageSlider from "./components/ImageSlider";
import Cursor from "./components/Cursor";

export default function Home() {
  return (
    <main className="main-grid">
      <Cursor />
      <article id="projects">
        <ImageSlider />
      </article>
      <article id="title">
        <p className="">
          Li-Ming Hillman - Front-end developer and UI Designer
        </p>
      </article>
      <article id="resumé">
        <div>
          <p>Simplicity</p>
          <p>Efficiency</p>
          <p>Reliability</p>
        </div>
      </article>
      <article id="about">
        <p>About</p>
      </article>
      <article id="contact">
        <a href="mailto:contact@liminghillmanconsult.com">
          contact@liminghillmanconsult.com
        </a>

        <div className="socials">
          <a target="_blank" href="https://www.linkedin.com/in/li-minghillman">
            LinkedIn
          </a>
          <a target="_blank" href="https://www.instagram.com/liminghillman">
            Instagram
          </a>
        </div>
      </article>
    </main>
  );
}
