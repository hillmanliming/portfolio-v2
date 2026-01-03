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
        <div className="head">
          <div className="justify-self-start uppercase">
            Front-end developer
          </div>

          <div className="justify-self-end uppercase">UI-designer</div>
        </div>
      </article>

      <article id="about">
        <a href="/about">
          <h2>About</h2>
        </a>
      </article>
      <article id="resumé">
        <a href="/resumé">
          <h2 className="">Resume</h2>
        </a>
      </article>
      <article id="contact">
        <a href="mailto:contact@liminghillmanconsult.com">
          contact@liminghillman.com
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
