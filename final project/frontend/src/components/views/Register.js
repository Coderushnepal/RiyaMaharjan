import React,{useState} from 'react';
import axios from  "axios";

import { useHistory } from "react-router-dom"

const Register=()=>{
  const [userNameSign, setuserNameSign] = useState("");
  const [userEmailSign, setuserEmailSign] = useState("");
  const [userPasswordSign, setuserPasswordSign] = useState("");

  const history = useHistory();

  function onAddUsers(e) {
    e.preventDefault();
    const postData = {
      name: userNameSign,
      email: userEmailSign,
      password: userPasswordSign,
    };

    axios
      .post("http://127.0.01:1234/users", postData)
      .then((response) => {
        const {data} = response;
        console.log(data);
        console.log(data.message);

        if (data.message === "Added user successfully") {
          localStorage.setItem("Token", data.data.token);
          history.push("/");
          alert("User Added Successfully")
        }


      });
}

 
 
  return (
    <div className='main'>
      <h1 className='heading'>Register</h1>
      <form onSubmit={onAddUsers}>
      <div>
            <input type='text'  
              onChange={(e) => {
              setuserNameSign(e.target.value);
              }}
              className='mainLoginInput nameInput' 
              placeholder='&#61447; Username' 
              value={userNameSign}
              name="username"
              required
            />{" "}
      </div>

      <div>
        <input type='email'
          onChange={(e) => {
            setuserEmailSign(e.target.value);
          }}  
          className='mainLoginInput emailInput' 
          placeholder='&#61447; Email' 
          value={userEmailSign}
          name="email"
          required
          />{" "}
        </div>
       
        <div>
            <input type='password' 
             onChange={(e) => {
              setuserPasswordSign(e.target.value);
              }}
              className='mainLoginInput passwordInput ' 
              placeholder='&#61475; Password'
              value={userPasswordSign}
              name="password"
              required
               />
        </div>
        
        <div>
          <button type='submit'>
           SIGN UP
          </button>
        </div>
      </form>
    </div>
  )
};

export default Register;