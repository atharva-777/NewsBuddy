import React, { Component } from "react";
import logo from '../assets/logo.png'


export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-info fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              {/* <img src={logo} alt="" style={{width:'10%',height:'7%',margin:'5px',borderRadius:'50%'}} /> */}
              NewsBuddy
            </a>
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
                  <a className="nav-link" aria-current="page" href="/">
                    Business
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    Entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    General
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    Helath
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    Science
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    Sports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    Technology
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

