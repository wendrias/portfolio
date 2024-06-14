// export default App;
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home.";
import About from "./pages/about";
import Projects from "./pages/projects";

function App() {
  const location = useLocation();
  const [navTheme, setNavTheme] = useState("light");
  const [logoTheme, setLogoTheme] = useState("light");

  useEffect(() => {
    switch (location.pathname) {
      case "/portfolio/":
        setNavTheme("light");
        setLogoTheme("light");
        break;
      case "/portfolio/about":
        setNavTheme("light");
        setLogoTheme("dark");
        break;
      case "/portfolio/projects":
        setNavTheme("light");
        setLogoTheme("light");
        break;
      default:
        setNavTheme("light");
        setLogoTheme("light");
    }
  }, [location.pathname]);

  return (
    <div className="App">
      <Navbar navTheme={navTheme} logoTheme={logoTheme} />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/portfolio/" element={<Home />} />
            <Route path="/portfolio/about" element={<About />} />
            <Route path="/portfolio/projects" element={<Projects />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}