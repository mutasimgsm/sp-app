import { Component } from "react";
import { Route } from "react-router-dom";
import "./Body.scss";
import Event from "./event/Event";
import Home from "./home/Home";
import Program from "./program/Program";
import Speaker from "./speaker/Speaker";
import Login from "./user/Login";
import Signup from "./user/Signup";
import SpeakerDetail from "./speaker_detail/SpeakerDetail";
import Topic from "./topic/Topic";

class Body extends Component {
  render() {
    return (
      <div className="body">
        <div className="body-content">
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/event" component={Event} /> */}
          <Route exact path="/program" component={Program} />
          <Route exact path="/speaker" component={Speaker} />
          <Route exact path="/topic" component={Topic} />
          <Route exact path="/speaker/detail" component={SpeakerDetail} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </div>
    );
  }
}

export default Body;
