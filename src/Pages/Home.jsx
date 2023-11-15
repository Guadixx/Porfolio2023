import "./Home.css";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/public/CV.pdf"; // Reemplaza con la ruta de tu CV
    link.download = "mi_cv.pdf"; // Nombre del archivo de descarga
    link.click();
  };
  return (
    <div className="about">
      <div className="aboutme_container">
        <div className="aboutme_avatar">
          <h2>About Me</h2>
          <img
            src="https://res.cloudinary.com/dpidlverd/image/upload/v1698675405/replica/WhatsApp_Image_2023-10-30_at_12.48.35_dvzhvy.jpg"
            alt="avatar"
          ></img>
        </div>
        <div className="aboutme_content">
          <p>
            {" "}
            Hello there! My name is Guadalupe Doudchitzky Amadeo and Im a junior
            full stack web developer. I recently completed my training in Full
            Stack Web Development at Neoland.{" "}
          </p>
          <p>
            {" "}
            💡 Curiosity and observation have taken me to search constantly for
            new challenges, experiences and learning. As a result, I find great
            satisfaction in developing web pages and mobile applications.
          </p>
          <p>
            {" "}
            🖇️ In particular, I am interested in pursuing a career as a Full
            Stack Developer using a variety of cutting-edge technologies. I am
            skilled in using React, JavaScript, CSS, HTML, TypeScript, Node.js,
            ExpressJS, MongoDB, Vite, and Dotenv. I am committed to staying
            up-to-date with the latest trends and techniques in web development,
            and I am excited by the endless possibilities and potential for
            innovation in this field.
          </p>
          <p>
            {" "}
            📱 I am dedicated to building intuitive and visually stunning
            interfaces that make a lasting impression. My attention to detail
            and strong problem-solving skills enable me to deliver high-quality
            work, even when faced with complex challenges.
          </p>
          <p> Hope we can meet soon.</p>
          <button className="button_cv" onClick={handleDownload}>
            Download CV
          </button>
        </div>
      </div>
      <div className="services_container">
        <div className="developer_container">
          <img
            src="https://res.cloudinary.com/dpidlverd/image/upload/v1698767659/replica/7b52197ad5474687f107fcaae4e9b49c-removebg-preview_ztnvk7.png"
            alt="developer illustration"
          ></img>
          <h2>Full Stack Developer</h2>
          <p>
            {" "}
            I am a passionate full-stack developer with a strong focus on
            building user-friendly and visually appealing web applications.
            Focused in responsive design and accessibility, and I am always
            looking for new ways to improve the user experience.
          </p>
        </div>
        <div className="ux_container">
          <img
            src="https://res.cloudinary.com/dpidlverd/image/upload/v1698767143/replica/11aa245284fe7cd71c33272d37451875-removebg-preview_km2hw4.png"
            alt="ux illustration"
          ></img>
          <h2>UX/UI design</h2>
          <p>
            {" "}
            I am a passionate UX/UI designer focused on creating meaningful and
            engaging digital experiences. My primary goal is to combine
            functionality with visual appeal, prioritizing the user experience
            at every stage of the design process.
          </p>
        </div>
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
          <abbr title="FIGMA">
            <img
              src="https://res.cloudinary.com/dpidlverd/image/upload/v1698768315/replica/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024_zfizhw.png"
              alt="Figma icon"
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

export default Home;
