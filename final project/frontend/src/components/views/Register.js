import React from 'react';

function Register() {
  return (
    <div className='main'>
      <h1 className='heading'>Register</h1>
      <form >
      <div>
            <input type='text'  className='mainLoginInput nameInput' placeholder='&#61447; Username' />
        </div>
          <div>
            <input type='text'  className='mainLoginInput emailInput' placeholder='&#61447; Email' />
        </div>
       
        <div>
            <input type='password' className='mainLoginInput passwordInput ' placeholder='&#61475; Password' />
        </div>
        <div>
            <input type='password' className='mainLoginInput passwordCheck ' placeholder='&#61475; Confirm Password' />
        </div>
        <div>
          <button type='submit'>
           SIGN UP
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register;