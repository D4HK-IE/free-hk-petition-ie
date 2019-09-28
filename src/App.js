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
       listOfEmails: "[Insert TD's email address]",
       listOfNames: "[Insert TD's Name]",
       areaName: "[Insert local area name]",
       aftermsg: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
    this.list = [{"area":"Carlow-Kilkenny","name":"Bobby Aylward ","email":"bobby.aylward@oireachtas.ie"},{"area":"Carlow-Kilkenny","name":"Kathleen Funchion","email":"kathleen.funchion@oireachtas.ie"},{"area":"Carlow-Kilkenny","name":"John McGuinness","email":"john.mcguinness@oireachtas.ie"},{"area":"Carlow-Kilkenny","name":"John Paul Phelan","email":"johnpaul.phelan@oireachtas.ie"},{"area":"Carlow-Kilkenny","name":"Pat Deering","email":"pat.deering@oireachtas.ie"},{"area":"Cavan-Monaghan","name":"Heather Humphreys","email":"heather.humphreys@oireachtas.ie"},{"area":"Cavan-Monaghan","name":"Brendan Smith","email":"brendan.smith@oireachtas.ie"},{"area":"Cavan-Monaghan","name":"Niamh Smyth","email":"niamh.smyth@oireachtas.ie"},{"area":"Cavan-Monaghan","name":"Caoimhghín Ó Caoláin","email":"caoimhghin.ocaolain@oireachtas.ie"},{"area":"Clare","name":"Pat Breen","email":"pat.breen@oireachtas.ie"},{"area":"Clare","name":"Joe Carey","email":"joe.carey@oireachtas.ie"},{"area":"Clare","name":"Timmy Dooley","email":"timmy.dooley@oireachtas.ie"},{"area":"Clare","name":"Michael Harty","email":"michael.harty@oireachtas.ie"},{"area":"Cork East","name":"Pat Buckley","email":"pat.buckley@oireachtas.ie"},{"area":"Cork East","name":"Kevin O'Keeffe\t","email":"kevin.okeeffe@oireachtas.ie"},{"area":"Cork East","name":"Seán Sherlock","email":"sean.sherlock@oireachtas.ie"},{"area":"Cork East","name":"David Stanton","email":"david.stanton@oireachtas.ie"},{"area":"Cork North-Central","name":"Mick Barry","email":"mick.barry@oireachtas.ie"},{"area":"Cork North-Central","name":"Dara Murphy","email":"dara.murphy@oireachtas.ie"},{"area":"Cork North-Central","name":"Jonathan O'Brien","email":"jonathan.obrien@oireachtas.ie"},{"area":"Cork North-West","name":"Michael Creed","email":"michael.creed@oireachtas.ie"},{"area":"Cork North-West","name":"Aindrias Moynihan","email":"aindrias.moynihan@oireachtas.ie"},{"area":"Cork North-West","name":"Michael Moynihan","email":"michael.moynihan@oireachtas.ie"},{"area":"Cork South-Central","name":"Simon Coveney","email":"simon.coveney@oireachtas.ie"},{"area":"Cork South-Central","name":"Micheál Martin","email":"micheal.martin@oireachtas.ie"},{"area":"Cork South-Central","name":"Michael McGrath","email":"michael.mcgrath@oireachtas.ie"},{"area":"Cork South-Central","name":"Donnchadh Ó Laoghaire","email":"donnchadh.olaoghaire@oireachtas.ie"},{"area":"Cork South-West","name":"Michael Collins","email":"michael.collins@oireachtas.ie"},{"area":"Cork South-West","name":"Jim Daly","email":"jim.daly@oireachtas.ie"},{"area":"Cork South-West","name":"Margaret Murphy O'Mahony","email":"margaret.murphyomahony@oireachtas.ie"},{"area":"Donegal","name":"Pearse Doherty","email":"pearse.doherty@oireachtas.ie"},{"area":"Donegal","name":"Pat the Cope Gallagher","email":"leascc@oireachtas.ie"},{"area":"Donegal","name":"Charlie McConalogue","email":"charlie.mcconalogue@oireachtas.ie"},{"area":"Donegal","name":"Joe McHugh","email":"joe.mchugh@oireachtas.ie"},{"area":"Donegal","name":"Thomas Pringle","email":"thomas.pringle@oireachtas.ie"},{"area":"Dublin Bay North","name":"Thomas P. Broughan","email":"thomas.broughan@oireachtas.ie"},{"area":"Dublin Bay North","name":"Richard Bruton","email":"richard.bruton@oireachtas.ie"},{"area":"Dublin Bay North","name":"Seán Haughey","email":"sean.haughey@oireachtas.ie"},{"area":"Dublin Bay North","name":"Finian McGrath","email":"finian.mcgrath@oireachtas.ie"},{"area":"Dublin Bay North","name":"Denise Mitchell","email":"denise.mitchell@oireachtas.ie"},{"area":"Dublin Bay South","name":"Eoghan Murphy","email":"eoghan.murphy@oireachtas.ie"},{"area":"Dublin Bay South","name":"Jim O'Callaghan","email":"jim.ocallaghan@oireachtas.ie"},{"area":"Dublin Bay South","name":"Kate O'Connell","email":"kate.oconnell@oireachtas.ie"},{"area":"Dublin Bay South","name":"Eamon Ryan","email":"eamon.ryan@oireachtas.ie"},{"area":"Dublin Central","name":"Paschal Donohoe","email":"paschal.donohoe@oireachtas.ie"},{"area":"Dublin Central","name":"Mary Lou McDonald","email":"marylou.mcdonald@oireachtas.ie"},{"area":"Dublin Central","name":"Maureen O'Sullivan","email":"maureen.osullivan@oireachtas.ie"},{"area":"Dublin Fingal","name":"Alan Farrell","email":"alan.farrell@oireachtas.ie"},{"area":"Dublin Fingal","name":"Darragh O'Brien","email":"darragh.obrien@oireachtas.ie"},{"area":"Dublin Fingal","name":"Louise O'Reilly","email":"louise.oreilly@oireachtas.ie"},{"area":"Dublin Fingal","name":"Brendan Ryan","email":"brendan.ryan@oireachtas.ie"},{"area":"Dublin Mid West","name":"John Curran","email":"john.curran@oireachtas.ie"},{"area":"Dublin Mid West","name":"Gino Kenny","email":"gino.kenny@oireachtas.ie"},{"area":"Dublin Mid West","name":"Eoin Ó Broin","email":"eoin.obroin@oireachtas.ie"},{"area":"Dublin Rathdown","name":"Josepha Madigan","email":"josepha.madigan@oireachtas.ie"},{"area":"Dublin Rathdown","name":"Catherine Martin","email":"catherine.martin@oireachtas.ie"},{"area":"Dublin Rathdown","name":"Shane Ross","email":"shane.ross@oireachtas.ie"},{"area":"Dublin North-West","name":"Dessie Ellis","email":"dessie.ellis@oireachtas.ie"},{"area":"Dublin North-West","name":"Noel Rock","email":"noel@noelrock.ie"},{"area":"Dublin North-West","name":"Róisín Shortall","email":"roisin.shortall@oireachtas.ie"},{"area":"Dublin South-Central","name":"Catherine Byrne","email":"catherine.byrne@oireachtas.ie"},{"area":"Dublin South-Central","name":"Joan Collins","email":"joan.collins@oireachtas.ie"},{"area":"Dublin South-Central","name":"Bríd Smith","email":"brid.smith@oireachtas.ie"},{"area":"Dublin South-Central","name":"Aengus Ó Snodaigh","email":"aengus.osnodaigh@oireachtas.ie"},{"area":"Dublin South-West","name":"Seán Crowe","email":"sean.crowe@oireachtas.ie"},{"area":"Dublin South-West","name":"John Lahart","email":"john.lahart@oireachtas.ie"},{"area":"Dublin South-West","name":"Paul Murphy","email":"paul.murphy@oireachtas.ie"},{"area":"Dublin South-West","name":"Colm Brophy","email":"colm.brophy@oireachtas.ie"},{"area":"Dublin South-West","name":"Katherine Zappone","email":"katherine.zappone@oireachtas.ie"},{"area":"Dublin West","name":"Joan Burton","email":"joan.burton@oireachtas.ie"},{"area":"Dublin West","name":"Jack Chambers","email":"jack@jackchambers.ie"},{"area":"Dublin West","name":"Ruth Coppinger","email":"ruth.coppinger@oireachtas.ie"},{"area":"Dublin West","name":"Leo Varadkar","email":"leo.varadkar@oireachtas.ie"},{"area":"Dun Laoghaire","name":"Maria Bailey","email":"maria.bailey@oireachtas.ie"},{"area":"Dun Laoghaire","name":"Seán Barrett","email":"sean.barrett@oireachtas.ie"},{"area":"Dun Laoghaire","name":"Richard Boyd Barrett","email":"richard.boydbarrett@oireachtas.ie"},{"area":"Dun Laoghaire","name":"Mary Mitchell O'Connor","email":"mary.mitchelloconnor@oireachtas.ie"},{"area":"Galway East","name":"Seán Canney","email":"sean.canney@oireachtas.ie"},{"area":"Galway East","name":"Ciaran Cannon","email":"ciaran.cannon@oireachtas.ie"},{"area":"Galway East","name":"Anne Rabbitte","email":"anne.rabbitte@oireachtas.ie"},{"area":"Galway West","name":"Catherine Connolly","email":"catherine.connolly@oireachtas.ie"},{"area":"Galway West","name":"Noel Grealish","email":"noel.grealish@oireachtas.ie"},{"area":"Galway West","name":"Seán Kyne","email":"sean.kyne@oireachtas.ie"},{"area":"Galway West","name":"Hildegarde Naughton","email":"hildegarde.naughton@oireachtas.ie"},{"area":"Galway West","name":"Éamon Ó Cuív","email":"eamon.ocuiv@oireachtas.ie"},{"area":"Kerry ","name":"John Brassil","email":"john.brassil@oireachtas.ie"},{"area":"Kerry","name":"Martin Ferris","email":"martin.ferris@oireachtas.ie"},{"area":"Kerry","name":"Brendan Griffin","email":"brendan.griffin@oireachtas.ie"},{"area":"Kerry","name":"Danny Healy-Rae","email":"danny.healy-rae@oireachtas.ie"},{"area":"Kerry","name":"Michael Healy-Rae","email":"michael.healy-rae@oireachtas.ie"},{"area":"Kildare North","name":"Bernard Durkan","email":"bernard.durkan@oireachtas.ie"},{"area":"Kildare North","name":"James Lawless","email":"james.lawless@oireachtas.ie"},{"area":"Kildare North","name":"Catherine Murphy","email":"catherine.murphy@oireachtas.ie"},{"area":"Kildare North","name":"Frank O'Rourke","email":"frank.orourke@oireachtas.ie"},{"area":"Kildare South","name":"Martin Heydon","email":"martin.heydon@oireachtas.ie"},{"area":"Kildare South","name":"Fiona O'Loughlin","email":"fiona.oloughlin@oireachtas.ie"},{"area":"Laois","name":"Charles Flanagan","email":"charles.flanagan@oireachtas.ie"},{"area":"Laois","name":"Seán Fleming","email":"sean.fleming@oireachtas.ie"},{"area":"Laois","name":"Brian Stanley","email":"brian.stanley@oireachtas.ie"},{"area":"Limerick City","name":"Michael Noonan","email":"michael.noonan@oireachtas.ie"},{"area":"Limerick City","name":"Willie O'Dea","email":"willie.odea@oireachtas.ie"},{"area":"Limerick City","name":"Jan O'Sullivan","email":"jan.osullivan@oireachtas.ie"},{"area":"Limerick City","name":"Maurice Quinlivan","email":"maurice.quinlivan@oireachtas.ie"},{"area":"Limerick County","name":"Niall Collins","email":"niall.collins@oireachtas.ie"},{"area":"Limerick County","name":"Tom Neville","email":"tom.neville@oireachtas.ie"},{"area":"Limerick County","name":"Patrick O'Donovan","email":"patrick.odonovan@oireachtas.ie"},{"area":"Longford-Westmeath","name":"Peter Burke","email":"peter.burke@oireachtas.ie"},{"area":"Longford-Westmeath","name":"Kevin Boxer Moran","email":"kevin.moran@oireachtas.ie"},{"area":"Longford-Westmeath","name":"Willie Penrose","email":"willie.penrose@oireachtas.ie"},{"area":"Longford-Westmeath","name":"Robert Troy","email":"robert.troy@oireachtas.ie"},{"area":"Louth","name":"Gerry Adams","email":"gerry.adams@oireachtas.ie"},{"area":"Louth","name":"Declan Breathnach","email":"declan.breathnach@oireachtas.ie"},{"area":"Louth","name":"Peter Fitzpatrick","email":"peterm.fitzpatrick@oireachtas.ie"},{"area":"Louth","name":"Imelda Munster","email":"imelda.munster@oireachtas.ie"},{"area":"Louth","name":"Fergus O'Dowd","email":"fergus.odowd@oireachtas.ie"},{"area":"Mayo","name":"Dara Calleary","email":"dara.calleary@oireachtas.ie"},{"area":"Mayo","name":"Lisa Chambers","email":"lisa.chambers@oireachtas.ie"},{"area":"Mayo","name":"Enda Kenny","email":"enda.kenny@oireachtas.ie"},{"area":"Mayo","name":"Michael Ring","email":"michael.ring@oireachtas.ie"},{"area":"Meath East","name":"Thomas Byrne","email":"thomas.byrne@oireachtas.ie"},{"area":"Meath East","name":"Regina Doherty","email":"regina.doherty@oireachtas.ie"},{"area":"Meath East","name":"Helen McEntee","email":"helen.mcentee@oireachtas.ie"},{"area":"Meath West","name":"Shane Cassells","email":"shane.cassells@oireachtas.ie"},{"area":"Meath West","name":"Damien English","email":"damien.english@oireachtas.ie"},{"area":"Meath West","name":"Peadar Tóibín","email":"peadar.toibin@oireachtas.ie"},{"area":"Offaly","name":"Marcella Corcoran Kennedy","email":"marcella.corcorankennedy@oireachtas.ie"},{"area":"Offaly","name":"Barry Cowen","email":"barry.cowen@oireachtas.ie"},{"area":"Offaly","name":"Carol Nolan","email":"carol.nolan@oireachtas.ie"},{"area":"Roscommon-Galway","name":"Michael Fitzmaurice","email":"michael.fitzmaurice@oireachtas.ie"},{"area":"Roscommon-Galway","name":"Eugene Murphy","email":"eugene.murphy@oireachtas.ie"},{"area":"Roscommon-Galway","name":"Denis Naughten","email":"Denis.Naughten@oireachtas.ie"},{"area":"Sligo-Leitrim","name":"Martin Kenny","email":"martin.kenny@oireachtas.ie"},{"area":"Sligo-Leitrim","name":"Marc MacSharry","email":"marc.macsharry@oireachtas.ie"},{"area":"Sligo-Leitrim","name":"Tony McLoughlin","email":"tony.mcloughlin@oireachtas.ie"},{"area":"Sligo-Leitrim","name":"Eamon Scanlon","email":"eamon.scanlon@oireachtas.ie"},{"area":"Tipperary","name":"Jackie Cahill","email":"jackie.cahill@oireachtas.ie"},{"area":"Tipperary","name":"Seamus Healy","email":"seamus.healy@oireachtas.ie"},{"area":"Tipperary","name":"Alan Kelly","email":"alan.kelly@oireachtas.ie"},{"area":"Tipperary","name":"Michael Lowry","email":"michael.lowry@oireachtas.ie"},{"area":"Tipperary","name":"Mattie McGrath","email":"mattie.mcgrath@oireachtas.ie"},{"area":"Waterford","name":"Mary Butler","email":"mary.butler@oireachtas.ie"},{"area":"Waterford","name":"David Cullinane","email":"david.cullinane@oireachtas.ie"},{"area":"Waterford","name":"John Deasy","email":"john.deasy@oireachtas.ie"},{"area":"Waterford","name":"John Halligan","email":"john.halligan@oireachtas.ie"},{"area":"Wexford","name":"James Browne","email":"james.browne@oireachtas.ie"},{"area":"Wexford","name":"Michael D'Arcy","email":"michael.darcy@oireachtas.ie"},{"area":"Wexford","name":"Brendan Howlin","email":"brendan.howlin@oireachtas.ie"},{"area":"Wexford","name":"Paul Kehoe","email":"paul.kehoe@oireachtas.ie"},{"area":"Wicklow","name":"John Brady","email":"john.brady@oireachtas.ie"},{"area":"Wicklow","name":"Pat Casey","email":"pat.casey@oireachtas.ie"},{"area":"Wicklow","name":"Stephen Donnelly","email":"stephen.donnelly@oireachtas.ie"},{"area":"Wicklow","name":"Andrew Doyle","email":"andrew.doyle@oireachtas.ie"},{"area":"Wicklow","name":"Simon Harris","email":"simon.harris@oireachtas.ie"}];
  
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
    var emailslist = "";
    var nameslist = "";
    var body = "";

    for (var i = 0; i< this.list.length;i++)
    {
      if (this.list[i]['area'] == this.areas.options[this.areas.selectedIndex].text)
      {
        emailslist += this.list[i]['email']+";\n";
        nameslist += this.list[i]['name'] + ", ";
      }
    }
     this.setState({ listOfEmails: emailslist, listOfNames: nameslist, areaName: this.areas.options[this.areas.selectedIndex].text});
     body +=  "Dear " + nameslist + "%0A%0A";
     body += "As my local TD for " + this.areas.options[this.areas.selectedIndex].text + "you may be aware of the ongoing series of demonstrations in Hong Kong known as the Anti-Extradition Law Amendment Bill Movement, which began with the aim of opposing the introduction a new Extradition Law proposed by the Hong Kong government. During these peaceful protests there has been brutal repression on the part of the Chinese state. This includes brutal beatings and sexual violence being inflicted on protestors by the Hong Kong police as well as the imprisonment of over 1,600 people.%0A%0A";
     body += "In light of this I wish to highlight the close business ties between Ireland and China. Numerous Irish businesses in the country in different industries are backed by Chinese investments, such as pharma and medical. This investment is increasing with the support from IDA Ireland. There have also been deals done with Chinese State companies, such as the licence given to the China National Offshore Oil Company to drill off the coast of Kerry. I am deeply concerned about China’s growing interest in the economy and the Irish government’s willingness to do business with the brutal tyranny that is the Chinese State.%0A%0A";
     body += "Moreover, I would like to raise concerns about the influence of Confucius Institute - a Chinese state-backed organisation in UCD. More than 450 Confucius Institutes have been set up by the Chinese government in partnership with universities around the world. While they are sometimes compared to cultural organisations such as the British Council and France’s Alliance Française, the Chinese model is unique in being directly run by the Chinese state and being located only on university or college campuses. UCD agreed with the Chinese government to jointly operate a Confucius Institute on the Belfield campus in 2006 until at least 2066. The college has recently established a course on Chinese studies which it said “offers a wide range of modules” to help students gain an “understanding and knowledge of China”. The modules cover society, culture, politics, law, economy and doing business in China. It is completely inappropriate for UCD to allow a Chinese state entity to oversee teaching about Chinese politics and society. Confucius Institutes are controlled by the Chinese Language Council International which is ultimately overseen by the Chinese Communist Party’s (CCP) Central Propaganda Department. Educational institutions across the United States and Australia have the same concern and appear to be reconsidering the relationship with Confucius Institutes and as of August, 37 public schools have closed down the Confucius Institutes around the world. Why does the Irish government allow a Communist propaganda machine into our public university?%0A%0A";
     body += "I hope you can review these issues for yourself and in light of how serious the problems have become, will take action to force a change in the policies surrounding the Ireland - China relationship. I would be very interested in hearing from you with regards to your views on this matter and what you might be able to do about it..%0A%0A%0A" +"Yours sincerely,%0A[Insert your name]%0A";
     body += "Reference: http://d4hk.ie";
     this.timeout = setTimeout(() => {
            var mailtoStr = "mailto:" + this.state.listOfEmails + "?subject=Call for review on Ireland-China relations" + 
            "&body=" + body;
            window.open(mailtoStr, '_blank');
            // document.location.href = window.location.href;
            // window.location.href = "mailto:" + this.state.listOfEmails + "?subject=Call for review on Ireland-China relations" + 
            // "&body=" + body;
            // window.location.reload();
            this.setState({aftermsg: "If the browser doesn't redirect to your email web app page (e.g. gmail), please free feel to copy the template from the left hand side (subject, email addresses, content are auto-generated) and send it manually."})
        },1000);

    // axios.post(url, {area: this.areas.options[this.areas.selectedIndex].text})
    //   .then((res) => {

        // for (var i = 0; i < res.data.length; i++)
        // {
        //   console.log( res.data[i]['name']);
        //   emailslist.push(res.data[i]['email']);
        //   // emailslist += res.data[i]['email'] + ";";
        //   nameslist += res.data[i]['name'] + ", ";
        // }
        // this.setState({ listOfEmails: emailslist, listOfNames: nameslist, areaName: this.areas.options[this.areas.selectedIndex].text});
        // body += "Dear " + this.state.listOfNames + "%0A%0A";
        // body += "As my local TD for " + this.areas.options[this.areas.selectedIndex].text + " you will, no doubt, be well aware of the ongoing series of demonstrations in Hong Kong, also known as the Anti-Extradition Law Amendment Bill Movement, China which began with the aim to oppose the introduction of the Fugitive Offenders amendment bill proposed by the Hong Kong government.%0A%0A";
        // body += "I wish to draw your attention to the problems with regards to the Irish government having a close business relationship with China currently, which numerous of Irish businesses in the country  in different industries are actually backed by Chinese investments, such as pharma and medical. The number of investment is increasing with the support from IDA Ireland. I am concerned about China’s growing interest in the economy, and the security of scientific intellectual-property,which are also questioned in the US, Australia and other Euorpean countries. I am wondering how Ireland would like to do business deals with a brutal tyranny - China.%0A%0A";
        // body += "Also, according to the latest figures of the State’s Immigrant Investor Programme, more than 90 percent of applicants are from China. Earlier this year the European Parliament’s committee on financial crime and tax evasion urged members states to close down the investor immigration schemes and I believe Ireland should review the potential risks of national security, money-laundering and tax-evasion from those Chinese applicants of Immigrant Investor Programme.%0A%0A";
        // body += "On the other hand,  I would like to raise concerns about the influence of Confucius Institute - a Chinese state-backed organisation in UCD. More than 450 Confucius Institutes have been set up by the Chinese government in partnership with universities around the world. While they are sometimes compared to cultural organisations such as the British Council and France’s Alliance Française, the Chinese model is unique in being located only on university or college campuses, that UCD agreed with the Chinese government to jointly operate a Confucius Institute on the Belfield campus in 2006 until at least 2066 for 50 years!%0A%0A";
        // body += "The college has recently established a course on Chinese studies which it said “offers a wide range of modules” to help students gain an “understanding and knowledge of China”. The modules cover society, culture, politics, law, economy and doing business in China. However, it is inappropriate for UCD to allow a Chinese state entity to oversee teaching about Chinese politics and society. Confucius Institutes are controlled by the Chinese Language Council International.which is ultimately overseen by the Chinese Communist Party’s (CCP) Central Propaganda Department. Educational institutions across the United States and Australia have the same concern and appear to be reconsidering the relationship with Confucius Institutes and as of August, 37 public schools have closed down the Confucius Institutes around the world. Yet, why Irish government allows a Communist propaganda machine in our public university?%0A%0A";
        // body += "I hope you can review the issues for yourself just how serious the problems have become and can, subsequently, lobby some of your fellow members of the Dáil to support a change in the foreign policies regarding Ireland - China relationship.%0A%0A";
        // body += "I would be very interested in hearing from you with regards to your views on this matter and what you might be able to do about it.%0A%0A%0A" +"Yours sincerely,%0A[Insert your name]";
        // // console.log(this.list[1]['email']);
    // }).catch((error) => {
    //   console.log('error: ' + error);
    // })
    //     this.timeout = setTimeout(() => {
    //         document.location.href = window.location.href;
    //         window.location.href = "mailto:" + this.state.listOfEmails + "?subject=Call for review on Ireland-China relations" + 
    //         "&body=" + body;
    //         // window.location.reload();
    //         this.setState({aftermsg: "If the browser doesn't redirect to your email web app page (e.g. gmail), please free feel to copy the template from the left hand side (subject, email addresses, content are auto-generated) and send it manually."})
    //     },1000);
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
            {/*<p>2. To review investment immigration programme (Do we let whoever has money to jump the immigration queue with no question asked?)</p>*/}
            <p>2. To enquire the role of Confucius Institute at UCD? (Why do we allow a communist propaganda machine in our university?)</p>
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
                <label htmlFor="area">Select your area <a href="https://www.whoismytd.com/" alt="Find out your area" target="_blank">(not sure which area?)</a></label>
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
                  <option value="longford-westmeath">Longford-Westmeath</option>
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
             <span className="emails"><b>To:</b> <br/><span>{this.state.listOfEmails}</span>
             </span><br/>
          
             <p>Dear {this.state.listOfNames}</p>
             <p>As my local TD for {this.state.areaName} you may be aware of the ongoing series of demonstrations in Hong Kong known as the Anti-Extradition Law Amendment Bill Movement, which began with the aim of opposing the introduction a new Extradition Law proposed by the Hong Kong government. During these peaceful protests there has been brutal repression on the part of the Chinese state. This includes brutal beatings and sexual violence being inflicted on protestors by the Hong Kong police as well as the imprisonment of over 1,600 people. </p>
             <p>In light of this I wish to highlight the close business ties between Ireland and China. Numerous Irish businesses in the country in different industries are backed by Chinese investments, such as pharma and medical. This investment is increasing with the support from IDA Ireland. There have also been deals done with Chinese State companies, such as the licence given to the China National Offshore Oil Company to drill off the coast of Kerry. I am deeply concerned about China’s growing interest in the economy and the Irish government’s willingness to do business with the brutal tyranny that is the Chinese State.</p>
             <p>Moreover, I would like to raise concerns about the influence of Confucius Institute - a Chinese state-backed organisation in UCD. More than 450 Confucius Institutes have been set up by the Chinese government in partnership with universities around the world. While they are sometimes compared to cultural organisations such as the British Council and France’s Alliance Française, the Chinese model is unique in being directly run by the Chinese state and being located only on university or college campuses. UCD agreed with the Chinese government to jointly operate a Confucius Institute on the Belfield campus in 2006 until at least 2066. The college has recently established a course on Chinese studies which it said “offers a wide range of modules” to help students gain an “understanding and knowledge of China”. The modules cover society, culture, politics, law, economy and doing business in China. It is completely inappropriate for UCD to allow a Chinese state entity to oversee teaching about Chinese politics and society. Confucius Institutes are controlled by the Chinese Language Council International which is ultimately overseen by the Chinese Communist Party’s (CCP) Central Propaganda Department. Educational institutions across the United States and Australia have the same concern and appear to be reconsidering the relationship with Confucius Institutes and as of August, 37 public schools have closed down the Confucius Institutes around the world. Why does the Irish government allow a Communist propaganda machine into our public university?</p>
             <p>I hope you can review these issues for yourself and in light of how serious the problems have become, will take action to force a change in the policies surrounding the Ireland - China relationship. I would be very interested in hearing from you with regards to your views on this matter and what you might be able to do about it.</p>
             <br />
             <p>Yours sincerely,<br />
             [Insert your name]
             </p>
             <p>
             <b>References:</b><br />
             <a href="https://www.irishtimes.com/business/china-has-been-buying-irish-should-we-be-worried-1.3605484">https://www.irishtimes.com/business/china-has-been-buying-irish-should-we-be-worried-1.3605484</a> <br/>
             {/*<a href="https://www.irishtimes.com/news/social-affairs/more-than-1-200-apply-for-immigrant-investor-programme-1.4011744">https://www.irishtimes.com/news/social-affairs/more-than-1-200-apply-for-immigrant-investor-programme-1.4011744</a><br/>
             <a href="https://www.thesun.ie/news/3089303/ireland-china-citizenship-immigration/">https://www.thesun.ie/news/3089303/ireland-china-citizenship-immigration/</a><br/> */}
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
