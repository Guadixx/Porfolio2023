import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="aboutme">
        <h2>About me</h2>
        <p>
          {" "}
          Hello there! My name is Guadalupe Doudchitzky Amadeo and Im a junior full stack web developer. I
          recently completed my training in Full Stack Web Development at
          Neoland.{" "}
        </p>
        <p>
          {" "}
          💡 Curiosity and observation have taken me to search constantly for
          new challenges, experiences and learning. As a result, I find great
          satisfaction in developing web pages and mobile applications.
        </p>
        <p>
          {" "}
          🖇️ In particular, I am interested in pursuing a career as a Full Stack
          Developer using a variety of cutting-edge technologies. I am skilled
          in using React, JavaScript, CSS, HTML, TypeScript, Node.js, ExpressJS,
          MongoDB, Vite, and Dotenv. I am committed to staying up-to-date with
          the latest trends and techniques in web development, and I am excited
          by the endless possibilities and potential for innovation in this
          field.
        </p>
        <p>
          {" "}
          📱 I am dedicated to building intuitive and visually stunning
          interfaces that make a lasting impression. My attention to detail and
          strong problem-solving skills enable me to deliver high-quality work,
          even when faced with complex challenges.
        </p>
        <p> Hope we can meet soon.</p>
      </div>
      <div className="skills">
        <h3>My Skills</h3>
        <div className="technologies">
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
          <abbr title="GitHub">
            <img
              src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682438922/assets/github_fmllwl.png"
              alt="GitHub logo"
            />
          </abbr>
          <abbr title="Typescript">
            <img src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682439352/assets/typescript_pptz1x.png" />
          </abbr>
        </div>
      </div>
    </div>
  );
};

export default About;
