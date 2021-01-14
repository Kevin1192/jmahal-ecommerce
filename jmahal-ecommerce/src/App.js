/* eslint-disable */
import React, {useEffect } from 'react';

// Pages
import HomePage from './pages/HomePage';
import ContactPage from './pages/Contact';

//
import Navbar from './components/Navbar';



function App() {
  useEffect(() => {
      
  }, [])
  return (
    <div className="App">
      <Navbar />
      <ContactPage />
      <HomePage />
      
    </div>
  );
}

export default App;
/* eslint-disable */
