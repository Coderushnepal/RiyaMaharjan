import axios from "axios";
import { Component, useEffect, useState } from "react";
import { render } from "react-dom";

const Home = () => {
  const Token = localStorage.getItem("Token");
  const [user, setUser] = useState({});

  const config = {
    headers: {
      Authorization: "Bearer " + Token,
    },
  };

  console.log(`home: ${localStorage.getItem("Token")}`);
  const fetchUser = () => {
    axios.get("http://127.0.0.1:1234/profile", config).then(
      (res) => {
        console.log(`Response:${res.data}`);
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
    }
  }, [Token]);

  return user && Token ? (
    <h1>Hi! {user?.name}</h1>
  ) : (
    <h1>You are not logged in</h1>
  );
};
export default Home;
