//rfce
import axios from 'axios';
import React, { useState } from 'react';
import Footer from '../sections/Footer';
import Hero from '../sections/Hero';
import Home from '../sections/Home';
import Navbar from '../sections/Navbar';
import Recommended from '../sections/Recommended';


function landingPage() {

  // const [isLoading, setIsLoading] = useState(false);
  
  return (
    <>
        <div>
          <Navbar />
          <Home/>
          <Hero />
          <Recommended />
          <Footer />
        </div>
    </>
  );
}

export default landingPage;
