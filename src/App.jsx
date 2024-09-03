import "./App.css";
import DownloadIcon from '@mui/icons-material/Download';


function App() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/public/GuadalupeCV.pdf"; // Reemplaza con la ruta de tu CV
    link.download = "GuadalupeDoudchitzkyCV.pdf"; // Nombre del archivo de descarga
    link.click();
  };
  return (
    <div className="porfolio_container">
      <div className="aboutMe_container">
        <img
          src="https://res.cloudinary.com/dpidlverd/image/upload/v1721485415/replica/1688395371731_smytw3.jpg"
          alt="avatar"
        ></img>
        <h1>Guadalupe Doudchitzky Amadeo</h1>
        <h4>Front-end developer and UX/UI designer</h4>
        <h4 className="email_sender">
        <a className="email_sender" href="mailto:guadadoud@gmail.com">guadadoud@gmail.com</a>
        </h4>
        <h4 className="phone"><a href="tel:+34636191878"></a>📞 636191878 </h4>
        <div className="links_container">
          <a href="https://www.linkedin.com/in/guadalupedoudchitzkyamadeo/">
            <img
              src="https://res.cloudinary.com/do7bnejaz/image/upload/v1682438843/assets/linkedin_ai0syv.png"
              alt="LinkedIn"
            />
          </a>
          <a href="https://github.com/Guadixx">
            <img
              src="https://res.cloudinary.com/dpidlverd/image/upload/v1698678003/replica/github_tw8doc.png"
              alt="Git Hub"
            />
          </a>
        </div>
      </div>
      <div className="aboutMe_content">
        <div className="text_container">
          <p>
            {" "}
            💡 Curiosity and observation have taken me to search constantly for
            new challenges, experiences and learning. As a result, I find
            myself deeply fullfilled with developing web pages and mobile
            applications.
          </p>
          <p>
            {" "}
            🖇️ In particular, I am interested in pursuing a career as a Frontend Developer & UI designer
          </p>
          <p>
            {" "}
            📱 I am dedicated to building intuitive and visually stunning
            interfaces that make a lasting impression. My attention to detail
            and strong problem-solving skills enable me to deliver high-quality
            work, even when faced with complex challenges.
          </p>
          <p>
            {" "}
            🧉 On my free time you can find me doing anything art related like
            music, painting, watching movies or playing The Sims.
          </p>
          <p> Hope we can meet soon.</p>
          <button className="button_cv" onClick={handleDownload} >
            Download CV
            <DownloadIcon className="icon-style" />
          </button>
        </div>
        <div className="skills__container">
          <h1>Skills</h1>
          <div className="skills__content">
            <p>Angular (11,12,16 & 17)</p>
            <p>React (16 & 17)</p>
            <p>Javascript</p>
            <p>Typescript</p>
            <p>Python</p>
            <p>HTML5</p>
            <p>CSS</p>
            <p>SASS</p>
            <p>Node.js</p>
            <p>Express.js</p>
            <p>MongoDB</p>
            <p>Github</p>
            <p>Firebase Auth.</p>
            <p>Firestore</p>
            <p>Cloud Run</p>
            <p>Cloud Datastore</p>
            <p>Docker</p>
            <p>Fast API</p>
            <p>Bootstrap</p>
            <p>Material UI & Angular Material</p>
            <p>NPM</p>
            <p>Nginx</p>
            <p>Postman</p>
          </div>
        </div>
        <div className="experience_container">
          <h1>Experience</h1>
          <div className="experience_content">
            <h4>Dec 2023 - Current</h4>
            <div className="experience_box">
              <h4>Frontend developer & UI designer</h4>
              <p>
                {" "}
                Refactored Exyts accredited management area and the QR code management app, improved UX/UI and enhanced developer experience by creating a design system  
              </p>
              <div className="technologies_div">
                <p>Angular</p>
                <p>Typescript</p>
                <p>Javascript</p>
                <p>Figma</p>
                <p>Docker</p>
                <p>Firebase</p>
                <p>Firestore</p>
                <p>Nginx</p>
                <p>Postman</p>
                <p>Python</p>
                <p>Google Cloud Datastore</p>
                <p>Google Cloud Run</p>
              </div>
            </div>
          </div>
          <div className="experience_content">
            <h4>May 2023 - August 2023</h4>
            <div className="experience_box">
              <h4>Frontend devloper - Chattigo</h4>
              <p>
                {" "}
                Maintaining and adding new functionalities into our corporate site
              </p>
              <div className="technologies_div">
                <p>Angular</p>
                <p>Typescript</p>
                <p>Mockoon</p>
                <p>Homebrew</p>
              </div>
            </div>
          </div>
        </div>
        <div className="proyects_container">
          <h1>Proyects</h1>
          <a
                href="https://natours-pi-orpin.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
          >
          <div className="proyects_content">
              <img
                className="images_tb"
                src="https://res.cloudinary.com/dpidlverd/image/upload/v1725382206/Captura_de_pantalla_2024-09-03_a_las_18.47.32_nd2riy.png"
                alt="TestBusters mockup"
                loading="lazy"
              />
              <div className="proyects_box">
                <h4>Natours</h4>
                <p>
                Project focused solely on web design, fully responsive and adaptable to all devices. The purpose of this project is to build an entire application using only pure HTML, CSS and SASS, without any libraries and without Flexbox. 
                </p>{" "}
                <div className="technologies_div">
                  <p>HTML5</p>
                  <p>CSS</p>
                  <p>SASS</p>
                </div>
              </div>
            </div>
            </a>
          <a
            href="https://github.com/Guadixx/TestBusters_Front/tree/main"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="proyects_content">
              <img
                className="images_tb"
                src="https://res.cloudinary.com/dpidlverd/image/upload/v1686149427/Captura_de_Pantalla_2023-06-07_a_las_16.42.03_ln8k4s.png"
                alt="TestBusters mockup"
                loading="lazy"
              />
              <div className="proyects_box">
                <h4>TestBusters</h4>
                <p>
                  Web application designed to make and create any type of test.
                  All users have the possibility of creating their own tests on
                  the subject of their choice.
                </p>{" "}
                <div className="technologies_div">
                  <p>Javascript</p>
                  <p>React</p>
                  <p>Node</p>
                  <p>Express</p>
                  <p>MongoDB</p>
                  <p>Mongoose</p>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/kareenadg/MARVEL_GROUP_project"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="proyects_content">
              <img
                className="images_tb"
                src="https://res.cloudinary.com/dpidlverd/image/upload/v1686158661/marvelmaqueta_tld1uj.png"
                alt="Marvel Mockup"
                loading="lazy"
              />
              <div className="proyects_box">
                <h4>Marvel Infinity Film</h4>
                <p>
                  Web application of the Marvel MCU movies, we provide an
                  interactive platform for users to check updates, detailed
                  information on the movies, and have access to a personalized
                  watchlist and favorites list.
                </p>{" "}
                <div className="technologies_div">
                  <p>Javascript</p>
                  <p>React</p>
                  <p>Node</p>
                  <p>Express</p>
                  <p>MongoDB</p>
                  <p>Mongoose</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
export default App;
