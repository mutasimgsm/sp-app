import { Component } from "react";
import { NavLink } from 'react-router-dom';

import "./SpeakerDetail.scss";
import "../topic/Modle/Popover.scss";
import Popover from "../topic/Modle/Popover";

class SpeakerDetail extends Component {

    constructor(prop) {
        super(prop);

        this.state = {
            isPopped: false,
        }
    }

    previousIndex = 0;
    isOpen = false;
    toggleTopic = (index) => {
        if (this.previousIndex !== index && this.isOpen === false) {
            this.setState({
                isPopped: !this.state.isPopped
            });
            this.isOpen = true;
            this.previousIndex = index;
        } else if (this.previousIndex === index && this.isOpen === true) {
            this.setState({
                isPopped: !this.state.isPopped
            });
            this.isOpen = false;
            this.previousIndex = index;
        } else if (this.previousIndex === index && this.isOpen === false) {
            this.setState({
                isPopped: !this.state.isPopped
            });
            this.isOpen = true
            this.previousIndex = index;
        }

    }

    closePopup = () => {
        this.setState({
            isPopped: false
        });
        this.isOpen = false;
        this.previousIndex = 0;
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="sd-content">
                        <h3 className="sd-head">Mutasin Younis</h3>
                        <div className="sd-card">
                            <div className="sd-image" >
                                <img className="" src="/images/speakers/mutasim.jpg" width="250" height="250" alt="" />
                            </div>
                            <div className="sd-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Topic Name</th>
                                            <th>Type</th>
                                            <th>Presented On</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td onClick={() => this.toggleTopic(1)}>
                                                <span>
                                                    Plan
                                                </span>
                                            </td>
                                            <td>Motivation</td>
                                            <td>Jan, 21 18</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td onClick={() => this.toggleTopic(2)}>
                                                <span>
                                                    Imagination
                                                </span>
                                            </td>
                                            <td>Motivation</td>
                                            <td>Jan, 21 18</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td onClick={() => this.toggleTopic(3)}>
                                                <span>
                                                    Anonynous
                                                </span>
                                            </td>
                                            <td>Motivation</td>
                                            <td>Jan, 21 18</td>
                                        </tr>


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='po-content' style={{ display: this.state.isPopped ? 'inline' : 'none' }}>
                    <h3>Plane</h3>
                    <p>
                        The most popular ways to describe plans are by their breadth, time frame, and specificity; however, these planning classifications are not independent of one another. For instance, there is a close relationship between the short- and long-term categories and the strategic and operational categories.
                    </p>
                    <span onClick={this.closePopup}>X</span>
                </div>
            </div>

        );
    }
}

export default SpeakerDetail;
