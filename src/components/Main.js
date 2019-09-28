import React from "react";
import "./Main.css";

{
  /* NOT IN USE */
}
const Main = () => {
  return (
    <div className="main-container ">
      <span className="writeline">
        <h2>Email to your TD</h2>
      </span>
      <div className="rectangle">
        <form className="w-form">
          <div className="intro-para">
            <p>
              Hong Kong&apos;s fundamental freedoms, rights, rule of law and
              democracy are under attack. Please help Hong Kong by writing to
              your TD and asking them,
            </p>
            <p>
              1. To review Ireland&apos;s business relationship with China (Does
              Ireland want to be friends of a dictatorship?)
            </p>
            <p>
              2. To review immigration policy, especially investment immigration
              (Do we let whoever has money to become Irish?)
            </p>
            <p>
              3. To enquire the role of Confucius Institute at UCD? (Why do we
              allow a communist propaganda machine in our university?)
            </p>
          </div>
          <div className="formblock">
            <div className="text-field">
              <dt>
                <label htmlFor="name">Your full name</label>
              </dt>
              <dd>
                <input
                  id="name"
                  className="name"
                  name="name"
                  required
                  type="text"
                ></input>
              </dd>
            </div>
            <div className="text-field">
              <dt>
                <label htmlFor="area">
                  Select your area{" "}
                  <a href="https://www.whoismytd.com/" alt="Find out your area">
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
            <div className="text-field">
              <dt>
                <label htmlFor="address">Address first line</label>
              </dt>
              <dd>
                <input id="address" className="address" type="text"></input>
              </dd>
            </div>
            <div className="legal">
              We will generate an email template and autofill all the content
              according to your input data. We are NOT going to hold, store or
              collect your private information.
            </div>
            <input
              type="submit"
              value="Email to your TDs"
              data-wait="Please wait..."
              className="submit w-button"
            ></input>
          </div>
        </form>
        <div className="w-form-done"></div>
        <div className="w-form-fail"></div>
        <div className="w-richtext">
          <h4>Call for review on Ireland-China relations</h4>
          <div className="td-letter">
            <p>
              I am writing to you, my local MP, to call upon you to ensure that
              Britain upholds its obligations under the terms of the 1984
              Sino-British Joint Declaration.{" "}
            </p>
            <p>
              This legally-binding treaty guaranteed that, for 50 years after
              1997, Hongkongers’ rights, freedoms and way of life would be
              ensured by law. In particular, the Declaration guaranteed that
              Hongkongers would enjoy fundamental freedoms, including freedom of
              speech, freedom of the press and freedom of assembly, among
              others.{" "}
            </p>
            <p>
              China has breached the terms of this Declaration on many
              occasions, eroding the executive, legislative and judicial
              institutions that are supposed to safeguard Hongkongers’ civil and
              political rights and freedoms.{" "}
            </p>
            <p>
              The latest breach comes in the form of the Extradition Bill, which
              would allow dissidents in Hong Kong to be sent to mainland China
              to face trial. The Bill provoked massive and ongoing protests with
              nearly two million people taking to the streets.{" "}
            </p>
            <p>
              In spite of her declaration that “the Bill is dead”, Chief
              Executive Carrie Lam has not formally withdrawn it.{" "}
            </p>
            <p>
              Hong Kong’s fundamental freedoms are under attack. Police
              brutality against protesters and journalists has escalated,
              shielded by a government that is not accountable to the people.{" "}
            </p>
            <p>
              Britain has a unique legal, historical and moral responsibility to
              ensure the Declaration’s implementation. That is why we are
              calling upon British parliamentarians to impose sanctions on those
              persons responsible for or complicit in suppressing Hongkongers’
              human rights and freedoms. We are also calling upon Britain to
              include provisions on human rights, civil liberties and
              democratisation in any post-Brexit agreements with Hong Kong and
              China. Britain must stand with Hong Kong.{" "}
            </p>
            <p>
              I urge you to write to the Foreign Secretary and ask them what
              concrete steps they will take to uphold the Declaration and take
              steps to put in place sanctions against persons that are involved
              in undermining freedom in Hong Kong.{" "}
            </p>
            <p>
              Please send a strong message to our new Prime Minister that
              Britain must stand by its promises and defend Hong Kong’s freedom.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
