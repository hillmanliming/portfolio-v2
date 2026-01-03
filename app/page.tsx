import ImageSlider from "./components/ImageSlider";
import Cursor from "./components/Cursor";

export default function Home() {
  return (
    <div className="main-container">
      <main className="main-grid">
        <Cursor />
        <article id="projects">
          <ImageSlider />
        </article>
        <article id="title">
          <div className="head">
            <div className="justify-self-start uppercase fade-in">
              Front-end developer
            </div>

            <div className="justify-self-end uppercase fade-in">
              UI-designer
            </div>
          </div>
        </article>

        <article id="about">
          <a className="fade-in" href="/about">
            <h2>About</h2>
          </a>
        </article>
        <article id="resumé">
          <a href="/resumé">
            <h2 className="fade-in">Resumé</h2>
          </a>
        </article>
        <article id="contact">
          <a className="fade-in" href="mailto:contact@liminghillmanconsult.com">
            contact@liminghillman.com
          </a>

          <div className="socials">
            <a
              className="fade-in"
              target="_blank"
              href="https://www.linkedin.com/in/li-minghillman"
            >
              LinkedIn
            </a>
            <a
              className="fade-in"
              target="_blank"
              href="https://www.instagram.com/liminghillman"
            >
              Instagram
            </a>
          </div>
        </article>
      </main>
    </div>
  );
}
