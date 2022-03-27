import headShot from "./../images/personal-headshot.jpg";
import Components from "./index";
import { useState } from "react";

function Header() {
  let [navPage, setNavPage] = useState("home");

  function clickHandler(destination) {
    return () => setNavPage(destination);
  }

  function getNavButton(clickText, displayText) {
    if (clickText === navPage)
      return (
        <button onClick={clickHandler(`${clickText}`)} disabled>
          {displayText}
        </button>
      );

    return (
      <button onClick={clickHandler(`${clickText}`)}>{displayText}</button>
    );
  }

  return (
    <>
      <header>
        <h1 className="header-title">Rich Overholt</h1>
        <nav>
          {getNavButton("home", "All")}
          {getNavButton("about-me", "About Me")}
          {getNavButton("recent-projects", "Recent Projects")}
          {getNavButton("contact-me", "Contact Me")}
        </nav>
      </header>
      <main>
        <div className="banner">
          <img className="banner-start" src={headShot} alt="avatar" />
          <div className="banner-end">Hello World.</div>
          <h1>Computer programmer</h1>
        </div>
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
