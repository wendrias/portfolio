import React from "react";
import "./projects.css";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  // var setExpandedCard = (proj) => {
  //   console.log(proj);
  // };
  return (
    <div id="projects-container">
      <p>Here are a few things I've created recently, for work or for fun:</p>
      <div id="project-cards-container">
        <ProjectCard
          title="PixelWorld Mini-Game"
          description="A Pokemon-inspired mini game."
          tech={["JavaScript", "Python", "HTML/CSS"]}
          picture="./img/pixelworld.png"
          link="https://wendrias.github.io/pixelworld/"
        />
        <ProjectCard
          title="Prince George's County Schools Air Quality Tool"
          description="An air quality sensor map and dashboard created for a local education center's environmental curriculum."
          tech={["JavaScript", "React", "NodeJS", "REST API", "HTML/CSS"]}
          picture="./img/schmidt/map.png"
          link="https://schmidt-center-dashboard.netlify.app/"
        />
        <ProjectCard
          title="Pic2Playlist (Beta)"
          description="A tool that takes user-inputted image and creates a Spotify playlist based on data from Google Cloud Vision and Clarifai image processing AIs."
          tech={["JavaScript", "NodeJS", "REST API", "HTML/CSS"]}
          picture="./img/p2p.png"
          link="/"
        />
        <ProjectCard
          title="CSS Toaster"
          description="A fun exercise in UI design and CSS animation."
          tech={["JavaScript", "HTML/CSS"]}
          picture="./img/toaster.png"
          link="https://codepen.io/wendrias/full/RwMYxZX"
        />
        <ProjectCard
          title="Easy GPA Calculator"
          description="Quick, no-hassle grade average calculation--no converting needed. Parameters can be entered as letters, percentages, or a mix of both."
          tech={["Bootstrap", "JavaScript", "HTML/CSS"]}
          picture="./img/gpa.png"
          link="https://codepen.io/wendrias/full/ZEJwWzJ"
        />
        <ProjectCard
          title="Artist Porfolio Site"
          description="An artist portfolio site created for a freelance client. Includes custom carousel, about page, gallery of work, and contact page. Anonymized to protect privacy."
          tech={["JavaScript", "PHP", "HTML/CSS"]}
          picture="./img/portfolio/1.png"
          link="/"
        />
        <ProjectCard
          title="Slide-Up Music Player Design"
          description="Prototype of music player that slides up when toggled."
          tech={["JavaScript", "HTML/CSS"]}
          picture="./img/music.png"
          link="/"
        />
      </div>
    </div>
  );
}

export default Projects;