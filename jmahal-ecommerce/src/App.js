/* eslint-disable */
import React, {useEffect } from 'react';

// Pages
import HomePage from './pages/HomePage';
import ContactPage from './pages/Contact';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  useEffect(() => {
      
  }, [])
  return (
    <div className="App">
      <Navbar />
      <ContactPage />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
/* eslint-disable */
