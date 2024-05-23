import React, { useState } from "react";

interface NavProps {
  logoTheme: string;
  navTheme: string;
}

function Navbar({ logoTheme, navTheme }: NavProps) {
  return (
    <nav className={"nav"}>
      <a className="nav-heading" href="/">
        <img src={"./img/logo-" + logoTheme + ".png"} />
      </a>

      <ul className={"nav-areas nav-" + navTheme}>
        <li>
          <a className="nav-link" href="/portfolio/">
            01. Home
          </a>
        </li>
        <li>
          <a className="nav-link" href="/portfolio/projects">
            02. Projects
          </a>
        </li>
        <li>
          <a className="nav-link" href="/portfolio/about">
            03. About
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
