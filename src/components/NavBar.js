import React from "react";
import githubLogo from "../assets/githubLogo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <a className="link" href="https://github.com/krebyancode" target="blank">
        <code>
          <img src={githubLogo} alt="logo"></img>
          {"<Krebyancode />  "}
        </code>
      </a>
    </div>
  );
};

export default Navbar;
