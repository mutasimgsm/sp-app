import { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Speaker.scss";

class Speaker extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="s-head">Speakers</h3>
        <div className="contect">
          <div className="s-card">
            <NavLink to="/speaker/detail" exact>
              <div className="s-image" >
                <img src="images/speakers/jabir.jpg" width="155" height="155" alt=""/>
              </div>
            </NavLink>
            <h3>Jabir</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod, Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod...
            </p>
          </div>
          <div className="s-card">
            <NavLink to="/speaker/detail" exact>
              <div className="s-image" >
                <img src="images/speakers/mutasim.jpg" width="155" height="155" alt=""/>
              </div>
            </NavLink>
            <h3>Mutasim</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod, Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod...
            </p>
          </div>
          <div className="s-card">
            <NavLink to="/speaker/detail" exact>
              <div className="s-image" >
                <img src="images/speakers/m_seif.jpeg" width="155" height="155" alt=""/>
              </div>
            </NavLink>
            <h3>M.Seif</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod, Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod...
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Speaker;
