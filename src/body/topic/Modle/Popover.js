import { Component } from "react";

import './Popover.scss';


class Popover extends Component {

    render() {
        return(
            <div className='p-content'>
                <h3>Plane</h3>
                <p>
                The most popular ways to describe plans are by their breadth, time frame, and specificity; however, these planning classifications are not independent of one another. For instance, there is a close relationship between the short- and long-term categories and the strategic and operational categories.
                </p>
            </div>
        )
    }
}

export default Popover;