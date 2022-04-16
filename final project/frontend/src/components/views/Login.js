import React, { useState } from 'react';
import axios from "axios";
import cogoToast from 'cogo-toast';

import { useHistory } from "react-router-dom"

const Login=() =>{

  const [userEmailLog, setuserEmailLog] = useState("");
  const [userPasswordLog, setuserPasswordLog] = useState("");

  const history = useHistory()

  function onLogUsers(e) {
    e.preventDefault();
    const logData = {
      email: userEmailLog,
      password: userPasswordLog,
    };

    axios
      .post("http://127.0.01:1234/login", logData)
      .then((response) => {
        const {data} = response;
        console.log(data);

        if (response.status===200) {
          cogoToast.success("Logged in successfully")
          localStorage.setItem("Token", data.data.token);
          console.log(localStorage.getItem('Token'))
          localStorage.setItem("Admin", data.data.user.is_admin);
          history.push("/");
        }
      }).catch((err)=>{
       alert("Invalid Credentials")
       console.log(err)
      })

    };
  return <div className='main'>
      <h1 className='heading'>Log In</h1>
      <form onSubmit={onLogUsers}>
          <div>
            <input type='text'  
              className='mainLoginInput' 
              placeholder='&#61447; Email'  
              onChange={(e)=>setuserEmailLog(e.target.value)}
              value={userEmailLog}
              name="email"
              required/>{" "}
        </div>

        <div>
            <input type='password' 
            className='mainLoginInput passwordInput ' 
            placeholder='&#61475; Password' 
            value={userPasswordLog} 
            onChange={(e)=>setuserPasswordLog(e.target.value)}
            name="password"
            required
            />
        </div>
       
        <div>
          <button type='submit'>
            Log In
          </button>
        </div>
      </form>
    </div>;
} 

export default Login;


