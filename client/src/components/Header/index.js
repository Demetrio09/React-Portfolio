import React from "react";

const Header = ({
  navTheme,
  navLinkOne,
  navLinkTwo,
  navLinkThree,
  navBtOne,
  navBtTwo,
  navBtThree,
}) => {
  return (
    <nav className={`navbar navbar-expand-md navbar-dark ${navTheme}`}>
      <a className="navbar-brand" href={navLinkOne}>
        {navBtOne}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href={navLinkTwo}>
              {navBtTwo} <span className="sr-only"></span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={navLinkThree}>
              {navBtThree} <span className="sr-only"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
