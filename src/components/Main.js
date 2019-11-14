import React, { Component } from "react";
import "./Main.css";
import Hero from "./Hero.js";
import TDSelector from "./TDSelector";
import PetitionEmail from "./PetitionEmail";
import { getMailToLink } from "../common/email_util";
import PropTypes from "prop-types";

class Main extends Component {
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
      <div className="main-container ">
        <span className="writeline">
          <h2>Email to your TD</h2>
        </span>
        <div className="rectangle">
          <form className="w-form" onSubmit={this.handleSubmit}>
            <div className="intro-para">
              <p>
                Hong Kong&apos;s fundamental freedoms, rights, rule of law and
                democracy are under attack. Please help by writing to your TD
                and asking them,
              </p>
              <p>
                1. To review Ireland&apos;s business relationship with China
                (Does Ireland want to be friends of a dictatorship?)
              </p>
              {/*<p>2. To review investment immigration programme (Do we let whoever has money to jump the immigration queue with no question asked?)</p>*/}
              <p>
                2. To enquire the role of Confucius Institute at UCD? (Why do we
                allow a communist propaganda machine in our university?)
              </p>
            </div>
            <div className="formblock">
              {/*<div className="text-field">
              <dt>
                <label htmlFor="name">Your full name</label>
              </dt>
              <dd> 
                <input id="name" className="name" name="name" required type="text"></input>
              </dd>
            </div>*/}
              <div className="text-field">
                <dt>
                  <label htmlFor="area">
                    Select your area{" "}
                    <a
                      href="https://www.whoismytd.com/"
                      alt="Find out your area"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      (not sure which area?)
                    </a>
                  </label>
                </dt>
                <dd>
                  <TDSelector onSelectTD={tds => this.handleSelectTD(tds)} />
                </dd>
              </div>

              <div className="legal">
                As we avoid getting or collecting your private information, we
                will redirect you to your email webpage, generate an email
                template and autofill all the content according to your selected
                area. And you need to insert your name and send the email
                manually.
              </div>
              <a
                className="submit w-button"
                href={getMailToLink(tds)}
                target="_blank"
                rel="noopener noreferrer"
                disabled={tds.length === 0}
                onClick={e => this.handleMailtoLink(e)}
              >
                Email to your TDs
              </a>
              <br />
              <div className="legal">{this.state.aftermsg}</div>
            </div>
          </form>
          <div className="w-form-done"></div>
          <div className="w-form-fail"></div>
          <PetitionEmail className="w-richtext" tds={tds}></PetitionEmail>
        </div>
      </div>
    );
  }
}

export default Main;
