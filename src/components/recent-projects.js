import tictactoePic from "./../images/tic-tac-toe.png";
import techBlogPic from "./../images/tech-blog.png";
import weatherDashboardPic from "./../images/weather-dashboard.jpg";
import horoscopesPic from "./../images/fun-with-horoscopes.jpg";

function Project(link, title, pic, gitLink) {
  return { link, title, pic, gitLink };
}

const projectList = [
  //   Project(
  //     "https://rhoverholt.github.io/TicTacToe/",
  //     "Tic Tac Toe",
  //     tictactoePic,
  //     "https://github.com/rhoverholt/TicTacToe"
  //   ),
  Project(
    "https://rhoverholt-tech-blog-mvc.herokuapp.com/",
    "Tech Blog",
    techBlogPic,
    "https://rhoverholt.github.io/Tech-Blog---MVC/"
  ),
  Project(
    "https://rhoverholt.github.io/6hwk-Weather-Dashboard/",
    "Weather Dashboard",
    weatherDashboardPic,
    "https://github.com/rhoverholt/6hwk-Weather-Dashboard"
  ),
  Project(
    "https://rhoverholt.github.io/fun-with-horoscopes/",
    "Fun with Horoscopes",
    horoscopesPic,
    "https://github.com/rhoverholt/fun-with-horoscopes"
  ),
];

function projectComponent(p) {
  return (
    <div key={`${p.title.replace(" ", "")}`}>
      <div className="project">
        <a className="no-line" href={p.link}>
          <h1>{p.title}</h1>
          <img src={p.pic} alt={`${p.title}`} />
        </a>
      </div>
      <a className="my-link" href={p.gitLink}>
        Github Repository - {p.title}
      </a>
    </div>
  );
}

function RecentProjects() {
  return (
    <section id="work">
      <h1 className="section-title">Recent Projects</h1>

      <div className="section-details">
        <div className="first-project">
          <div className="project">
            <a
              className="no-line"
              href="https://rhoverholt.github.io/TicTacToe/"
            >
              <h1>Tic Tac Toe - dynamic</h1>
              <img src={tictactoePic} alt="Tic Tac Toe Game" />
            </a>
          </div>
          <a className="my-link" href="https://github.com/rhoverholt/TicTacToe">
            Github Repository - Tic Tac Toe
          </a>
        </div>
        <div className="other-projects">
          {projectList.map(projectComponent)}
        </div>
      </div>
    </section>
  );
}

export default RecentProjects;
