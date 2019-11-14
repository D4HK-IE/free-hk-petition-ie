import React from "react";
import "./Hero.css";

// function Header() {
//   return <h1>Stand with HK, Fight for Democracy</h1>;
// }

//ES6 class
// const HeaderTitle = () => <h1>Stand with HK, Fight for Democracy</h1>

//JSX
// const HeaderTitle = () => {
//   return React.createElement(
//     'div',
//     {className: 'navtitle'},
//     React.createElement('h1', null, 'Stand with HK, Fight for Democracy')
//   )
// }

const Hero = () => {
  return (
    <div className="hero">
      <div className="header">
        <h1>
          Stand with Hong Kong.
          <br /> Be their voice in Dáil.
        </h1>
      </div>
      <div className="smicons">
        Share this:&nbsp;
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A//d4hk-ie.github.io/free-hk-petition-ie/"
          target="_blank"
          rel="noopener noreferrer"
          className="fa fa-facebook"
        >
          {" "}
        </a>
        &nbsp;&nbsp;
        <a
          href="https://twitter.com/intent/tweet?text=https%3A/d4hk-ie.github.io/free-hk-petition-ie/"
          target="_blank"
          rel="noopener noreferrer"
          className="fa fa-twitter"
        >
          {" "}
        </a>{" "}
        &nbsp;
        <a
          href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//d4hk-ie.github.io/free-hk-petition-ie/&title=&summary=&source="
          target="_blank"
          rel="noopener noreferrer"
          className="fa fa-linkedin"
        >
          {" "}
        </a>
      </div>

      <div className="hoverblock"></div>
    </div>
  );
};

export default Hero;
