import headShot from "./../images/personal-headshot.jpg";
import Components from "./index";
import { useState } from "react";

function Header() {
  let [navPage, setNavPage] = useState("home");

  function clickHandler(destination) {
    return () => setNavPage(destination);
  }

  return (
    <>
      <header>
        <h1 className="header-title">Rich Overholt</h1>
        <nav>
          <button onClick={clickHandler("home")}>Home</button>
          <button onClick={clickHandler("about-me")}>About Me</button>
          <button onClick={clickHandler("recent-projects")}>
            Recent Projects
          </button>
          <button onClick={clickHandler("contact-me")}>Contact Me</button>
        </nav>
      </header>
      <main>
        <div className="banner">
          <img className="banner-start" src={headShot} alt="avatar" />
          <div className="banner-end">Hello World.</div>
          <h1>Computer programmer</h1>
        </div>
        {/* */}
        {navPage === "about-me" ? (
          <Components.AboutMe />
        ) : navPage === "recent-projects" ? (
          <Components.RecentProjects />
        ) : navPage === "contact-me" ? (
          <Components.ContactMe />
        ) : (
          <Components.Home />
        )}
        <Components.Footer />
      </main>
    </>
  );
}

export default Header;
