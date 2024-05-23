import React from "react";
import BlinkingCursor from "../components/BlinkingCursor";
import "./home.css";
import Footer from "../components/Footer";
import Button from "../components/Button";

function Home() {
  return (
    <div className="home-container">
      {/* <div className="page-tracker"></div> */}
      <div className="home-content-container">
        <h4>Hello, I'm</h4>
        <h1>Wastena Endrias</h1>
        <h3>
          I'm a <span className="text-emphasis">full stack developer</span> who
          is passionate about bringing ideas to life, line by line.{" "}
          <BlinkingCursor />{" "}
        </h3>
        <div className="button-container">
          <Button text="More about me  >" to="/portfolio/about" theme="light" />
          <Button text="See my work >" to="/portfolio/projects" theme="light" />
        </div>
      </div>
      <div className="page-overlay"></div>
      <Footer />
    </div>
  );
}

export default Home;
