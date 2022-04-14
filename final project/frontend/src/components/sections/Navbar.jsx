import React,{useState } from 'react'
import logo from '../../assests/logo.jpeg';
import { Link } from "react-router-dom";
import {BiSearchAlt2} from 'react-icons/bi'

export default function Navbar() {

  return (
    <>
    <div className='nav'>
        <div className="brand">
            <div className="container">
                <img src={logo} alt="logo" />
            </div>
        </div>

        <div className='user'>
        <button><Link to={`/register`}>Register</Link></button>
        <button><Link to={`/login`}>Login</Link></button>
        </div>

    </div>
    </>
  )
}

