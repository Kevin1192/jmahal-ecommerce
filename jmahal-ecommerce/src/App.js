/* eslint-disable */
import React, {useEffect } from 'react';
//JS
import { Helmet } from 'react-helmet';
import ScriptTag from 'react-script-tag';
// CSS
import './assets/css/font-awesome.css';
import './assets/css/bootstrap.css';
import './assets/css/jquery.smartmenus.bootstrap.css';
import './assets/css/jquery.simpleLens.css';
import './assets/css/nouislider.css';
import './assets/css/sequence-theme.modern-slide-in.css';
import './assets/css/slick.css';
import './assets/css/style.css';
import './assets/css/theme-color/default-theme.css';
import './assets/css/sequence-theme.modern-slide-in.css';

// Pages
import HomePage from './pages/HomePage';

function App() {
  useEffect(() => {
      
  }, [])
  return (
    <div className="App">
      <HomePage />

      <ScriptTag src={require("./assets/js/slick.js")} />

    </div>
  );
}

export default App;
/* eslint-disable */
