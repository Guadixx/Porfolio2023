import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-flex">
      <figure>
        <div className="text">
          <h3>Test Busters</h3>
          <p>
            Web application designed to make and create any type of test. All
            users have the possibility of creating their own tests on the
            subject of their choice. If you have an account on the application,
            you can create tests, score them, see who created them, add
            comments, react to them, follow other users, view their creations
            and scores, and even access a leaderboard where you can compete to
            see who achieves the best result.
          </p>
        </div>
        <div className="img_tb">
          <abbr title="TestBusters">
            <img
              className="images_tb"
              src="https://res.cloudinary.com/dpidlverd/image/upload/v1686149427/Captura_de_Pantalla_2023-06-07_a_las_16.42.03_ln8k4s.png"
              alt="TestBusters visual"
            />
          </abbr>
        </div>
        <h4>Technologies:</h4>
        <div className="techs">
          <abbr title="ReactJS">
            <img
              src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682439893/assets/logo-react-svgrepo-com_cxinj2.svg"
              alt="React icon"
            />
          </abbr>
          <abbr title="JavaScript">
            <img
              src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682439893/assets/js_wmihuh.png"
              alt="JavaScript icon"
            />
          </abbr>
          <abbr title="Node.js">
            <img
              src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682439893/assets/node-js-svgrepo-com_x6rv1r.svg"
              alt="Node.js icon"
            />
          </abbr>
          <abbr title="MongoDB">
            <img
              src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682439893/assets/mongodb-logo-svgrepo-com_gemo78.svg"
              alt="MongoDB icon"
            />
          </abbr>
          <abbr title="HTML5">
            <img
              src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682439893/assets/html5_n4srbi.png"
              alt="HTML5 icon"
            />
          </abbr>
          <abbr title="CSS3">
            <img
              src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682439893/assets/css-3_hwlemu.png"
              alt="CSS3 icon"
            />
          </abbr>
        </div>
        <div className="links-pr">
          <h4>Links:</h4>
          <a href="https://www.notion.so/TESTBUSTERS-3a2422fe9d944563b25f491321044bc4">
            Documentation
          </a>
          <a href="https://github.com/Guadixx/TestBusters_BACK">
            Backend repository
          </a>
          <a href="https://github.com/Guadixx/TestBusters_Front">
            Frontend repository
          </a>
        </div>
      </figure>
      <figure>
        <div className="text">
          <h3>Marvel Project</h3>
          <p>
            Web application made with React.js of the Marvel MCU movies, we
            provide an interactive platform for users to check updates, detailed
            information on the movies, and have access to a personalized
            watchlist and favorites list. We also have a forum for reviews and
            comments for all users! The web application is fully responsive for
            all devices.
          </p>
        </div>
        <div className="img_m">
          <abbr title="Marvel">
            <img
              className="images_mb"
              src="https://res.cloudinary.com/dpidlverd/image/upload/v1686158661/marvelmaqueta_tld1uj.png"
              alt="Marvel visual"
            />
          </abbr>
        </div>
        <h4>Technologies:</h4>
        <div className="techs">
          <abbr title="ReactJS">
            <img
              src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682439893/assets/logo-react-svgrepo-com_cxinj2.svg"
              alt="React icon"
            />
          </abbr>
          <abbr title="JavaScript">
            <img
              src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682439893/assets/js_wmihuh.png"
              alt="JavaScript icon"
            />
          </abbr>
          <abbr title="HTML5">
            <img
              src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682439893/assets/html5_n4srbi.png"
              alt="HTML5 icon"
            />
          </abbr>
          <abbr title="CSS3">
            <img
              src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682439893/assets/css-3_hwlemu.png"
              alt="CSS3 icon"
            />
          </abbr>
        </div>
        <div className="links-pr">
          <h4>Links:</h4>
          <a href="https://github.com/kareenadg/MARVEL_GROUP_project">
            Repository
          </a>
        </div>
      </figure>
    </div>
  );
};

export default Projects;
