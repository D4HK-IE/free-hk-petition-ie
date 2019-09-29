import React from 'react';
import './Header.css';

// function Header() {
// 	return <h1>Stand with HK, Fight for Democracy</h1>;
// }

//ES6 class
// const HeaderTitle = () => <h1>Stand with HK, Fight for Democracy</h1>

//JSX
// const HeaderTitle = () => {
// 	return React.createElement(
// 		'div',
// 		{className: 'navtitle'},
// 		React.createElement('h1', null, 'Stand with HK, Fight for Democracy')
// 	)
// }

const HeaderTitle = () => {
  return (
    <div className="navbar w-nav">
      <div className="container">
        <div className="nav-menu w-clearfix">
          <a
            href="https://www.facebook.com/democracy4hkinireland/"
            className="w-inline-block"
          >
            <img
              src="logo.jpeg"
              alt="democracy for Hong Kong in Ireland"
              className="app-logo"
            />
          </a>
          <div className="nav-title">
            <h2 className="navtitle">Stand with HK, Fight for Democracy</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTitle;
