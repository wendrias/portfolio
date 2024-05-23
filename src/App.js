import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home.";
import About from "./pages/about";
import Projects from "./pages/projects";

function App() {
  let Page;
  let logo = "";
  let nav = "";

  switch (window.location.pathname) {
    case "/portfolio/":
      Page = Home;
      nav = "light";
      logo = "light";
      break;
    case "/portfolio/about":
      Page = About;
      nav = "light";
      logo = "dark";
      break;
    case "/portfolio/projects":
      Page = Projects;
      nav = "light";
      logo = "light";

      break;
  }

  return (
    <div className="App">
      <Navbar navTheme={nav} logoTheme={logo} /> {Page ? <Page /> : null}
    </div>
  );
}

export default App;
