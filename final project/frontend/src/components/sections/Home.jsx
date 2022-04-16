import axios from "axios";
import { Component, useEffect, useState } from "react";
import { render } from "react-dom";

const Home = () => {
  const Token = localStorage.getItem("Token");
  // const [user, setUser] = useState({});
  const user= JSON.parse(localStorage.getItem("User"))

  return user && Token ? (
    <h1 className="home-header">Hi! {user?.name}</h1>
  ) : (
    <h1 className="home-header">You are not logged in</h1>
  );
};
export default Home;
