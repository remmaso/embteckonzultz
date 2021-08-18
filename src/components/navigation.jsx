import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="https://embteckonzultzapp.herokuapp.com/">
              Embtec Konzultz
            </a>{" This page is under construction be patient"}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
            <li>
                <a href="https://embtitcoursesapp.herokuapp.com" className="page-scroll">
                  Home
                </a>
              </li>
              <li>
                <a href="https://embtitcoursesapp.herokuapp.com/footer/about" className="page-scroll">
                  About Us
                </a>
              </li>
              <li>
                <a href="https://embtitcoursesapp.herokuapp.com/services" className="page-scroll">
                  Services
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
