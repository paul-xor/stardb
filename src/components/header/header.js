import React from "react";

import "./header.css";

const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="/some/valid/uri">StarDB</a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="/some/valid/uri">People</a>
        </li>
        <li>
          <a href="/some/valid/uri">Planets</a>
        </li>
        <li>
          <a href="/some/valid/uri">Starships</a>
        </li>
      </ul>

      <button onClick={onServiceChange} className="btn btn-primary btn-sm">
        Change Service
      </button>
    </div>
  );
};

export default Header;
