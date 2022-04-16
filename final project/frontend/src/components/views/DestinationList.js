//rfce
import axios from "axios";
import React, { useState, useEffect } from "react";
import AddDestination from "../sections/AddDestination";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Home from "../sections/Home";
import Navbar from "../sections/Navbar";
import Recommended from "../sections/Recommended";

function LandingPage() {
  const [user, setUser] = useState({});

  const Token = localStorage.getItem("Token");

  const config = {
    headers: {
      Authorization: "Bearer " + Token,
    },
  };

  const fetchUser = () => {
    axios.get("http://127.0.0.1:1234/profile", config).then(
      (res) => {
        localStorage.setItem("User", JSON.stringify(res.data));
        setUser(res.data);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  useEffect(() => {
    if (Token) {
      fetchUser();
      console.log("Fetch User Called");
    }
  }, [Token]);

  return (
    <>
      <div>
        {user?.isAdmin && <AddDestination />}
        <Navbar />
        <Home />
        <Hero />
        <Recommended />
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
