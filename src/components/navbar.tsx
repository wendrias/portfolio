import React from "react";
import { Link } from "react-router-dom";

interface NavProps {
  logoTheme: string;
  navTheme: string;
}

function Navbar({ logoTheme, navTheme }: NavProps) {
  return (
    <nav className={"nav"}>
      <Link className="nav-heading" to="/portfolio/">
        <img src={"./img/logo-" + logoTheme + ".png"} />
      </Link>

      <ul className={"nav-areas nav-" + navTheme}>
        <li>
          <Link className="nav-link" to="/portfolio/">
            01. Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/portfolio/projects">
            02. Projects
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/portfolio/about">
            03. About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
