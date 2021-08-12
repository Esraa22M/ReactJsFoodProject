import React from "react";
import {Route ,Link , Switch} from "react-router-dom";
import AboutCompany from "./aboutCompany";
import AboutTeam from "./aboutTeam";
class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <div className="col-3">
          <ul>
            <li>
              <Link to="/about/company">About Company</Link>
            </li>
            <li>
              <Link to="/about/team">About Team</Link>
            </li>
          </ul>
        </div>
        <div className="col">
         <Switch>
            <Route to="/about/team" component={AboutTeam} ></Route>

            <Route to="/about/company" component={AboutCompany} ></Route>
         </Switch>
        </div>
      </div>
    );
  }
}

// #endregion

export default About;
