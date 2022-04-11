import React, { useState } from 'react';


function Login(props) { 

 const [email, setEmail]=useState('');
 let errorsObj = {email: '', password: ''};
 const [errors,setErrors]=useState(errorsObj);

 const [password, setPassword]=useState('');

 function onSignUp(e){
  e.preventDefault();
  let error=false;
  const errorObj ={...errorsObj};
  if(email === ''){
     errorObj.email ='Email is required';
     error=true;
  }
  if(password===''){
    errorObj.password ='Password is required';
    error=true;
  }
  setErrors(errorObj);
    if(!error){
      console.log('Form Submit')
    
  }
 }

  return <div className='main'>
      <h1 className='heading'>Log In</h1>
      <form onSubmit={onSignUp}>
          <div>
            <input type='text'  className='mainLoginInput' placeholder='&#61447; Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        {errors.email && <div>{errors.email}</div> }
        <div>
            <input type='password' className='mainLoginInput passwordInput ' placeholder='&#61475; Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        {errors.password && <div>{errors.password}</div>}
        <div>
          <button type='submit'>
            Log In
          </button>
        </div>
      </form>
    </div>;
} 

export default Login;


