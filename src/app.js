import React from 'react';
import './styles/app.css';
import logo from './assets/logo.png';

const App = () => {
  return (
    <header id="header">
      <div id="header__container">
        <div id="header__container__img">
          <img src={logo}/>
        </div>
        <nav id="header__container__nav">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Timeline</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default App;
