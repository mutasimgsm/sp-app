import { Component } from "react";

import "./Program.scss";

class Program extends Component {
  render() {
    return (
      <div className="container">
        <div className="p-content">
          <h3 className="p-head p-type">Weekly Program</h3>
          <h4 className="p-head ">Location: <span>On Zoom</span></h4>
          <div className="performer">
            <div className="p-date">Thursday, November 19th 2020</div>
            <table className="p-table">
               <thead>
               <tr>
                  <th>Performance</th>
                  <th>By</th>
                  <th>Duration</th>
               </tr>
               </thead>
              <tbody>
              <tr>
                <td className="p-performer">Hosting</td>
                <td>Rahim</td>
                <td>#</td>
              </tr>
              <tr>
                <td className="p-performer">Presentation 1</td>
                <td>Jabir Ahmed</td>
                <td>10 min</td>
              </tr>
              <tr>
                <td className="p-performer">Presentation 1</td>
                <td>Mohammed Ali</td>
                <td>10 min</td>
              </tr>
              <tr>
                <td className="p-performer">Motivation</td>
                <td>Tommy AK Fawzi</td>
                <td>10 min</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Program;
