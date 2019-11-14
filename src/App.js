import React, { Component } from "react";
import PropTypes from "prop-types";
// import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import logo from './logo.svg';
import "./App.css";
import "./static/css/webflow.css";

import HeaderTitle from "./components/Header"; //Functional Component
// import HeaderBar from './components/HeaderClass' //Class Component
import Hero from "./components/Hero";
import Main from "./components/Main";
// import Email from "./components/Email";
import TDSelector from "./components/TDSelector";
import PetitionEmail from "./components/PetitionEmail";
import { getMailToLink } from "./common/email_util";
import GSList from "./components/GSList";

class App extends Component {
  static get propTypes() {
    return {
      email: PropTypes.string
    };
  }

  // define states
  constructor(props) {
    super(props);
    this.state = {
      tds: [],
      aftermsg: ""
    };
  }

  handleSelectTD(tds) {
    this.setState({ tds });
  }

  handleMailtoLink() {
    setTimeout(() => {
      this.setState({
        aftermsg:
          "If the browser doesn't redirect to your email web app page (e.g. gmail), please free feel to copy the template from the left hand side (subject, email addresses, content are auto-generated) and send it manually."
      });
    }, 1000);
  }

  render() {
    const { tds } = this.state;
    return (
      <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <HeaderTitle />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <div>
                  <Hero />
                  <Main />
                </div>
              )}
            />
            <Route exact path="/list" component={GSList} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
