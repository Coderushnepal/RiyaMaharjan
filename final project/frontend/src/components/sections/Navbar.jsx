import React,{useState} from 'react'
import logo from '../../assests/logo.jpeg';
import {GiHamburgerMenu} from 'react-icons/gi';
import {VscChromeClose} from 'react-icons/vsc';
import { Link,useHistory  } from "react-router-dom";


export default function Navbar() {
    const [navbarState,setNavbarState]= useState(false);
    const Token = localStorage.getItem("Token");

  
    const history = useHistory()

    function onLogout(e){
        console.log(Token);
        localStorage.clear();
        history.push("/");
    }
  return (
    <>
    <div className="nav">
        <div className="brand">
            <div className="container">
                <img src={logo} alt="logo" />
            </div>
            <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavbarState(true)} />
            )}
            </div>
        </div>
        <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#recommend">Places</a></li>
        </ul>
        <div className='user'>
          {(Token)?
          <button onClick={onLogout} >Log Out</button>:
          <>
          <button><Link to={`/register`}>Register</Link></button>
          <button><Link to={`/login`}>Login</Link></button>
        </>
        }
        
       
        </div>
    </div>
    <div className={navbarState?"responsenav active":"responsenav"} >
    <ul>
            <li><a href="#hero" onClick={()=> setNavbarState(false)}>Home</a></li>
            <li><a href="#recommend" onClick={()=> setNavbarState(false)}>Places</a></li>

        </ul>
    </div>
    </>
  )
}