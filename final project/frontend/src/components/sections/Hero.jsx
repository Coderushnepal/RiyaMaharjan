import React from 'react'
import homeImage from '../../assests/heading-image.jpg'

export default function Hero() {
    return (
        <>
         <div id='hero'>
        <div className="background">
            <img src={homeImage} alt='backgroundImage'/>
        </div>
        <div className="content">
            <div className="title">
                <h1>Travel Nepal</h1>
                <p>Travel and find happiness within yourself. Experience holidays in Nepal and find the best time to go and the best places to visit.</p>
            </div>
            <div className="search">
                <div className="formItem">
                    <label htmlFor="">Where you want to go</label>
                    <input type='text' placeholder='Search your location'/>
                </div>
                <div className="formItem">
                    <label htmlFor="">Check-in</label>
                    <input type='date' />
                </div>
                <div className="formItem">
                    <label htmlFor="">Check-out</label>
                    <input type='date' />
                </div>
                <button>Book Now</button>
            </div>
        </div>
    </div>
        </>
    );
}
