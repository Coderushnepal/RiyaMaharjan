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
        
        <div className='searchbar'>
        <input className='header_input' type='search' placeholder='Search destination'/>
        <button>Search</button>
        <button className='icon_search'><BiSearchAlt2/></button>
        </div>

        <div>
        <button><Link to={`/register`}>Register</Link></button>
        <button><Link to={`/login`}>Login</Link></button>
        </div>

    </div>
    </>
  )
}

