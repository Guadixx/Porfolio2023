import "./Home.css";

const Home = () => {
  return (
    <div className="home_body">
      <div className="home_container">
        <img
          src="https://res.cloudinary.com/dpidlverd/image/upload/v1698675405/replica/WhatsApp_Image_2023-10-30_at_12.48.35_dvzhvy.jpg"
          alt="avatar"
        ></img>
        <h1>Guadalupe Doudchitzky Amadeo</h1>
        <h4>I am a front-end developer and a UX/UI designer</h4>
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
          <a href="tel:+34636191878">
            <img
              src="https://res.cloudinary.com/dpidlverd/image/upload/v1698679492/replica/free-apple-phone-2-493154_jdzaqn.webp"
              alt="Telefono"
            />
          </a>
          <a href="mailto:guadadoud@gmail.com">
            <img
              src="https://res.cloudinary.com/dpidlverd/image/upload/v1698679510/replica/gmail-icon-1024x1024-09wrt8am_v5rxzo.png"
              alt="Gmail"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
