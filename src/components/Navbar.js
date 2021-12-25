import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link
            to="/"
            style={{ color: "black", textDecoration: "none" }}
          >
            CRUD APP
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  <Link
                    to="/"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Home
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Link
                    to="/adduser"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Add users
                  </Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
