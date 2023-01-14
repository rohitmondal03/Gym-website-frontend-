import React from 'react';
import ReactDom from 'react-dom';

import Navbar from './Navbar/Navbar.jsx';
import Home from './Home/Home.jsx';
import Footer from './Footer/Footer.jsx';
import Welcome from './Welcome/Welcome.jsx';
import Programs from './Programs/Programs.jsx'
import Yoga from './Yoga/Yoga.jsx'

import './App.css'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home />
      <Welcome />
      <Programs />
      <Yoga />
      <Footer />
    </div>
  )
}

export default App;
