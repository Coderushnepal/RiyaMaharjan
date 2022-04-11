//rfce
import React, { useState } from 'react';
import Footer from '../sections/Footer';
import Hero from '../sections/Hero';
import Navbar from '../sections/Navbar';
import Recommended from '../sections/Recommended';


function landingPage() {


  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isLoading, setIsLoading] = useState(false);
  return (

    <>
      {isLoading ? (
        <h1>Loading:</h1>
      ) : (
        <div>
        
          <Navbar />
          <Hero />
          <Recommended />
          <Footer />
        </div>
      )}

    </>
  );
}

export default landingPage;
