/* eslint-disable */
import React, {useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import ShopPage from './pages/Shop';
import ContactPage from './pages/Contact';


// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Slider from './components/slider';



function App() {
  useEffect(() => {
      
  }, [])
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/home'>
          <HomePage />
        </Route>
        <Route path='/featured'>
          Featured
        </Route>
        <Route path='/shop'>
          <ShopPage />
        </Route>
        <Route path='/contact'>
      <ContactPage />
      <Slider />
        </Route>
        <Route path='/'>
        <HomePage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
/* eslint-disable */
