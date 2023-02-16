import { faScroll, faUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import {Link} from 'react-router-dom'


export default class Navbar extends Component {
  scrollTop = () => {
    document.documentElement.scrollTop = 0;
  };

  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-sm navbar-light bg-dark fixed-top"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NewsBuddy
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/general">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/entertainment"
                  >
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/technology"
                  >
                    Technology
                  </Link>
                </li>
              </ul>
              <button onClick={this.scrollTop} style={{padding:'5px',marginRight:'5%'}}>
                Scroll Top
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

