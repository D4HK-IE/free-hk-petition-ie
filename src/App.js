import React, { Component } from "react";
import PropTypes from "prop-types";
// import axios from "axios";
// import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import window from "global";
// import logo from './logo.svg';
import "./App.css";
import "./static/css/webflow.css";

import HeaderTitle from "./components/Header"; //Functional Component
// import HeaderBar from './components/HeaderClass' //Class Component
import Hero from "./components/Hero";
// import Main from "./components/Main";
// import Email from "./components/Email";
import { TD_LIST } from "./constants/td_list";

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
      listOfEmails: "[Insert TD's email address]",
      listOfNames: "[Insert TD's Name]",
      areaName: "[Insert local area name]",
      aftermsg: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
    this.list = TD_LIST;
  }

  onClick() {
    window.location.href = `mailto:${this.props.email}`;
  }

  handleSubmit(e) {
    e.preventDefault();
    // var url ="http://localhost:3210";
    // var url = "https://d4hk-ireland-td-email.herokuapp.com/";
    // var url = "http://ec2-52-50-99-211.eu-west-1.compute.amazonaws.com/";
    var emailslist = "";
    var nameslist = "";
    var body = "";

    for (var i = 0; i < this.list.length; i++) {
      if (
        this.list[i]["area"] ===
        this.areas.options[this.areas.selectedIndex].text
      ) {
        emailslist += this.list[i]["email"] + ";\n";
        nameslist += this.list[i]["name"] + ", ";
      }
    }
    this.setState({
      listOfEmails: emailslist,
      listOfNames: nameslist,
      areaName: this.areas.options[this.areas.selectedIndex].text
    });
    body += "Dear " + nameslist + "%0A%0A";
    body +=
      "As my local TD for " +
      this.areas.options[this.areas.selectedIndex].text +
      "you may be aware of the ongoing series of demonstrations in Hong Kong known as the Anti-Extradition Law Amendment Bill Movement, which began with the aim of opposing the introduction a new Extradition Law proposed by the Hong Kong government. During these peaceful protests there has been brutal repression on the part of the Chinese state. This includes brutal beatings and sexual violence being inflicted on protestors by the Hong Kong police as well as the imprisonment of over 1,600 people.%0A%0A";
    body +=
      "In light of this I wish to highlight the close business ties between Ireland and China. Numerous Irish businesses in the country in different industries are backed by Chinese investments, such as pharma and medical. This investment is increasing with the support from IDA Ireland. There have also been deals done with Chinese State companies, such as the licence given to the China National Offshore Oil Company to drill off the coast of Kerry. I am deeply concerned about China’s growing interest in the economy and the Irish government’s willingness to do business with the brutal tyranny that is the Chinese State.%0A%0A";
    body +=
      "Moreover, I would like to raise concerns about the influence of Confucius Institute - a Chinese state-backed organisation in UCD. More than 450 Confucius Institutes have been set up by the Chinese government in partnership with universities around the world. While they are sometimes compared to cultural organisations such as the British Council and France’s Alliance Française, the Chinese model is unique in being directly run by the Chinese state and being located only on university or college campuses. UCD agreed with the Chinese government to jointly operate a Confucius Institute on the Belfield campus in 2006 until at least 2066. The college has recently established a course on Chinese studies which it said “offers a wide range of modules” to help students gain an “understanding and knowledge of China”. The modules cover society, culture, politics, law, economy and doing business in China. It is completely inappropriate for UCD to allow a Chinese state entity to oversee teaching about Chinese politics and society. Confucius Institutes are controlled by the Chinese Language Council International which is ultimately overseen by the Chinese Communist Party’s (CCP) Central Propaganda Department. Educational institutions across the United States and Australia have the same concern and appear to be reconsidering the relationship with Confucius Institutes and as of August, 37 public schools have closed down the Confucius Institutes around the world. Why does the Irish government allow a Communist propaganda machine into our public university?%0A%0A";
    body +=
      "I hope you can review these issues for yourself and in light of how serious the problems have become, will take action to force a change in the policies surrounding the Ireland - China relationship. I would be very interested in hearing from you with regards to your views on this matter and what you might be able to do about it..%0A%0A%0A" +
      "Yours sincerely,%0A[Insert your name]%0A";
    body += "Reference: http://d4hk.ie";
    this.timeout = setTimeout(() => {
      var mailtoStr =
        "mailto:" +
        this.state.listOfEmails +
        "?subject=Call for review on Ireland-China relations" +
        "&body=" +
        body;
      window.open(mailtoStr, "_blank");
      // document.location.href = window.location.href;
      // window.location.href = "mailto:" + this.state.listOfEmails + "?subject=Call for review on Ireland-China relations" +
      // "&body=" + body;
      // window.location.reload();
      this.setState({
        aftermsg:
          "If the browser doesn't redirect to your email web app page (e.g. gmail), please free feel to copy the template from the left hand side (subject, email addresses, content are auto-generated) and send it manually."
      });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <HeaderTitle />
        <Hero />
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
                  2. To enquire the role of Confucius Institute at UCD? (Why do
                  we allow a communist propaganda machine in our university?)
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
                    <select
                      name="areas"
                      className="areas"
                      ref={areas => (this.areas = areas)}
                    >
                      <option value="carlow-kilkenny">Carlow-Kilkenny</option>
                      <option value="cavan-monaghan">Cavan-Monaghan</option>
                      <option value="clare">Clare</option>
                      <option value="cork-e">Cork East</option>
                      <option value="cork-nc">Cork North-Central</option>
                      <option value="cork-w">Cork North-West</option>
                      <option value="cork-sc">Cork South-Central</option>
                      <option value="cork-sw">Cork South-West</option>
                      <option value="donegal">Donegal</option>
                      <option value="dublin-bn">Dublin Bay North</option>
                      <option value="dublin-bs">Dublin Bay South</option>
                      <option value="dublin">Dublin Central</option>
                      <option value="dublin-f">Dublin Fingal</option>
                      <option value="dublin-mw">Dublin Mid West</option>
                      <option value="dublin-r">Dublin Rathdown</option>
                      <option value="dublin-nw">Dublin North-West</option>
                      <option value="dublin-sc">Dublin South-Central</option>
                      <option value="dublin-sw">Dublin South-West</option>
                      <option value="dublin-w">Dublin West</option>
                      <option value="dunlaoghaire">Dun Laoghaire</option>
                      <option value="galway-e">Galway East</option>
                      <option value="galway-w">Galway West</option>
                      <option value="kerry">Kerry</option>
                      <option value="kildare-n">Kildare North</option>
                      <option value="kildare-s">Kildare South</option>
                      <option value="laois">Laois</option>
                      <option value="limerick-city">Limerick City</option>
                      <option value="limerick-county">Limerick County</option>
                      <option value="longford-westmeath">
                        Longford-Westmeath
                      </option>
                      <option value="louth">Louth</option>
                      <option value="mayo">Mayo</option>
                      <option value="meath-e">Meath East</option>
                      <option value="meath-w">Meath West</option>
                      <option value="offaly">Offaly</option>
                      <option value="roscommon-galway">Roscommon-Galway</option>
                      <option value="sligo-leitrim">Sligo-Leitrim</option>
                      <option value="tipperary">Tipperary</option>
                      <option value="waterford">Waterford</option>
                      <option value="wexford">Wexford</option>
                      <option value="wicklow">Wicklow</option>
                    </select>
                  </dd>
                </div>

                <div className="legal">
                  As we avoid getting or collecting your private information, we
                  will redirect you to your email webpage, generate an email
                  template and autofill all the content according to your
                  selected area. And you need to insert your name and send the
                  email manually.
                </div>
                <input
                  type="submit"
                  value="Email to your TDs"
                  data-wait="Please wait..."
                  className="submit w-button"
                ></input>
                <br />
                <div className="legal">{this.state.aftermsg}</div>
              </div>
            </form>
            <div className="w-form-done"></div>
            <div className="w-form-fail"></div>
            <div className="w-richtext">
              <h4 className="email-header">
                Call for review on Ireland-China relations
              </h4>
              <div className="td-letter">
                <span className="emails">
                  <b>To:</b> <br />
                  <span>{this.state.listOfEmails}</span>
                </span>
                <br />

                <p>Dear {this.state.listOfNames}</p>
                <p>
                  As my local TD for {this.state.areaName} you may be aware of
                  the ongoing series of demonstrations in Hong Kong known as the
                  Anti-Extradition Law Amendment Bill Movement, which began with
                  the aim of opposing the introduction a new Extradition Law
                  proposed by the Hong Kong government. During these peaceful
                  protests there has been brutal repression on the part of the
                  Chinese state. This includes brutal beatings and sexual
                  violence being inflicted on protestors by the Hong Kong police
                  as well as the imprisonment of over 1,600 people.{" "}
                </p>
                <p>
                  In light of this I wish to highlight the close business ties
                  between Ireland and China. Numerous Irish businesses in the
                  country in different industries are backed by Chinese
                  investments, such as pharma and medical. This investment is
                  increasing with the support from IDA Ireland. There have also
                  been deals done with Chinese State companies, such as the
                  licence given to the China National Offshore Oil Company to
                  drill off the coast of Kerry. I am deeply concerned about
                  China’s growing interest in the economy and the Irish
                  government’s willingness to do business with the brutal
                  tyranny that is the Chinese State.
                </p>
                <p>
                  Moreover, I would like to raise concerns about the influence
                  of Confucius Institute - a Chinese state-backed organisation
                  in UCD. More than 450 Confucius Institutes have been set up by
                  the Chinese government in partnership with universities around
                  the world. While they are sometimes compared to cultural
                  organisations such as the British Council and France’s
                  Alliance Française, the Chinese model is unique in being
                  directly run by the Chinese state and being located only on
                  university or college campuses. UCD agreed with the Chinese
                  government to jointly operate a Confucius Institute on the
                  Belfield campus in 2006 until at least 2066. The college has
                  recently established a course on Chinese studies which it said
                  “offers a wide range of modules” to help students gain an
                  “understanding and knowledge of China”. The modules cover
                  society, culture, politics, law, economy and doing business in
                  China. It is completely inappropriate for UCD to allow a
                  Chinese state entity to oversee teaching about Chinese
                  politics and society. Confucius Institutes are controlled by
                  the Chinese Language Council International which is ultimately
                  overseen by the Chinese Communist Party’s (CCP) Central
                  Propaganda Department. Educational institutions across the
                  United States and Australia have the same concern and appear
                  to be reconsidering the relationship with Confucius Institutes
                  and as of August, 37 public schools have closed down the
                  Confucius Institutes around the world. Why does the Irish
                  government allow a Communist propaganda machine into our
                  public university?
                </p>
                <p>
                  I hope you can review these issues for yourself and in light
                  of how serious the problems have become, will take action to
                  force a change in the policies surrounding the Ireland - China
                  relationship. I would be very interested in hearing from you
                  with regards to your views on this matter and what you might
                  be able to do about it.
                </p>
                <br />
                <p>
                  Yours sincerely,
                  <br />
                  [Insert your name]
                </p>
                <p>
                  <b>References:</b>
                  <br />
                  <a href="https://www.irishtimes.com/business/china-has-been-buying-irish-should-we-be-worried-1.3605484">
                    https://www.irishtimes.com/business/china-has-been-buying-irish-should-we-be-worried-1.3605484
                  </a>{" "}
                  <br />
                  {/*<a href="https://www.irishtimes.com/news/social-affairs/more-than-1-200-apply-for-immigrant-investor-programme-1.4011744">https://www.irishtimes.com/news/social-affairs/more-than-1-200-apply-for-immigrant-investor-programme-1.4011744</a><br/>
             <a href="https://www.thesun.ie/news/3089303/ireland-china-citizenship-immigration/">https://www.thesun.ie/news/3089303/ireland-china-citizenship-immigration/</a><br/> */}
                  <a href="https://www.thetimes.co.uk/article/ucd-professor-raises-concerns-about-chinese-influence-on-campus-nd30tcqvl">
                    https://www.thetimes.co.uk/article/ucd-professor-raises-concerns-about-chinese-influence-on-campus-nd30tcqvl
                  </a>
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
