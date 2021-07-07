import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="nav">
        <ul className="nav-bar">
          <div id="logo">
            <div className="slogan">
              <h3>Speaker's Circle</h3>
              <p>Diversity<span>.</span>Empowerment<span>.</span>Improvment</p>
            </div>
            <li>
              <NavLink to="/" exact>
                <img src="/images/logo86.png" width="" height="" />
              </NavLink>
            </li>
          </div>
          <div id="nav-list">
            <li>
              <NavLink to="/" exact activeClassName="active-nav">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/speaker" exact activeClassName="active-nav" >
                Speaker
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/event" exact activeClassName="active-nav" >
                Event
              </NavLink>
            </li> */}
            <li>
              <NavLink to="/program" exact activeClassName="active-nav" exact>
                Program
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" exact activeClassName="active-nav" exact>
                Signup
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" exact activeClassName="active-nav" exact>
                Login
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
    );
  }
}

export default NavBar;
