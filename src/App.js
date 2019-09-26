import React, {Component} from 'react';
import axios from 'axios';
// import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import window from 'global';
// import logo from './logo.svg';
import './App.css';
import './static/css/webflow.css'

import HeaderTitle from './components/Header' //Functional Component
// import HeaderBar from './components/HeaderClass' //Class Component
import Hero from './components/Hero'
import Main from './components/Main'
// import Email from "./components/Email";

class App extends Component {

  // define states
  constructor(props)
  {
    super(props);
    this.state = {
       listOfEmails: [],
       listOfNames: "[Insert TD's Name]",
       areaName: "[Insert local area name]",
       aftermsg: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick()
  {
    window.location.href = `mailto:${this.props.email}`;
  }


  handleSubmit(e) {
    e.preventDefault();
    // var url ="http://localhost:3210";
    // var url = "https://d4hk-ireland-td-email.herokuapp.com/";
    var url ="http://ec2-52-50-99-211.eu-west-1.compute.amazonaws.com/";
    var emailslist = [];
    var nameslist = "";
    var body = "";
    axios.post(url, {area: this.areas.options[this.areas.selectedIndex].text})
      .then((res) => {
        for (var i = 0; i < res.data.length; i++)
        {
          console.log( res.data[i]['name']);
          emailslist.push(res.data[i]['email']);
          // emailslist += res.data[i]['email'] + ";";
          nameslist += res.data[i]['name'] + ", ";
        }
        this.setState({ listOfEmails: emailslist, listOfNames: nameslist, areaName: this.areas.options[this.areas.selectedIndex].text});
        body +=  "Dear " + this.state.listOfNames + "%0A%0A";
        body += "As my local TD for " + this.areas.options[this.areas.selectedIndex].text + " you will, no doubt, be well aware of the ongoing series of demonstrations in Hong Kong, also known as the Anti-Extradition Law Amendment Bill Movement, China which began with the aim to oppose the introduction of the Fugitive Offenders amendment bill proposed by the Hong Kong government.%0A%0A";
        body += "I wish to draw your attention to the problems with regards to the Irish government having a close business relationship with China currently, which numerous of Irish businesses in the country  in different industries are actually backed by Chinese investments, such as pharma and medical. The number of investment is increasing with the support from IDA Ireland. I am concerned about China’s growing interest in the economy, and the security of scientific intellectual-property,which are also questioned in the US, Australia and other Euorpean countries. I am wondering how Ireland would like to do business deals with a brutal tyranny - China.%0A%0A";
        body += "Also, according to the latest figures of the State’s Immigrant Investor Programme, more than 90 percent of applicants are from China. Earlier this year the European Parliament’s committee on financial crime and tax evasion urged members states to close down the investor immigration schemes and I believe Ireland should review the potential risks of national security, money-laundering and tax-evasion from those Chinese applicants of Immigrant Investor Programme.%0A%0A";
        body += "On the other hand,  I would like to raise concerns about the influence of Confucius Institute - a Chinese state-backed organisation in UCD. More than 450 Confucius Institutes have been set up by the Chinese government in partnership with universities around the world. While they are sometimes compared to cultural organisations such as the British Council and France’s Alliance Française, the Chinese model is unique in being located only on university or college campuses, that UCD agreed with the Chinese government to jointly operate a Confucius Institute on the Belfield campus in 2006 until at least 2066 for 50 years!%0A%0A";
        body += "The college has recently established a course on Chinese studies which it said “offers a wide range of modules” to help students gain an “understanding and knowledge of China”. The modules cover society, culture, politics, law, economy and doing business in China. However, it is inappropriate for UCD to allow a Chinese state entity to oversee teaching about Chinese politics and society. Confucius Institutes are controlled by the Chinese Language Council International.which is ultimately overseen by the Chinese Communist Party’s (CCP) Central Propaganda Department. Educational institutions across the United States and Australia have the same concern and appear to be reconsidering the relationship with Confucius Institutes and as of August, 37 public schools have closed down the Confucius Institutes around the world. Yet, why Irish government allows a Communist propaganda machine in our public university?%0A%0A";
        body += "I hope you can review the issues for yourself just how serious the problems have become and can, subsequently, lobby some of your fellow members of the Dáil to support a change in the foreign policies regarding Ireland - China relationship.%0A%0A";
        body += "I would be very interested in hearing from you with regards to your views on this matter and what you might be able to do about it.%0A%0A%0A" +"Yours sincerely,%0A[Insert your name]";
    }).catch((error) => {
      console.log('error: ' + error);
    })
        this.timeout = setTimeout(() => {
            document.location.href = window.location.href;
            window.location.href = "mailto:" + this.state.listOfEmails + "?subject=Call for review on Ireland-China relations" + 
            "&body=" + body;
            // window.location.reload();
            this.setState({aftermsg: "If the browser doesn't redirect to your email web app page (e.g. gmail), please free feel to copy the template from the left hand side (subject, email addresses, content are auto-generated) and send it manually."})
        },1000);
  }


  render() 
  {
     return (
    <div className="App">
       <HeaderTitle />
       <Hero/>
       <div className="main-container ">
      <span className="writeline">
        <h2>Email to your TD</h2>
      </span>
      <div className="rectangle">
        <form className="w-form" onSubmit={this.handleSubmit}>
          <div className="intro-para">
            <p>Hong Kong's fundamental freedoms, rights, rule of law and democracy are under attack.
            Please help by writing to your TD and asking them,</p>
            <p>1. To review Ireland's business relationship with China (Does Ireland want to be friends of a dictatorship?)</p>
            <p>2. To review investment immigration programme (Do we let whoever has money to jump the immigration queue with no question asked?)</p>
            <p>3. To enquire the role of Confucius Institute at UCD? (Why do we allow a communist propaganda machine in our university?)</p>
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
                <label htmlFor="area">Select your area <a href="https://www.whoismytd.com/" alt="Find out your area">(not sure which area?)</a></label>
              </dt>
              <dd> 
                <select name="areas" className="areas" ref={ areas => this.areas = areas }>
                  <option value="carlow-kilkenny">Carlow-Kilkenny</option>
                  <option value="cavan-monaghan">Cavan-Monaghan</option>
                  <option value="clare">Clare</option>
                  <option value="cork-e">Cork East</option>
                  <option value="cork-nc">Cork North-Central</option>
                  <option value="cork-w">Cork North-West</option>
                  <option value="cork-sc">Cork South-Central</option>
                  <option value="cork-sw">Cork South-West</option>
                  <option value="cork-e">Cork East</option>
                  <option value="donegal">Donegal</option>
                  <option value="dublin-bn">Dublin Bay North</option>
                  <option value="dublin-bs">Dublin Bar South</option>
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
                  <option value="longford-westmeath">Longford-Westmeath</option>
                  <option value="louth">Louth</option>
                  <option value="limerick-city">Limerick City</option>
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
              As we avoid getting or collecting your private information, we will redirect you to your email webpage, generate an email template and autofill all the content according to your selected area. And you need to insert your name and send the email manually.
            </div>
            <input type="submit" value="Email to your TDs" data-wait="Please wait..." className="submit w-button" value="Email to your TDs"></input>
            <br/>
            <div className="legal">
                {this.state.aftermsg}
            </div>
          </div>
   
        </form>
        <div className="w-form-done"></div>
        <div className="w-form-fail"></div>
        <div className="w-richtext">
          <h4>Call for review on Ireland-China relations</h4>
          <div className="td-letter">
             <span className="emails"><b>To:</b> {this.state.listOfEmails.map(email => (
                 <span>{email};<br/></span>
               ))}
              </span><br/>
             <p>Dear {this.state.listOfNames}</p>
             <p>As my local TD for {this.state.areaName} you will, no doubt, be well aware of the ongoing series of demonstrations in Hong Kong, also known as the Anti-Extradition Law Amendment Bill Movement, China which began with the aim to oppose the introduction of the Fugitive Offenders amendment bill proposed by the Hong Kong government.</p>
             <p>I wish to draw your attention to the problems with regards to the Irish government having a close business relationship with China currently, which numerous of Irish businesses in the country  in different industries are actually backed by Chinese investments, such as pharma and medical. The number of investment is increasing with the support from IDA Ireland. I am concerned about China’s growing interest in the economy, and the security of scientific intellectual-property, which are also questioned in the US, Australia and other Euorpean countries. I am wondering how Ireland would like to do business deals with a brutal tyranny - China.</p>
             <p>Also, according to the latest figures of the State’s Immigrant Investor Programme, more than 90 percent of applicants are from China. Earlier this year the European Parliament’s committee on financial crime and tax evasion urged members states to close down the investor immigration schemes and I believe Ireland should review the potential risks of national security, money-laundering and tax-evasion from those Chinese applicants of Immigrant Investor Programme. </p>
             <p>On the other hand,  I would like to raise concerns about the influence of Confucius Institute - a Chinese state-backed organisation in UCD. More than 450 Confucius Institutes have been set up by the Chinese government in partnership with universities around the world. While they are sometimes compared to cultural organisations such as the British Council and France’s Alliance Française, the Chinese model is unique in being located only on university or college campuses, that UCD agreed with the Chinese government to jointly operate a Confucius Institute on the Belfield campus in 2006 until at least 2066 for 50 years!</p>
             <p>The college has recently established a course on Chinese studies which it said “offers a wide range of modules” to help students gain an “understanding and knowledge of China”. The modules cover society, culture, politics, law, economy and doing business in China. However, it is inappropriate for UCD to allow a Chinese state entity to oversee teaching about Chinese politics and society. Confucius Institutes are controlled by the Chinese Language Council International.which is ultimately overseen by the Chinese Communist Party’s (CCP) Central Propaganda Department. Educational institutions across the United States and Australia have the same concern and appear to be reconsidering the relationship with Confucius Institutes and as of August, 37 public schools have closed down the Confucius Institutes around the world. Yet, why Irish government allows a Communist propaganda machine in our public university?</p>
             <p>I hope you can review the issues for yourself just how serious the problems have become and can, subsequently, lobby some of your fellow members of the Dáil to support a change in the foreign policies regarding Ireland - China relationship.</p>
             <p>I would be very interested in hearing from you with regards to your views on this matter and what you might be able to do about it.</p>
             <br />
             <p>Yours sincerely,<br />
             [Insert your name]
             </p>
             <p>
             <b>References:</b><br />
             <a href="https://www.irishtimes.com/business/china-has-been-buying-irish-should-we-be-worried-1.3605484">https://www.irishtimes.com/business/china-has-been-buying-irish-should-we-be-worried-1.3605484</a> <br/>
             <a href="https://www.irishtimes.com/news/social-affairs/more-than-1-200-apply-for-immigrant-investor-programme-1.4011744">https://www.irishtimes.com/news/social-affairs/more-than-1-200-apply-for-immigrant-investor-programme-1.4011744</a><br/>
             <a href="https://www.thesun.ie/news/3089303/ireland-china-citizenship-immigration/">https://www.thesun.ie/news/3089303/ireland-china-citizenship-immigration/</a><br/>
             <a href="https://www.thetimes.co.uk/article/ucd-professor-raises-concerns-about-chinese-influence-on-campus-nd30tcqvl">https://www.thetimes.co.uk/article/ucd-professor-raises-concerns-about-chinese-influence-on-campus-nd30tcqvl</a><br/>
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
