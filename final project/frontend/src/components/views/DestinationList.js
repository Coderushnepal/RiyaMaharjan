//rfce
import React, { useState } from 'react';
import Footer from '../sections/Footer';
import Hero from '../sections/Hero';
import Navbar from '../sections/Navbar';
import Recommended from '../sections/Recommended';
import ScrollToTop from '../sections/ScrollToTop';

function landingPage() {


  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isLoading, setIsLoading] = useState(false);
  return (

    <>
      {isLoading ? (
        <h1>Loading:</h1>
      ) : (
        <div>
          <ScrollToTop />
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
